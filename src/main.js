import Vue from 'vue'
import App from './App.vue'
import NotFoundPage from './components/404.vue';
import VueRouter from 'vue-router';

Vue.config.productionTip = false

Vue.use(VueRouter)

const moment = require('moment');
require('moment/locale/uk');

Vue.use(require('vue-moment'), {
	moment
});

const routes = [
	{ path: '/404', component: NotFoundPage },
]

const router = new VueRouter({
	routes, // short for `routes: routes`
	mode: 'history',
});

new Vue({
	render: h => h(App),
	router,
}).$mount('#app')
