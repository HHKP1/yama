import 'regenerator-runtime/runtime';
import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import VueMq from 'vue-mq';

// Components
import FormInput from './components/FormInput';
import FormSelect from './components/FormSelect';
import DefectSortedGrid from './components/DefectSortedGrid.vue';

// Pages
import CollectionList from './components/CollectionList.vue';
import DefectView from './components/DefectView.vue';
import NotFoundPage from './components/404.vue';

// Uses
Vue.use(VueRouter)

const moment = require('moment');
require('moment/locale/uk');

Vue.use(require('vue-moment'), {
	moment
});

Vue.use(VueMq, { breakpoints: { sm: 450, md: 1135, lg: Infinity }, defaultBreakpoint: 'lg' });

const routes = [
	{ path: '/', component: CollectionList },
	// { path: '/collections', component: CollectionList },
	// { path: '/collections/:listType', component: CollectionList },
	{ path: '/defect/:id', component: DefectView, name: 'DefectView' },
	// { path: '/defect/', components: DefectSortedGrid, name: 'DefectSortedGrid' },
	{ path: '/404', component: NotFoundPage },
]

const router = new VueRouter({
	routes, // short for `routes: routes`
	mode: 'history',
});

Vue.config.productionTip = false;
Vue.prototype.$eventBus = new Vue();

// Register Components
Vue.component('FormInput', FormInput);
Vue.component('FormSelect', FormSelect);
Vue.component('DefectSortedGrid', DefectSortedGrid);

new Vue({
	render: h => h(App),
	router,
}).$mount('#app')
