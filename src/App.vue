<template>
	<div id="app">
		<main :class="{open: isOpen}">
			<mq-layout mq="md+">
				<div id="nav">
					<a class="logo_link" href="/">
						<img id="logo" src="./assets/img/logo_ukr_yama.png" alt="Logo">
					</a>
					<div class='nav_links' v-for="(item, index) in this.navItems" :key="item.name" :data-index="index">
						<router-link :to='{path: item.path}'>{{ item.text }}</router-link>
					</div>
					<div class="nav_btn_block">
						<FormInput
						title=""
						label=""
						placeholder="Пошук за адресою або номером заяви"
						class="form-control"
						v-model="search"
						type="search"
						/>
						<button class="btn custom_button_nav">Додати дефект</button>
					</div>
				</div>
			</mq-layout>
			<mq-layout mq="sm">
				<div id="nav_mb">
					<div class="logo_container">
						<a class="logo_link" href="/">
							<img id="logo" src="./assets/img/icons/Logo_mobile.svg" alt="Logo">
						</a>
						<div class="nav_button" @click="isOpen = !isOpen">
							<svg  @click="openMenu" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
								<g id="uil_subject" transform="translate(-648 -893)">
									<rect id="Rectangle_4" data-name="Rectangle 4" width="24" height="24" transform="translate(648 893)" fill="none"/>
									<line ref="Line_1" id="Line_1" data-name="Line 1" x2="15" transform="translate(655.5 898.5)" fill="none" stroke="#e3433d" stroke-linecap="round" stroke-width="3"/>
									<line ref="Line_3" id="Line_3" data-name="Line 3" x2="21" transform="translate(649.5 904.5)" fill="none" stroke="#e3433d" stroke-linecap="round" stroke-width="3"/>
									<line ref="Line_2" id="Line_2" data-name="Line 2" x2="12" transform="translate(658.5 910.5)" fill="none" stroke="#e3433d" stroke-linecap="round" stroke-width="3"/>
								</g>
							</svg>
						</div>
					</div>
					<div class="nav_links-container" :class="{open: isOpen}">
						<div class='nav_links' v-for="(item, index) in this.navItems" :key="item.name" :data-index="index">
							<router-link :to='{path: item.path}'>{{ item.text }}</router-link>
						</div>
					</div>
				</div>
			</mq-layout>
			<section class="main">
				<mq-layout mq="md+">
					<div class="header">
						<div class="head-container">
							<div class="main-hero head-hero">
								<div class="hero-title">
									<p class="hero-item"><strong
											style="font:700 24px 'Montserrat';color:var(--button-default)">УкрЯма</strong> –
										це інструмент громадського контролю за утриманням доріг, який ефективно працює та
										розвивається</p>
								</div>
								<button class="btn custom_button hero-btn">Додати дефект</button>
							</div>
							<div class="main-hero">
								<div class="hero-title">
									<div class="hero-container">
										<div class="hero-content">
											<div class="hero-item">
												<p class="p-text">Ваш код<br />для входу:</p>
											</div>
											<div class="hero-item">
												<p class="p-text code">2334</p>
											</div>
											<div class="hero-item">
												<div class="help-tips"
													style="border-radius:100%;background: var(--background-color-normal)" title="Є питання?">
												</div>
											</div>
										</div>
										<div class="hero-content">
											<div class="hero-content_block">
												<div class="hero-item icon">
												<img src="./assets/img/icons/uil_facebook-messenger-alt.svg"
													alt="Facebook messenger">
												</div>
												<div class="hero-item_message" title="QR Code для входу">
													<p class="message_title">UkrYama_bot</p>
													<div class="message_content"><img src="./assets/img/icons/qr_message.svg" alt="QR Code" class="qr_message"></div>
												</div>
											</div>
											<div class="hero-content_block">
												<div class="hero-item icon">
													<img src="./assets/img/icons/uil_telegram-alt.svg" alt="Telegram messenger">
												</div>
												<div class="hero-item_message" title="QR Code для входу">
													<p class="message_title">UkrYama_bot</p>
													<div class="message_content"><img src="./assets/img/icons/qr_message.svg" alt="QR Code" class="qr_message"></div>
												</div>
											</div>
											<div class="hero-content_block">
												<div class="hero-item icon">
													<img src="./assets/img/icons/la_viber.svg" alt="Viber messenger">
												</div>
												<div class="hero-item_message" title="QR Code для входу">
													<p class="message_title">UkrYama_bot</p>
													<div class="message_content"><img src="./assets/img/icons/qr_message.svg" alt="QR Code" class="qr_message"></div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</mq-layout>
				<mq-layout mq="sm">
					<div class="header_mb">
						<div class="head-container_mb">
							<div class="main-hero head-hero_mb">
								<div class="hero-title_mb">
									<p class="hero-item"><strong
											style="font:700 24px 'Montserrat';color:var(--button-default)">УкрЯма</strong> –
										це інструмент громадського контролю за утриманням доріг, який ефективно працює та
										розвивається</p>
								</div>
								<button class="btn custom_button hero-btn_mb">Додати дефект</button>
							</div>
							<div class="main-hero">
								<div class="hero-title">
									<div class="hero-container_mb">
										<div class="hero-content">
											<div class="hero-item">
												<p class="p-text">Для входу надішліть цей<br/>код боту у відповідному месенджері</p>
											</div>
											<div class="hero-item">
												<p class="p-text code">2334</p>
											</div>
										</div>
										<div class="hero-content">
											<div class="icon_container_mb">
												<div class="hero-item icon">
													<img src="./assets/img/icons/uil_facebook-messenger-alt.svg"
														alt="Facebook messenger">
												</div>
												<p class="chat_icon_description_mb">
													@UkrYama
												</p>
												<p class="chat_icon_description_mb">
													Facebook
												</p>
											</div>
											<div class="icon_container_mb">
												<div class="hero-item icon">
													<img src="./assets/img/icons/uil_telegram-alt.svg" alt="Telegram messenger">
												</div>
												<p class="chat_icon_description_mb">
													@UkrYamaBot
												</p>
												<p class="chat_icon_description_mb">
													Telegram
												</p>
											</div>
											<div class="icon_container_mb">
												<div class="hero-item icon">
													<img src="./assets/img/icons/la_viber.svg" alt="Viber messenger">
												</div>
												<p class="chat_icon_description_mb">
													@UkrYama
												</p>
												<p class="chat_icon_description_mb">
													Viber
												</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</mq-layout>
				<mq-layout mq="md+">
					<div class="main-counter">
						<div class="counter-item">
							<span class="counter-check">2500</span>
							<p class="counter-title">зареєстровано в УкрЯмі</p>
						</div>
						<span class="counter-separator"></span>
						<div class="counter-item">
							<span class="counter-check">500</span>
							<p class="counter-title">надіслано в поліцію</p>
						</div>
						<span class="counter-separator"></span>
						<div class="counter-item">
							<span class="counter-check">25700</span>
							<p class="counter-title">виправлено</p>
						</div>
					</div>
					<div class="statistc-btn">
						<button class="underline-btn">Дивитись детальну статистику</button>
					</div>
				</mq-layout>
				<mq-layout mq="sm">
					<div class="main-counter_mb">
						<div class="counter-item_mb">
							<span class="counter-check">2500</span>
							<p class="counter-title">зареєстровано в УкрЯмі</p>
						</div>
						<div class="counter-item_mb">
							<span class="counter-check">500</span>
							<p class="counter-title">надіслано в поліцію</p>
						</div>
						<div class="counter-item_mb">
							<span class="counter-check">25700</span>
							<p class="counter-title">виправлено</p>
						</div>
					</div>
				</mq-layout>
			</section>
			<section class="how_it_works">
				<mq-layout mq="md+">
					<div class="container_works">
						<h2 class="section_title">Як це працює</h2>
						<div class="container_steps">
							<div class="step_item">
								<div class="step_icon">
									<img src="./assets/img/icons/mdi_camera-plus-outline.svg" title="Додати дефект" alt="Picture of deffect">
								</div>
								<p class="step_description">Додати дефект</p>
								<div class="arrow_forward">
								<img src="./assets/img/icons/Line_45.svg" alt="">
							</div>
							</div>
							<div class="step_item">
								<div class="step_icon">
									<img src="./assets/img/icons/mdi_file-document-edit-outline.svg" alt="">
								</div>
								<p class="step_description">Надіслати заяву в поліцію<br/> та чекати відповідь</p>
							</div>
							<div class="step_item_col">
								<div class="step_item">
									<div class="step_icon">
										<img src="./assets/img/icons/mdi_file-check-outline.svg" alt="">
									</div>
									<p class="step_description">Отримати відповідь</p>
								</div>
								<div class="arrow_fork">
									<img src="./assets/img/icons/fork_arrow.svg" alt="">
								</div>
								<div class="step_item">
									<div class="step_icon">
										<img src="./assets/img/icons/mdi_account-multiple-remove-outline.svg" alt="">
									</div>
									<p class="step_description">Немає відповіді</p>
								</div>
							</div>
							<div class="step_item">
								<div class="arrow_fork_up">
									<img src="./assets/img/icons/fork_arrow_up.svg" alt="">
								</div>
								<div class="step_icon">
									<img src="./assets/img/icons/bx_bx-traffic-cone.svg" alt="">
								</div>
								<p class="step_description">Ремонт ділянки</p>
								<div class="arrow_fork_down">
									<img src="./assets/img/icons/Line_50.svg" alt="">
								</div>
							</div>
							<div class="step_item_col">
								<div class="step_item">
									<div class="step_icon">
										<img src="./assets/img/icons/mdi_alert-octagon-outline.svg" alt="">
									</div>
									<p class="step_description">Відмова</p>
								</div>
								<div class="arrow_down">
									<img src="./assets/img/icons/arrow_down.svg" alt="">
								</div>
								<div class="step_item">
									<div class="step_icon">
										<img src="./assets/img/icons/mdi_alert_sign-octagon-outline.svg" alt="">
									</div>
									<p class="step_description">Скарга до вищестоячої<br/> інстанції</p>
								</div>
							</div>
						</div>
					</div>
				</mq-layout>
				<mq-layout mq="sm">
					<div class="container_works">
						<h2 class="section_title">Як це працює</h2>
						<div class="container_steps_mb">
							<div class="step_item_mb">
								<div class="step_icon">
									<img src="./assets/img/icons/mdi_camera-plus-outline.svg" title="Додати дефект" alt="Picture of deffect">
								</div>
								<p class="step_description_mb">Додати дефект</p>
							</div>
							<div class="arrow_forward_mb">
								<img src="./assets/img/icons/Line_45.svg" alt="">
							</div>
							<div class="step_item_mb">
								<div class="step_icon">
									<img src="./assets/img/icons/mdi_file-document-edit-outline.svg" alt="">
								</div>
								<p class="step_description_mb">Надіслати заяву в поліцію<br/> та чекати відповідь</p>
							</div>
							<div class="arrow_fork_mb">
								<img src="./assets/img/icons/fork_arrow.svg" alt="">
							</div>
							<div class="step_item_col_mb">
								<div class="step_item_mb">
									<div class="step_icon">
										<img src="./assets/img/icons/mdi_file-check-outline.svg" alt="">
									</div>
									<p class="step_description_mb">Отримати відповідь</p>
								</div>
								<div class="step_item_mb">
									<div class="step_icon">
										<img src="./assets/img/icons/mdi_account-multiple-remove-outline.svg" alt="">
									</div>
									<p class="step_description_mb">Немає відповіді</p>
								</div>
							</div>
							<div class="arrow_fork_up_mb">
								<img src="./assets/img/icons/fork_arrow_up.svg" alt="">
							</div>
							<div class="step_item_mb">
								<div class="step_icon">
									<img src="./assets/img/icons/bx_bx-traffic-cone.svg" alt="">
								</div>
								<p class="step_description_mb">Ремонт ділянки</p>
							</div>
							<div class="arrow_fork_down_mb">
								<img src="./assets/img/icons/Line_50.svg" alt="">
							</div>
							<div class="step_item_col_mb">
								<div class="step_item_mb_reject">
									<div class="step_icon">
										<img src="./assets/img/icons/mdi_alert-octagon-outline.svg" alt="">
									</div>
									<p class="step_description_mb">Відмова</p>
								</div>
								<div class="arrow_down_mb">
									<img src="./assets/img/icons/arrow_down_mb.svg" alt="">
								</div>
								<div class="step_item_mb">
									<div class="step_icon">
										<img src="./assets/img/icons/mdi_alert_sign-octagon-outline.svg" alt="">
									</div>
									<p class="step_description_mb">Скарга до вищестоячої<br/> інстанції</p>
								</div>
							</div>
						</div>
					</div>
				</mq-layout>
			</section>
			<section class="collection_defects">
				<mq-layout mq="md+">
					<div class="container_works">
						<h2 class="section_title">Колекція дефектів</h2>
						<div class="container_defects">
							<div class="defect_filters">
								<p class="filter_title" style="text-align:left;">фільтри</p>
								<div class="filters_block">
									<FormInput
										title=""
										label="Адреса"
										prefix=""
										placeholder="Пошук дефектів за адресою"
										v-model="search_by_adress"
										class="form-control"
									/>
									<FormInput
										title=""
										label="Дата розміщення"
										placeholder="Дата розміщення дефекту"
										v-model="search_by_date"
										class="form-control"
										type="date"
									/>
									<FormSelect
										label="Тип дефекту"
										placeholder="Тип дефекту"
										:options="options.options_filter_by_def_type"
										v-model="search_by_type"
										class="form-control"
									/>
									<FormSelect
										label="Розташування"
										placeholder="Місце розташування дефекту"
										:options="options.options_filter_by_def_location"
										v-model="search_by_location_place"
										class="form-control"
									/>
									<FormSelect
										label="Статус"
										placeholder="Статус дефекту"
										:options="options.options_filter_by_def_status"
										v-model="search_by_status"
										class="form-control"
									/>
									<div class="input_group">
										<p>
											<label for="customcheck">
												<input type="checkbox" id="customcheck" @click="selfFilters = !selfFilters" v-model="selfFilters" class="filled-in"/>
												<span class="custom_checkbox">Показувати тільки мої дефекти</span>
											</label>
										</p>
									</div>
									<button class="btn outline_button">Показати на мапі</button>
									<button class="btn custom_button">Показати</button>
								</div>
							</div>
							<router-view></router-view>
							<!-- <div class="defect_content" v-if="appsLoaded">
								<router-link class="defect_links" to="/">
									<p>&lt; Назад до повного списку</p>
								</router-link>
								<carousel :navigationEnabled="true" :adjustableHeight="true" :mouseDrag="true" :perPage="4" :paginationColor="'#6C757D'" :navigationNextLabel="'&gt;'" :navigationPrevLabel="'&lt;'">
									<slide v-for='(card, idx) of dfCard' :key='idx'>
										<div class="defect_card">
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
															<img src="./assets/img/icons/bx_bx-comment-detail.svg" alt="">
														</div>
													</div>
													<p class="defect_adress" :title="card.address">{{ card.address }}</p>
												</div>
											</div>
										</div>
									</slide>
								</carousel>
								<div class="defect_nav_container">
									<div class="defect_nav">
										<div class="defect_nav_item"><p>Детальна інформація</p></div>
										<div class="defect_nav_item"><p>Коментарі</p></div>
										<div class="defect_nav_item"><p>Документи</p></div>
									</div>
								</div>
								<div class="defect_info_content">
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
															<img src="./assets/img/icons/carbon_user-avatar.svg" alt="User avatar" class="author_icon">
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
															<img src="./assets/img/icons/carbon_user-avatar.svg" alt="User avatar" class="author_icon">
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
											<div class="defect_share">
												<button class="btn outline_button_share">Надіслати в поліцію</button>
												<button class="btn custom_button_share">
													<img class="share_icon" src="./assets/img/icons/bx_bx-share-alt.svg" alt="" >
													Поділитись
												</button>
											</div>
											</div>
										</div>
									</div>
									<div class="defect_description_info" v-show="!appsLoaded">
										<div class="defect_title_container">
											<p class="defect_description">Коментарі</p>
										</div>
										<div class="chat_input">
											<div class="author_info_chat">
												<div class="author_content">
													<img src="./assets/img/icons/carbon_user-avatar.svg" alt="User avatar" class="author_icon">
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
														<img src="./assets/img/icons/carbon_user-avatar.svg" alt="User avatar" class="author_icon">
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
														<img src="./assets/img/icons/carbon_user-avatar.svg" alt="User avatar" class="author_icon">
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
														<img src="./assets/img/icons/carbon_user-avatar.svg" alt="User avatar" class="author_icon">
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
														<img src="./assets/img/icons/carbon_user-avatar.svg" alt="User avatar" class="author_icon">
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
									<div class="defect_description_info" v-show="!appsLoaded">
										<div class="defect_title_container">
											<p class="defect_description">Документи</p>
										</div>
										<div class="chat_area">
											<div class="incoming_container">
												<div class="author_content">
													<div class="author_chat_info">
														<img src="./assets/img/icons/bx_bx-time-five.svg" alt="User avatar" class="author_icon">
														<p class="author_chat message_date">23.03.2021</p>
													</div>
												</div>
												<div class="doc_box">
													<p class="message_content">Звернення до Управління патрульної поліції в Київській області</p>
													<img class="doc_icon" src="./assets/img/icons/carbon_document-pdf.svg" alt="document pdf">
													<img class="doc_icon" title="Завантажити документ" src="./assets/img/icons/feather_download.svg" alt="feather download">
												</div>
											</div>
											<div class="incoming_container">
												<div class="author_content">
													<div class="author_chat_info">
														<img src="./assets/img/icons/bx_bx-time-five.svg" alt="User avatar" class="author_icon">
														<p class="author_chat message_date">23.03.2021</p>
													</div>
												</div>
												<div class="doc_box">
													<p class="message_content">Відповідь від Управління патрульної поліції в Київській області</p>
													<img class="doc_icon" src="./assets/img/icons/carbon_document-pdf.svg" alt="document pdf">
													<img class="doc_icon" src="./assets/img/icons/feather_download.svg" alt="feather download">
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="detail_pagination">
									<button class="btn outline_button btn_outline">&lt; Попередній</button>
									<button class="btn outline_button btn_outline">Наступний &gt;</button>
								</div>
							</div> -->
						</div>
					</div>
				</mq-layout>
				<mq-layout mq="sm">
					<div class="container_works_mb">
						<h2 class="section_title">Колекція дефектів</h2>
						<div class="container_defects_mb">
							<div class="filters_controls_mb">
								<p class="filter_title_mb" :class="{expand: isExpand}" @click="isExpand = !isExpand" style="text-align:left;">фільтри</p>
								<div class="sorted_item_mb">
									<FormSelect
										label="Сортування"
										placeholder=""
										:options="options.options_sort_by"
										v-model="sort_by"
										class="form-control_outline_mb"
										type="search"
									/>
								</div>
							</div>
							<div class="defect_filters_mb">
								<div class="filters_block_mb" :class="{expand: isExpand}">
									<FormInput
										title=""
										label="Адреса"
										prefix=""
										placeholder="Пошук дефектів за адресою"
										v-model="search_by_adress"
										class="form-control"
									/>
									<FormInput
										title=""
										label="Дата розміщення"
										placeholder="Дата розміщення дефекту"
										v-model="search_by_date"
										class="form-control"
										type="date"
									/>
									<FormSelect
										label="Тип дефекту"
										placeholder="Тип дефекту"
										:options="options.options_filter_by_def_type"
										v-model="search_by_type"
										class="form-control"
									/>
									<FormSelect
										label="Розташування"
										placeholder="Місце розташування дефекту"
										:options="options.options_filter_by_def_location"
										v-model="search_by_location_place"
										class="form-control"
									/>
									<FormSelect
										label="Статус"
										placeholder="Статус дефекту"
										:options="options.options_filter_by_def_status"
										v-model="search_by_status"
										class="form-control"
									/>
									<div class="input_group">
										<p>
											<label for="customcheck">
												<input type="checkbox" id="customcheck" @click="selfFilters = !selfFilters" v-model="selfFilters" class="filled-in"/>
												<span class="custom_checkbox">Показувати тільки мої дефекти</span>
											</label>
										</p>
									</div>
									<button class="btn outline_button">Показати на мапі</button>
									<button class="btn custom_button">Показати</button>
								</div>
							</div>
							<router-view v-if="!appsLoaded">
								<vue-element-loading :active="isActive" size="60" duration="1" spinner="spinner" color="#FF6700"/>
							</router-view>
						</div>
					</div>
				</mq-layout>
			</section>
			<section class="pre_footer">
				<mq-layout mq="md+">
					<div class="footer_container">
						<div class="main-hero head-hero">
							<div class="hero-title">
								<p class="prefooter_title">Дороги – наша відповідальність, контролюй це!</p>
							</div>
						</div>
						<div class="button_container">
							<button class="btn footer-outline_button">Допомогти проєкту</button>
							<button class="btn custom_button footer-btn">Додати дефект</button>
						</div>
					</div>
				</mq-layout>
				<mq-layout mq="sm">
					<div class="footer_container_mb">
						<div class="main-hero head-hero_mb">
							<div class="hero-title">
								<p class="prefooter_title_mb">Дороги – наша відповідальність, контролюй це!</p>
							</div>
						</div>
						<div class="button_container_mb">
							<button class="btn outline_button footer-btn_mb">Допомогти проєкту</button>
							<button class="btn custom_button footer-btn_mb">Додати дефект</button>
						</div>
					</div>
				</mq-layout>
			</section>
			<section class="footer">
				<mq-layout mq="md+">
					<div id="footer_nav">
						<div class="footer_logo">
							<a href="/">
								<img id="logo" src="./assets/img/logo_ukr_yama.png" alt="Logo">
							</a>
							<p class="trade_mark" v-html="htmlEntities"></p>
							<p class="trade_mark">{{ new Date() | moment("YYYY") }}</p>
						</div>
						<div class="footer_links">
							<div class='nav_links' v-for="(item, index) in this.navItemsFooter" :key="item.name" :data-index="index">
							<router-link :to='{path: item.path}'>{{ item.text }}</router-link>
						</div>
						</div>
					</div>
				</mq-layout>
				<mq-layout mq="sm">
					<div id="footer_nav_mb">
						<div class="footer_logo_mb">
							<a href="/">
								<img id="logo" src="./assets/img/logo_ukr_yama.png" alt="Logo">
							</a>
							<p class="trade_mark" v-html="htmlEntities"></p>
							<p class="trade_mark">{{ new Date() | moment("YYYY") }}</p>
						</div>
						<div class="footer_links_mb">
							<div class='nav_links_mb' v-for="(item, index) in this.navItemsFooter" :key="item.name" :data-index="index">
								<router-link :to='{path: item.path}'>{{ item.text }}</router-link>
							</div>
						</div>
					</div>
				</mq-layout>
			</section>
		</main>
	</div>
</template>

<script>
import Vue from 'vue';
import './assets/css/main.css';
import FormInput from './components/FormInput';
import FormSelect from './components/FormSelect';

// import defectCards from './mock_data';

export default {
	name: 'app',
	components: {
		FormInput,
		FormSelect,
	},
	data() {
		return {
			navItems: [
				{
					name: 'About',
					text: 'Про проєкт',
					path: '/about'
				},
				{
					name: 'FAQ',
					text: 'FAQ',
					path: '/faq'
				},
				{
					name: 'Contacts',
					text: 'Контакти',
					path: '/contacts'
				},
			],
			navItemsFooter: [
				{
					name: 'About',
					text: 'Про проєкт',
					path: '/about'
				},
				{
					name: 'Statistic',
					text: 'Статистика',
					path: '/statistic'
				},
				{
					name: 'Dowloads',
					text: 'Завантаження',
					path: '/downloads'
				},
				{
					name: 'FAQ',
					text: 'FAQ',
					path: '/faq'
				},
				{
					name: 'Contacts',
					text: 'Контакти',
					path: '/contacts'
				},
			],
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
			htmlEntities: `УкрЯма &copy;`,
			isComments: false,
			isOpen: false,
			isActive: false,
			isExpand: false,
			appsLoaded: false,
			currentPage: null,
			totalPages: null,
			perPage: null,
			startPage: null,
			endPage: null,
			cardCount: 10,
			apiURL: 'https://tala.cloudi.es/routes/95a4b653d1/api/',
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
	async created() {
		Vue.prototype.$API = this;
		// this.loadCard(true);
	},
	mounted() {},
	methods: {
		// eventHandler(data) {
		// 	if(data.events.length > 0) {
		// 		data.events.forEach((e, i) => {
		// 			if(process.env.NODE_ENV !== 'production') {
		// 				console.log('eventHandler | Received event:');
		// 				console.log(e);
		// 			}
		// 			this.$eventBus.$emit(e.type, e);
		// 		});
		// 	}
		// },
		abortableFetch(request, opts, raw = false) {
			const controller = new AbortController();
			const signal = controller.signal;
			if(raw) {
				return {
					abort: () => controller.abort(),
					ready: fetch(request, {
						...opts,
						signal
					}).then((response) => response)
				};
			} else {
				return {
					abort: () => controller.abort(),
					ready: fetch(request, {
						...opts,
						signal
					}).then((response) => {
						return response.json().then((data) => {
							if(response.status == 401) {
								console.log("Unauthorized:", request);
								// this.doLogout();
								// this.dirtyExit = true;
								throw Error("Logging out");
							}
							return data;
						});
					})
				};
			}
		},
		apiGET: async function(endpoint){
			let headers={
				'Accept': 'application/json',
			};
			// if(auth)
			// 	headers["Authorization"]=`Bearer ${this.token}`;
			let response = await fetch(this.apiURL + endpoint, {
				method: 'GET',
				headers: headers
			});
			let data = await response.json();
			return data;
		},
		apiGETv2: function(endpoint, raw = false) {
			let headers = {
				'Accept': 'application/json',
			};
			// if(auth)
			// 	headers["Authorization"] = `Bearer ${this.token}`;
			return this.abortableFetch(this.apiURL + endpoint, {
				method: 'GET',
				headers: headers
			}, raw);
		},
		openMenu(){
			if(!this.isOpen){
				this.$refs.Line_1.setAttribute('style', 'transform: translate(658.5px, 910.5px) rotate(-45deg);transition: transform .2s ease-out')
				this.$refs.Line_2.setAttribute('style', 'transform: translate(658.5px, 910.5px) rotate(-45deg);transition: transform .2s ease-out')
				this.$refs.Line_3.setAttribute('x2', '15')
				this.$refs.Line_3.setAttribute('style', 'transform: translate(658.5px, 900.5px) rotate(45deg);transition: transform .2s ease-out')
			} else if(this.isOpen) {
				this.$refs.Line_1.setAttribute('style', 'transform: translate(655.5px, 898.5px) rotate(0);transition: transform .2s ease-out')
				this.$refs.Line_2.setAttribute('style', 'transform: translate(658.5px, 910.5px) rotate(0);transition: transform .2s ease-out')
				this.$refs.Line_3.setAttribute('x2', '21')
				this.$refs.Line_3.setAttribute('style', 'transform: translate(649.5px, 904.5px) rotate(0);transition: transform .2s ease-out')
			}
		},
		reducer: (acc, curr) => acc + curr,
	},
	computed: {},
	watch: {}
}
</script>

<style>
	main {
		width: 100%;
		max-width: 1280px;
		margin: 0 auto;
	}
	section {
		width: 100%;
		height: 100%;
		display: block;
		position: relative;
	}

	optgroup {
		color: red;
	}

	.velmld-overlay{
		z-index: 1 !important;
	}

	#app {
		font-family: "Montserrat", Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
	}

	#nav {
		padding: 15px 15px;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		height: 90px;
		width: 100%;
	}
	@media screen and (max-width:450px) {
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
		.VueCarousel-slide {
			max-width: 170px;
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
	}

	.nav_links {
		margin: 0 15px !important;
		white-space: nowrap;
	}

	.nav_button{
		outline: none;
		z-index: 6;
	}

	.nav_links-container{
		display: flex;
		flex-flow: column;
		justify-content: center;
		position: fixed;
		width: 101%;
		height: 100%;
		align-items: center;
		background: #fff;
		z-index: 2;
		bottom: 0;
		left: 0;
		font: 700 1.6rem 'Montserrat';
		transform: translateX(100%);
		transition: transform cubic-bezier(0.77, 0, 0.175, 1) 0.8s;
	}

	.nav_links-container.open{
		transform:translateX(0)
	}
	/* Carousel style START*/

	.VueCarousel-slide{
		max-width: 175px;
	}

	.VueCarousel-inner{
		flex-basis: 190px;
	}

	.VueCarousel {
		display: flex;
		flex-direction: column;
		position: relative;
		width: 100%;
		max-width: 700px;
	}

	.VueCarousel-navigation-next{
		right: 0;
		transform: translateY(-160%) translateX(-10%) !important;
		font-family: "system" !important;
		background: var(--color-white) !important;
		border-radius: 4px !important;
	}

	.VueCarousel-navigation-prev{
		left: 0;
		transform: translateY(-160%) translateX(-5%) !important;
		font-family: "system" !important;
		background: var(--color-white) !important;
		border-radius: 4px !important;
	}

	.VueCarousel-dot{
		margin: 0 !important;
	}

	.VueCarousel-dot--active{
		margin-top: 20px;
		padding: 1px !important;
		width: 10px;
		height: 10px;
		background-color: #fff !important;
		border: 1px solid rgb(0, 0, 0) !important;
	}

	.VueCarousel_detail_photo{
		display: flex;
		flex-direction: column;
		position: relative;
		width: 100%;
		max-width: 350px;
	}
	.VueCarousel-slide_defect{
		max-width: 100%;
	}

	/* Carousel style END*/

	#Line_2.open{
		transform-origin: center;
		transform: translate(649.5 904.5) rotate(-45);
	}

	#Line_3.open{
		transform-origin: center;
		transform: translate(658.5 910.5) rotate(-45);
	}

	a {
		font-weight: bold;
		color: #2c3e50;
		font-size: .9rem;
		text-decoration: none;
	}

	#nav a.router-link-exact-active {
		color: var(--status-color);
		border-bottom: 2px solid var(--border-bottom-red);
	}

	#logo {
		margin: 0 45px 0 0;
	}

	.logo_container{
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.custom_button {
		font: 700 1.1rem 'Montserrat';
		background-color: var(--button-default);
		font-size: .9rem;
		font-weight: bold;
		text-transform: none;
		max-width: 340px;
		width: 100%;
		margin:10px 0;
		border-radius: 4px;
	}
	.custom_button:hover{
		background-color: var(--button-hover);
	}
	.custom_button:focus{
		background-color: var(--button-default);
	}
	.custom_button_share {
		font: 700 1.1rem 'Montserrat';
		background-color: var(--button-default);
		font-size: .9rem;
		font-weight: bold;
		text-transform: none;
		max-width: 160px;
		width: 100%;
		margin:10px 0;
		border-radius: 4px;
		display: flex;
		align-items: center;
		justify-content: space-around;
	}
	.custom_button_share_mb {
		font: 700 1.1rem 'Montserrat';
		background-color: var(--button-default);
		font-size: .9rem;
		font-weight: bold;
		text-transform: none;
		/* max-width: 160px; */
		width: 100%;
		margin:10px 0;
		border-radius: 4px;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.custom_button_share:hover{
		background-color: var(--button-hover);
	}
	.custom_button_share:focus{
		background-color: var(--button-default);
	}
	.nav_btn_block{
		display: flex;
		align-items: center;
		justify-content: space-evenly;
		flex: 1 1 50%;
	}
	.custom_button_nav {
		font: 700 1.1rem 'Montserrat';
		background-color: var(--button-default);
		font-size: .9rem;
		font-weight: bold;
		text-transform: none;
		max-width: 155px;
		width: 100%;
		margin:10px 0;
		border-radius: 4px;
	}
	.custom_button_nav:hover{
		background-color: var(--button-hover);
	}
	.custom_button_nav:focus{
		background-color: var(--button-default);
	}
	.outline_button{
		font: 700 1.1rem 'Montserrat';
		background-color: var(--button-outline);
		font-size: .9rem;
		font-weight: bold;
		text-transform: none;
		max-width: 340px;
		width: 100%;
		color: var(--color-black);
		border: 1px solid var(--color-black);
		margin:5px 0;
		border-radius: 4px;
	}
	.outline_button:hover{
		background-color: var(--button-outline);
		border: 1px solid var(--color-gray-light);
		color: var(--color-gray-light);
	}
	.outline_button:focus{
		color: var(--color-gray);
		border: 1px solid var(--color-gray);
		background-color: var(--button-outline);
	}
	.outline_button_share{
		font: 700 1.1rem 'Montserrat';
		background-color: var(--button-outline);
		font-size: .9rem;
		font-weight: bold;
		text-transform: none;
		max-width: 180px;
		width: 100%;
		padding: 4px 6px;
		color: var(--color-black);
		border: 1px solid var(--color-black);
		margin:5px 0;
		border-radius: 4px;
	}
	.outline_button_share_mb{
		font: 700 1.1rem 'Montserrat';
		background-color: var(--button-outline);
		font-size: .9rem;
		font-weight: bold;
		text-transform: none;
		/* max-width: 180px; */
		width: 100%;
		padding: 4px 6px;
		color: var(--color-black);
		border: 1px solid var(--color-black);
		margin:5px 0;
		border-radius: 4px;
	}
	.outline_button_share:hover{
		background-color: var(--button-outline);
		border: 1px solid var(--color-gray-light);
		color: var(--color-gray-light);
	}
	.outline_button_share:focus{
		color: var(--color-gray);
		border: 1px solid var(--color-gray);
		background-color: var(--button-outline);
	}
	.defect_share{
		display: flex;
		width: 350px;
		justify-content: space-between;
		align-items: center;
	}
	.just-text{
		width: 100%;
	}
	.defect_share_mb{
		display: flex;
		width: 100%;
		justify-content: space-between;
		align-items: center;
		flex-wrap: wrap;
	}
	.footer-outline_button{
		font: 700 1.1rem 'Montserrat';
		background-color: var(--button-outline);
		font-size: .9rem;
		font-weight: bold;
		text-transform: none;
		max-width: 240px;
		width: 100%;
		color: var(--color-gray);
		border: 1px solid var(--color-gray);
		margin:5px 0;
		border-radius: 4px;
	}
	.footer-outline_button:hover{
		font: 700 1.1rem 'Montserrat';
		background-color: var(--button-outline);
		font-size: .9rem;
		font-weight: bold;
		text-transform: none;
		max-width: 240px;
		width: 100%;
		color: var(--color-gray-light);
		border: 1px solid var(--color-gray-light);
		margin:5px 0;
		border-radius: 4px;
	}
	.footer-outline_button:focus{
		color: var(--color-gray);
		border: 1px solid var(--color-gray);
		background-color: var(--button-outline);
	}
	/* .footer-btn:hover{
		font: 700 1.1rem 'Montserrat';
		background-color: var(--button-outline);
		font-size: .9rem;
		font-weight: bold;
		text-transform: none;
		max-width: 240px;
		width: 100%;
		color: var(--color-white);
		border: 1px solid var(--status-white);
		margin:5px 0;
		border-radius: 4px;
	} */
	/* .footer-btn:focus{
		background-color: var(--button-default);
		max-width: 240px;
		color: var(--color-white);
	} */
	.hero-btn{
		font: 700 1.1rem 'Montserrat';
		width: 100%;
		max-width: 176px;
		text-transform: none;
	}
	.footer-btn{
		max-width:240px;
	}
	.underline-btn{
		border:none;
		border-bottom: 2px solid var(--color-black);
		background-color: var(--background-color-normal);
		font: 500 .9rem 'Montserrat';
		cursor: pointer;
	}
	.underline-btn:focus{
		background-color: var(--background-color-prefooter);
	}
	.underline-btn:hover{
		border-bottom: 2px solid var(--color-red);
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
	/*  Pre-Footer  */
	.footer_container{
		display: flex;
		justify-content: space-between;
		padding: 20px 20px;
	}
	.pre_footer{
		margin: 20px 0;
		background: var(--background-color-prefooter);
	}
	.button_container{
		display: flex;
		flex: 0 1 50%;
		align-items: center;
		justify-content: space-evenly;
		width: 100%;
		flex-flow: row-reverse;
	}
	#footer_nav{
		padding: 15px 15px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
	}
	.footer_links{
		display: flex;
		justify-content: center;
		flex: 1 1 auto;
	}
	.footer_logo{
		display: flex;
		align-items: center;
	}
	.nav_links > a:hover{
		transition: all .4s ease-in-out;
		text-decoration: none;
		border-bottom: 1px solid var(--color-red);
	}
	.trade_mark{
		font: 400 .85rem 'Montserrat';
	}
	.prefooter_title{
		font: 500 1.6rem 'Montserrat';
	}
	.form-control_outline > select{
        flex-flow: row wrap;
        flex: 1 1 30%;
        display: flex;
		max-height: 1.5rem !important;
        width: 250px !important;
		text-indent: 75px;
		border: 1px solid var(--color-white)
	}
	.form-control_outline::before{
		content: 'Сортування:';
		font-size: .8rem;
		position: absolute;
		left: 0;
		top: 25%;
	}
	[type="checkbox"].filled-in:not(:checked) + span:not(.lever):after {
		height: 16px;
		width: 16px;
		background-color: transparent;
		border: 1px solid var(--color-gray);
		top: 0px;
		z-index: 0;
	}
	[type="checkbox"].filled-in:checked + span:not(.lever):before {
		top: -3px;
		left: 0px;
		width: 8px;
		height: 13px;
		border-top: 2px solid transparent;
		border-left: 2px solid transparent;
		border-right: 2px solid #fff;
		border-bottom: 2px solid #fff;
		transform: rotateZ(37deg);
		transform-origin: 100% 100%;
	}
	[type="checkbox"].filled-in:checked + span:not(.lever):after {
		top: 0;
		width: 16px;
		height: 16px;
		border: 2px solid #26a69a;
		background-color: #26a69a;
		z-index: 0;
	}
	.pagination li.active {
		background-color: var(--color-white);
		border: 1px solid var(--color-gray);
	}
	.pagination li.active a {
		color: var(--color-gray-light);
	}
	.card_pagination{
		position: relative;
		width: 100%;
		margin: 40px 0;
	}
	.pagination li{
		display: inline-block;
		border-radius: 2px;
		text-align: center;
		vertical-align: top;
		font: 500 .8rem 'Montserrat';
		margin: 8px;
		height: 32px;
		width: 32px;
		border-radius: 4px;
		border: 1px solid var(--color-gray-light);
	}
	.pagination li a{
		color: #444;
		display: inline-block;
		font-size: .8rem;
		padding: 0 10px;
		line-height: 30px;
		color: var(--color-gray);
	}
</style>