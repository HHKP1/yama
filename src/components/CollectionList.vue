<template>
	<div class="defect_wrapper">
		<mq-layout mq="md+">
		<vue-element-loading :active="isActive" size="60" :isActiveDelay="true" duration="1" spinner="spinner" color="#FF6700"/>
			<div class="defect_content" >
				<div class="defect_filter_count">
							<div class="defect_filter_item">
								<p class="defect_title">Загалом дефектів знайдено: <span>{{ dfCard.length }}</span></p>
							</div>
				</div>
				<div class="sorted_item">
					<p class="sorted_title">Показані останні дефекти зі змінами (за замовчуванням)</p>
					<!-- <FormSelect
						label=""
						placeholder=""
						:options="options.options_sort_by"
						v-model="sort_by"
						class="form-control_outline"
						type="search"
					/> -->
				</div>
				<transition name="loader-map">
				<GoogleMap :defectMarkers="dfCard" v-show="this.$API2.showMap" mapTitle="Map"/>
				</transition>
				<div class="grid-container_overlay">
					<div class="carousel_overlay" v-if="this.$API2.orgInfo.length==0 && !this.$API2.showMap">
						<p class="empty_message">По цьому запиту немає дефектів</p>
					</div>
				</div>
					<div class="grid-block">
				<transition name="fade-loader">
						<div class="grid-container" v-if="!this.$API2.showMap && this.$API2.orgInfo.length>0">
					<div class="defect_card" v-for='card in paginate' :key='card.id'>
					<router-link :to="'/'+card.id">
						<div class="my-container" style="width: 100%;display: block;height: 100%;" @click="listClick($event, '/'+card.id )">
							<vue-element-loading :active="isActive" size="60" duration="1" spinner="spinner" color="#FF6700"/>
							<div class="defect_image">
								<img class="card_image" :src="card.photo[0].url" alt="">
								<p class="defect_date">{{ new Date(card.photo[0].timestamp) | moment("DD.MM.YY в HH:mm") }}</p>
								<div class="defect_color" v-for="img in arrMarkers" :key="img.id">
									<img class="type_marker" v-if="img.name===card.defect_type" style="margin:0 20px;" :src="img.icon" alt="Type marker">
								</div>
							</div>
							<div class="defect_info">
								<div class="defect_status">
									<div class="status_item">
										<span v-if="card.status=='new'">Новий</span>
										<span v-if="card.status=='approved'">Погоджений</span>
										<span v-if="card.status=='sent'">Відправлений</span>
										<span v-if="card.status=='replied'">Відповідь</span>
										<span v-if="card.status=='no_answer'">Немає відповіді</span>
										<span v-if="card.status=='rejected'">Відхилений</span>
										<span v-if="card.status=='escalated'">Ескалований</span>
										<span v-if="card.status=='in_progress'">В процесі</span>
										<span v-if="card.status=='fixed'">Виправлений</span>
									</div>
									<div class="status_comments">
										<p class="status_count" v-if="!card.comments">0</p>
										<p class="status_count" :title="'Кількість коментарів: ' + card.comments.length " v-else>{{ card.comments.length }}</p>
										<img src="../assets/img/icons/bx_bx-comment-detail.svg" alt="">
									</div>
								</div>
								<p class="defect_adress" :title="card.address">{{ card.address }}</p>
							</div>
						</div>
					</router-link>
					</div>
						</div>
				</transition>
					</div>
			</div>
			<!-- <Pagination :data="dfCard" :perPage="8" :currentPage="currentPage" :totalPages="dfCard.length" :total="0"/> -->
			<div class="card_pagination" v-if="!this.$API2.showMap">
				<div class="pagination_control">
					<ul class="pagination">
						<li v-for="pageNumber in totalPages" :key="pageNumber" class="waves-effect" @click="setPage(pageNumber)" :class="{active: currentPage === pageNumber, last: (pageNumber == totalPages && Math.abs(pageNumber - currentPage) > 3), first:(pageNumber == 1 && Math.abs(pageNumber - currentPage) > 3)}">
							{{ pageNumber }}
						</li>
						<!-- <li class="active"><a href="#!">1</a></li>
						<li class="waves-effect"><a href="#!">2</a></li>
						<li class="waves-effect"><a href="#!">3</a></li>
						<li class="waves-effect"><a href="#!"> > </a></li> -->
					</ul>
				</div>
			</div>
		</mq-layout>
		<mq-layout mq="sm">
			<div class="container_works_mb">
				<div class="container_defects_mb">
					<div class="defect_content_mb">
							<GoogleMap :defectMarkers="dfCard" v-show="this.$API2.showMap" mapTitle="Map"/>
						<div class="grid-container_overlay">
							<div class="carousel_overlay" v-if="this.$API2.orgInfo.length==0 && !this.$API2.showMap">
								<p class="empty_message">По цьому запиту немає дефектів</p>
							</div>
						</div>
								<p class="sorted_title_mb">Показані останні дефекти зі змінами (за замовчуванням)</p>
								<div class="grid-container_mb" v-if="!this.$API2.showMap && this.$API2.orgInfo.length>0">
									<div class="defect_card" v-for='card in paginate' :key='card.id'>
										<router-link :to="'/'+card.id">
											<div class="my-container" style="width: 100%;display: block;height: 100%;" @click="listClick($event, '/'+card.id )">
												<vue-element-loading :active="isActive" size="60" duration="1" spinner="spinner" color="#FF6700"/>
												<div class="defect_image">
													<img class="card_image_mb" :src="card.photo[0].url" alt="">
													<p class="defect_date">{{ new Date(card.photo[0].timestamp) | moment("DD.MM.YY в HH:mm") }}</p>
													<div class="defect_color"></div>
												</div>
												<div class="defect_info">
													<div class="defect_status">
														<div class="status_item">
															<span v-if="card.status=='new'">Новий</span>
															<span v-if="card.status=='approved'">Погоджений</span>
															<span v-if="card.status=='sent'">Відправлений</span>
															<span v-if="card.status=='replied'">Відповідь</span>
															<span v-if="card.status=='no_answer'">Немає відповіді</span>
															<span v-if="card.status=='rejected'">Відхилений</span>
															<span v-if="card.status=='escalated'">Ескалований</span>
															<span v-if="card.status=='in_progress'">В процесі</span>
															<span v-if="card.status=='fixed'">Виправлений</span>
														</div>
														<div class="status_comments">
															<p class="status_count" v-if="!card.comments">0</p>
															<p class="status_count" :title="'Кількість коментарів: ' + card.comments.length " v-else>{{ card.comments.length }}</p>
															<img src="../assets/img/icons/bx_bx-comment-detail.svg" alt="">
														</div>
													</div>
													<p class="defect_adress" :title="card.address">{{ card.address }}</p>
												</div>
											</div>
										</router-link>
									</div>
								</div>
								<div class="card_pagination" v-if="!this.$API2.showMap">
									<div class="pagination_control">
										<ul class="pagination">
											<li v-for="pageNumber in totalPages" :key="pageNumber" class="waves-effect" @click="setPage(pageNumber)" :class="{active: currentPage === pageNumber, last: (pageNumber == totalPages && Math.abs(pageNumber - currentPage) > 3), first:(pageNumber == 1 && Math.abs(pageNumber - currentPage) > 3)}">
												{{ pageNumber }}
											</li>
											<!-- <li class="active"><a href="#!">1</a></li>
											<li class="waves-effect"><a href="#!">2</a></li>
											<li class="waves-effect"><a href="#!">3</a></li>
											<li class="waves-effect"><a href="#!"> > </a></li> -->
										</ul>
									</div>
								</div>
					</div>
				</div>
			</div>
		</mq-layout>
	</div>
</template>

<script>
import Vue from 'vue';
import VueElementLoading from 'vue-element-loading';
import GoogleMap from '../components/GoogleMap';
import customMarkers from '../assets/js/typeIcons';

// import Pagination from '../components/Pagination'

// import defectCards from './mock_data';

export default {
	name: 'collectionList',
	components: {
		VueElementLoading,
		GoogleMap,
		// Pagination
	},
	data() {
		return {
			options: {
				options_sort_by: [
					{ label: 'Нові', value: 'new' },
					{ label: 'В процесі', value: 'in_progress' },
				],
			},
			comment: '',
			sort_by: '',
			dfCards: [],
			isComments: false,
			isOpen: false,
			isActive: false,
			isExpand: false,
			appsLoaded: false,
			selfFilters: false,
			showMap: false,
			currentPage: 1,
			resultCount: 0,
			itemsPerPage: 8,
		}
	},
	created(){
		Vue.prototype.$API3 = this;
	},
	beforeMount(){
		if(!this.isActive)
			this.isActive=true;
	},
	async mounted() {
		this.$API.title = "Колекція";
		this.$API.page = "collection";
		this.isActive=false;
		this.dfCards = this.dfCard;
	},
	methods: {
		listClick(e, url) {
			if(e && (e.which == 2 || e.button == 4)) {
				e.preventDefault(true);
				window.open(url, "_new");
				this.$eventBus.$emit('dfCards', this.dfCards);
			}
		},
		setPage: function(pageNumber) {
			this.currentPage = pageNumber;
		}
	},
	computed: {
		//API Data
		dfCard(){
			return this.$API2.orgInfo.map(card => {
				return {
					id: card.id,
					address: card.address,
					photo: card.photos,
					status: card.case_status.current.status,
					comments: card.comments,
					// author: card.author.name,
					defect_type: card.defect_type,
					// region_id: card.photos[0].region_id,
				}
			});
		},
		arrMarkers() {
			return customMarkers.map(m => {
				return {
					// icon: m.icon[0].icon,
					icon: m.icon,
					name: m.name,
					// id: m.id,
				}
			})
		},
		totalPages() {
			return Math.ceil(this.resultCount / this.itemsPerPage)
		},
		paginate() {
			if (!this.dfCard) {
				return
			}
			// eslint-disable-next-line vue/no-side-effects-in-computed-properties
			this.resultCount = this.$API2.dfCard.length;
			if (this.currentPage >= this.totalPages) {
				// eslint-disable-next-line vue/no-side-effects-in-computed-properties
				this.currentPage = this.totalPages;
			}
			let index = this.currentPage * this.itemsPerPage - this.itemsPerPage
			return this.$API2.dfCard.slice(index, index + this.itemsPerPage)
		}
	},
	watch: {
		// 'paginate'(){
		// 	if(this.dfCard)
		// 		this.paginate(true)
		// }
	},
}
</script>

<style>
	.loader-map-enter-active {
		transition: opacity 0.2s ease-in-out, transform 0.2s ease-in;
	}
	.loader-map-leave-active {
		transition: opacity 0.02s ease-in-out, transform 0.02s ease-in;
	}
	.loader-map-enter-active {
		transition-delay: 0.5s;
	}
	.loader-map-enter {
		opacity: 0;
		transform: translateY(0);
	}
	.loader-map-enter-to {
		opacity: 1;
		transform: translateY(0px);
	}
	.loader-map-leave {
		opacity: 1;
		transform: translateY(0px);
	}
	.loader-map-leave-to {
		opacity: 0;
	}

	.fade-loader-enter-active {
		transition: opacity 0.5s ease-in-out, transform 0.5s ease-in;
		/* transition-delay: 0.5s; */
	}
	.fade-loader-leave-active {
		transition: opacity 0.5s ease-in-out, transform 0.5s ease-in;
	}
	.fade-loader-enter {
		opacity: 0;
		transform: translateY(0px);
	}
	.fade-loader-enter-to {
		opacity: 1;
		transform: translateY(0px);
	}
	.fade-loader-leave {
		opacity: 1;
		transform: translateY(0px);
	}
	.fade-loader-leave-to {
		opacity: 0;
		/* display: none; */
		/* transform: scale(0.8); */
	}
	.carousel_overlay{
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 25em;
		background: var(--background-color-prefooter);
		border-radius: 4px;
	}
	.grid-container_overlay {
		width: 95%;
		position: relative;
		height: 100%;
		display: grid;
		/* grid-template-columns: repeat(auto-fill, minmax(165px, 1fr)); */
		/* grid-template-rows: 1fr 1fr; */
		gap: 18px 8px;
	}
	/* .grid-container.hide_grid {
		visibility: hidden;
	} */
	li > a.active{
		background-color:var(--button-pagination-active);
	}
</style>
