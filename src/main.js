import 'regenerator-runtime/runtime';
import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import Meta from 'vue-meta';
// import gsap from 'gsap';
import VueMq from 'vue-mq';
// import axios from 'axios';
// import VueAxios from 'vue-axios';
import * as VueGoogleMaps from 'vue2-google-maps';
import GmapCluster from 'vue2-google-maps/dist/components/cluster';
import VueLazyload from 'vue-lazyload';

// Components
import FormInput from './components/FormInput';
import FormSelect from './components/FormSelect';
import DefectSortedGrid from './components/DefectSortedGrid.vue';
// import PageLoader from './components/PageLoader.vue';

// Pages
const Defects = () => import(/*webpackChunkName: 'defects'*/ '@/components/Defects.vue').then(m => m.default || m);
const CollectionList = () => import(/*webpackChunkName: 'collectionlist'*/ '@/components/CollectionList.vue').then(m => m.default || m);
const DefectView = () => import(/*webpackChunkName: 'defectview'*/ '@/components/DefectView.vue').then(m => m.default || m);
const GoogleMap = () => import(/*webpackChunkName: 'googlemap'*/ '@/components/GoogleMap.vue').then(m => m.default || m);
// const NotFoundPage = () => import(/*webpackChunkName: 'notfoundpage'*/' ./components/404.vue');

// Register Components
Vue.component('Defects', Defects);
Vue.component('FormInput', FormInput);
Vue.component('FormSelect', FormSelect);
Vue.component('DefectSortedGrid', DefectSortedGrid);
// Vue.component('PageLoader', PageLoader);
Vue.component('GmapCluster', GmapCluster);
Vue.component('GoogleMap', GoogleMap);
Vue.component('infoWindow', VueGoogleMaps.InfoWindow);

// Uses
const moment = require('moment');
require('moment/locale/uk');
const GOOGLE_API_KEY = (process.env.NODE_ENV === 'production'?"AIzaSyCD2V05CVIKPwj76Vb5AUwiL3vrWAErhek":"AIzaSyCD2V05CVIKPwj76Vb5AUwiL3vrWAErhek");

Vue.use(require('vue-moment'), {
	moment
});

Vue.use(Meta, {
	keyName: 'metaInfo',
	// attribute: 'data-vue-meta',
	// ssrAttribute: 'data-vue-meta-server-rendered',
	tagIDKeyName: 'vmid',
	refreshOnceOnNavigation: true
});

Vue.use(VueLazyload);

// Vue.use(VueAxios, axios);
// Vue.use(gsap);
Vue.use(VueRouter)
Vue.use(VueMq, { breakpoints: { sm: 450, sm_album: 850, md: 1135, lg: Infinity }, defaultBreakpoint: 'lg' });
Vue.use(VueGoogleMaps, { load: { key: GOOGLE_API_KEY, region: 'UA', language: 'uk-UA' }, libraries: 'places', installComponents: true });

const routes = [
	{ path: '/', component: CollectionList, props: true },
	{ path: '/collections',
		component: CollectionList,
		props: true
	},
	{ path: '/collections', component: GoogleMap, name: 'GoogleMap', props: true },
	{ path: '/:id', component: DefectView, props: true },
	// { path: '/404', component: NotFoundPage },
]

const router = new VueRouter({
	routes, // short for `routes: routes`
	mode: 'hash',
	base: './',
});

Vue.config.productionTip = false;
Vue.prototype.$eventBus = new Vue();

new Vue({
	render: h => h(App),
	router,
}).$mount('#app')
