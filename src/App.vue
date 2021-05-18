<template>
	<div id="app">
		<main>
			<div id="nav">
				<a href="/">
					<img id="logo" src="./assets/img/logo_ukr_yama.png" alt="Logo">
				</a>
				<div class='nav_links' v-for="(item, index) in this.navItems" :key="item.name" :data-index="index">
					<router-link :to='{path: item.path}'>{{ item.text }}</router-link>
				</div>
				<FormInput title="" label="" type="search" placeholder="Пошук за адресою або номером заяви"
					class="form-control" v-model="search" />
				<button class="btn custom_button">Додати дефект</button>
			</div>
			<section>
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
												style="border-radius:100%;border:1px solid var(--color-gray-light);background: var(--background-color-normal)">
											</div>
										</div>
									</div>
									<div class="hero-content">
										<div class="hero-item icon">
											<img src="./assets/img/icons/uil_facebook-messenger-alt.svg"
												alt="Facebook messenger">
										</div>
										<div class="hero-item icon">
											<img src="./assets/img/icons/uil_telegram-alt.svg" alt="Telegram messenger">
										</div>
										<div class="hero-item icon">
											<img src="./assets/img/icons/la_viber.svg" alt="Viber messenger">
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
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
			</section>
			<router-view></router-view>
		</main>
	</div>
</template>

<script>
import Vue from 'vue';
import './assets/css/main.css';
import FormInput from './components/FormInput'
import M from 'materialize-css/dist/js/materialize.min';
export default {
	name: 'App',
	components: {
		FormInput
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
					name: 'Team',
					text: 'FAQ',
					path: '/faq'
				},
				{
					name: 'Contacts',
					text: 'Контакти',
					path: '/contacts'
				},
			],
			search: ''
		}
	},
	created() {
		Vue.prototype.$API = this
	},
	mounted() {
		M.AutoInit();
		M.updateTextFields();
	},
	computed: {},
	watch: {}
}
</script>

<style>
	@import "~materialize-css/dist/css/materialize.css/";

	section {
		width: 100%;
		height: 100%;
		display: block;
		position: relative;
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
		border-bottom: 1px solid #BDBDBD;
	}

	.nav_links {
		margin: 0 15px !important
	}

	#nav a {
		font-weight: bold;
		color: #2c3e50;
		font-size: .9rem;
		text-decoration: none;
	}

	#nav a:hover {
		transition: all .2s ease-in-out;
	}

	#nav a.router-link-exact-active {
		color: #42b983;
	}

	#logo {
		margin: 0 45px 0 0;
	}

	.custom_button {
		background-color: var(--button-default);
		font-size: .9rem;
		font-weight: bold;
		text-transform: none;
		max-width: 239px;
	}
	.hero-btn{
		font: 700 1.1rem 'Montserrat';
		width: 100%;
		max-width: 176px;
	}
	.underline-btn{
		border:none;
		border-bottom: 2px solid var(--color-black);
		background-color: var(--background-color-normal);
		font: 500 .9rem 'Montserrat';
		cursor: pointer;
	}
	.underline-btn:hover{
		border-bottom: 2px solid var(--color-red);
	}

	.custom_button:hover {
		background-color: var(--button-hover) !important;
	}

	.header {
		width: 100%;
		height: 395px;
		background: url(./assets/img/head_bg.png) no-repeat center;
		display: flex;
		justify-content: space-between;
		align-items: center;
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

	.hero-container {
		background-color: var(--background-color-normal);
		border: 1px solid var(--color-gray-light);
		border-radius: 4px;
		filter: dropshadow(23, 3, 3, var(--color-gray));
		width: 100%;
		max-width: 239px;
		/* margin: 0 auto; */
		padding: 16px 20px;
	}

	.hero-content {
		display: flex;
		justify-content: space-evenly;
		margin: 0 0 20px;
	}

	.hero-title {
		display: flex;
		justify-content: center;
	}

	.hero-item {
		font: 500 24px 'Montserrat';
		cursor: pointer;
	}

	.hero-item .p-text {
		font: 500 1rem 'Montserrat';
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
		width: 30px;
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
</style>