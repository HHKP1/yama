<template>
	<div style="flex: 1 1 60%">
		<mq-layout mq="md+">
			<div class="defect_content">
								<router-link class="defect_links" to="/collections">
									<p>&lt; Назад до повного списку</p>
								</router-link>
								<DefectSortedGrid />
								<div class="defect_nav_container">
									<div class="defect_nav">
										<div class="defect_nav_item_mb" @click="isCommentsMd = 1" :style="{'border-bottom': isCommentsMd === 1 ? '2px solid var(--color-red)' : ''}"><p>Детальна інформація</p></div>
										<div class="defect_nav_item_mb" @click="isCommentsMd = 2" :style="{'border-bottom': isCommentsMd === 2 ? '2px solid var(--color-red)' : ''}"><p>Коментарі</p></div>
										<div class="defect_nav_item_mb" @click="isCommentsMd = 3" :style="{'border-bottom': isCommentsMd === 3 ? '2px solid var(--color-red)' : ''}"><p>Документи</p></div>
									</div>
								</div>
								<div class="defect_info_content">
								<vue-element-loading :active="isActive" size="60" duration="1" spinner="spinner" color="#FF6700"/>
									<div class="defect_description_info">
										<div class="defect_detail">
											<div class="defect_title_container">
												<h3 class="defect_detail_title" v-if="defect.defect_type=='hole'">Яма</h3>
												<h3 class="defect_detail_title" v-if="defect.defect_type=='ruined'">Руйнування</h3>
												<h3 class="defect_detail_title" v-if="defect.defect_type=='manually'">Ремонтується</h3>
												<h3 class="defect_detail_title" v-if="defect.defect_type=='Markup'">Розмітка</h3>
												<h3 class="defect_detail_title" v-if="defect.defect_type=='PoorQualityRepair'">Не якісний ремонт</h3>
												<h3 class="defect_detail_title" v-if="defect.defect_type=='Snow'">Сніг</h3>
												<h3 class="defect_detail_title" v-if="defect.defect_type=='ForeignObj'">Інородний об'єкт</h3>
												<h3 class="defect_detail_title" v-if="defect.defect_type=='yard_hole'">Яма у дворі</h3>
												<!-- <p class="defect_description">{{ defect.comment }}</p> -->
											</div>
										</div>
										<div class="defect_detail">
											<div class="detail_defect_status">
												<div class="status_item_id">
													<span class="defect_id">#{{defect.id}}</span>
												</div>
												<div class="defect_status_item">
													<span v-if="defect.case_status.current.status=='new'">Новий</span>
													<span v-if="defect.case_status.current.status=='approved'">Погоджений</span>
													<span v-if="defect.case_status.current.status=='sent'">Відправлений</span>
													<span v-if="defect.case_status.current.status=='replied'">Відповідь</span>
													<span v-if="defect.case_status.current.status=='no_answer'">Немає відповіді</span>
													<span v-if="defect.case_status.current.status=='rejected'">Відхилений</span>
													<span v-if="defect.case_status.current.status=='escalated'">Ескалований</span>
													<span v-if="defect.case_status.current.status=='in_progress'">В процесі</span>
													<span v-if="defect.case_status.current.status=='done'">Виправлений</span>
												</div>
											</div>
										</div>
										<div class="defect_detail">
											<div class="detail_defect_info">
											<div class="defect_title_container">
												<p class="defect_description">Фото</p>
											</div>
											<carousel :paginationEnabled="false" :perPage="2" :navigationEnabled="true" :navigationNextLabel="'&gt;'" :navigationPrevLabel="'&lt;'" class="VueCarousel_detail_photo">
												<slide v-for="(p, idx) in defect.photos" :key="idx" class="VueCarousel-slide_defect">
													<div class="defect_card_detail">
														<div class="my-container" style="width: 100%;display: flex;height: 100%;">
															<vue-element-loading :active="isActive" size="60" duration="1" spinner="spinner" color="#FF6700"/>
															<div class="defect_image_detail">
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
															<p class="author_name">{{ defect.case_status.current.author.name }}</p>
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
															<img src="../assets/img/icons/feather_map-pin.svg" alt="User avatar" class="author_icon">
															<p class="author_name">{{ defect.address }}</p>
														</div>
													</div>
												</div>
											</div>
											<div class="defect_detail_info" v-for="comm in defect.comments" :key="comm.id">
												<div class="info_item">
													<p class="author_item">Опис</p>
													<div class="author_info">
														<div class="author_content">
															<p class="author_name">{{ comm.text }}</p>
														</div>
													</div>
												</div>
											</div>
											<div class="defect_share">
												<button class="btn outline_button_share">Надіслати в поліцію</button>
												<button class="btn custom_button_share">
													<img class="share_icon" src="../assets/img/icons/bx_bx-share-alt.svg" alt="" >
													Поділитись
												</button>
											</div>
											</div>
										</div>
									</div>
									<div class="defect_description_info_tab" :class="{openActive: isCommentsMd === 1}">
										<div class="progress_container">
											<div class="progress_item">
												<div class="progress_content">
													<div class="progress_icons_block">
														<div class="progress_icons">
															<div class="progress_indicator">
																<img src="../assets/img/icons/mdi_camera-plus-outline.svg" class="progress_icon" alt="">
															</div>
															<img src="../assets/img/icons/arrow_down.svg" alt="">
														</div>
													</div>
													<div class="progress_info_block">
														<div class="progress_info_item">
															<img src="../assets/img/icons/bx_bx-time-five.svg" alt="User avatar" class="author_icon">
															<p class="author_chat message_date">23.04.2021</p>
														</div>
														<p class="progress_title">Дефект додано</p>
													</div>
												</div>
											</div>
											<div class="progress_item_reverse">
												<div class="progress_content_reverse">
													<div class="progress_icons_block">
													<div class="progress_icons">
														<div class="progress_indicator">
															<img src="../assets/img/icons/bx_bx-comment-detail.svg" class="progress_icon" alt="">
														</div>
														<img src="../assets/img/icons/arrow_down.svg" alt="">
													</div>
													</div>
													<div class="progress_info_block">
													<div class="progress_info_item_reverse">
														<img src="../assets/img/icons/bx_bx-time-five.svg" alt="User avatar" class="author_icon">
														<p class="author_chat message_date">23.04.2021</p>
													</div>
													<p class="progress_title_reverse">Коментарі</p>
													<!-- <p class="progress_title">Коментарі</p> -->
													</div>
												</div>
											</div>
											<div class="progress_item">
												<div class="progress_content">
													<div class="progress_icons_block">
													<div class="progress_icons">
														<div class="progress_indicator">
															<img src="../assets/img/icons/mdi_file-document-edit-outline.svg" class="progress_icon" alt="">
														</div>
														<img src="../assets/img/icons/arrow_down.svg" alt="">
													</div>
													</div>
													<div class="progress_info_block">
													<div class="progress_info_item">
														<img src="../assets/img/icons/bx_bx-time-five.svg" alt="User avatar" class="author_icon">
														<p class="author_chat message_date">23.04.2021</p>
													</div>
													<p class="progress_title">Реакція на відповідь</p>
													</div>
												</div>
											</div>
											<div class="progress_item_reverse">
												<div class="progress_content_reverse">
													<div class="progress_icons_block">
													<div class="progress_icons">
														<div class="progress_indicator">
															<img src="../assets/img/icons/mdi_file-document-edit-outline.svg" class="progress_icon" alt="">
														</div>
														<img src="../assets/img/icons/arrow_down.svg" alt="">
													</div>
													</div>
													<div class="progress_info_block">
													<div class="progress_info_item_reverse">
														<img src="../assets/img/icons/bx_bx-time-five.svg" alt="User avatar" class="author_icon">
														<p class="author_chat message_date">23.04.2021</p>
													</div>
													<p class="progress_title_reverse">Звернення надіслано</p>
													<p class="progress_title_reverse">Звернення надіслано</p>
													</div>
												</div>
											</div>
											<div class="progress_item">
												<div class="progress_content">
													<div class="progress_icons_block">
													<div class="progress_icons">
														<div class="progress_indicator">
															<img src="../assets/img/icons/mdi_file-check-outline.svg" class="progress_icon" alt="">
														</div>
														<img src="../assets/img/icons/arrow_down.svg" alt="">
													</div>
													</div>
													<div class="progress_info_block">
													<div class="progress_info_item">
														<img src="../assets/img/icons/bx_bx-time-five.svg" alt="User avatar" class="author_icon">
														<p class="author_chat message_date">23.04.2021</p>
													</div>
													<p class="progress_title">Відповідь отримано</p>
													</div>
												</div>
											</div>
											<div class="progress_item_reverse">
												<div class="progress_content_reverse">
													<div class="progress_icons_block">
													<div class="progress_icons">
														<div class="progress_indicator">
															<img src="../assets/img/icons/bx_bx-comment-detail.svg" class="progress_icon" alt="">
														</div>
														<img src="../assets/img/icons/arrow_down.svg" alt="">
													</div>
													</div>
													<div class="progress_info_block">
													<div class="progress_info_item_reverse">
														<img src="../assets/img/icons/bx_bx-time-five.svg" alt="User avatar" class="author_icon">
														<p class="author_chat message_date">23.04.2021</p>
													</div>
													<p class="progress_title_reverse">Коментарі</p>
													<!-- <p class="progress_title">Коментарі</p> -->
													</div>
												</div>
											</div>
											<div class="progress_item">
												<div class="progress_content">
													<div class="progress_icons_block">
													<div class="progress_icons">
														<div class="progress_indicator">
															<img src="../assets/img/icons/mdi_file-document-edit-outline.svg" class="progress_icon" alt="">
														</div>
														<img src="../assets/img/icons/arrow_down.svg" alt="">
													</div>
													</div>
													<div class="progress_info_block">
													<div class="progress_info_item">
														<img src="../assets/img/icons/bx_bx-time-five.svg" alt="User avatar" class="author_icon">
														<p class="author_chat message_date">23.04.2021</p>
													</div>
													<p class="progress_title">Реакція на відповідь</p>
													</div>
												</div>
											</div>
											<div class="progress_item_reverse">
												<div class="progress_content_reverse">
													<div class="progress_icons_block">
													<div class="progress_icons">
														<div class="progress_indicator">
															<img src="../assets/img/icons/si-glyph_arrow-reload.svg" class="progress_icon" alt="">
														</div>
														<img src="../assets/img/icons/arrow_down.svg" alt="">
													</div>
													</div>
													<div class="progress_info_block">
													<div class="progress_info_item_reverse">
														<img src="../assets/img/icons/bx_bx-time-five.svg" alt="User avatar" class="author_icon">
														<p class="author_chat message_date">23.04.2021</p>
													</div>
													<p class="progress_title_reverse">Дані оновлено</p>
													<!-- <p class="progress_title">Звернення надіслано</p> -->
													</div>
												</div>
											</div>
											<div class="progress_item">
												<div class="progress_content">
													<div class="progress_icons_block">
													<div class="progress_icons">
														<div class="progress_indicator">
															<img src="../assets/img/icons/bx_bx-traffic-cone.svg" class="progress_icon" alt="">
														</div>
													</div>
													</div>
													<div class="progress_info_block">
													<div class="progress_info_item">
														<img src="../assets/img/icons/bx_bx-time-five.svg" alt="User avatar" class="author_icon">
														<p class="author_chat message_date">23.04.2021</p>
													</div>
													<p class="progress_title">Дефект усунуто</p>
													<!-- <p class="progress_title">Звернення надіслано</p> -->
													</div>
												</div>
											</div>
										</div>
									</div>
									<div class="defect_description_info_tab" :class="{openActive: isCommentsMd === 2}">
										<div class="defect_title_container">
											<p class="defect_description">Коментарі</p>
										</div>
										<div class="chat_input">
											<div class="author_info_chat">
												<div class="author_content">
													<img src="../assets/img/icons/carbon_user-avatar.svg" alt="User avatar" class="author_icon">
													<p class="author_name" :title="this.me.first_name+' '+this.me.last_name+' '+this.me.patronymic">{{ this.me.first_name }} {{ this.me.last_name }}</p>
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
										<div class="chat_area" v-for="comment in defect.comments" :key="comment.id">
											<div class="incoming_container">
												<div class="author_content">
													<div class="author_chat_info">
														<img src="../assets/img/icons/carbon_user-avatar.svg" alt="User avatar" class="author_icon">
														<p class="author_name">{{ comment.author.name }}</p>
													</div>
													<p class="author_chat message_date">{{ comment.timestamp | moment("DD.MM.YY в HH:mm") }}</p>
												</div>
												<div class="message_box">
													<p class="message_content">{{ comment.text }}</p>
												</div>
											</div>
										</div>
									</div>
									<div class="defect_description_info_tab" :class="{openActive: isCommentsMd === 3}">
										<div class="defect_title_container">
											<p class="defect_description">Документи</p>
										</div>
										<div class="chat_area">
											<div class="incoming_container" v-for="claim in defect.claims" :key="claim.id">
												<div class="author_content">
													<div class="author_chat_info">
														<img src="../assets/img/icons/bx_bx-time-five.svg" alt="User avatar" class="author_icon">
														<p class="author_chat message_date">{{ claim.delivery_date }}</p>
													</div>
												</div>
												<div class="doc_box">
													<p class="message_content">{{ claim.comment }}</p>
													<div class="doc_images">
														<a @click.prevent="openClaim(`${claim.url}`)"><img class="doc_icon" src="../assets/img/icons/carbon_document-pdf.svg" alt="document pdf"></a>
														<img class="doc_icon" title="Завантажити документ" src="../assets/img/icons/feather_download.svg" alt="feather download">
													</div>
												</div>
											</div>
										</div>
										<div class="chat_area" v-if="!defect.claims" style="display:flex;justify-content:center;align-items:center;background: var(--background-color-prefooter);position:absolute;top:0;">
											<h6>Поки немає файлів</h6>
										</div>
									</div>
								</div>
								<div class="detail_pagination">
									<button class="btn outline_button btn_outline">&lt; Попередній</button>
									<button class="btn outline_button btn_outline">Наступний &gt;</button>
								</div>
			</div>
		</mq-layout>
		<mq-layout mq="sm">
			<div class="container_works_mb">
						<div class="container_defects_mb">
							<div class="defect_content_mb" v-if="appsLoaded">
								<p class="sorted_title_mb">Показані останні дефекти зі змінами (за замовчуванням)</p>
								<div class="grid-container_mb">
									<!-- <div class="defect_card" v-for='card in dfCard' :key='card.id'>
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
									</div> -->
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
									<!-- <div class="defect_filter_item">
										<p class="defect_title">Загалом дефектів знайдено: <span>{{ dfCard.length }}</span></p>
									</div> -->
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
												<img class="card_image" :src="card.url" alt="">
												<p class="defect_date">{{ new Date(card.timestamp) | moment("DD.MM.YY в HH:mm") }}</p>
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
							<div class="defect_content_mb">
								<router-link class="defect_links_mb" to="/">
									<p>&lt; Назад до повного списку</p>
								</router-link>
								<vue-element-loading :active="isActive" size="60" duration="1" spinner="spinner" color="#FF6700"/>
								<!-- <carousel :navigationEnabled="true" :paginationEnabled="false" :adjustableHeight="true" :mouseDrag="true" :perPage="2" :paginationColor="'#6C757D'" :navigationNextLabel="'&gt;'" :navigationPrevLabel="'&lt;'">
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
								</carousel> -->
								<div class="defect_nav_container">
									<div class="defect_nav_mb">
										<div class="defect_nav_item_mb" @click="isComments = 1" :style="{'border-bottom': isComments === 1 ? '2px solid var(--color-red)' : ''}"><p>Детальна інформація</p></div>
										<div class="defect_nav_item_mb" @click="isComments = 2" :style="{'border-bottom': isComments === 2 ? '2px solid var(--color-red)' : ''}"><p>Коментарі</p></div>
										<div class="defect_nav_item_mb" @click="isComments = 3" :style="{'border-bottom': isComments === 3 ? '2px solid var(--color-red)' : ''}"><p>Документи</p></div>
									</div>
								</div>
								<div class="defect_info_content_mb">
									<div class="defect_description_info">
										<div class="defect_detail">
											<div class="defect_title_container">
												<h3 class="defect_detail_title" v-if="defect.defect_type=='hole'">Яма</h3>
												<h3 class="defect_detail_title" v-if="defect.defect_type=='ruined'">Руйнування</h3>
												<h3 class="defect_detail_title" v-if="defect.defect_type=='manually'">Ремонтується</h3>
												<h3 class="defect_detail_title" v-if="defect.defect_type=='Markup'">Розмітка</h3>
												<h3 class="defect_detail_title" v-if="defect.defect_type=='PoorQualityRepair'">Не якісний ремонт</h3>
												<h3 class="defect_detail_title" v-if="defect.defect_type=='Snow'">Сніг</h3>
												<h3 class="defect_detail_title" v-if="defect.defect_type=='ForeignObj'">Інородний об'єкт</h3>
												<h3 class="defect_detail_title" v-if="defect.defect_type=='yard_hole'">Яма у дворі</h3>
											</div>
										</div>
										<div class="defect_detail">
											<div class="detail_defect_status">
												<div class="status_item_id">
													<span class="defect_id">#{{ defect.id }}</span>
												</div>
												<div class="defect_status_item">
													<span v-if="defect.case_status.current.status=='new'">Новий</span>
													<span v-if="defect.case_status.current.status=='approved'">Погоджений</span>
													<span v-if="defect.case_status.current.status=='sent'">Відправлений</span>
													<span v-if="defect.case_status.current.status=='replied'">Відповідь</span>
													<span v-if="defect.case_status.current.status=='no_answer'">Немає відповіді</span>
													<span v-if="defect.case_status.current.status=='rejected'">Відхилений</span>
													<span v-if="defect.case_status.current.status=='escalated'">Ескалований</span>
													<span v-if="defect.case_status.current.status=='in_progress'">В процесі</span>
													<span v-if="defect.case_status.current.status=='done'">Виправлений</span>
												</div>
											</div>
										</div>
										<div class="defect_detail">
											<div class="detail_defect_info">
											<div class="defect_title_container">
												<p class="defect_description">Фото</p>
											</div>
											<carousel :paginationEnabled="false" :perPage="2" :navigationEnabled="true" :navigationNextLabel="'&gt;'" :navigationPrevLabel="'&lt;'" class="VueCarousel_detail_photo">
												<slide v-for="(p, idx) in defect.photos" :key="idx" class="VueCarousel-slide_defect">
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
															<p class="author_name">{{ defect.case_status.current.author.name }}</p>
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
															<img src="../assets/img/icons/feather_map-pin.svg" alt="User avatar" class="author_icon">
															<p class="author_name">{{ defect.address }}</p>
														</div>
													</div>
												</div>
											</div>
											<div class="defect_detail_info" v-for="comm in defect.comments" :key="comm.id">
												<div class="info_item">
													<p class="author_item">Опис</p>
													<div class="author_info">
														<div class="author_content">
															<p class="author_name">{{ comm.text }}</p>
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
									<div class="defect_description_info_mb" :class="{open: isComments === 1}">
										<div class="defect_detail_title_container">
											<p class="defect_description">Коментарі</p>
											<span class="close_button" @click="toggleClass()">&times;</span>
										</div>
										<div class="chat_input">
											<div class="author_info_chat">
												<div class="author_content">
													<img src="../assets/img/icons/carbon_user-avatar.svg" alt="User avatar" class="author_icon">
													<!-- <p class="author_name">{{ defect.author.name }}</p> -->
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
										<div class="chat_area" v-for="comment in defect.comments" :key="comment.id">
											<div class="incoming_container">
												<div class="author_content">
													<div class="author_chat_info">
														<img src="../assets/img/icons/carbon_user-avatar.svg" alt="User avatar" class="author_icon">
														<p class="author_name">{{ comment.author.name }}</p>
													</div>
													<p class="author_chat message_date">{{ comment.timestamp | moment("DD.MM.YY в HH:mm") }}</p>
												</div>
												<div class="message_box">
													<p class="message_content">{{ comment.text }}</p>
												</div>
											</div>
										</div>
									</div>
									<div class="defect_description_info_mb" :class="{open: isComments === 2}" @click="toggleClass()">
										<div class="defect_detail_title_container">
											<p class="defect_description">Коментарі</p>
											<span class="close_button" @click="toggleClass()">&times;</span>
										</div>
										<div class="chat_input">
											<div class="author_info_chat">
												<div class="author_content">
													<img src="../assets/img/icons/carbon_user-avatar.svg" alt="User avatar" class="author_icon">
													<!-- <p class="author_name">{{ defect.author.name }}</p> -->
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
										<div class="chat_area" v-for="comment in defect.comments" :key="comment.id">
											<div class="incoming_container">
												<div class="author_content">
													<div class="author_chat_info">
														<img src="../assets/img/icons/carbon_user-avatar.svg" alt="User avatar" class="author_icon">
														<p class="author_name">{{ comment.author.name }}</p>
													</div>
													<p class="author_chat message_date">{{ comment.timestamp | moment("DD.MM.YY в HH:mm") }}</p>
												</div>
												<div class="message_box">
													<p class="message_content">{{ comment.text }}</p>
												</div>
											</div>
										</div>
									</div>
									<div class="defect_description_info_mb" :class="{open: isComments === 3}" @click="toggleClass()">
										<div class="defect_detail_title_container">
											<p class="defect_description">Документи</p>
											<span class="close_button" @click="toggleClass()">&times;</span>
										</div>
										<div class="chat_area">
											<div class="incoming_container" v-for="claim in defect.claims" :key="claim.id">
												<div class="author_content">
													<div class="author_chat_info">
														<img src="../assets/img/icons/bx_bx-time-five.svg" alt="User avatar" class="author_icon">
														<!-- <p class="author_chat message_date">{{ info.upload_timestamp | moment("DD.MM.YY в HH:mm") }}</p> -->
													</div>
												</div>
												<div class="doc_box">
													<p class="message_content">{{ claim.comment }}</p>
													<div class="doc_images">
														<a @click.prevent="openClaim(`${claim.url}`)"><img class="doc_icon" src="../assets/img/icons/carbon_document-pdf.svg" alt="document pdf"></a>
														<img class="doc_icon" title="Завантажити документ" src="../assets/img/icons/feather_download.svg" alt="feather download">
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="detail_pagination_mb">
									<button class="btn outline_button btn_outline">&lt; Попередній</button>
									<button class="btn outline_button btn_outline">Наступний &gt;</button>
								</div>
							</div>
						</div>
			</div>
		</mq-layout>
	</div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';
import VueElementLoading from 'vue-element-loading';
import DefectSortedGrid from '../components/DefectSortedGrid';
// import Pagination from './components/Pagination.vue';

// import defectCards from './mock_data';

export default {
	components: {
		VueElementLoading,
		Carousel,
		Slide,
		DefectSortedGrid
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
			isComments: null,
			isCommentsMd: 1,
			isDocs: false,
			isOpen: false,
			isActive: false,
			isExpand: false,
			appsLoaded: true,
			defect: {},
			me: {},
			sort_by: '',
			pendingUpdate: null,
		}
	},
	created() {
		this.isActive=true;
		this.me = this.$API.me;
	},
	async mounted() {
		this.$API.title = "Дефект";
		let id = this.$route.params.id;
		if(!id) {
			this.router.push("/404");
			return;
		}
		await this.loadDefect(id);
	},
	methods: {
		openClaim(url){
			window.open(url, '_blank');
		},
		reducer: (acc, curr) => acc + curr,
		toggleClass: function(event){
			if(this.isComments)
				this.isComments = null;
		},
		listClick(e, url) {
			if(e && (e.which == 2 || e.button == 4)) {
				e.preventDefault(true);
				window.open(url, "_new");
			}
		},
		async loadDefect(id){
			this.isActive=true;
			try{
				let result = await this.$API.apiGET("/defect?id="+id);
				this.defect=result;
				this.isActive=false;
			}catch(e){
				console.log(e);
				this.isActive=false;
			}
		},
	},
	computed: {
		//API Data
	},
	watch: {
		'$route.path'() {
			let id = this.$route.params.id;
			if(!id) {
				this.router.push("/404");
				return;
			}
			if(this.defect && id != this.defect.id)
				this.loadDefect(id);
		},
	}
}
</script>

<style>
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

	@media all and (max-width:450px){
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
		.VueCarousel-navigation-button {
			position: absolute;
			top: 70% !important;
			box-sizing: border-box;
			color: #000;
			text-decoration: none;
			appearance: none;
			border: none;
			background-color: transparent;
			padding: 0;
			cursor: pointer;
			outline: none;
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
		.VueCarousel-slide{
			max-width: 158px;
		}
	}

	/* @media all and (max-width:768px) {
		.VueCarousel-slide{
			max-width: 158px;
		}
	} */

	/* Section How it works   */

	.VueCarousel-fullwidth {
		display: flex;
		flex-direction: column;
		position: relative;
		width: 100%;
		max-width: 875px;
	}
	.card_image_detail {
		-o-object-fit: cover;
		object-fit: cover;
		width: 100%;
		min-height: 130px;
		max-width: 170px;
		/* height: 100%; */
		max-height: 130px;
	}
	.defect_content{
		display: flex;
		justify-content: center;
		align-items: flex-start;
		flex-wrap: wrap;
		width: 100%;
		padding: 0 10px;
		height: 100%;
		flex: 1 1 60%;
		overflow: hidden;
	}
	.defect_content_mb{
		display: flex;
		justify-content: center;
		align-items: flex-start;
		flex-wrap: wrap;
		width: 100%;
		padding: 0 10px;
		height: 100%;
		/* flex: 1 1 60%; */
		overflow: hidden;
	}
	.defect_links{
		width: 100%;
		position: relative;
		text-align: left;
		margin: 0 0 12px 0;
		display: inline-block;
	}
	.defect_links_mb{
		width: 100%;
		position: relative;
		text-align: left;
		margin: 18px 0;
		display: inline-block;
	}
	.defect_nav_container{
		position: relative;
		width: 100%;
		display: block;
	}
	.defect_nav{
		display: flex;
		padding: 1px;
		height: auto;
		position: relative;
		max-height: 43px;
	}
	.defect_nav_mb{
		display: flex;
		padding: 1px;
		height: auto;
		position: relative;
		max-height: 43px;
		margin: 4px 0 0;
		justify-content: space-between;
	}
	.defect_info_content{
		width: 100%;
		display: flex;
		padding: 20px 0
	}
	.defect_info_content_mb{
		display: flex;
		padding: 0;
	}
	.defect_description_info{
		flex: 1 0 50%;
		position: relative;
		padding: 0 12px;
	}
	.defect_description_info_tab{
		flex: 1 0 50%;
		position: relative;
		padding: 0 12px;
		display: none;
	}
	.defect_description_info_tab.openActive{
		flex: 1 0 50%;
		position: relative;
		padding: 0 12px;
		display: block;
		overflow: hidden;
	}
	.defect_description_info_mb{
		position: absolute;
		left: 0;
		transform: translateX(360px);
		transition: transform .3s ease-out;
		background: #fff;
		padding: 8px;
		height: 50%;
		width: 100%;
		/* display: none; */
	}
	.defect_description_info_mb.open{
		position: absolute;
		left: 0;
		transform: translateX(0);
		transition: transform .3s ease-out;
		background: #fff;
		padding: 8px;
		height: 55%;
		/* display: block; */
	}
	.progress_container{
		padding: 12px 40px;
		max-height: 550px;
		overflow: auto;
	}
	@media all and (min-width:968px){
		.progress_container{
		padding: 12px 0;
		max-height: 550px;
		overflow: auto;
	}
	}
	.progress_item{
		display: flex;
		justify-content: flex-end;
		max-width: 316px;
	}
	.progress_content_reverse{
		flex-flow: row-reverse;
		display: flex;
		justify-content: flex-end;
	}
	.progress_content{
		display: flex;
	}
	.progress_icons_block{
		margin: 0;
	}
	.progress_info_block{
		min-width: 140px;
		display: block;
	}
	.progress_icon{
		width: 22px;
	}
	.progress_title{
		font: 500 .8rem 'Montserrat';
		text-align: left;
	}
	.progress_title_reverse{
		font: 500 .8rem 'Montserrat';
		text-align: right;
	}
	.progress_icons{}
	.progress_indicator{
		width: 35px;
		margin: 8px 0;
	}
	.progress_info_block{
		display: flex;
		flex-flow: column;
	}
	.progress_info_item{
		display: flex;
		padding: 4px 0;
	}
	.progress_info_item_reverse{
		display: flex;
		padding: 4px 0;
		justify-content: flex-end;
	}
	.defect_nav_item p{
		margin: 0 15px 0 0;
		padding: 12px 0;
		color: var(--color-gray);
		cursor: pointer;
		display: inline-block;
		font: 500;
	}
	.defect_nav_item_mb p{
		margin: 0 15px 0 0;
		padding: 12px 0;
		color: var(--color-gray);
		cursor: pointer;
		display: inline-block;
		font: 500 .8rem 'Montserrat';
	}
	.defect_nav_item p:hover{
		color: var(--color-black);
		border-bottom: 2px solid var(--color-gray);
		font: 700;
	}
	.defect_detail{
		position: relative;
		width: 100%;
	}
	.defect_title_container{
		position: relative;
		width: 100%;
		text-align: left;
	}
	.defect_detail_title_container{
		position: relative;
		width: 100%;
		text-align: left;
		display: flex;
		justify-content: space-between;
	}
	.defect_detail_title{
		font: 700 2.4rem 'Montserrat', sans-serif !important;
		margin: 0;
	}
	.defect_description{
		font: 700 1.2rem 'Montserrat', sans-serif;
	}
	.info_item{
		display: flex;
		flex-flow: column;
		justify-content: flex-start;
		align-items: flex-start;
		padding: 12px 0;
		font: 700 .8rem 'Montserrat';
	}
	.author_item{
		margin: 10px 0;
	}
	.author_icon{
		margin: 0 5px 0 0;
	}
	.author_info{
		display: flex;
		width: 100%;
		justify-content: space-between;
	}
	.author_info_chat{
		display: flex;
		width: 100%;
		justify-content: space-between;
		margin: 8px 0;
	}
	.author_chat_info{
		display: flex;
	}
	.author_content{
		display: flex;
		justify-content: space-between;
	}
	.author_name, .author_chat{
		font: 500 1rem 'Montserrat';
		text-align: left;
		/* white-space: nowrap; */
	}
	.detail_defect_status{
		display: flex;
		align-items: center;
		justify-content: flex-start;
	}
	.status_item_id{
		background: var(--color-gray);
		border-radius: 4px;
		color: var(--color-white);
		padding: 3px 4px;
		font-size: .8rem;
		margin: 18px 4px;
	}
	.detail_pagination{
		width: 100%;
		display: flex;
		justify-content: space-between;
	}
	.detail_pagination_mb{
		width: 100%;
		display: flex;
		justify-content: space-between;
		margin: 65px 0 0;
	}
	.btn_outline{
		max-width: 141px;
	}
	.defect_status_item{
		background: var(--status-color);
		border-radius: 4px;
		color: var(--color-white);
		padding: 3px 4px;
		font-size: .8rem;
		margin: 18px 4px;
	}
	.filter_title_mb{
		text-align: left;
		background: var(--color-red);
		color: white;
		padding: 8px 6px 12px;
		border-radius: 4px;
		flex: 0 0 48%;
		display: flex;
		justify-content: space-between;
	}
	.filter_title_mb::after{
		content: '';
		background: url(../assets/img/icons/arrow_Stroke.svg) no-repeat center left;
		width: 14px;
		display: flex;
		position: relative;
		transition: transform .2s ease-out;
	}
	.filter_title_mb.expand::after{
		content: '';
		transform: rotate(-180deg);
		transition: transform .2s ease-out;
		transition-delay: .15s;
	}
	.defect_filters{
		flex: 1 1 40%;
		max-width: 350px;
	}
	.defect_filters_mb{
		flex: 1 1 40%;
		/* max-width: 350px; */
		display: flex;
		flex-flow: column-reverse;
		overflow: hidden;
	}
	.filters_block_mb{
		margin: -345px 0;
		transition: all .4s ease-out;
	}
	.filters_block_mb.expand{
		margin: 0 !important;
		transition: all .4s ease-out;
	}
	.sorted_item{
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		padding: 0 16px;
	}
	.sorted_item_mb{
		display: flex;
		justify-content: center;
		align-items: center;
		flex-flow: column-reverse;
		/* width: 100%; */
		padding: 0;
		flex: 0 0 48%;
	}
	.input_group{
		display: flex;
		flex: 0 1 100%;
	}
	.grid-container {
		width: 95%;
		position: relative;
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(165px, 1fr));
		/* grid-template-rows: 1fr 1fr; */
		gap: 18px 8px;
	}
	.defect_card{
		display: flex;
		flex-flow: column;
		width: 100%;
		max-width: 170px;
		border: 1px solid var(--color-gray);
		border-radius: 4px;
		min-height: 200px;
		max-height: 200px;
		padding: 10px;
		place-self: center;
		transition: all 0.2s ease-in-out;
	}
	.defect_card_mb{
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
	slide-detail.router-link-exact-active.router-link-active{
		background: var(--background-color-prefooter) !important;
		border: 1px solid var(--status-color) !important;
		filter: drop-shadow(2px 3px 3px var(--color-gray-light)) !important;
		cursor: pointer;
	}
	.defect_card:hover{
		background: var(--background-color-prefooter);
		border: 1px solid var(--color-black);
		filter: drop-shadow(2px 3px 3px var(--color-gray-light));
		cursor: pointer;
	}
	.defect_card_detail{
		display: flex;
		flex-flow: column;
		width: 175px;
		/* max-width: 165px; */
		border-radius: 4px;
		padding: 0 5px;
		place-self: center;
	}
	.defect_card_detail_mb{
		display: flex;
		flex-flow: column;
		width: 100%;
		max-width: 165px;
		border-radius: 4px;
		padding: 0 5px;
		place-self: center;
	}
	.close_button{
		font-size: 1.8rem;
		line-height: .8;
	}
	.chat_area{
		padding: 20px 12px;
		margin: 22px 0;
		position: relative;
		width: 100%;
		height: 100%;
		max-height: 400px;
		overflow-y: auto;
	}
	.message_box{
		text-align: left;
		border-radius: 4px;
		border: 1px solid #ccc;
		padding: 6px;
		margin: 8px 0;
		width: 90%;
		display: flex;
		min-height: 35px;
	}
	.message_box:hover{
		background: var(--background-color-prefooter);
	}
	.doc_box{
		text-align: left;
		padding: 0 4px;
		margin: 8px 0;
		width: 100%;
		display: flex;
		justify-content: space-between;
	}
	.doc_images{
		display: flex;
	}
	.doc_icon{
		margin: 0 6px;
		cursor: pointer;
	}
	.message_box.replies_box{
		display: flex;
		align-self: flex-end;
	}
	.message_content{
		font: 500 .8rem 'Montserrat';
	}
	.incoming_container{
		position: relative;
		display: flex;
		flex-flow: column;
		margin: 20px 0;
	}
	.defect_filter_count{
		width: 100%;
		position: relative;
		padding: 0 16px;
	}
	.defect_filter_item{
		display: flex;
		flex-flow: row wrap;
		white-space: nowrap;
		width: 100%;
	}
	.defect_title{
		font: 700 1rem 'Montserrat', sans-serif;
		margin: 0 6px;
	}
	.defect_title > span{
		font: 400 1.2rem 'Montserrat', sans-serif;
		color: var(--color-gray);
	}
	.status_item{
		background: var(--status-color);
		border-radius: 4px;
		color: var(--color-white);
		padding: 0 4px;
		font-size: .8rem;
		margin: 4px 0;
	}
	.status_comments{
		display: flex;
		cursor: pointer;
	}
	.status_count{
		font: 400 .8rem 'Montserrat', sans-serif;
		margin: 0 4px 0 0;
	}
	.defect_image{
		position: relative;
	}
	.defect_image_detail{
		position: relative;
	}
	.defect_status{
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.defect_date{
		color: white;
		position: absolute;
		display: flex;
		font-size: .65rem;
		left: 4%;
		bottom: 4%;
	}
	.defect_color{
		background: var(--color-white);
		border-radius: 100%;
		position: absolute;
		right: 7px;
		bottom: 5px;
		width: 16px;
		height: 16px;
	}
	.card_image_detail{
		object-fit: cover;
		width: 100%;
		min-height: 130px;
		max-width: 170px;
		/* height: 100%; */
		max-height: 130px;
	}
	.card_image_detail_mb{
		object-fit: cover;
		width: 100%;
		min-height: 130px;
		max-width: 150px;
		/* height: 100%; */
	}
	.card_image{
		object-fit: cover;
		width: 100%;
		/* max-width: 140px; */
		max-height: 120px;
		min-width: 125px;
		min-height: 120px;
	}
	[type="checkbox"].filled-in:not(:checked) + span:not(.lever):after {
		height: 20px;
		width: 20px;
		background-color: transparent;
		border: 1px solid var(--color-gray);
		top: 0px;
		z-index: 0;
	}
	.custom_checkbox{
		font: 400 .8rem 'Montserrat' !important;
		display: flex !important;
		align-items: center
	}
</style>