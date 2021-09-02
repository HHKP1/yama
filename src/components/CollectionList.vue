<template>
	<div style="flex: 0 0 72%">
		<mq-layout mq="md+">
			<div class="defect_content">
				<div class="defect_filter_count">
							<div class="defect_filter_item">
								<p class="defect_title">Загалом дефектів знайдено: <span>{{ dfCard.length }}</span></p>
							</div>
				</div>
				<div class="sorted_item">
					<p class="sorted_title">Показані останні дефекти зі змінами (за замовчуванням)</p>
					<FormSelect
						label=""
						placeholder=""
						:options="options.options_sort_by"
						v-model="sort_by"
						class="form-control_outline"
						type="search"
					/>
				</div>
				<GoogleMap v-if="$mq=='md'" :defectMarkers="dfCard" v-show="this.$API2.showMap" mapTitle="Map"/>
				<div class="grid-container_overlay">
					<div class="carousel_overlay" v-if="this.$API2.orgInfo.length==0 && !this.$API2.showMap">
						<p class="empty_message">По цьому запиту немає дефектів</p>
					</div>
				</div>
				<div class="grid-container" v-if="!this.$API2.showMap && this.$API2.orgInfo.length>0">
					<div class="defect_card" v-for='card in dfCard' :key='card.id'>
					<router-link :to="'/collections/defect/'+card.id">
						<div class="my-container" style="width: 100%;display: block;height: 100%;" @click="listClick($event, '/collections/defect/'+card.id )">
							<vue-element-loading :active="isActive" size="60" duration="1" spinner="spinner" color="#FF6700"/>
							<div class="defect_image">
								<img class="card_image" :src="card.photo[0].url" alt="">
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
										<span v-if="card.status=='done'">Виправлений</span>
									</div>
									<div class="status_comments" :title="'Кількість коментарів: ' + card.comments.length">
										<p class="status_count">{{ card.comments.length }}</p>
										<img src="../assets/img/icons/bx_bx-comment-detail.svg" alt="">
									</div>
								</div>
								<p class="defect_adress" :title="card.address">{{ card.address }}</p>
							</div>
						</div>
					</router-link>
					</div>
				</div>
			</div>
			<div class="card_pagination" v-if="!this.$API2.showMap">
							<div class="pagination_control">
								<ul class="pagination">
									<li class="disabled"><a href="#!">F</a></li>
									<li class="active"><a href="#!">1</a></li>
									<li class="waves-effect"><a href="#!">2</a></li>
									<li class="waves-effect"><a href="#!">3</a></li>
									<li class="waves-effect"><a href="#!"> > </a></li>
								</ul>
							</div>
			</div>
		</mq-layout>
		<mq-layout mq="sm">
			<div class="container_works_mb">
				<div class="container_defects_mb">
					<div class="defect_content_mb">
						<GoogleMap v-if="$mq=='sm'" :defectMarkers="dfCard" v-show="this.$API2.showMap" mapTitle="Map"/>
						<div class="grid-container_overlay">
							<div class="carousel_overlay" v-if="this.$API2.orgInfo.length==0 && !this.$API2.showMap">
								<p class="empty_message">По цьому запиту немає дефектів</p>
							</div>
						</div>
								<p class="sorted_title_mb">Показані останні дефекти зі змінами (за замовчуванням)</p>
								<div class="grid-container_mb" v-if="!this.$API2.showMap && this.$API2.orgInfo.length>0">
									<div class="defect_card" v-for='card in dfCard' :key='card.id'>
										<router-link :to="'/collections/defect/'+card.id">
											<div class="my-container" style="width: 100%;display: block;height: 100%;" @click="listClick($event, '/collections/defect/'+card.id )">
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
															<span v-if="card.status=='done'">Виправлений</span>
														</div>
														<div class="status_comments" :title="'Кількість коментарів: ' + card.comments.length">
															<p class="status_count">{{ card.comments.length }}</p>
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
											<li class="disabled"><a href="#!">F</a></li>
											<li class="active"><a href="#!">1</a></li>
											<li class="waves-effect"><a href="#!">2</a></li>
											<li class="waves-effect"><a href="#!">3</a></li>
											<li class="waves-effect"><a href="#!"> > </a></li>
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

// import defectCards from './mock_data';

export default {
	name: 'collectionList',
	components: {
		VueElementLoading,
		GoogleMap
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
		}
	},
	created(){
		Vue.prototype.$API3 = this;
		this.dfCards= this.dfCard;
	},
	mounted() {
		this.$API.title = "Колекція";
		this.$API.page = "collection";
	},
	methods: {
		listClick(e, url) {
			if(e && (e.which == 2 || e.button == 4)) {
				e.preventDefault(true);
				window.open(url, "_new");
				this.$eventBus.$emit('dfCards', this.dfCards);
			}
		},
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
	},
	watch: {},
}
</script>

<style>
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
</style>
