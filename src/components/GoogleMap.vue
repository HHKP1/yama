<template>
	<div style="width: 100%">
		<div class="popup_wrapper" v-bind:class="{open: showErrorMap}">
			<div class="popup-map" v-if="showErrorMap">
				<svg @click="toggleModal" class="popup-close" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/><path d="M0 0h24v24H0z" fill="none"/></svg>
				<h2 class="popup-map__message h2-title" >{{errorTitle}}</h2>
				<div class="flex-column margin-bottom-16">{{errorText}}</div>
			</div>
		</div>
		<div class="popup_wrapper" v-bind:class="{open: showGMap}">
			<div id="gmap-popup" class="popup-map" v-show="showGMap" style="display:flex;flex-direction:column;justify-content:space-between;">
					<div>
						<div class="flex-column margin-bottom-16" id="map-wrap">
							<gmap-map :center="center" :zoom="6" style="position: relative; overflow: hidden; display: block; height: 100%; width: 100%;">
												<GmapCluster>
											<div v-for="(m, index) in markers" :key="m.id" style="z-index: 9999">
												<router-link :to="'/defect/'+m.id">
													<GmapMarker
														:position="m.position"
														:clickable="true"
														:ref="`marker${index}`"
														@mouseover="toggleInfoWindow(m, index)"
														@click="listClick($event, '/defect/'+m.id )"
														@mouseout="infoWinOpen=false"
													>
													</GmapMarker>
														</router-link>
													</div>
													<gmap-info-window
													:options="infoOptions"
													:position="infoWindowPos"
													:opened="infoWinOpen"
													@closeclick="infoWinOpen=false"
													>
													</gmap-info-window>
												</GmapCluster>
							</gmap-map>
						</div>
					</div>
			</div>
		</div>
	</div>
</template>
<script>
import { gmapApi } from 'vue2-google-maps';

export default {
	// name: "GoogleMap",
	props: {
		// defectId: { type: String, required: false },
		mapTitle: { type: String, required: true },
	},
	components: {},
	data() {
		return {
			isActive: false,
			showGMap: true,
			hover: false,
			showErrorMap: false,
			errorText: '',
			errorTitle: '',
			showMarkerInfo: false,
			markerInfo: '',
			orgN: [],
			markers: [],
			center: {
				lat: 49.4193571,
				lng: 31.3366203
			},
			infoWindowPos: null,
			infoWinOpen: false,
			currentMidx: null,
			infoOptions: {
				content: '',
				//optional: offset infowindow so it visually sits nicely on top of our marker
				pixelOffset: {
					width: 0,
					height: -35
				}
			},
			statusNewWaitEvent: false,
		};
	},
	created() {
		this.$eventBus.$on('orgInfo', async (event) => {
			// console.log(Array.from(event));
			if(event){
				this.orgN=Array.from(event);
				await this.reloadApplication();
				this.statusNewWaitEvent=false;
			}
		});
	},
	mounted() {
		this.$API.title = "Мапа";
		this.$API.page = "GoogleMap";
	},
	methods: {
		listClick(e, url) {
			console.log(e, url);
			if(e) {
				// e.preventDefault();
				this.$router.push(url);
				// window.open(url, "_new");
			}
		},
		async reloadApplication() {
			await this.loadMarkers();
		},
		loadMarkers() {
			this.isActive=true;
			this.statusNewWaitEvent=true;
			if(this.markers.length > 0) return true;
			else
				this.markers=[];
			let data = this.arrMarkers;
			// let hole = data;
			data.forEach((l) => {
				if (l == null) return;
				let lat = l.lat;
				let lng = l.lng;
				l.position = { lat: lat, lng: lng };
				delete l.lng;
				delete l.lat;
				this.markers.push(l);
				this.isActive=false;
			});
			/*let markerClusterStyle = [
				{
					width: 30,
					height: 30,
					className: "custom-clustericon-1",
				},
				{
					width: 40,
					height: 40,
					className: "custom-clustericon-2",
				},
				{
					width: 50,
					height: 50,
					className: "custom-clustericon-3",
				},
			];
			this.markerClusterer = new MarkerClusterer(this.map, markersArray, {
				styles: markerClusterStyle,
				clusterClass: "custom-clustericon",
				maxZoom: 16,
				gridSize: 30,
			});*/
		},
		toggleInfoWindow(marker, idx) {
			this.markerInfo = `
			<div style="width:100%;align-items:center;display:flex;justify-content:center;flex-wrap:wrap;">
				<span style="flex: 0 0 100%;font-weight:bold;text-align:left">Адреса: <p style="font-weight:400;text-align:left">`+marker.area+`</p></span>
				<span style="flex: 0 0 100%;font-weight:bold;text-align:left">Автор: <p style="font-weight:400;text-align:left">`+marker.author+`</p></span>
				<span style="flex: 0 0 100%;font-weight:bold;text-align:left">Статус: <p style="font-weight:400;text-align:left"> `+marker.status+`</p></span>
				<span style="flex: 0 0 100%;font-weight:bold;text-align:left">ID: <p style="font-weight:400;text-align:left"> `+marker.id+`</p></span>
			</div>`;
			this.infoWindowPos = marker.position;
			this.infoOptions.content = this.markerInfo;

			if (this.currentMidx == idx) {
				this.infoWinOpen = !this.infoWinOpen;
			}else {
				this.infoWinOpen = true;
				this.currentMidx = idx;
			}
		},
		toggleMap() {
			if(this.holeCount === null) {
				this.errorTitle = 'Помилка';
				this.errorText = 'Не вдалося завантажити дані';
				this.showErrorMap = !this.showErrorMap;
			} else if(this.holeCount === 0) {
				this.errorTitle = 'Дефекти';
				this.errorText = 'В реєстрі немає інформації по цьому дефекту або нам не вдалося її отримати';
				this.showErrorMap = !this.showErrorMap;
			} else if(this.holeCount > 0) {
				if(this.showGMap === false) this.loadMarkers();
				this.showGMap = !this.showGMap;
			}
		}
	},
	computed: {
		google: gmapApi,
		arrMarkers() {
			return this.orgN.map(m => {
				return {
					lat: m.location[1],
					lng: m.location[0],
					area: m.address,
					status: m.case_status.current.status,
					author: m.case_status.current.author.name,
					id: m.id
				}
			})
		}
	},
	watch: {
		latLong: {
			handler: function(val, oldVal) {
				this.loadMarkers();
			},
			deep: true
		}
	},
	beforeDestroy() {
		this.$eventBus.$off('orgInfo');
	},
};
</script>
<style scoped>
	#gmap-popup.popup-map {
		max-width: none;
		width: 100%;
		height: 100%;
		padding-left: 20px !important;
		padding-right: 20px !important;
		padding-top: 15px !important;
		padding-bottom: 20px !important;
	}

	div.gm-style > img:hover{
		transform: scale(1.2) !important;
		position: absolute !important;
	}

	#gmap-popup-message {
		margin-top: -20px;
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		width: 50%;
	}

	#map-wrap {
		height: 490px;
	}

	.markerInfo {
		font-size: 1em;
	}

	/* Iphone 5 */
	@media (min-height: 560px) and (max-height: 570px) {
		#map-wrap {
			height: 435px;
		}
		.markerInfo {
			font-size: 0.85rem;
		}
	}

	@media (min-height: 5710px) and (max-height: 629px) {
		#map-wrap {
			height: 445px;
		}
		.markerInfo {
			font-size: 0.85rem;
		}
	}

	/* Moto G4 */
	@media (min-height: 630px) and (max-height: 664px) {
		#map-wrap {
			height: 450px;
		}
	}

	/* Iphone 6/7/8 */
	@media (min-height: 665px) and (max-height: 670px) {
		#map-wrap {
			height: 490px;
		}
		.markerInfo {
			font-size: 0.9rem;
		}
	}

	@media (min-height: 671px) and (max-height: 709px) {
		#map-wrap {
			height: 490px;
		}
		.markerInfo {
			font-size: 0.9rem;
		}
	}

	/* Surface Duo */
	@media (min-height: 710px) and (max-height: 730px) {
		#map-wrap {
			height: 490px;
		}
	}

	/* Iphone 6/7/8 Plus */
	@media (min-height: 731px) and (max-height: 750px) {
		#map-wrap {
			height: 490px;
		}
		.markerInfo {
			font-size: 0.95rem;
		}
	}

	@media (min-height: 751px) and (max-height: 799px) {
		#map-wrap {
			height: 490px;
		}
		.markerInfo {
			font-size: 0.9rem;
		}
	}

	/* Iphone X */
	@media (min-height: 800px) and (max-height: 870px) {
		#map-wrap {
			height: 490px;
		}
		.markerInfo {
			font-size: 0.95rem;
		}
	}

	#vue-map-container {
		height: 100%;
	}

	.custom-clustericon {
		background: var(--cluster-color);
		color: #fff;
		border-radius: 100%;
		font-weight: bold;
		font-size: 15px;
		display: flex;
		align-items: center;
	}

	.custom-clustericon::before,
	.custom-clustericon::after {
		content: "";
		display: block;
		position: absolute;
		width: 100%;
		height: 100%;

		transform: translate(-50%, -50%);
		top: 50%;
		left: 50%;
		background: var(--cluster-color);
		opacity: 0.2;
		border-radius: 100%;
	}

	.custom-clustericon::before {
		padding: 7px;
	}

	.custom-clustericon::after {
		padding: 14px;
	}

	.custom-clustericon-1 {
		--cluster-color: #00a2d3;
	}

	.custom-clustericon-2 {
		--cluster-color: #ff9b00;
	}

	.custom-clustericon-3 {
		--cluster-color: #ff6969;
	}
</style>
