<template>
	<section class="collection_defects">
		<mq-layout mq="lg">
			<vue-element-loading :active="isActive" size="60" duration="1" spinner="spinner" color="#FF6700"/>
			<carousel class="VueCarousel-fullwidth_lg" :navigationEnabled="true" :adjustableHeight="true" :mouseDrag="true" :perPage="5" :paginationColor="'#6C757D'" :navigationNextLabel="'&gt;'" :navigationPrevLabel="'&lt;'">
				<slide class="slide-detail" v-for='card in dfCard' :key='card.id'>
					<router-link :to="'/defect/'+card.id">
						<div class="defect_card">
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
						</div>
					</router-link>
				</slide>
			</carousel>
		</mq-layout>
		<mq-layout mq="md">
			<vue-element-loading :active="isActive" size="60" duration="1" spinner="spinner" color="#FF6700"/>
			<carousel class="VueCarousel-fullwidth_mb" :navigationEnabled="true" :adjustableHeight="true" :mouseDrag="true" :perPage="4" :paginationColor="'#6C757D'" :navigationNextLabel="'&gt;'" :navigationPrevLabel="'&lt;'">
				<slide class="slide-detail" v-for='card in dfCard' :key='card.id'>
					<router-link :to="'/defect/'+card.id">
						<div class="defect_card">
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
						</div>
					</router-link>
				</slide>
			</carousel>
		</mq-layout>
		<mq-layout mq="sm">
			<div class="container_works_mb">
						<div class="container_defects_mb">
							<div class="defect_content_mb" v-if="appsLoaded">
								<p class="sorted_title_mb">Показані останні дефекти зі змінами (за замовчуванням)</p>
								<div class="grid-container_mb">
									<div class="defect_card" v-for='card in dfCard' :key='card.id'>
										<div class="my-container" style="width: 100%;display: block;height: 100%;">
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
							<div class="defect_content" v-if="appsLoaded">
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
									<div class="defect_card" v-for='(card, idx) of defect.photos' :key='idx'>
										<div class="my-container" style="width: 100%;display: block;height: 100%;">
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
							<div class="defect_content_mb" v-if="!appsLoaded">
								<router-link class="defect_links_mb" to="/">
									<p>&lt; Назад до повного списку</p>
								</router-link>
								<vue-element-loading :active="isActive" size="60" duration="1" spinner="spinner" color="#FF6700"/>
								<carousel :navigationEnabled="true" :paginationEnabled="false" :adjustableHeight="true" :mouseDrag="true" :perPage="2" :paginationColor="'#6C757D'" :navigationNextLabel="'&gt;'" :navigationPrevLabel="'&lt;'">
									<slide v-for='card in dfCard' :key='card.id'>
										<div class="defect_card_mb">
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
									</slide>
								</carousel>
							</div>
						</div>
			</div>
		</mq-layout>
		<!-- <router-view></router-view> -->
	</section>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';
import VueElementLoading from 'vue-element-loading';
// import Pagination from './components/Pagination.vue';

// import defectCards from './mock_data';

export default {
	name: 'DefectView',
	components: {
		VueElementLoading,
		Carousel,
		Slide
	},
	data() {
		return {
			comment: '',
			isComments: false,
			isOpen: false,
			isActive: false,
			isExpand: false,
			appsLoaded: false,
			orgInfo: [],
			currentPage: null,
			totalPages: null,
			perPage: null,
			startPage: null,
			endPage: null,
			defect: {},
			selfFilters: false,
			pendingUpdate: null,
		}
	},
	created() {
		// this.$eventBus.$on('applicationUpdated', async (event) => {
		// 	if(this.$route.params.id) {
		// 		if(this.$route.params.id == event.payload.id) {
		// 			await this.reloadApplication();
		// 		}
		// 	}
		// });
	},
	beforeDestroy() {
		// this.$eventBus.$off('applicationUpdated');
	},
	async mounted() {
		this.$API.title = "Дефекти";
		this.$API.page = "DefectSortedGrid";
		this.loadCard(true);
		// let id = this.$route.params.id;
		// if(!id) {
		// 	this.router.push("/404");
		// 	return;
		// }
		// this.loadDefect(id);
	},
	methods: {
		reducer: (acc, curr) => acc + curr,
		listClick(e, url) {
			if(e && (e.which == 2 || e.button == 4)) {
				e.preventDefault(true);
				window.open(url, "_new");
			}
		},
		async loadCard(change){
			this.isActive=true;
			try{
				this.pendingUpdate = await this.$API.apiGET("/defects?");
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
					// author: card.author.name,
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

<style scoped>
	/* .VueCarousel-slide{
		max-width: 155px;
		margin: 0 2px;
	} */
	/* .VueCarousel-navigation-next{
		right: 0;
		transform: translateY(160%) translateX(-10%) !important;
		font-family: "system" !important;
		background: var(--color-white) !important;
		border-radius: 4px !important;
	}

	.VueCarousel-navigation-prev{
		left: 0;
		transform: translateY(-260%) translateX(-5%) !important;
		font-family: "system" !important;
		background: var(--color-white) !important;
		border-radius: 4px !important;
	} */
	@media all and (max-width:450px) {
		#nav_mb {
			padding: 5px 15px;
			display: flex;
			justify-content: flex-start;
			align-items: center;
			height: auto;
			width: 100%;
			border-bottom: 1px solid var(--color-gray-light);
		}
		.head-container_mb {
			display: flex;
			justify-content: space-between;
			flex-flow: column-reverse;
			position: relative;
			top: 0;
			padding: 0 20px;
			width: 100%;
		}
		.VueCarousel {
			display: flex;
			flex-direction: column;
			position: relative;
			width: 100%;
			max-width: 350px;
		}
		.VueCarousel-slide{
			max-width: 175px;
			margin: 0 2px;
		}
		.defect_card{
			display: flex;
			flex-flow: column;
			width: 100%;
			max-width: 155px;
			border: 1px solid var(--color-gray);
			border-radius: 4px;
			min-height: 200px;
			max-height: 200px;
			padding: 10px;
			place-self: center;
			transition: all 0.2s ease-in-out;
		}
		.card_image {
			-o-object-fit: cover;
			object-fit: cover;
			width: 100%;
			max-width: 135px;
			max-height: 120px;
			min-width: 125px;
			min-height: 120px;
		}
		.header_mb{
			width: 100%;
			height: 100%;
			background: var(--background-color-normal);
			display: flex;
			justify-content: space-between;
			align-items: center;
		}
		.hero-item {
			font: 500 1.2rem 'Montserrat' !important;
			cursor: text;
		}
				main.open {
			width: 100%;
			position: fixed;
			top: 0;
		}
		.icon_container_mb{
			display: flex;
			flex-flow: column;
			justify-content: center;
			align-items: center;
		}
		.chat_icon_description_mb{
			margin: 12px 0;
			font: 500 .8rem 'Montserrat'
		}
		.head-hero_mb{
			justify-content: space-between;
			display: flex;
			flex-flow: column;
			padding: 0 4px;
			text-align: left;
			margin: 8px 0;
		}
		.prefooter_title_mb{
			font: 700 1.15rem 'Montserrat'
		}
		.hero-container_mb{
			background-color: var(--background-color-normal);
			border: none !important;
			width: 100% !important;
			position: relative;
			/* margin: 0 auto; */
			padding: 16px 0;
		}
		.main-counter_mb{
			display: flex;
			justify-content: space-evenly;
			flex-flow: column-reverse;
			background: #fff;
			margin: 15px 0 0 0;
			padding: 45px 0;
		}
		.counter-item_mb{
			margin: 18px 0;
		}
		.hero-btn_mb{
			font: 700 1.1rem 'Montserrat';
			width: 100%;
			text-transform: none;
		}
		.hero-title_mb {
			display: flex;
			justify-content: center;
			width: 100%;
			position: relative;
			padding: 18px 0;
		}
		.container_steps_mb{
			display: flex;
			justify-content: space-evenly;
			align-items: center;
			flex-flow:column;
			width: 100%;
			/* margin: 0 auto; */
			padding: 20px 0;
		}
		.container_works_mb{
			padding: 0 6px;
		}
		.container_defects{
			display: flex;
			flex-flow:column;
		}
		.container_defects_mb{
			padding: 8px 0;
			overflow: hidden;
			position: relative;
		}
		.button_container_mb{
			flex-flow: column-reverse;
		}
		.step_item_col_mb {
			justify-content: space-between;
			display: flex;
			flex-flow: row;
			width: 100%;
		}
		.grid-container_mb {
			width: 100%;
			position: relative;
			display: grid;
			grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
			/* grid-template-rows: 1fr 1fr; */
			gap: 18px 8px;
		}
		.defect_content_mb{
			padding: 0;
			overflow: hidden;
		}
		.footer_container_mb{
			display: flex;
			justify-content: space-between;
			flex-flow: column;
			padding: 20px 8px;
		}
		.footer_logo_mb{
			display: flex;
			align-items: flex-start;
			flex-flow: column;
		}
		.footer_links_mb{
			display: flex;
			justify-content: center;
			flex-flow: column;
			flex: 1 1 auto;
		}
		#footer_nav_mb{
			padding: 15px 15px;
			display: flex;
			justify-content: space-between;
			align-items: flex-start;
			width: 100%;
		}
		.footer-btn_mb{
			/* max-width: 180px; */
			margin: 6px 4px;
			font: 500 .8rem 'Montserrat';
		}
		.nav_links_mb{
			margin: 0 0 20px 15px !important;
			white-space: nowrap;
		}
		.form-control_outline_mb{
			width: 100%;
			border: 1px solid var(--color-gray-light);
			border-radius: 4px;
		}
		.form-control_outline_mb>select{
			width: 100%;
		}
		.form-control_outline_mb>label{
			background-color: var(--color-white);
			transform: translate(8px, -6px);
			font-size: 0.8rem !important;
			display: block !important;
		}
		/* .input-field > label:not(.label-icon){
			display: none;
		} */
		/* .input-field>label{
			background: var(--color-white);
			display: none;
		} */
		.input-field > label:not(.label-icon) {
			display: inline-block;
			background: var(--color-white);
			background-color: var(--color-white);
			padding: 0 6px;
			transform-origin: 0 0;
			transform: translate(14px, -6px);
			font-size: 0.8rem !important;
			z-index: 1;
		}
		.input-field > label.active {
			display: block;
			background: var(--color-white);
			transform-origin: 0 0;
			transform: translate(8px, -6px) !important;
			font-size: 0.8rem !important;
		}
		.sorted_item_mb{
			display: flex;
			justify-content: flex-start;
			/* align-items: center; */
			flex-flow: column-reverse;
			width: 100%;
			padding: 0;
		}
		.filters_controls_mb{
			display: flex;
			justify-content: space-between;
			max-height: 35px;
		}
		.sorted_title_mb{
			font: 600 .8rem 'Montserrat';
			text-align: left;
			margin: 12px 0;
			padding: 0 4px;
		}
		.nav_links_mb > a:hover{
			transition: all .4s ease-in-out;
			text-decoration: none;
			border-bottom: 1px solid var(--color-red);
		}
		.step_description_mb{
			font: 500 .7rem 'Montserrat', Arial, sans-serif;
		}
		.arrow_fork_up_mb{
			position: absolute;
			left: 60%;
			top: 65%;
			width: 30%;
			transform: rotate(85deg);
		}
		.arrow_forward_mb{
			position: absolute;
			left: 37%;
			bottom: 15%;
			width: 25%;
			height: 2%;
			transform: rotate(-180deg);
		}
		.arrow_fork_mb{
			position: absolute;
			left: 39%;
			top: 42%;
			width: 24%;
			transform: rotate(90deg);
		}
		.arrow_fork_down_mb{
			position: absolute;
			left: 7%;
			bottom: 30%;
			width: 25%;
			transform: rotate(90deg);
		}
		.arrow_down_mb{
			position: absolute;
			right: 48%;
			/* height: 8%; */
			top: 21%;
			width: 3%;
			/* transform: rotate(0deg); */
		}
		.step_item_mb{
			min-height: 120px;
			display: flex;
			flex-flow: column;
			align-items: center;
		}
		.step_item_mb_reject{
			min-height: 120px;
			display: flex;
			flex-flow: column;
			align-items: center;
			position: relative;
			left: 35px;
		}
		.card_image_mb{
			object-fit: cover;
			width: 100%;
			max-width: 140px;
			max-height: 120px;
			min-width: 125px;
			min-height: 120px;
		}
		.VueCarousel-slide{
			max-width: 158px;
		}
		.VueCarousel-navigation{
			position: relative;
			bottom: 30px;
		}
		.VueCarousel-fullwidth_mb {
			display: flex;
			flex-direction: column;
			position: relative;
			width: 100%;
			max-width: 700px;
			min-height: 250px;
		}
	}
	@media all and (max-width:768px){
		.arrow_forward{
			position: absolute;
			left: 75%!important;
			width: 85%!important;
		}
		.arrow_fork{
			position: absolute;
			left: 38%!important;
			top: 47%!important;
			width: 13%!important;
		}
		.arrow_fork_down_mb{
			position: absolute;
			left: 7%;
			bottom: 30%;
			width: 25%;
			transform: rotate(90deg);
		}
		.arrow_down{
			position: absolute;
			right: 14% !important;
			/* height: 8%; */
			top: 50%;
			width: 3%;
			/* transform: rotate(0deg); */
		}
		.footer-btn{
			max-width: 179px!important;
			margin: 0 2px!important;
		}
		.sorted_item{
			justify-content: flex-start!important;
			flex-flow: column!important;
		}
		.sorted_title{
			font: 500 .8rem "Montserrat-regular", Arial, Helvetica, sans-serif!important;
			text-align: left!important;
			width: 100%!important;
		}
		.hero-item {
			font: 500 1.2rem "Montserrat-regular", Arial, Helvetica, sans-serif!important;
		}
	}

	/* .VueCarousel-fullwidth_mb{
		display: flex;
		flex-direction: column;
		position: relative;
		width: 100%;
		max-width: 640px;
		min-height: 250px;
	} */

	.VueCarousel-fullwidth {
		display: flex;
		flex-direction: column;
		position: relative;
		width: 100%;
		max-width: 796px;
		min-height: 250px;
	}
	.VueCarousel-fullwidth_lg {
		display: flex;
		flex-direction: column;
		position: relative;
		width: 100%;
		max-width: 874px;
		min-height: 250px;
	}
	div.VueCarousel-navigation{
		position: relative !important;
		bottom: 30px !important;
	}
	a.router-link-exact-active.router-link-active > .defect_card{
		background: var(--background-color-prefooter);
		border: 1px solid var(--status-color);
		filter: drop-shadow(2px 3px 3px var(--color-gray-light)) !important;
		cursor: pointer;
	}
</style>