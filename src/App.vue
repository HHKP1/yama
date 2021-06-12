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
							<div class="defect_content" v-show="appsLoaded">
								<div class="defect_filter_count">
									<div class="defect_filter_item">
										<p class="defect_title">Загалом дефектів знайдено: <span>{{ dfCard.length }}</span></p>
										<!-- <p class="defect_title"  v-for="(f, idx) of dfCard" :key="idx">Кількість регіонів: <span>{{ f.address}}</span></p> -->
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
														<img src="./assets/img/icons/bx_bx-comment-detail.svg" alt="">
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
							<div class="defect_content" v-show="!appsLoaded">
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
							</div>
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
							<div class="defect_content_mb" v-show="appsLoaded">
								<p class="sorted_title_mb">Показані останні дефекти зі змінами (за замовчуванням)</p>
								<div class="grid-container_mb">
									<div class="defect_card" v-for='(card, idx) of dfCard' :key='idx'>
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
														<img src="./assets/img/icons/bx_bx-comment-detail.svg" alt="">
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
							<div class="defect_content" v-show="appsLoaded">
								<div class="defect_filter_count">
									<div class="defect_filter_item">
										<p class="defect_title">Загалом дефектів знайдено: <span>{{ dfCard.length }}</span></p>
										<!-- <p class="defect_title"  v-for="(f, idx) of dfCard" :key="idx">Кількість регіонів: <span>{{ f.address}}</span></p> -->
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
														<img src="./assets/img/icons/bx_bx-comment-detail.svg" alt="">
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
							<div class="defect_content_mb" v-show="!appsLoaded">
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
											<div class="defect_share_mb">
												<button class="btn outline_button_share_mb">Надіслати в поліцію</button>
												<button class="btn custom_button_share_mb">
													<img class="share_icon" src="./assets/img/icons/bx_bx-share-alt.svg" alt="" >
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
									<div class="defect_description_info_mb" v-if="appsLoaded">
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
								<div class="detail_pagination_mb">
									<button class="btn outline_button btn_outline">&lt; Попередній</button>
									<button class="btn outline_button btn_outline">Наступний &gt;</button>
								</div>
							</div>
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
							<p class="trade_mark">УкрЯма &copy;{{ new Date() | moment("YYYY") }}</p>
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
							<p class="trade_mark">УкрЯма &copy;{{ new Date() | moment("YYYY") }}</p>
						</div>
						<div class="footer_links_mb">
							<div class='nav_links_mb' v-for="(item, index) in this.navItemsFooter" :key="item.name" :data-index="index">
								<router-link :to='{path: item.path}'>{{ item.text }}</router-link>
							</div>
						</div>
					</div>
				</mq-layout>
			</section>
			<router-view></router-view>
		</main>
	</div>
</template>

<script>
import Vue from 'vue';
import VueMq from 'vue-mq';
import { Carousel, Slide } from 'vue-carousel';
import VueElementLoading from 'vue-element-loading';
import './assets/css/main.css';
import FormInput from './components/FormInput';
import FormSelect from './components/FormSelect';
// import Pagination from './components/Pagination.vue';

// import defectCards from './mock_data';

Vue.use(VueMq, {
	breakpoints: {
		sm: 450,
		md: 1135,
		lg: Infinity,
	},
	defaultBreakpoint: 'lg'
});

export default {
	name: 'App',
	components: {
		VueElementLoading,
		FormInput,
		FormSelect,
		Carousel,
		Slide
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
					text: 'завантаження',
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
		this.loadCard(true);
	},
	mounted() {
	},
	methods: {
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
		async loadCard(change){
			this.isActive=true;
			try{
				this.pendingUpdate = await this.apiGET("/defects?");
				if(!this.pendingUpdate)
					this.isActive=true;
				let result = await this.pendingUpdate;
				this.orgInfo=result;
				this.isActive=false;
				return this.orgInfo;
			}catch(e){
				console.log(e);
				this.isActive=false;
			}
		},
	},
	computed: {
		// Mock Data
		// defectCard(){
		// 	return defectCards.map(card => {
		// 	// console.log(card);
		// 		return {
		// 			address: card.address,
		// 			photo: card.photos,
		// 			status: card.case_status,
		// 			comment: card.comments,
		// 			// region_id: card.region_id,
		// 		}
		// 	})
		// },

		//API Data
		dfCard(){
			return this.$API.orgInfo.map(card => {
				return {
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
		max-width: 190px;
	}

	.VueCarousel-inner{
		flex-basis: 190px;
	}

	.VueCarousel {
		display: flex;
		flex-direction: column;
		position: relative;
		width: 100%;
		max-width: 760px;
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

	.header {
		width: 100%;
		height: 395px;
		background: url(./assets/img/head_bg.png) no-repeat center;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.input-field > label:not(.label-icon) {
		display: inline-block;
		background-color: var(--color-white);
		color: var(--color-gray-light);
		padding: 0 6px;
		transform-origin: 0 0;
		transform: translate(14px, -6px);
		font-size: 0.8rem !important;
		z-index: 1;
	}

	.head-container {
		display: flex;
		justify-content: space-between;
		position: relative;
		top: -30px;
		padding: 0 20px;
		width: 100%;
	}

	.main-hero {
		flex: 0 1 40%;
	}

	.head-hero {
		justify-content: space-between;
		display: flex;
		flex-flow: column;
		padding: 0 0 0 20px;
		text-align: left;
	}

	.hero-item_message{
		display: none;
	}

	.qr_message{
		object-fit: cover;
	}

	.hero-item:hover + .hero-item_message{
		display: flex !important;
		flex-flow: column;
		position: absolute;
		background-color: var(--background-color-normal);
		border-radius: 4px;
		filter: drop-shadow(1px 1px 3px var(--color-gray-light));
		/* width: 100%; */
		max-width: 100px;
		padding: 16px 14px;
		left: -27px;
	}
	.hero-item_message:hover{
		display: flex !important;
		flex-flow: column;
		position: absolute;
		background-color: var(--background-color-normal);
		border-radius: 4px;
		filter: drop-shadow(1px 1px 3px var(--color-gray-light));
		/* width: 100%; */
		max-width: 100px;
		padding: 16px 14px;
		left: -27px;
	}

	.hero-item_message::after{
		content: "";
		position: absolute;
		bottom: 100%;
		left: 50%;
		margin-left: -5px;
		border-width: 5px;
		border-style: solid;
		border-color: transparent transparent var(--background-color-normal) transparent;
		filter: drop-shadow(1px 1px 3px var(--color-gray-light));
	}

	.hero-content_block{
		position: relative;
	}

	.message_title{
		font: 500 .6rem 'Montserrat';
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
			max-width: 165px;
		}
	}

	.hero-container {
		background-color: var(--background-color-normal);
		border: 1px solid var(--color-gray-light);
		border-radius: 4px;
		filter: dropshadow(23, 3, 3, var(--color-gray));
		width: 100%;
		max-width: 239px;
		/* margin: 0 auto; */
		padding: 16px 20px;
		position: relative;
	}

	.hero-content {
		display: flex;
		justify-content: space-evenly;
		margin: 0 0 20px;
	}

	.hero-title {
		display: flex;
		justify-content: center;
		width: 100%;
		position: relative;
	}

	.hero-item {
		font: 500 1.8rem 'Montserrat';
		cursor: text;
	}

	.hero-item .help-tips{
		cursor: pointer;
	}

	.hero-item .p-text {
		font: 500 .8rem 'Montserrat';
		text-align: left;
	}

	.help-tips::after {
		content: '?';
	}

	.hero-item .code {
		font: 900 1.5rem 'Montserrat';
	}

	.help-tips {
		border-radius: 100%;
		/* border: 1px solid var(--background-color-normal); */
		background: var(--background-color-normal);
		filter: drop-shadow(1px 1px 3px var(--color-gray-light));
		width: 33px;
	}

	.help-tips:hover {
		filter: drop-shadow(1px 2px 9px var(--color-gray-shadow-active));
		transition: all .3s ease-out;
	}

	.hero-title .icon {
		border: 1px solid var(--background-color-normal);
		background: var(--background-color-normal);
		border-radius: 100%;
		filter: drop-shadow(1px 1px 3px var(--color-gray-light));
		padding: 9px;
		display: flex;
		cursor: pointer;
	}

	.hero-title .icon:hover {
		filter: drop-shadow(1px 2px 9px var(--color-gray-shadow-active));
		transition: all .3s ease-out;
	}
	.main-counter{
		display: flex;
		justify-content: space-evenly;
		background: #fff;
		margin: 15px 0 0 0;
		padding: 45px 0;
	}
	.counter-item{
		/* padding: 0 16px 0 0; */
		flex: 1 1 33%;
	}
	.counter-item:hover{
		background-color: var(--background-color-prefooter);
	}
	.counter-check{
		font: 900 2.1rem 'Montserrat';
		color: var(--color-red);
	}
	.counter-title{
		font: 500 1.2rem 'Montserrat';
		color: var(-text-color-bolder);
	}
	.counter-separator{
		height: 90px;
		background: black;
		width: 1px;
	}

	/* Section How it works   */

	.container_works{
		padding: 0 20px;
	}
	.container_steps{
		display: flex;
		justify-content: space-evenly;
		align-items: center;
		width: 75%;
		margin: 0 auto;
		padding: 20px 0;
	}
	.section_title{
		font: 700 1.4rem 'Montserrat', arial, helvetica;
		text-align: left;
	}
	.step_item_col{
		justify-content: space-between;
		display: flex;
		flex-flow: column;
	}
	.step_item{
		position: relative;
		height: 100%;
		min-height: 200px;
		display: flex;
		flex-flow: column;
		align-items: center;
		justify-content: center;
		padding: 0 10px;
		white-space: nowrap;
	}
	.step_description{
		font: 500 .8rem 'Montserrat', Arial, sans-serif;
	}
	.step_icon{
		border-radius: 100%;
		border:0 solid transparent;
		padding: 9px;
		transition: all .3s ease-in-out;
		display: flex;
	}
	.step_icon:hover{
		border: 0 solid var(--background-color-normal);
		background: var(--background-color-normal);
		border-radius: 100%;
		filter: drop-shadow(1px 1px 3px var(--color-gray-light));
		padding: 9px;
		display: flex;
		cursor: pointer;
		font: 500 .8rem 'Montserrat', Arial, sans-serif;
	}
	.arrow_forward{
		position: absolute;
		left: 75%;
		width: 94%;
	}
	.arrow_fork{
		position: absolute;
		left: 40%;
		top: 43%;
		width: 11%;
	}
	.arrow_fork_up{
		position: absolute;
		left: 22%;
		top: 0%;
		width: 100%;
	}
	.arrow_fork_down{
		position: absolute;
		left: 0%;
		bottom: 0%;
		width: 100%;
	}
	.arrow_down{
		position: absolute;
		right: 21%;
		bottom: 40%;
		width: 4%;
	}
	.justify_start{
		justify-content: flex-start !important;
	}
	.justify_end{
		justify-content: flex-end !important;
	}
	.container_defects{
		display: flex;
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
		margin: 20px 0;
		justify-content: space-between;
	}
	.defect_info_content{
		width: 100%;
		display: flex;
		padding: 20px 0
	}
	.defect_info_content_mb{
		display: flex;
		padding: 20px 0;
	}
	.defect_description_info{
		flex: 1 0 50%;
		position: relative;
		padding: 12px;
	}
	.defect_description_info_mb{
		position: absolute;
		left: 0;
		transform: translateX(360px);
		transition: transform .3s ease-out;
		background: #fff;
		padding: 8px;
		height: 50%;
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
	.defect_detail_title{
		font: 700 2.8rem 'Montserrat', sans-serif !important;
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
		font: 500 .7rem 'Montserrat';
		text-align: left;
		white-space: nowrap;
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
		background: url(./assets/img/icons/arrow_Stroke.svg) no-repeat center left;
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
	.defect_adress{
		font: 400 .8rem 'Montserrat', sans-serif;
		text-align: left;
		/* text-overflow: ellipsis; */
		/* white-space: nowrap; */
		max-height: 40px;
		overflow: hidden;
		cursor: pointer;
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
		max-width: 185px;
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
	.form-control{
		cursor: pointer;
	}
	.form-control > select{
        flex-flow: row wrap;
        flex: 1 1 50%;
        display: flex;
		max-height: 2.5rem !important;
		border: 1px solid #ccc !important;
		border-radius: 4px !important;
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