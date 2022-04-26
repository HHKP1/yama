<template>
	<div>
		<div style="flex: 1 1 60%;">
				<div class="loader-container" v-if="!appsLoaded && $mq=='lg'" style="flex: 1 1 60%;width: 75%;height: 100%;position: absolute !important;display: flex;justify-content: flex-end;align-items: center;">
					<transition name="fade-loader">
							<vue-element-loading style="display:flex;justify-content: center;" :active="isActive" size="60" duration="1" spinner="spinner" color="#FF6700"/>
					</transition>
				</div>
				<div class="loader-container" v-if="!appsLoaded && $mq=='sm_album'" style="flex: 1 1 60%;width: 100%;height: 100%;position: absolute !important;display: flex;justify-content: flex-end;align-items: center;">
					<transition name="fade-loader">
							<vue-element-loading style="display:flex;justify-content: center;" :active="isActive" size="60" duration="1" spinner="spinner" color="#FF6700"/>
					</transition>
				</div>
				<div class="loader-container" v-if="!appsLoaded && $mq=='sm'" style="flex: 1 1 60%;width: 100%;height: 100%;position: absolute !important;display: flex;justify-content: flex-end;align-items: center;">
					<transition name="fade-loader">
							<vue-element-loading style="display:flex;justify-content: center;" :active="isActive" size="60" duration="1" spinner="spinner" color="#FF6700"/>
					</transition>
				</div>
			<mq-layout mq="md+">
			<transition name="fade-loader">
			<div class="defect_content_ht" v-if="appsLoaded">
								<router-link class="defect_links" to="/">
									<p>&lt; Назад до повного списку</p>
								</router-link>
								<DefectSortedGrid :defect="defect" v-if="$mq == 'lg'" />
								<div class="defect_nav_container">
									<div class="defect_nav">
										<div class="defect_nav_item_mb" @click="isCommentsMd = 1" :style="{'border-bottom': isCommentsMd === 1 ? '2px solid var(--color-red)' : ''}"><p>Детальна інформація</p></div>
										<div class="defect_nav_item_mb" @click="isCommentsMd = 2" :style="{'border-bottom': isCommentsMd === 2 ? '2px solid var(--color-red)' : ''}"><p>Історія дефекту</p></div>
										<div class="defect_nav_item_mb" @click="isCommentsMd = 3" :style="{'border-bottom': isCommentsMd === 3 ? '2px solid var(--color-red)' : ''}"><p>Коментарі</p></div>
										<div class="defect_nav_item_mb" @click="isCommentsMd = 4" :style="{'border-bottom': isCommentsMd === 4 ? '2px solid var(--color-red)' : ''}"><p>Документи</p></div>
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
												<h3 class="defect_detail_title" v-if="defect.defect_type=='sidewalk'">Тротуар</h3>
												<h3 class="defect_detail_title" v-if="defect.defect_type=='lighting'">Освітлення</h3>
												<h3 class="defect_detail_title" v-if="defect.defect_type=='hatch'">Люк</h3>
												<div class="shovel_status" style="width:0;" v-for="img in arrMarkers" :key="img.id">
													<img class="type_marker_df" loading="eager" v-if="img.name===defect.defect_type" style="margin:0 20px;" :src="img.icon" alt="Type marker">
												</div>
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
													<span v-if="defect.case_status.current.status=='fixed'">Виправлений</span>
												</div>
											</div>
										</div>
										<div class="defect_detail">
											<div class="detail_defect_info">
											<div class="defect_title_container">
												<p class="defect_description">Фото</p>
											</div>
											<carousel :paginationEnabled="false" :isHidden="false" ref="carousel" :perPage="2" :navigationEnabled="true" :navigationNextLabel="'&gt;'" :navigationPrevLabel="'&lt;'" class="VueCarousel_detail_photo">
												<slide v-for="(p, idx) in defect.photos" :key="idx" class="VueCarousel-slide_defect">
													<div class="defect_card_detail">
														<div class="my-container" style="width: 100%;display: flex;height: 100%;">
															<vue-element-loading :active="isActive" size="60" duration="1" spinner="spinner" color="#FF6700"/>
															<div class="defect_image_detail">
																<img class="card_image_detail" @click="openGallery(idx)" loading="eager" :src="p.url" alt="">
															</div>
														</div>
													</div>
												</slide>
											</carousel>
											<LightBox
												:media="media"
												ref="lightbox"
												:show-caption="true"
												:show-light-box="false"
											></LightBox>
											<div class="defect_detail_info">
												<div class="info_item">
													<p class="author_item">Дата розміщення</p>
													<div class="author_info">
														<div class="author_content">
															<img src="../assets/img/icons/bx_bx-time-five.svg" loading="eager" alt="User avatar" class="author_icon">
															<p class="date_placement">{{ defect.added | moment("DD.MM.YY в HH:mm") }}</p>
														</div>
													</div>
												</div>
											</div>
											<div class="defect_detail_info">
												<div class="info_item">
													<p class="author_item">Автор</p>
													<div class="author_info">
														<div class="author_content">
															<img src="../assets/img/icons/carbon_user-avatar.svg" loading="eager" alt="User avatar" class="author_icon">
															<p class="author_name">{{ defect.case_status.current.author.pseudo }}</p>
														</div>
														<button v-if="this.$API.loggedIn" @click="isCommentsMd = 3" class="author_chat underline-btn">Написати автору</button>
													</div>
												</div>
											</div>
											<div class="defect_detail_info">
												<div class="info_item">
													<p class="author_item">Адреса</p>
													<div class="author_info">
														<div class="author_content">
															<img src="../assets/img/icons/feather_map-pin.svg" loading="eager" alt="User avatar" class="author_icon">
															<p class="author_name">{{ defect.address }}</p>
														</div>
													</div>
												</div>
											</div>
											<!-- <div class="defect_share">
												<button class="btn outline_button_share">Надіслати в поліцію</button>
												<button class="btn custom_button_share">
													<img class="share_icon" src="../assets/img/icons/bx_bx-share-alt.svg" alt="" >
													Поділитись
												</button>
											</div> -->
											</div>
										</div>
									</div>
									<div class="defect_description_info_tab" :class="{openActive: isCommentsMd === 1}">
										<!-- <div class="progress_container"> -->
										<img class="map_image" :src="defect.map_url" alt="Map view">
										<!-- </div> -->
									</div>
									<div class="defect_description_info_tab" :class="{openActive: isCommentsMd === 2}">
										<div class="progress_container">
											<div class="progress_item" v-if="defect.added">
												<div class="progress_content reverse">
													<div class="progress_icons_block">
														<div class="progress_icons">
															<div class="progress_indicator">
																<img title="Дивитись документи" @click="isCommentsMd = 4" src="../assets/img/icons/mdi_camera-plus-outline.svg" class="progress_icon" alt="">
															</div>
															<img src="../assets/img/icons/arrow_down.svg" alt="">
														</div>
													</div>
													<div class="progress_info_block">
														<div class="progress_info_item">
															<img src="../assets/img/icons/bx_bx-time-five.svg" alt="User avatar" class="author_icon">
															<p class="author_chat message_date">{{ defect.added | moment("DD.MM.YY в HH:mm") }}</p>
														</div>
														<p class="progress_title">Дефект додано</p>
														<div class="doc_images">
														<a @click.prevent="openClaim(`${claim.url}`)"><img class="doc_icon" src="../assets/img/icons/carbon_document-pdf.svg" alt="document pdf"></a>
													</div>
													</div>
												</div>
											</div>
											<div class="progress_item" v-if="defect.comments && defect.comments.length>0">
												<div class="progress_content">
													<div class="progress_icons_block">
														<div class="progress_icons">
																<div class="progress_indicator">
																	<img title="Дивитись коментарі" style="cursor:pointer;" @click="isCommentsMd = 3" src="../assets/img/icons/bx_bx-comment-detail.svg" class="progress_icon" alt="">
																</div>
															<img src="../assets/img/icons/arrow_down.svg" alt="">
														</div>
													</div>
													<div class="progress_info_block" v-for="date in defect.comments" :key="date.id">
														<div class="progress_info_item_reverse">
															<img src="../assets/img/icons/bx_bx-time-five.svg" alt="User avatar" class="author_icon">
															<p class="author_chat message_date">{{ date.timestamp | moment("DD.MM.YY в HH:mm") }}</p>
														</div>
														<p v-if="!defect.comments" class="progress_title_reverse">Коментарі: <strong style="font: 700 1rem 'Montserrat-Bold';color:red;">0</strong></p>
														<p v-else class="progress_title_reverse">Коментарі: <strong style="font: 700 1rem 'Montserrat-Bold';color:red;">{{ defect.comments.length }}</strong></p>
														<!-- <p class="progress_title">Коментарі</p> -->
													</div>
												</div>
											</div>
											<div class="progress_item" v-for="(replay, index) in defect.replies" :key="index">
												<div class="progress_content" :class="{reverse: index % 2 === 0}" v-if="defect.replies.length>0">
													<div class="progress_icons_block">
													<div class="progress_icons">
														<div class="progress_indicator">
															<img title="Дивитись документи" @click="isCommentsMd = 4" src="../assets/img/icons/mdi_file-check-outline.svg" class="progress_icon" alt="">
														</div>
														<img src="../assets/img/icons/arrow_down.svg" alt="">
													</div>
													</div>
													<div class="progress_info_block">
													<div class="progress_info_item">
														<img src="../assets/img/icons/bx_bx-time-five.svg" alt="User avatar" class="author_icon">
														<p class="author_chat message_date">{{ replay.upload_timestamp | moment("DD.MM.YY в HH:mm") }}</p>
													</div>
													<p class="progress_title">Відповідь отримано</p>
													<div class="doc_images" v-for="(url, index) in replay.urls" :key="index">
														<a v-if="replay.urls.length>0" @click.prevent="openClaim(`${url}`)"><img class="doc_icon" src="../assets/img/icons/carbon_document-pdf.svg" alt="document pdf"></a>
													</div>
													</div>
												</div>
											</div>
											<!-- <div class="progress_item">
												<div class="progress_content reverse">
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
											<div class="progress_item">
												<div class="progress_content reverse">
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
													</div>
												</div>
											</div> -->
										</div>
									</div>
									<div class="defect_description_info_tab" :class="{openActive: isCommentsMd === 3}">
										<div class="defect_title_container">
											<p class="defect_description">Коментарі</p>
										</div>
										<div class="chat_input">
											<div v-if="!this.$API.loggedIn" class="chat_overlay">
												<p>Увійдіть щоб коментувати</p>
											</div>
											<div class="author_info_chat">
												<div class="author_content">
													<img src="../assets/img/icons/carbon_user-avatar.svg" alt="User avatar" class="author_icon">
													<p class="author_name" :title="$API.me.first_name+' '+$API.me.last_name+' '+$API.me.patronymic">{{ $API.me.first_name }}</p>
												</div>
											</div>
											<FormInput
												title=""
												label=""
												placeholder="залишити коментар"
												class="form-control chat_icon"
												v-model="comment"
											/>
										</div>
										<div class="chat_area" v-for="comment in defect.comments" :key="comment.id">
											<div class="incoming_container">
												<div class="author_content">
													<div class="author_chat_info">
														<img src="../assets/img/icons/carbon_user-avatar.svg" alt="User avatar" class="author_icon">
														<p class="author_name">{{ comment.author.pseudo }}</p>
													</div>
													<p class="author_chat message_date">{{ comment.timestamp | moment("DD.MM.YY в HH:mm") }}</p>
												</div>
												<div class="message_box">
													<p class="message_content">{{ comment.text }}</p>
												</div>
											</div>
										</div>
									</div>
									<div class="defect_description_info_tab" :class="{openActive: isCommentsMd === 4}">
										<div class="defect_title_container">
											<p class="defect_description">Документи</p>
										</div>
										<div class="chat_area" v-if="defect.claims">
											<div class="incoming_container" v-for="claim in defect.claims" :key="claim.id">
												<div class="author_content">
													<div class="author_chat_info">
														<img src="../assets/img/icons/bx_bx-time-five.svg" loading="eager" alt="User avatar" class="author_icon">
														<p v-if="claim.delivery" class="author_chat message_date">{{ claim.delivery.started | moment("DD.MM.YY в HH:mm") }}</p>
														<p v-else class="author_chat message_date">{{ claim.formed_ts | moment("DD.MM.YY в HH:mm") }}</p>
													</div>
												</div>
												<div class="doc_box">
													<p class="message_content">{{ claim.comment }}</p>
													<div class="doc_images">
														<a @click.prevent="openClaim(`${claim.url}`)"><img class="doc_icon" loading="eager" src="../assets/img/icons/carbon_document-pdf.svg" alt="document pdf"></a>
														<img class="doc_icon" title="Завантажити документ" loading="eager" src="../assets/img/icons/feather_download.svg" alt="feather download">
													</div>
												</div>
											</div>
											<div class="incoming_container" v-for="(replay, index) in defect.replies" :key="index">
												<div class="author_content">
													<div class="author_chat_info">
														<img src="../assets/img/icons/bx_bx-time-five.svg" loading="eager" alt="User avatar" class="author_icon">
														<p class="author_chat message_date">{{ replay.upload_timestamp | moment("DD.MM.YY в HH:mm") }}</p>
													</div>
												</div>
												<div class="doc_box">
													<p class="message_content">{{ replay.comment }}</p>
													<div class="doc_images" v-for="(url, index) in replay.urls" :key="index">
														<a v-if="replay.urls.length>0" @click.prevent="openClaim(`${url}`)"><img loading="eager" class="doc_icon" src="../assets/img/icons/carbon_document-pdf.svg" alt="document pdf"></a>
														<img class="doc_icon" loading="eager" title="Завантажити документ" src="../assets/img/icons/feather_download.svg" alt="feather download">
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
									<button class="btn outline_button btn_outline" v-if="dfCount>0" @click="prevDefect">&lt; Попередній</button>
									<button class="btn outline_button btn_outline" v-else disabled="true">&lt; Попередній</button>
									<button class="btn outline_button btn_outline" v-if="dfCount<dfCard.length-1" @click="nextDefect">Наступний &gt;</button>
									<button class="btn outline_button btn_outline" v-else disabled="true">Наступний &gt;</button>
								</div>
			</div>
			</transition>
			</mq-layout>
			<mq-layout mq="sm_album">
			<transition name="fade-loader">
			<div class="defect_content_ht" v-if="appsLoaded">
								<router-link class="defect_links" to="/">
									<p>&lt; Назад до повного списку</p>
								</router-link>
								<DefectSortedGrid :defect="defect" />
								<div class="defect_nav_container">
									<div class="defect_nav">
										<div class="defect_nav_item_sm_al" @click="isCommentsMd = 1" :style="{'border-bottom': isCommentsMd === 1 ? '2px solid var(--color-red)' : ''}"><p>Детальна інформація</p></div>
										<div class="defect_nav_item_sm_al" @click="isCommentsMd = 2" :style="{'border-bottom': isCommentsMd === 2 ? '2px solid var(--color-red)' : ''}"><p>Історія дефекту</p></div>
										<div class="defect_nav_item_sm_al" @click="isCommentsMd = 3" :style="{'border-bottom': isCommentsMd === 3 ? '2px solid var(--color-red)' : ''}"><p>Коментарі</p></div>
										<div class="defect_nav_item_sm_al" @click="isCommentsMd = 4" :style="{'border-bottom': isCommentsMd === 4 ? '2px solid var(--color-red)' : ''}"><p>Документи</p></div>
									</div>
								</div>
								<div class="defect_info_content_sm_al">
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
												<h3 class="defect_detail_title" v-if="defect.defect_type=='sidewalk'">Тротуар</h3>
												<h3 class="defect_detail_title" v-if="defect.defect_type=='lighting'">Освітлення</h3>
												<h3 class="defect_detail_title" v-if="defect.defect_type=='hatch'">Люк</h3>
												<div class="shovel_status" style="width:0;" v-for="img in arrMarkers" :key="img.id">
													<img class="type_marker_df" v-if="img.name===defect.defect_type" style="margin:0 20px;" :src="img.icon" alt="Type marker">
												</div>
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
													<span v-if="defect.case_status.current.status=='fixed'">Виправлений</span>
												</div>
											</div>
										</div>
										<div class="defect_detail">
											<div class="detail_defect_info">
											<div class="defect_title_container">
												<p class="defect_description">Фото</p>
											</div>
											<carousel :paginationEnabled="false" :isHidden="false" ref="carousel" :perPage="2" :navigationEnabled="true" :navigationNextLabel="'&gt;'" :navigationPrevLabel="'&lt;'" class="VueCarousel_detail_photo">
												<slide v-for="(p, idx) in defect.photos" :key="idx" class="VueCarousel-slide_defect">
													<div class="defect_card_detail">
														<div class="my-container" style="width: 100%;display: flex;height: 100%;">
															<vue-element-loading :active="isActive" size="60" duration="1" spinner="spinner" color="#FF6700"/>
															<div class="defect_image_detail">
																<img class="card_image_detail" @click="openGallery(idx)" :src="p.url" alt="">
															</div>
														</div>
													</div>
												</slide>
											</carousel>
											<LightBox
												:media="media"
												ref="lightbox"
												:show-caption="true"
												:show-light-box="false"
											></LightBox>
											<div class="defect_detail_info">
												<div class="info_item">
													<p class="author_item">Дата розміщення</p>
													<div class="author_info">
														<div class="author_content">
															<img src="../assets/img/icons/bx_bx-time-five.svg" alt="User avatar" class="author_icon">
															<p class="date_placement">{{ defect.added | moment("DD.MM.YY в HH:mm") }}</p>
														</div>
													</div>
												</div>
											</div>
											<div class="defect_detail_info">
												<div class="info_item">
													<p class="author_item">Автор</p>
													<div class="author_info">
														<div class="author_content">
															<img src="../assets/img/icons/carbon_user-avatar.svg" alt="User avatar" class="author_icon">
															<p class="author_name">{{ defect.case_status.current.author.pseudo }}</p>
														</div>
														<button v-if="this.$API.loggedIn" @click="isCommentsMd = 3" class="author_chat underline-btn">Написати автору</button>
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
											<!-- <div class="defect_share">
												<button class="btn outline_button_share">Надіслати в поліцію</button>
												<button class="btn custom_button_share">
													<img class="share_icon" src="../assets/img/icons/bx_bx-share-alt.svg" alt="" >
													Поділитись
												</button>
											</div> -->
											</div>
										</div>
									</div>
									<div class="defect_description_info_tab" :class="{openActive: isCommentsMd === 1}">
										<!-- <div class="progress_container"> -->
										<img class="map_image" :src="defect.map_url" alt="Map view">
										<!-- </div> -->
									</div>
									<div class="defect_description_info_tab" :class="{openActive: isCommentsMd === 2}">
										<div class="progress_container_sm_al">
											<div class="progress_item" v-if="defect.added">
												<div class="progress_content reverse">
													<div class="progress_icons_block">
														<div class="progress_icons">
															<div class="progress_indicator">
																<img title="Дивитись документи" loading="eager" @click="isCommentsMd = 4" src="../assets/img/icons/mdi_camera-plus-outline.svg" class="progress_icon" alt="">
															</div>
															<img src="../assets/img/icons/arrow_down.svg" loading="eager" alt="">
														</div>
													</div>
													<div class="progress_info_block">
														<div class="progress_info_item">
															<img src="../assets/img/icons/bx_bx-time-five.svg" loading="eager" alt="User avatar" class="author_icon">
															<p class="author_chat message_date">{{ defect.added | moment("DD.MM.YY в HH:mm") }}</p>
														</div>
														<p class="progress_title">Дефект додано</p>
														<div class="doc_images">
														<a @click.prevent="openClaim(`${claim.url}`)"><img class="doc_icon" loading="eager" src="../assets/img/icons/carbon_document-pdf.svg" alt="document pdf"></a>
													</div>
													</div>
												</div>
											</div>
											<div class="progress_item" v-if="defect.comments && defect.comments.length>0">
												<div class="progress_content">
													<div class="progress_icons_block">
														<div class="progress_icons">
																<div class="progress_indicator">
																	<img title="Дивитись коментарі" loading="eager" style="cursor:pointer;" @click="isCommentsMd = 3" src="../assets/img/icons/bx_bx-comment-detail.svg" class="progress_icon" alt="">
																</div>
															<img src="../assets/img/icons/arrow_down.svg" loading="eager" alt="">
														</div>
													</div>
													<div class="progress_info_block" v-for="date in defect.comments" :key="date.id">
														<div class="progress_info_item_reverse">
															<img src="../assets/img/icons/bx_bx-time-five.svg" loading="eager" alt="User avatar" class="author_icon">
															<p class="author_chat message_date">{{ date.timestamp | moment("DD.MM.YY в HH:mm") }}</p>
														</div>
														<p v-if="!defect.comments" class="progress_title_reverse">Коментарі: <strong style="font: 700 1rem 'Montserrat-Bold';color:red;">0</strong></p>
														<p v-else class="progress_title_reverse">Коментарі: <strong style="font: 700 1rem 'Montserrat-Bold';color:red;">{{ defect.comments.length }}</strong></p>
														<!-- <p class="progress_title">Коментарі</p> -->
													</div>
												</div>
											</div>
											<div class="progress_item" v-for="(replay, index) in defect.replies" :key="index">
												<div class="progress_content" :class="{reverse: index % 2 === 0}" v-if="defect.replies.length>0">
													<div class="progress_icons_block">
													<div class="progress_icons">
														<div class="progress_indicator">
															<img title="Дивитись документи" loading="eager" @click="isCommentsMd = 4" src="../assets/img/icons/mdi_file-check-outline.svg" class="progress_icon" alt="">
														</div>
														<img src="../assets/img/icons/arrow_down.svg" loading="eager" alt="">
													</div>
													</div>
													<div class="progress_info_block">
													<div class="progress_info_item">
														<img src="../assets/img/icons/bx_bx-time-five.svg" loading="eager" alt="User avatar" class="author_icon">
														<p class="author_chat message_date">{{ replay.upload_timestamp | moment("DD.MM.YY в HH:mm") }}</p>
													</div>
													<p class="progress_title">Відповідь отримано</p>
													<div class="doc_images" v-for="(url, index) in replay.urls" :key="index">
														<a v-if="replay.urls.length>0" @click.prevent="openClaim(`${url}`)"><img class="doc_icon" loading="eager" src="../assets/img/icons/carbon_document-pdf.svg" alt="document pdf"></a>
													</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div class="defect_description_info_tab" :class="{openActive: isCommentsMd === 3}">
										<div class="defect_title_container">
											<p class="defect_description">Коментарі</p>
										</div>
										<div class="chat_input">
											<div v-if="!this.$API.loggedIn" class="chat_overlay">
												<p>Увійдіть щоб коментувати</p>
											</div>
											<div class="author_info_chat">
												<div class="author_content">
													<img src="../assets/img/icons/carbon_user-avatar.svg" loading="eager" alt="User avatar" class="author_icon">
													<p class="author_name" :title="$API.me.first_name+' '+$API.me.last_name+' '+$API.me.patronymic">{{ $API.me.first_name }}</p>
												</div>
											</div>
											<FormInput
												title=""
												label=""
												placeholder="залишити коментар"
												class="form-control chat_icon"
												v-model="comment"
											/>
										</div>
										<div class="chat_area" v-for="comment in defect.comments" :key="comment.id">
											<div class="incoming_container">
												<div class="author_content">
													<div class="author_chat_info">
														<img src="../assets/img/icons/carbon_user-avatar.svg" loading="eager" alt="User avatar" class="author_icon">
														<p class="author_name">{{ comment.author.pseudo }}</p>
													</div>
													<p class="author_chat message_date">{{ comment.timestamp | moment("DD.MM.YY в HH:mm") }}</p>
												</div>
												<div class="message_box">
													<p class="message_content">{{ comment.text }}</p>
												</div>
											</div>
										</div>
									</div>
									<div class="defect_description_info_tab" :class="{openActive: isCommentsMd === 4}">
										<div class="defect_title_container">
											<p class="defect_description">Документи</p>
										</div>
										<div class="chat_area" v-if="defect.claims">
											<div class="incoming_container" v-for="claim in defect.claims" :key="claim.id">
												<div class="author_content">
													<div class="author_chat_info">
														<img src="../assets/img/icons/bx_bx-time-five.svg" loading="eager" alt="User avatar" class="author_icon">
														<p v-if="claim.delivery" class="author_chat message_date">{{ claim.delivery.started | moment("DD.MM.YY в HH:mm") }}</p>
														<p v-else class="author_chat message_date">{{ claim.formed_ts | moment("DD.MM.YY в HH:mm") }}</p>
													</div>
												</div>
												<div class="doc_box">
													<p class="message_content">{{ claim.comment }}</p>
													<div class="doc_images">
														<a @click.prevent="openClaim(`${claim.url}`)"><img class="doc_icon" loading="eager" src="../assets/img/icons/carbon_document-pdf.svg" alt="document pdf"></a>
														<img class="doc_icon" title="Завантажити документ" loading="eager" src="../assets/img/icons/feather_download.svg" alt="feather download">
													</div>
												</div>
											</div>
											<div class="incoming_container" v-for="(replay, index) in defect.replies" :key="index">
												<div class="author_content">
													<div class="author_chat_info">
														<img src="../assets/img/icons/bx_bx-time-five.svg" loading="eager" alt="User avatar" class="author_icon">
														<p class="author_chat message_date">{{ replay.upload_timestamp | moment("DD.MM.YY в HH:mm") }}</p>
													</div>
												</div>
												<div class="doc_box">
													<p class="message_content">{{ replay.comment }}</p>
													<div class="doc_images" v-for="(url, index) in replay.urls" :key="index">
														<a v-if="replay.urls.length>0" @click.prevent="openClaim(`${url}`)"><img class="doc_icon" loading="eager" src="../assets/img/icons/carbon_document-pdf.svg" alt="document pdf"></a>
														<img class="doc_icon" title="Завантажити документ" loading="eager" src="../assets/img/icons/feather_download.svg" alt="feather download">
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
									<button class="btn outline_button btn_outline" v-if="dfCount>0" @click="prevDefect">&lt; Попередній</button>
									<button class="btn outline_button btn_outline" v-else disabled="true">&lt; Попередній</button>
									<button class="btn outline_button btn_outline" v-if="dfCount<dfCard.length-1" @click="nextDefect">Наступний &gt;</button>
									<button class="btn outline_button btn_outline" v-else disabled="true">Наступний &gt;</button>
								</div>
			</div>
			</transition>
			</mq-layout>
			<mq-layout mq="sm">
			<div class="container_works_mb" v-if="appsLoaded">
						<div class="container_defects_mb">
							<!-- <div class="defect_content_mb" v-if="appsLoaded">
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
							</div> -->
							<div class="defect_content_mb" v-if="appsLoaded">
								<div class="defect_filter_count">
									<!-- <div class="defect_filter_item">
										<p class="defect_title">Загалом дефектів знайдено: <span>{{ dfCard.length }}</span></p>
									</div> -->
								</div>
								<!-- <div class="sorted_item">
									<p class="sorted_title">Показані останні дефекти зі змінами (за замовчуванням)</p>
									<FormSelect
										label=""
										placeholder=""
										:options="options.options_sort_by"
										v-model="sort_by"
										class="form-control_outline"
										type="search"
									/>
								</div> -->
								<!-- <div class="grid-container">
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
													<div class="status_comments" :title="'Кількість коментарів: ' + card.comments.length">
														<p class="status_count">{{ card.comments.length }}</p>
														<img src="../assets/img/icons/bx_bx-comment-detail.svg" alt="">
													</div>
												</div>
												<p class="defect_adress" :title="card.address">{{ card.address }}</p>
											</div>
										</div>
									</div>
								</div> -->
								<!-- <div class="card_pagination">
									<div class="pagination_control">
										<ul class="pagination">
											<li class="disabled"><a href="#!">F</a></li>
											<li class="active"><a href="#!">1</a></li>
											<li class="waves-effect"><a href="#!">2</a></li>
											<li class="waves-effect"><a href="#!">3</a></li>
											<li class="waves-effect"><a href="#!"> > </a></li>
										</ul>
									</div>
								</div> -->
							</div>
							<div class="defect_content_mb">
								<router-link class="defect_links_mb" to="/">
									<p>&lt; Назад до повного списку</p>
								</router-link>
								<!-- <vue-element-loading :active="isActive" size="60" duration="1" spinner="spinner" color="#FF6700"/> -->
								<!-- <carousel :navigationEnabled="true" :paginationEnabled="false" :adjustableHeight="true" :mouseDrag="true" :perPage="2" :paginationColor="'#6C757D'" :navigationNextLabel="'&gt;'" :navigationPrevLabel="'&lt;'">
									<slide v-for='card in dfCard' :key='card.id'>
										<div class="defect_card_mb">
											<router-link :to="'/'+card.id">
												<div class="my-container" style="width: 100%;display: block;height: 100%;" @click="listClick($event, '/'+card.id )">
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
													</div>
													<p class="defect_adress" :title="card.address">{{ card.address }}</p>
												</div>
												</div>
											</router-link>
										</div>
									</slide>
								</carousel> -->
								<DefectSortedGrid :defect="defect" v-if="$mq == 'sm'" />
								<div class="defect_nav_container">
									<div class="defect_nav_mb">
										<div class="defect_nav_item_mb" @click="isComments = 1" :style="{'border-bottom': isComments === 1 ? '2px solid var(--color-red)' : ''}"><p>Історія звернення</p></div>
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
													<span v-if="defect.case_status.current.status=='fixed'">Виправлений</span>
												</div>
											</div>
										</div>
										<div class="defect_detail">
											<div class="detail_defect_info">
											<div class="defect_title_container">
												<p class="defect_description">Фото</p>
											</div>
											<carousel ref="carousel" :paginationEnabled="false" :perPage="2" :navigationEnabled="true" :navigationNextLabel="'&gt;'" :navigationPrevLabel="'&lt;'" class="VueCarousel_detail_photo">
												<slide v-for="(p, idx) in defect.photos" :key="idx" class="VueCarousel-slide_defect">
													<div class="defect_card_detail_mb">
														<div class="my-container" style="width: 100%;display: flex;height: 100%;">
															<vue-element-loading :active="isActive" size="60" duration="1" spinner="spinner" color="#FF6700"/>
															<div class="defect_image_detail_mb">
																<img class="card_image_detail" @click="openGallery(idx)" :src="p.url" alt="">
															</div>
														</div>
													</div>
												</slide>
											</carousel>
											<LightBox
												:media="media"
												ref="lightbox"
												:show-caption="true"
												:show-light-box="false"
											></LightBox>
											<div class="defect_detail_info">
												<div class="info_item">
													<p class="author_item">Автор</p>
													<div class="author_info">
														<div class="author_content">
															<img src="../assets/img/icons/carbon_user-avatar.svg" loading="eager" alt="User avatar" class="author_icon">
															<p class="author_name">{{ defect.case_status.current.author.pseudo }}</p>
														</div>
														<button v-if="this.$API.loggedIn" @click="isComments = 2" class="author_chat underline-btn">Написати автору</button>
													</div>
												</div>
											</div>
											<div class="defect_detail_info">
												<div class="info_item">
													<p class="author_item">Адреса</p>
													<div class="author_info">
														<div class="author_content">
															<img src="../assets/img/icons/feather_map-pin.svg" loading="eager" alt="User avatar" class="author_icon">
															<p class="author_name">{{ defect.address }}</p>
														</div>
													</div>
												</div>
											</div>
											<!-- <div class="defect_detail_info" v-for="comm in defect.comments" :key="comm.id">
												<div class="info_item">
													<p class="author_item">Опис</p>
													<div class="author_info">
														<div class="author_content">
															<p class="author_name">{{ comm.text }}</p>
														</div>
													</div>
												</div>
											</div> -->
											<!-- <div class="defect_share_mb">
												<button class="btn outline_button_share_mb">Надіслати в поліцію</button>
												<button class="btn custom_button_share_mb">
													<img class="share_icon" src="../assets/img/icons/bx_bx-share-alt.svg" alt="" >
													Поділитись
												</button>
											</div> -->
											</div>
										</div>
									</div>
									<div class="defect_description_info_mb" :class="{open: isComments === 1}">
										<div class="defect_detail_title_container">
											<p class="defect_description">Історія звернення</p>
											<span class="close_button" @click="toggleClass()"></span>
										</div>
										<div class="progress_container_mb">
											<div class="progress_item" v-if="defect.added">
												<div class="progress_content reverse">
													<div class="progress_icons_block">
														<div class="progress_icons">
															<div class="progress_indicator">
																<img title="Дивитись документи" @click="isComments = 3" src="../assets/img/icons/mdi_camera-plus-outline.svg" class="progress_icon" alt="">
															</div>
															<img src="../assets/img/icons/arrow_down.svg" alt="">
														</div>
													</div>
													<div class="progress_info_block">
														<div class="progress_info_item">
															<img src="../assets/img/icons/bx_bx-time-five.svg" alt="User avatar" class="author_icon">
															<p class="author_chat message_date">{{ defect.added | moment("DD.MM.YY в HH:mm") }}</p>
														</div>
														<p class="progress_title">Дефект додано</p>
														<div class="doc_images" v-for="(claim, index) in defect.claims" :key="index">
															<a v-if="defect.claims.length>0" @click.prevent="openClaim(`${claim.url}`)"><img class="doc_icon" src="../assets/img/icons/carbon_document-pdf.svg" alt="document pdf"></a>
														</div>
													</div>
												</div>
											</div>
											<div class="progress_item" v-if="defect.comments && defect.comments.length>0">
												<div class="progress_content">
													<div class="progress_icons_block">
														<div class="progress_icons">
																<div class="progress_indicator">
																	<img title="Дивитись коментарі" style="cursor:pointer;" @click="isComments = 2" src="../assets/img/icons/bx_bx-comment-detail.svg" class="progress_icon" alt="">
																</div>
															<img src="../assets/img/icons/arrow_down.svg" alt="">
														</div>
													</div>
													<div class="progress_info_block" v-for="date in defect.comments" :key="date.id">
														<div class="progress_info_item_reverse">
															<img src="../assets/img/icons/bx_bx-time-five.svg" alt="User avatar" class="author_icon">
															<p class="author_chat message_date">{{ date.timestamp | moment("DD.MM.YY в HH:mm") }}</p>
														</div>
														<p v-if="!defect.comments" class="progress_title_reverse">Коментарі: <strong style="font: 700 1rem 'Montserrat-Bold';color:red;">0</strong></p>
														<p v-else class="progress_title_reverse">Коментарі: <strong style="font: 700 1rem 'Montserrat-Bold';color:red;">{{ defect.comments.length }}</strong></p>
														<!-- <p class="progress_title">Коментарі</p> -->
													</div>
												</div>
											</div>
											<div class="progress_item" v-for="(replay, index) in defect.replies" :key="index">
												<div class="progress_content" :class="{reverse: index % 2 === 0}" v-if="defect.replies.length>0">
													<div class="progress_icons_block">
													<div class="progress_icons">
														<div class="progress_indicator">
															<img title="Дивитись документи" @click="isComments = 3" src="../assets/img/icons/mdi_file-check-outline.svg" class="progress_icon" alt="">
														</div>
														<img src="../assets/img/icons/arrow_down.svg" alt="">
													</div>
													</div>
													<div class="progress_info_block">
													<div class="progress_info_item">
														<img src="../assets/img/icons/bx_bx-time-five.svg" alt="User avatar" class="author_icon">
														<p class="author_chat message_date">{{ replay.upload_timestamp | moment("DD.MM.YY в HH:mm") }}</p>
													</div>
													<p class="progress_title">Відповідь отримано</p>
													<div class="doc_images" v-for="(url, index) in replay.urls" :key="index">
														<a v-if="replay.urls.length>0" @click.prevent="openClaim(`${url}`)"><img class="doc_icon" src="../assets/img/icons/carbon_document-pdf.svg" alt="document pdf"></a>
													</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div class="defect_description_info_mb" :class="{open: isComments === 2}" @click="toggleClass()">
										<div class="defect_detail_title_container">
											<p class="defect_description">Коментарі</p>
											<span class="close_button" @click="toggleClass()"></span>
										</div>
										<div class="chat_input">
											<div v-if="!this.$API.loggedIn" class="chat_overlay">
												<p>Увійдіть щоб коментувати</p>
											</div>
											<div class="author_info_chat">
												<div class="author_content">
													<img src="../assets/img/icons/carbon_user-avatar.svg" alt="User avatar" class="author_icon">
													<p class="author_name" :title="$API.me.first_name+' '+$API.me.last_name+' '+$API.me.patronymic">{{ $API.me.first_name }}</p>

												</div>
											</div>
											<FormInput
												title=""
												label=""
												placeholder="залишити коментар"
												class="form-control chat_icon"
												v-model="comment"
											/>
										</div>
										<div class="chat_area" v-for="comment in defect.comments" :key="comment.id">
											<div class="incoming_container">
												<div class="author_content">
													<div class="author_chat_info">
														<img src="../assets/img/icons/carbon_user-avatar.svg" alt="User avatar" class="author_icon">
														<p class="author_name">{{ comment.author.pseudo }}</p>
													</div>
													<p class="author_chat message_date">{{ comment.timestamp | moment("DD.MM.YY в HH:mm") }}</p>
												</div>
												<div class="message_box">
													<p class="message_content">{{ comment.text }}</p>
												</div>
											</div>
										</div>
									</div>
									<div class="defect_description_info_mb" v-if="defect.claims" :class="{open: isComments === 3}" @click="toggleClass()">
										<div class="defect_detail_title_container">
											<p class="defect_description">Документи</p>
											<span class="close_button" @click="toggleClass()"></span>
										</div>
										<div class="chat_area">
											<div class="incoming_container" v-for="(claim, index) in defect.claims" :key="index">
												<div class="author_content">
													<div class="author_chat_info">
														<img src="../assets/img/icons/bx_bx-time-five.svg" alt="User avatar" class="author_icon">
														<p v-if="claim.delivery" class="author_chat message_date">{{ claim.delivery.started | moment("DD.MM.YY в HH:mm") }}</p>
														<p v-else class="author_chat message_date">{{ claim.formed_ts | moment("DD.MM.YY в HH:mm") }}</p>
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
											<div class="incoming_container" v-for="(replay, index) in defect.replies" :key="index">
												<div class="author_content">
													<div class="author_chat_info">
														<img src="../assets/img/icons/bx_bx-time-five.svg" alt="User avatar" class="author_icon">
														<p class="author_chat message_date">{{ replay.upload_timestamp | moment("DD.MM.YY в HH:mm") }}</p>
													</div>
												</div>
												<div class="doc_box">
													<p class="message_content">{{ replay.comment }}</p>
													<div class="doc_images" v-for="(url, index) in replay.urls" :key="index">
														<a v-if="replay.urls.length>0" @click.prevent="openClaim(`${url}`)"><img class="doc_icon" src="../assets/img/icons/carbon_document-pdf.svg" alt="document pdf"></a>
														<img class="doc_icon" title="Завантажити документ" src="../assets/img/icons/feather_download.svg" alt="feather download">
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="detail_pagination_mb">
									<button class="btn outline_button btn_outline" v-if="dfCount>0" @click="prevDefect">&lt; Попередній</button>
									<button class="btn outline_button btn_outline" v-else disabled="true">&lt; Попередній</button>
									<button class="btn outline_button btn_outline" v-if="dfCount<dfCard.length-1" @click="nextDefect">Наступний &gt;</button>
									<button class="btn outline_button btn_outline" v-else disabled="true">Наступний &gt;</button>
								</div>
							</div>
						</div>
			</div>
			</mq-layout>
		</div>
	</div>
</template>

<script>
// import Vue from 'vue';
import { Carousel, Slide } from 'vue-carousel';
import VueElementLoading from 'vue-element-loading';
import DefectSortedGrid from '../components/DefectSortedGrid';
import customMarkers from '../assets/js/typeIcons';
import LightBox from 'vue-image-lightbox/src/components/LightBox';
// import Pagination from './components/Pagination.vue';

// import defectCards from './mock_data';

export default {
	name: 'Defect',
	components: {
		VueElementLoading,
		Carousel,
		Slide,
		DefectSortedGrid,
		LightBox
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
			appsLoaded: false,
			defect: {},
			ogImage: '',
			dfCount: 0,
			id: '',
			me: {},
			markers: [],
			sort_by: '',
			pendingUpdate: null,
		}
	},
	metaInfo() {
		return {
			title: "Defect",
			meta: [
				{ name: 'description', content: this.defect.address },
				{ property: 'og:description', content: 'УкрЯма – це інструмент громадського контролю за утриманням доріг' },
				{ property: 'og:title', content: "УкрЯма – це інструмент громадського контролю за утриманням доріг" },
				{ property: 'og:site_name', content: 'УкрЯма' },
				{ property: 'fb:app_id', content: 366159005244899 },
				{ property: 'og:url', content: 'https://tala.cloudi.es/routes/9373315876/front/#/' },
				{ property: 'og:image', content: this.ogImage },
				{ property: 'og:type', content: 'website' },
				{ name: 'robots', content: 'index,follow' }
			]
		}
	},
	async created() {
		this.$eventBus.$on('getMe', async e => {
			// console.log(e);
			// if(!e) return;
			if(e) {
				this.me = await e;
			}
		})
		this.$API2.loadDefects(true)
		this.id = this.$route.params.id;
		this.loadDefect(this.id);
	},
	mounted() {
		this.$API.title = "Дефект";
		if(!this.isActive)
			this.isActive=true;
		this.$eventBus.$on('setMe', async e => {
			// console.log(e);
			// if(!e) return;
			if(e) {
				this.me = await e;
			}
		})
		this.$eventBus.$on('cardIdx', async e => {
			// console.log(e);
			// if(!e) return;
			// if(e) {
			// 	this.me = await e;
			// }
		})
		// const viewportMeta = document.createElement('meta');
		// const $APP_ID = '366159005244899';
	},
	beforeUpdate(){
		setTimeout(() => {
			const doc = document.querySelectorAll("div[class='VueCarousel-inner']");
			doc.forEach(d => {
				d.style.visibility = 'visible';
				d.style.flexBasis = 159 + 'px';
			})
		}, 10)
	},
	methods: {
		openClaim(url){
			window.open(url, '_blank');
		},
		reducer: (acc, curr) => acc + curr,
		toggleClass(event){
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
			if(!this.isActive)
				this.isActive=true;
			try{
				let result = await this.$API.apiGET("/defect?id="+id);
				this.defect=result;
				this.$API2.queryCheck.push(this.$route.path);
				this.$API2.queryStr=this.$route.path;
				// console.log(this.$API2.queryStr);
				this.ogImage=this.defect.photos[0].url;
				this.isActive=false;
				this.appsLoaded=true;
			}catch(e){
				console.log(e);
				this.isActive=false;
			}
		},
		nextDefect(){
			// this.dfCount=this.dfCard.idx;
			this.dfCount++;
			let j = this.dfCount;
			// console.log(this.dfCard[j].idx);
			let id = this.dfCard[j].id;
			// console.log(this.$route.params.id);
			this.id=id;
			this.loadDefect(this.id);
		},
		prevDefect(){
			this.dfCount--;
			let j = this.dfCount;
			this.dfCount=this.dfCard[j].idx;
			let id = this.dfCard[j].id;
			this.$route.params.id=id;
			this.loadDefect(id);
		},
		openGallery(index) {
			this.$refs.lightbox.showImage(index)
		}
	},
	computed: {
		//API Data
		dfCard(){
			return this.$API2.orgInfo.map((card, index) => {
				return {
					idx: index,
					id: card.id,
					address: card.address,
					photo: card.photos,
					status: card.case_status.current.status,
					comments: card.comments,
					// author: card.comments[0].author.pseudo,
					defect_type: card.defect_type,
					// region_id: card.photos[0].region_id,
					map: card.map_url
				}
			})
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
		listLeft(){
			return {
				'display': 'flex',
				'justify-content': 'flex-start',
				'max-width': '316px'
			}
		},
		listRight(){
			return {
				'display': 'flex',
				'justify-content': 'flex-end',
				'max-width': '316px'
			}
		},
		media(){
			return this.defect.photos.map(i => {
				return {
					thumb: i.url,
					src: i.url,
				}
			})
		}
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
		// latLong: {
		// 	handler: function(val, oldVal) {
		// 		this.loadMarkers();
		// 	},
		// 	deep: true
		// }
	},
	beforeDestroy() {
		this.$eventBus.$off('dfCards');
		this.$eventBus.$off('getMe');
		this.$eventBus.$off('cardIdx');
		this.$API2.queryCheck=[];
	}
}
</script>

<style>

</style>