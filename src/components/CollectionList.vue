<template>
	<section class="collection_defects">
		<mq-layout mq="md+">
			<div class="container_works">
				<div class="container_defects">
					<div class="defect_content">
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
							<!-- <div class="defect_content" v-show="appsLoaded">
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
									<div class="defect_card" v-for='(card, idx) of dfCard' :key='idx'>
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
							</div> -->
							<!-- <div class="defect_content_mb" v-show="appsLoaded">
								<router-link class="defect_links_mb" to="/">
									<p>&lt; Назад до повного списку</p>
								</router-link>
								<carousel :navigationEnabled="true" :paginationEnabled="false" :adjustableHeight="true" :mouseDrag="true" :perPage="2" :paginationColor="'#6C757D'" :navigationNextLabel="'&gt;'" :navigationPrevLabel="'&lt;'">
									<slide v-for='(card, idx) of dfCard' :key='idx'>
										<div class="defect_card_mb">
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
									</slide>
								</carousel>
								<div class="defect_nav_container">
									<div class="defect_nav_mb">
										<div class="defect_nav_item_mb"><p>Детальна інформація</p></div>
										<div class="defect_nav_item_mb" @click="isComments = !isComments"><p>Коментарі</p></div>
										<div class="defect_nav_item_mb"><p>Документи</p></div>
									</div>
								</div>
								<div class="defect_info_content_mb">
									<div class="defect_description_info">
										<div class="defect_detail">
											<div class="defect_title_container">
												<h3 class="defect_detail_title">Яма</h3>
												<p class="defect_description">на лівій смузі</p>
											</div>
										</div>
										<div class="defect_detail">
											<div class="detail_defect_status">
												<div class="status_item_id">
													<span class="defect_id">#fdsfsfds</span>
												</div>
												<div class="defect_status_item">
													<span>Новий</span>
												</div>
											</div>
										</div>
										<div class="defect_detail">
											<div class="detail_defect_info">
											<div class="defect_title_container">
												<p class="defect_description">Фото</p>
											</div>
											<carousel :paginationEnabled="false" :perPage="2" :navigationEnabled="true" :navigationNextLabel="'&gt;'" :navigationPrevLabel="'&lt;'" class="VueCarousel_detail_photo">
												<slide v-for="(p, idx) in dfCard[0].photo" :key="idx" class="VueCarousel-slide_defect">
													<div class="defect_card_detail_mb">
														<div class="my-container" style="width: 100%;display: flex;height: 100%;">
															<vue-element-loading :active="isActive" size="60" duration="1" spinner="spinner" color="#FF6700"/>
															<div class="defect_image_detail_mb">
																<img class="card_image_detail" :src="p.url" alt="">
															</div>
														</div>
													</div>
												</slide>
											</carousel>
											<div class="defect_detail_info">
												<div class="info_item">
													<p class="author_item">Автор</p>
													<div class="author_info">
														<div class="author_content">
															<img src="../assets/img/icons/carbon_user-avatar.svg" alt="User avatar" class="author_icon">
															<p class="author_name">{{ dfCard[0].author }}</p>
														</div>
														<button class="author_chat underline-btn">Написати автору</button>
													</div>
												</div>
											</div>
											<div class="defect_detail_info">
												<div class="info_item">
													<p class="author_item">Адреса</p>
													<div class="author_info">
														<div class="author_content">
															<img src="../assets/img/icons/carbon_user-avatar.svg" alt="User avatar" class="author_icon">
															<p class="author_name">{{ dfCard[0].address }}</p>
														</div>
													</div>
												</div>
											</div>
											<div class="defect_detail_info" v-if="dfCard[0].comment[0].text.length!=0">
												<div class="info_item">
													<p class="author_item">Опис</p>
													<div class="author_info">
														<div class="author_content">
															<p class="author_name">{{ dfCard[0].comment[0].text }}</p>
														</div>
													</div>
												</div>
											</div>
											<div class="defect_share_mb">
												<button class="btn outline_button_share_mb">Надіслати в поліцію</button>
												<button class="btn custom_button_share_mb">
													<img class="share_icon" src="../assets/img/icons/bx_bx-share-alt.svg" alt="" >
													Поділитись
												</button>
											</div>
											</div>
										</div>
									</div>
									<div class="defect_description_info_mb" :class="{open: isComments}" v-if="!appsLoaded">
										<div class="defect_title_container">
											<p class="defect_description">Коментарі</p>
										</div>
										<div class="chat_input">
											<div class="author_info_chat">
												<div class="author_content">
													<img src="../assets/img/icons/carbon_user-avatar.svg" alt="User avatar" class="author_icon">
													<p class="author_name">{{ dfCard[0].author }}</p>
												</div>
											</div>
											<FormInput
												title=""
												label=""
												placeholder="залишити коментар"
												class="form-control"
												v-model="comment"
											/>
										</div>
										<div class="chat_area">
											<div class="incoming_container">
												<div class="author_content">
													<div class="author_chat_info">
														<img src="../assets/img/icons/carbon_user-avatar.svg" alt="User avatar" class="author_icon">
														<p class="author_name">{{ dfCard[0].author }}</p>
													</div>
													<p class="author_chat message_date">23.03.2021</p>
												</div>
												<div class="message_box">
													<p class="message_content">Поліція каже, що дефекти розташовані за межами "червоних ліній", тобто не на дорозі. Інформацію направили до іншого органу.</p>
												</div>
											</div>
											<div class="incoming_container">
												<div class="author_content">
													<div class="author_chat_info">
														<img src="../assets/img/icons/carbon_user-avatar.svg" alt="User avatar" class="author_icon">
														<p class="author_name">{{ dfCard[0].author }}</p>
													</div>
													<p class="author_chat message_date">23.03.2021</p>
												</div>
												<div class="message_box replies_box">
													<p class="message_content">Поліція каже, що дефекти розташовані за межами "червоних ліній"</p>
												</div>
											</div>
											<div class="incoming_container">
												<div class="author_content">
													<div class="author_chat_info">
														<img src="../assets/img/icons/carbon_user-avatar.svg" alt="User avatar" class="author_icon">
														<p class="author_name">{{ dfCard[0].author }}</p>
													</div>
													<p class="author_chat message_date">23.03.2021</p>
												</div>
												<div class="message_box">
													<p class="message_content">Поліція каже, що дефекти розташовані</p>
												</div>
											</div>
											<div class="incoming_container">
												<div class="author_content">
													<div class="author_chat_info">
														<img src="../assets/img/icons/carbon_user-avatar.svg" alt="User avatar" class="author_icon">
														<p class="author_name">{{ dfCard[0].author }}</p>
													</div>
													<p class="author_chat message_date">23.03.2021</p>
												</div>
												<div class="message_box replies_box">
													<p class="message_content">Поліція каже, що дефекти розташовані. Інформацію направили до іншого органу.</p>
												</div>
											</div>
										</div>
									</div>
									<div class="defect_description_info_mb" v-if="appsLoaded">
										<div class="defect_title_container">
											<p class="defect_description">Документи</p>
										</div>
										<div class="chat_area">
											<div class="incoming_container">
												<div class="author_content">
													<div class="author_chat_info">
														<img src="../assets/img/icons/bx_bx-time-five.svg" alt="User avatar" class="author_icon">
														<p class="author_chat message_date">23.03.2021</p>
													</div>
												</div>
												<div class="doc_box">
													<p class="message_content">Звернення до Управління патрульної поліції в Київській області</p>
													<img class="doc_icon" src="../assets/img/icons/carbon_document-pdf.svg" alt="document pdf">
													<img class="doc_icon" title="Завантажити документ" src="../assets/img/icons/feather_download.svg" alt="feather download">
												</div>
											</div>
											<div class="incoming_container">
												<div class="author_content">
													<div class="author_chat_info">
														<img src="../assets/img/icons/bx_bx-time-five.svg" alt="User avatar" class="author_icon">
														<p class="author_chat message_date">23.03.2021</p>
													</div>
												</div>
												<div class="doc_box">
													<p class="message_content">Відповідь від Управління патрульної поліції в Київській області</p>
													<img class="doc_icon" src="../assets/img/icons/carbon_document-pdf.svg" alt="document pdf">
													<img class="doc_icon" src="../assets/img/icons/feather_download.svg" alt="feather download">
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="detail_pagination_mb">
									<button class="btn outline_button btn_outline">&lt; Попередній</button>
									<button class="btn outline_button btn_outline">Наступний &gt;</button>
								</div>
							</div> -->
						</div>
			</div>
		</mq-layout>
	</section>
</template>

<script>

import VueElementLoading from 'vue-element-loading';

// import defectCards from './mock_data';

export default {
	name: 'collectionList',
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
					{ label: 'Яма', value: 'hole' },
					{ label: 'Ремонтується', value: 'manually' },
					{ label: 'Розмітка', value: 'Markup' },
					{ label: 'Не якісний ремонт', value: 'PoorQualityRepair' },
					{ label: 'Сніг', value: 'Snow' },
					{ label: 'Інородний об\'єкт', value: 'ForeignObj' },
					{ label: 'Яма у дворі', value: 'yard_hole' },
					{ label: 'Руйнування', value: 'ruined' },
				],
				options_filter_by_def_location: [
					{ label: 'Місце розташування дефекту', value: '', disabled: 'disabled' },
					{ label: 'Найновіщі', value: 'newest' },
					{ label: 'Старіщі', value: 'oldest' },
				],
				options_filter_by_def_status: [
					{ label: 'Статус дефекту', value: '', disabled: 'disabled' },
					{ label: 'Найновіщі', value: 'new' },
					{ label: 'Старіщі', value: 'in_progress' },
				],
				options_filter_by_date: [
					{ id: 0, label: 'по дням', value: '1' },
					{ id: 1, label: 'по тижням', value: '7' },
					{ id: 2, label: 'по місяцям', value: '30' },
					{ id: 3, label: 'по рокам', value: '365' },
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
			cardCount: 10,
			search: '',
			search_by_adress: '',
			search_by_date: '',
			search_by_location_place: '',
			search_by_type: '',
			selectedStatus: '',
			selectedType: '',
			sort_by: '',
			selfFilters: false,
			pendingUpdate: null,
			dateRangeFilterShown: false,
			appsUpdateInterval: null,
			page: '',
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
			this.pendingUpdate = null;
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
					defect_type: card.defect_type,
					// region_id: card.photos[0].region_id,
				}
			});
		},
	},
	watch: {}
}
</script>

<style>
</style>