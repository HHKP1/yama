<template>
	<div id="app">
		<main>
			<div id="nav">
				<a class="logo_lonk" href="/">
					<img id="logo" src="./assets/img/logo_ukr_yama.png" alt="Logo">
				</a>
				<div class='nav_links' v-for="(item, index) in this.navItems" :key="item.name" :data-index="index">
					<router-link :to='{path: item.path}'>{{ item.text }}</router-link>
				</div>
				<FormInput title="" label="" type="search" placeholder="Пошук за адресою або номером заяви"
					class="form-control" v-model="search" />
				<button class="btn custom_button">Додати дефект</button>
			</div>
			<section class="main">
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
			<section class="how_it_works">
				<div class="container_works">
					<h2 class="work-item">Як це працює</h2>
					<div class="container_steps">
						<div class="step_item">
							<div class="step_icon">
								<img src="./assets/img/icons/mdi_camera-plus-outline.svg" title="Додати дефект" alt="Picture of deffect">
							</div>
							<p class="step_description">Додати дефект</p>
						</div>
						<div class="arrow_forward">
							<img src="./assets/img/icons/Line_45.svg" alt="">
						</div>
						<div class="step_item">
							<div class="step_icon">
								<img src="./assets/img/icons/mdi_file-document-edit-outline.svg" alt="">
							</div>
							<p class="step_description">Надіслати заяву в поліцію<br/> та чекати відповідь</p>
						</div>
						<div class="arrow_fork">
							<img src="./assets/img/icons/fork_arrow.svg" alt="">
						</div>
						<div class="step_item_col">
							<div class="step_item">
								<div class="step_icon">
									<img src="./assets/img/icons/mdi_file-check-outline.svg" alt="">
								</div>
								<p class="step_description">Отримати відповідь</p>
							</div>
							<div class="step_item">
								<div class="step_icon">
									<img src="./assets/img/icons/mdi_account-multiple-remove-outline.svg" alt="">
								</div>
								<p class="step_description">Немає відповіді</p>
							</div>
						</div>
						<div class="arrow_fork_up">
							<img src="./assets/img/icons/fork_arrow_up.svg" alt="">
						</div>
						<div class="step_item">
							<div class="step_icon">
								<img src="./assets/img/icons/bx_bx-traffic-cone.svg" alt="">
							</div>
							<p class="step_description">Ремонт ділянки</p>
						</div>
						<div class="arrow_fork_down">
							<img src="./assets/img/icons/Line_50.svg" alt="">
						</div>
						<div class="step_item_col">
							<div class="step_item">
								<div class="step_icon">
									<img src="./assets/img/icons/mdi_alert-octagon-outline.svg" alt="">
								</div>
								<p class="step_description">Відмова</p>
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
			</section>
			<section class="collection_defects">
				<div class="container_works">
					<h2 class="work-item">Як це працює</h2>
					<div class="container_defects">
						<div class="defect_filters">
							<p class="filter_title" style="text-align:left;">фільтри</p>
							<div class="filters_block">
								<FormInput
									prefix=""
									title=""
									label=""
									placeholder="Пошук дефектів за адресою"
									v-model="search_by_adress"
									class="form-control"
									type="search"
								/>
								<FormInput
									title=""
									label=""
									placeholder="Дата розміщення дефекту"
									v-model="search_by_date"
									class="form-control"
									type="date"
								/>
								<FormInput
									title=""
									label=""
									placeholder="Тип дефекту"
									v-model="search_by_type"
									class="form-control"
									type="text"
								/>
								<FormInput
									title=""
									label=""
									placeholder="Місце розташування дефекту"
									v-model="search_by_location_place"
									class="form-control"
									type="text"
								/>
								<FormInput
									title=""
									label=""
									placeholder="Статус дефекту"
									v-model="search_by_status"
									class="form-control"
									type="text"
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
						<div class="defect_content">
							<div class="defect_filter_count">
								<div class="defect_filter_item">
									<p class="defect_title">Загалом дефектів знайдено: <span>{{ dfCard.length }}</span></p>
									<p class="defect_title">Кількість регіонів: <span>{{ dfCard.region_id }}</span></p>
								</div>
							</div>
							<div class="sorted_item">
								<p class="sorted_title">Показані останні дефекти зі змінами (за замовчуванням)</p>
								<FormSelect
									title=""
									label=""
									placeholder=""
									:options="options.sort_by_options"
									v-model="sort_by"
									class="form-control_outline"
									type="search"
								/>
							</div>
							<div class="grid-container">
								<div class="defect_card" v-for='(card, idx) of dfCard' :key='idx'>
									<div class="defect_image">
										<img class="card_image" :src="card.photo[0].url" alt="">
										<p class="defect_date">{{ new Date(card.photo[0].timestamp) | moment("DD.MM.YY в HH:mm") }}</p>
									</div>
									<div class="defect_info">
										<div class="defect_status">
											<div class="status_item">
												<span>Новий</span>
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
							<!-- <div class="card_pagination">
								<div class="pagination_control">

								</div>
							</div> -->
						</div>
					</div>
				</div>
			</section>
			<section class="pre_footer">
				<div class="footer_container">
					<div class="main-hero head-hero">
						<div class="hero-title">
							<p class="hero-item">Дороги – наша відповідальність, контролюй це!</p>
						</div>
					</div>
					<div class="button_container">
						<button class="btn outline_button">Допомогти проєкту</button>
						<button class="btn custom_button">Додати дефект</button>
					</div>
				</div>
			</section>
			<section class="footer">
				<div id="footer_nav">
					<div class="footer_logo">
						<a href="/">
							<img id="logo" src="./assets/img/logo_ukr_yama.png" alt="Logo">
						</a>
						<p class="trade_mark">УкрЯма&copy;{{ new Date() | moment("YYYY") }}</p>
					</div>
					<div class="footer_links">
						<div class='nav_links' v-for="(item, index) in this.navItemsFooter" :key="item.name" :data-index="index">
						<router-link :to='{path: item.path}'>{{ item.text }}</router-link>
					</div>
					</div>
				</div>
			</section>
			<router-view></router-view>
		</main>
	</div>
</template>

<script>
import Vue from 'vue';
import './assets/css/main.css';
import FormInput from './components/FormInput';
import FormSelect from './components/FormSelect';
import defectCards from './mock_data';
export default {
	name: 'App',
	components: {
		FormInput,
		FormSelect
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
				sort_by_options: [
					{ label: 'Найновіщі', value: 'newest' },
					{ label: 'Старіщі', value: 'oldest' },
				],
			},
			orgInfo: [],
			cardCount: 10,
			apiURL: '/api',
			search: '',
			search_by_adress: '',
			search_by_date: '',
			search_by_location_place: '',
			search_by_type: '',
			search_by_status: '',
			sort_by: '',
			selfFilters: false,
		}
	},
	created() {
		Vue.prototype.$API = this;
	},
	mounted() {
		this.loadCard(true);
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
		async loadCard(change){
			this.pendingUpdate = this.$API.apiGET("/defects?limit=8");
			let result = await this.pendingUpdate;
			console.log(result);
			this.orgInfo=result;
			return this.orgInfo;
		}
	},
	computed: {
		defectCard(){
			return defectCards.map(card => {
				// console.log(card);
				return {
					address: card.address,
					photo: card.photos,
					// status: card.case_status,
					comment: card.comments,
				}
			})
		},
		dfCard(){
			return this.orgInfo.map(card => {
				console.log(card);
				return {
					address: card.address,
					photo: card.photos,
					// status: card.case_status,
					comment: card.comments[0].text,
				}
			});
		},
	},
	watch: {}
}
</script>

<style>
@import "~materialize-css/dist/css/materialize.css";
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
		margin: 0 15px !important;
		white-space: nowrap;
	}

	a {
		font-weight: bold;
		color: #2c3e50;
		font-size: .9rem;
		text-decoration: none;
	}

	#nav a.router-link-exact-active {
		color: #42b983;
	}

	#logo {
		margin: 0 45px 0 0;
	}

	.custom_button {
		font: 700 1.1rem 'Montserrat';
		background-color: var(--button-default);
		font-size: .9rem;
		font-weight: bold;
		text-transform: none;
		max-width: 239px;
		width: 100%;
		margin:10px 0;
	}
	.outline_button{
		font: 700 1.1rem 'Montserrat';
		background-color: var(--button-outline);
		font-size: .9rem;
		font-weight: bold;
		text-transform: none;
		max-width: 239px;
		width: 100%;
		color: var(--color-black);
		border: 1px solid var(--color-black);
		margin:5px 0;
	}
	.hero-btn{
		font: 700 1.1rem 'Montserrat';
		width: 100%;
		max-width: 176px;
		text-transform: none;
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
		cursor: text;
	}

	.hero-item .help-tips{
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
	.work-item{
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
		left: 23%;
		margin: 0 0 25px;
		width: 10%;
	}
	.arrow_fork{
		position: absolute;
		left: 40%;
		width: 10%;
	}
	.arrow_fork_up{
		position: absolute;
		left: 61%;
		top: 35%;
		width: 9%;
	}
	.arrow_fork_down{
		position: absolute;
		left: 58%;
		bottom: 22%;
		width: 10%;
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
	}
	.defect_filters{
		flex: 0 1 30%;
	}
	.sorted_item{
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		padding: 0 16px;
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
		max-width: 160px;
		border: 1px solid var(--color-gray);
		border-radius: 4px;
		min-height: 200px;
		max-height: 200px;
		padding: 10px;
		place-self: center;
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
	.defect_status{
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.defect_date{
		color: white;
		position: absolute;
		display: flex;
		font-size: .8rem;
		left: 4%;
		bottom: 4%;
	}
	.card_image{
		object-fit: cover;
		width: 100%;
		max-width: 140px;
		max-height: 120px;
		min-width: 140px;
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
		padding: 40px 20px;
	}
	.pre_footer{
		margin: 20px 0;
		background: var(--background-color-prefooter);
	}
	.button_container{
		display: flex;
		flex: 0 1 44%;
		align-items: center;
		justify-content: space-between;
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
		border-bottom: 2px solid var(--color-red);
	}
</style>