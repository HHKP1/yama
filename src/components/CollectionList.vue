<template>
	<section class="collection_defects">
		<mq-layout mq="md+">
			<div class="container_works">
				<div class="container_defects">
					<div class="defect_content" v-if="!appsLoaded">
						<router-view></router-view>
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
								<div class="grid-container">
									<div class="defect_card" v-for='card in dfCard' :key='card.id'>
										<router-link :to="'/defect/'+card.id">
											<div class="my-container" style="width: 100%;display: block;height: 100%;" @click="listClick($event, '/defect/'+card.id )">
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
															<span v-if="card.status=='in_progress'">В процесі</span>
														</div>
														<div class="status_comments" :title="'Кількість коментарів: ' + card.comment.length">
															<p class="status_count">{{ card.comment.length }}</p>
															<img src="../assets/img/icons/bx_bx-comment-detail.svg" alt="">
														</div>
													</div>
													<p class="defect_adress" :title="card.address">{{ card.address }}</p>
												</div>
											</div>
										</router-link>
									</div>
								</div>
								<div class="card_pagination">
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
		<mq-layout mq="sm">
			<div class="container_works_mb">
						<div class="container_defects_mb">
							<div class="defect_content_mb" v-if="!appsLoaded">
								<p class="sorted_title_mb">Показані останні дефекти зі змінами (за замовчуванням)</p>
								<div class="grid-container_mb">
									<div class="defect_card" v-for='card in dfCard' :key='card.id'>
										<router-link :to="'/defect/'+card.id">
											<div class="my-container" style="width: 100%;display: block;height: 100%;" @click="listClick($event, '/defect/'+card.id )">
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
															<span v-if="card.status=='in_progress'">В процесі</span>
														</div>
														<div class="status_comments" :title="'Кількість коментарів: ' + card.comment.length">
															<p class="status_count">{{ card.comment.length }}</p>
															<img src="../assets/img/icons/bx_bx-comment-detail.svg" alt="">
														</div>
													</div>
													<p class="defect_adress" :title="card.address">{{ card.address }}</p>
												</div>
											</div>
										</router-link>
									</div>
								</div>
								<div class="card_pagination">
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
	</section>
</template>

<script>

import VueElementLoading from 'vue-element-loading';

// import defectCards from './mock_data';

export default {
	name: 'CollectionList',
	components: {
		VueElementLoading,
	},
	data() {
		return {
			options: {
				options_sort_by: [
					{ label: 'Найновіщі', value: 'newest' },
					{ label: 'Старіщі', value: 'oldest' },
				],
				options_filter_by_def_type: [
					{ label: 'Тип дефекту', value: '', disabled: 'disabled' },
					{ label: 'Найновіщі', value: 'newest' },
					{ label: 'Старіщі', value: 'oldest' },
				],
				options_filter_by_def_location: [
					{ label: 'Місце розташування дефекту', value: '', disabled: 'disabled' },
					{ label: 'Найновіщі', value: 'newest' },
					{ label: 'Старіщі', value: 'oldest' },
				],
				options_filter_by_def_status: [
					{ label: 'Статус дефекту', value: '', disabled: 'disabled' },
					{ label: 'Найновіщі', value: 'newest' },
					{ label: 'Старіщі', value: 'oldest' },
				],
			},
			comment: '',
			isComments: false,
			isOpen: false,
			isActive: false,
			isExpand: false,
			appsLoaded: false,
			data: [],
			currentPage: null,
			totalPages: null,
			perPage: null,
			startPage: null,
			endPage: null,
			orgInfo: [],
			application: {},
			cardCount: 10,
			search: '',
			search_by_adress: '',
			search_by_date: '',
			search_by_location_place: '',
			search_by_type: '',
			search_by_status: '',
			sort_by: '',
			selfFilters: false,
			pendingUpdate: null,
		}
	},
	created() {
		this.loadCard(true);
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
			}
		},
		reducer: (acc, curr) => acc + curr,
		async loadCard(change){
			this.isActive=true;
			try{
				this.pendingUpdate = await this.$API.apiGET("/defects?limit=8");
				if(!this.pendingUpdate)
					this.isActive=true;
				let result = await this.pendingUpdate;
				console.log(result);
				this.orgInfo=result;
				this.isActive=false;
			}catch(e){
				console.log(e);
				this.isActive=false;
			}
		},
	},
	computed: {
		//API Data
		dfCard(){
			return this.orgInfo.map(card => {
				return {
					id: card.id,
					address: card.address,
					photo: card.photos,
					status: card.case_status,
					comment: card.comments,
					author: card.author.name,
					// region_id: card.photos[0].region_id,
				}
			});
		},
		statusList(){
			let caseStatuses = [
				{ value: 'new', label: 'Новий' },
				{ value: 'in_progress', label: 'В процесі' }
			]
			return caseStatuses;
		}
	},
	watch: {}
}
</script>

<style>
</style>