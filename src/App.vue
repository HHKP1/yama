<template>
	<div id="app">
		<div id="nav">
			<img id="logo" src="./assets/images/logo_ukr_yama.png" alt="Logo">
			<div class='nav_links' v-for="(item, index) in this.navItems" :key="item.name" :data-index="index">
				<router-link :to='{path: item.path}'>{{ item.text }}</router-link>
			</div>
			<FormInput
				title=""
				label=""
				type="search"
				placeholder="Пошук за адресою або номером заяви"
				class="form-control"
				v-model="search"
			/>
			<button class="btn custom_button">Додати дефект</button>
		</div>
		<section>
			<div class="head">
			</div>
		</section>
		<router-view></router-view>
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
				{ name: 'About', text: 'Про проєкт', path: '/about' },
				{ name: 'Team', text: 'FAQ', path: '/faq' },
				{ name: 'Contacts', text: 'Контакти', path: '/contacts' },
			],
			search: ''
		}
	},
	created(){
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
#app {
  font-family: "Montserrat", Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav{
  padding: 15px 15px;
  display: flex;
  justify-content: flex-start;
	align-items: center;
	height:90px;
	width: 100%;
	border-bottom: 1px solid #BDBDBD;
}

.nav_links{
  margin: 0 15px !important
}
#nav a {
  font-weight: bold;
  transform: translate(-200px, 0);
  color: #2c3e50;
	font-size:.9rem;
  text-decoration:none;
  transition: all .6s ease-in-out;
}
#nav a:hover{
  transition: all .2s ease-in-out;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
#logo{
	margin: 0 45px 0 0;
}
.custom_button{
	background-color: var(--button-default) !important;
	font-weight: bold;
	min-height: 36px !important;
}
.custom_button:hover{
	background-color: var(--button-hover) !important;
}
.head{
	background: url(./assets/images/head_bg.png) no-repeat center;
}
</style>
