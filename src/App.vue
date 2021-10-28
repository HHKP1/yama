<template>
	<div id="app">
		<transition name="fade-loader">
			<PageLoader v-if="!appsLoaded"/>
		</transition>
		<!-- <div class="preloader" v-if="!appsLoaded" style="background: var(--color-red);width: 100%;height:100vh;position: absolute;top:0;left:0;display:block;z-index:9;" >Hello</div> -->
		<main :class="{open: isOpen}" v-show="appsLoaded">
			<mq-layout mq="md+" v-if="$mq == 'md' || $mq == 'lg'">
				<div id="nav">
					<a class="logo_link" href="/">
						<img id="logo" src="./assets/img/logo_ukr_yama.webp" alt="Logo">
					</a>
					<div class='nav_links' v-for="(item) in navItems" :key="item.id">
						<router-link :to='{path: item.path}'>{{ item.text }}</router-link>
					</div>
					<div class="nav_btn_block">
						<FormInput
						title=""
						label=""
						placeholder="Пошук за адресою або номером"
						class="form-control"
						v-model="search"
						type="search"
						/>
						<button class="btn custom_button_nav">Додати дефект</button>
						<div v-if="loggedIn" class="author_info_chat" style="margin: 4px 8px;width:120px;">
							<span class="logout" @click="logout">Вийти</span>
							<div class="author_content">
								<img src="./assets/img/icons/carbon_user-avatar.svg" alt="User avatar" class="author_icon">
								<p class="author_name" :title="me.first_name+' '+me.last_name+' '+me.patronymic">{{ me.first_name }}</p>
							</div>
						</div>
					</div>
				</div>
			</mq-layout>
			<mq-layout mq="sm" v-if="$mq == 'sm'">
				<div id="nav_mb" :class="{ 'hidden-navbar': !showNavbar }">
					<div class="logo_container">
						<a class="logo_link" href="/">
							<img id="logo" src="./assets/img/icons/Logo_mobile.svg" alt="Logo">
						</a>
						<div class="nav_button" @click="isOpen = !isOpen">
							<svg  @change="isOpen = !isOpen" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
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
						<div v-if="loggedIn" class="author_info_chat_mb" style="margin: 4px 4px;width:180px;">
							<span class="logout" @click="logout">Вийти</span>
							<div class="author_content">
								<img src="./assets/img/icons/carbon_user-avatar.svg" alt="User avatar" class="author_icon">
								<p class="author_name" :title="me.first_name+' '+me.last_name+' '+me.patronymic">{{ me.first_name }}</p>
							</div>
						</div>
						<FormInput
						title=""
						label=""
						placeholder="Пошук за адресою або номером"
						class="form-control form-control_top"
						v-model="search"
						type="search"
						/>
						<div class='nav_links' v-for="(item) in navItems" :key="item.id">
							<router-link :to='{path: item.path}'>{{ item.text }}</router-link>
						</div>
						<div class="footer_logo_mb_nav">
							<p class="trade_mark_nav" v-html="htmlEntities"></p>
							<p class="trade_mark_nav">{{ new Date() | moment("YYYY") }}</p>
						</div>
					</div>
					<div class="overlay" @click="isOpen = !isOpen" :change="openMenu(!isOpen)">
						<div class="overlay_inner"></div>
					</div>
				</div>
			</mq-layout>
			<mq-layout mq="sm_album" v-if="$mq == 'sm_album'">
				<div id="nav_sm_al" :class="{ 'hidden-navbar': !showNavbar }">
					<div class="logo_container">
						<a class="logo_link" href="/">
							<img id="logo" src="./assets/img/icons/Logo_mobile.svg" alt="Logo">
						</a>
						<div class="nav_button" @click="isOpen = !isOpen">
							<svg @change="isOpen = !isOpen" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
								<g id="uil_subject" transform="translate(-648 -893)">
									<rect id="Rectangle_4" data-name="Rectangle 4" width="24" height="24" transform="translate(648 893)" fill="none"/>
									<line ref="Line_1" id="Line_1" data-name="Line 1" x2="15" transform="translate(655.5 898.5)" fill="none" stroke="#e3433d" stroke-linecap="round" stroke-width="3"/>
									<line ref="Line_3" id="Line_3" data-name="Line 3" x2="21" transform="translate(649.5 904.5)" fill="none" stroke="#e3433d" stroke-linecap="round" stroke-width="3"/>
									<line ref="Line_2" id="Line_2" data-name="Line 2" x2="12" transform="translate(658.5 910.5)" fill="none" stroke="#e3433d" stroke-linecap="round" stroke-width="3"/>
								</g>
							</svg>
						</div>
					</div>
					<div class="nav_links-container_sm_al" :class="{open: isOpen}">
						<div v-if="loggedIn" class="author_info_chat_mb" style="margin: 4px 4px;width:180px;">
							<span class="logout" @click="logout">Вийти</span>
							<div class="author_content">
								<img src="./assets/img/icons/carbon_user-avatar.svg" alt="User avatar" class="author_icon">
								<p class="author_name" :title="this.me.first_name+' '+this.me.last_name+' '+this.me.patronymic">{{ this.me.first_name }}</p>
							</div>
						</div>
						<FormInput
						title=""
						label=""
						placeholder="Пошук за адресою або номером"
						class="form-control form-control_top"
						v-model="search"
						type="search"
						/>
						<div class='nav_links_sm_al' v-for="(item) in this.navItems" :key="item.id">
							<router-link :to='{path: item.path}'>{{ item.text }}</router-link>
						</div>
						<div class="footer_logo_sm_al">
							<p class="trade_mark_sm_al" v-html="htmlEntities"></p>
							<p class="trade_mark_sm_al">{{ new Date() | moment("YYYY") }}</p>
						</div>
					</div>
					<div class="overlay_sm_al" @click="isOpen = !isOpen" :change="openMenu(!isOpen)">
						<div class="overlay_inner_sm_al"></div>
					</div>
				</div>
			</mq-layout>
			<section class="main">
				<mq-layout mq="md+">
					<div class="header">
						<img src="./assets/img/head_bg.png" class="header_bg" alt="Main background image">
						<div class="head-container">
							<div class="main-hero head-hero">
								<div class="hero-title">
									<h1 class="hero-item"><strong
											style="font:900 24px 'Montserrat';color:var(--button-default)">УкрЯма</strong> –
										це інструмент громадського контролю за утриманням доріг, який ефективно працює та
										розвивається</h1>
								</div>
								<button class="btn custom_button hero-btn">Додати дефект</button>
							</div>
							<div class="main-hero" v-if="!loggedIn">
								<div class="hero-title">
									<div class="hero-container">
										<div class="hero-content">
											<div class="hero-item">
												<p class="p-text">Ваш код<br />для входу:</p>
											</div>
											<div v-if="appsLoaded" class="hero-item">
												<p class="p-text code">{{ authCode[authCode.length-1].code }}</p>
											</div>
											<div class="hero-item">
												<div class="help-tips"
													style="border-radius:100%;background: var(--background-color-normal)" title="Є питання?">
												</div>
											</div>
										</div>
										<div class="hero-content" v-if="appsLoaded">
											<div class="hero-content_block">
												<a :href="socials.facebook.link" target="_blank">
													<div class="hero-item icon">
														<img src="./assets/img/icons/uil_facebook-messenger-alt.svg"
														alt="Facebook messenger">
													</div>
													<div class="hero-item_message" title="QR Code для входу у facebook">
														<p class="message_title">UkrYama_bot</p>
														<div class="message_content"><img :src="socials.facebook.qrCode" alt="QR Code" class="qr_message"></div>
													</div>
												</a>
											</div>
											<div class="hero-content_block">
												<a :href="socials.telegram.link" target="_blank">
													<div class="hero-item icon">
														<img src="./assets/img/icons/uil_telegram-alt.svg" alt="Telegram messenger">
													</div>
													<div class="hero-item_message" title="QR Code для входу">
														<p class="message_title">UkrYama_bot</p>
														<div class="message_content">
															<img :src="socials.telegram.qrCode" alt="QR Code" class="qr_message">
														</div>
													</div>
												</a>
											</div>
											<div class="hero-content_block">
												<a :href="socials.viber.link">
													<div class="hero-item icon">
														<img src="./assets/img/icons/la_viber.svg" alt="Viber messenger">
													</div>
													<div class="hero-item_message" title="QR Code для входу">
														<p class="message_title">UkrYama_bot</p>
													<div class="message_content"><img :src="socials.viber.qrCode" alt="QR Code" class="qr_message"></div>
												</div>
												</a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</mq-layout>
				<mq-layout mq="sm_album">
					<div class="header">
						<img src="./assets/img/head_bg.png" class="header_bg" alt="Main background image">
						<div class="head-container">
							<div class="main-hero head-hero">
								<div class="hero-title">
									<p class="hero-item_sm_al"><strong
											style="font:900 24px 'Montserrat';color:var(--button-default)">УкрЯма</strong> –
										це інструмент громадського контролю за утриманням доріг, який ефективно працює та
										розвивається</p>
								</div>
								<button class="btn custom_button hero-btn">Додати дефект</button>
							</div>
							<div class="main-hero" v-if="!loggedIn">
								<div class="hero-title">
									<div class="hero-container">
										<div class="hero-content">
											<div class="hero-item">
												<p class="p-text">Ваш код<br />для входу:</p>
											</div>
											<div v-if="appsLoaded" class="hero-item">
												<p class="p-text code">{{ authCode[authCode.length-1].code }}</p>
											</div>
											<div class="hero-item">
												<div class="help-tips"
													style="border-radius:100%;background: var(--background-color-normal)" title="Є питання?">
												</div>
											</div>
										</div>
										<div class="hero-content" v-if="appsLoaded">
											<div class="hero-content_block">
												<a :href="socials.facebook.link" target="_blank">
													<div class="hero-item icon">
														<img src="./assets/img/icons/uil_facebook-messenger-alt.svg"
														alt="Facebook messenger">
													</div>
													<div class="hero-item_message" title="QR Code для входу у facebook">
														<p class="message_title">UkrYama_bot</p>
														<div class="message_content"><img :src="socials.facebook.qrCode" alt="QR Code" class="qr_message"></div>
													</div>
												</a>
											</div>
											<div class="hero-content_block">
												<div class="hero-item icon">
													<img src="./assets/img/icons/uil_telegram-alt.svg" alt="Telegram messenger">
												</div>
												<div class="hero-item_message" title="QR Code для входу">
													<p class="message_title">UkrYama_bot</p>
													<div class="message_content">
														<img src="./assets/img/icons/qr_message.svg" alt="QR Code" class="qr_message">
													</div>
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
							<div class="main-hero" v-if="!loggedIn">
								<div class="hero-title">
									<div class="hero-container_mb">
										<div class="hero-content">
											<div class="hero-item">
												<p class="p-text">Для входу надішліть цей<br/>код боту у відповідному месенджері</p>
											</div>
											<div v-if="appsLoaded" class="hero-item">
												<p class="p-text code">{{ authCode[authCode.length-1].code }}</p>
											</div>
										</div>
										<div class="hero-content" v-if="appsLoaded">
											<div class="icon_container_mb">
												<a :href="socials.facebook.link" class="icon_link" target="_blank">
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
												</a>
											</div>
											<div class="icon_container_mb">
												<a :href="socials.telegram.link" class="icon_link" target="_blank">
													<div class="hero-item icon">
														<img src="./assets/img/icons/uil_telegram-alt.svg" alt="Telegram messenger">
													</div>
													<p class="chat_icon_description_mb">
														@UkrYamaBot
													</p>
													<p class="chat_icon_description_mb">
														Telegram
													</p>
												</a>
											</div>
											<div class="icon_container_mb">
												<a :href="socials.viber.link" class="icon_link" target="_blank">
													<div class="hero-item icon">
														<img src="./assets/img/icons/la_viber.svg" alt="Viber messenger">
													</div>
													<p class="chat_icon_description_mb">
														@UkrYama
													</p>
													<p class="chat_icon_description_mb">
														Viber
													</p>
												</a>
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
				<mq-layout mq="sm_album">
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
				<mq-layout mq="sm_album">
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
				<div class="container_works">
					<h2 class="section_title">Колекція дефектів</h2>
					<div class="container_defects">
						<Defects />
						<transition name="fade-loader">
							<div class="content_view">
							<router-view>
							</router-view>
							</div>
						</transition>
					</div>
				</div>
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
				<mq-layout mq="sm_album">
					<div class="footer_container">
						<div class="main-hero head-hero">
							<div class="hero-title">
								<p class="prefooter_title">Дороги – наша відповідальність, контролюй це!</p>
							</div>
						</div>
						<div class="button_container">
							<button class="btn footer-outline_button_sm_album">Допомогти проєкту</button>
							<button class="btn custom_button_sm_album footer-btn">Додати дефект</button>
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
								<img id="logo" src="./assets/img/logo_ukr_yama.webp" alt="Logo">
							</a>
							<p class="trade_mark" v-html="htmlEntities"></p>
							<p class="trade_mark">{{ new Date() | moment("YYYY") }}</p>
						</div>
						<div class="footer_links">
							<div class='nav_links' v-for="(item, index) in this.navItems" :key="item.name" :data-index="index">
							<router-link :to='{path: item.path}'>{{ item.text }}</router-link>
						</div>
						</div>
					</div>
				</mq-layout>
				<mq-layout mq="sm_album">
					<div id="footer_nav">
						<div class="footer_logo_sm_al">
							<a href="/">
								<img id="logo" src="./assets/img/logo_ukr_yama.webp" alt="Logo">
							</a>
							<p class="trade_mark_sm_al" v-html="htmlEntities"></p>
							<p class="trade_mark_sm_al">{{ new Date() | moment("YYYY") }}</p>
						</div>
						<div class="footer_links">
							<div class='nav_links' v-for="(item, index) in this.navItems" :key="item.name" :data-index="index">
							<router-link :to='{path: item.path}'>{{ item.text }}</router-link>
						</div>
						</div>
					</div>
				</mq-layout>
				<mq-layout mq="sm">
					<div id="footer_nav_mb">
						<div class="footer_logo_mb">
							<a href="/">
								<img id="logo" src="./assets/img/logo_ukr_yama.webp" alt="Logo">
							</a>
							<p class="trade_mark" v-html="htmlEntities"></p>
							<p class="trade_mark">{{ new Date() | moment("YYYY") }}</p>
						</div>
						<div class="footer_links_mb">
							<div class='nav_links_mb' v-for="(item, index) in this.navItems" :key="item.name" :data-index="index">
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
import PageLoader from './components/PageLoader';
import FormInput from './components/FormInput';
import Defects from './components/Defects';
// import VueCookies from 'vue-cookies';
import VueMeta from 'vue-meta';

const OFFSET = 60;

// Vue.use(VueCookies);
Vue.use(VueMeta);
// import defectCards from './mock_data';

export default {
	name: 'app',
	components: {
		FormInput,
		Defects,
		PageLoader,
	},
	metaInfo() {
		return {
			title: "UkrYama",
			titleTemplate: '%s | UkrYama',
			meta: [
				{ name: 'description', content: 'УкрЯма – це інструмент громадського контролю за утриманням доріг' },
				{ property: 'og:description', content: 'УкрЯма – це інструмент громадського контролю за утриманням доріг' },
				{ property: 'og:title', content: "УкрЯма – це інструмент громадського контролю за утриманням доріг" },
				{ property: 'og:site_name', content: 'УкрЯма' },
				{ property: 'fb:app_id', content: "366159005244899" },
				{ property: 'og:url', content: 'https://tala.cloudi.es/routes/9373315876/front/#/' },
				{ property: 'og:image', content: 'https://tala.cloudi.es/routes/9373315876/front/img/head_bg.png' },
				{ property: 'og:type', content: 'website' },
				{ name: 'robots', content: 'index,follow' }
			]
		}
	},
	data() {
		return {
			options: {},
			navItems: [
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
			status: [],
			loggedIn: false,
			appsLoaded: false,
			// appsLoad: false,
			comment: '',
			htmlEntities: `УкрЯма &copy;`,
			isComments: false,
			isOpen: false,
			isActive: false,
			isExpand: false,
			apiURL: '/routes/95a4b653d1/api',
			apiURLv2: '/routes/00d3928bf3/api',
			apiSocials: '/routes/7a65157215/api',
			socials: {},
			search: '',
			prefix: '',
			selfFilters: false,
			dateRangeFilterShown: false,
			token: "",
			dirtyExit: false,
			user: {},
			me: {},
			page: '',
			listType: 'ruined',
			sort_by: '',
			showNavbar: true,
			lastScrollPosition: 0,
			scrollValue: 0,
			appsFilter: {
				searchAddressFilter: '',
				search_by_date: '',
				search_by_type: '',
				selectedRegion: '',
				selectedLocationType: '',
				selectedStatus: '',
				selectedType: '',
				periodStart: '',
				periodEnd: '',
			},
		}
	},
	created() {
		Vue.prototype.$API = this;
		this.startTimer();
		this.loadSocials();
	},
	mounted() {
		this.$API.title = "Аплікація";
		this.$API.page = "app";
		this.isActive=true;
		// this.checkCode();
		// Vue.$cookies.set('yamasession', '77d89dff-1fd7-4d0c-83ab-81b5204b342a');
		this.status.push({ "cookies": document.cookie });
		// setTimeout(this.appsLoaded, 5000);
		this.lastScrollPosition = window.pageYOffset;
		window.addEventListener('scroll', this.onScroll);
		// const $APP_ID = '366159005244899';
	},
	methods: {
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
					}).then(async (response) => {
						const data=await response.json();
						// console.log(response);
						if(response.status!=200) {
							console.log("Unauthorized:", request);
							// this.doLogout();
							// this.dirtyExit = true;
							throw Error("Logging out");
						}
						return data;
					})
				};
			}
		},
		apiPOST: async function(endpoint, requestData, rawFetch = false) {
			let headers = {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			};
			let response = await fetch(this.apiURL + endpoint, {
				method: 'POST',
				mode: 'no-cors',
				headers: headers,
				body: JSON.stringify(requestData)
			});
			if(rawFetch) return response;
			let data = await response.json();
			return data;
		},
		apiGET: async function(endpoint){
			let headers={
				'Accept': 'application/json',
			};
			// if(auth)
			// 	headers["Authorization"]=`Bearer ${this.token}`;
			let response = await fetch(this.apiURL + endpoint, {
				Method: 'GET',
				headers: headers,
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
				headers: headers,
			}, raw);
		},
		apiGetSocials: async function(endpoint){
			let headers={
				'Accept': 'application/json'
			};
			// if(auth)
			// 	headers["Authorization"]=`Bearer ${this.token}`;
			let response = await fetch(this.apiSocials + endpoint, {
				method: 'GET',
				headers: headers,
			});
			// console.log(response);
			let data = await response.json();
			return data;
		},
		apiGETv3: async function(endpoint){
			let headers={
				'Accept': 'application/json'
			};
			// if(auth)
			// 	headers["Authorization"]=`Bearer ${this.token}`;
			let response = await fetch(this.apiURLv2 + endpoint, {
				method: 'GET',
				headers: headers,
			});
			// console.log(response);
			let data = await response.json();
			return data;
		},
		async loadSocials(){
			try{
				let resp = await this.apiGetSocials('/social_urls');
				// if (this.status[this.status.length-1].status == "ok") {
				this.socials = resp;
				this.$eventBus.$emit('setSocials', this.socials);
				// console.log(this.me);
				// }
				this.profileLoaded = true;
			}catch(e) {
				console.log(e);
			}
		},
		async loadProfile() {
			try{
				let resp = await this.apiGET('/me');
				if (this.status[this.status.length-1].status == "login-ok") {
					this.me = resp;
					this.$eventBus.$emit('setMe', this.me);
					// console.log(this.me);
				}
				this.profileLoaded = true;
			}catch(e) {
				console.log(e);
			}
		},
		async openMenu(change){
			if(await !change){
				this.$refs.Line_1.setAttribute('style', 'transform: translate(658.5px, 910.5px) rotate(-45deg);transition: transform .2s ease-out')
				this.$refs.Line_2.setAttribute('style', 'transform: translate(658.5px, 910.5px) rotate(-45deg);transition: transform .2s ease-out')
				this.$refs.Line_3.setAttribute('x2', '15')
				this.$refs.Line_3.setAttribute('style', 'transform: translate(658.5px, 900.5px) rotate(45deg);transition: transform .2s ease-out')
			} else if(await change) {
				this.$refs.Line_1.setAttribute('style', 'transform: translate(655.5px, 898.5px) rotate(0);transition: transform .2s ease-out')
				this.$refs.Line_2.setAttribute('style', 'transform: translate(658.5px, 910.5px) rotate(0);transition: transform .2s ease-out')
				this.$refs.Line_3.setAttribute('x2', '21')
				this.$refs.Line_3.setAttribute('style', 'transform: translate(649.5px, 904.5px) rotate(0);transition: transform .2s ease-out')
			}
		},
		async logout() {
			this.appsLoaded=false;
			let resp = await this.apiGETv3('/logout');
			// console.log(resp);
			this.status.push(resp);
			if (this.status[this.status.length - 1].status === "logged-out") {
				this.loggedIn = false;
				this.appsLoaded=true;
				this.me={};
				this.startTimer();
			}
			return resp;
		},
		async checkCode() {
			let resp = await this.apiGETv3('/code');
			// console.log(resp);
			this.status.push(resp);
			if(this.status.length>0)
				this.appsLoaded=true;
			if (this.status[this.status.length-1].status == "login-ok"){
				clearInterval(this.timer);
				this.loggedIn = true;
				this.loadProfile();
			}
			return resp;
		},
		startTimer() {
			this.timer = setInterval(this.checkCode, 5200);
		},
		onScroll () {
			if (window.pageYOffset < 0) {
				return
			}
			if (Math.abs(window.pageYOffset - this.lastScrollPosition) < OFFSET) {
				return
			}
			this.showNavbar = window.pageYOffset < this.lastScrollPosition
			this.lastScrollPosition = window.pageYOffset
		}
	},
	computed: {
		//API Data
		authCode() {
			return this.status.map(state => {
				return {
					code: state.code,
					sessionID: state.sessionID,
					status: state.status
				}
			})
		},
		userInfo() {
			return this.status.map(state => {
				return {
					chatneyID: state.chatneyID,
					sessionID: state.sessionID,
					status: state.status
				}
			})
		},
	},
	watch: {},
	beforeDestroy () {
		window.removeEventListener('scroll', this.onScroll)
	},
}
</script>

<style>
</style>
