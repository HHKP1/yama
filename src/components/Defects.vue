<template>
	<div style="flex: 0 0 25%">
		<mq-layout mq="md+">
			<div class="filters_block">
				<div class="defect_filters">
						<p class="filter_title" style="text-align:left;">фільтри</p>
				</div>
				<FormInput
					title=""
					label="Автор"
					prefix=""
					placeholder="Пошук дефектів за адресою"
					v-model="search_by_author"
					class="form-control"
				/>
				<!-- <div class="input-field form-control">
							<label>Дата розміщення</label>
							<div class="flex-inline" style="flex-wrap: wrap;border: 1px solid var(--color-gray-light);border-radius: 4px;font-size: 0.9rem;">
								<div class="form__wrapper interval table-sort__select">
									<div class="select" style="text-align: left;font-size: .9rem;" title="Фильтрация по дате создания заявки">
										<div class="select-item_choosen" @click="dateRangeFilterShown=!dateRangeFilterShown">
											<p class="select-item_choosen__option placeholder-form" v-bind:class="{'arrow_animation': dateRangeFilterShown}">
												<span>{{ periodShow.length>0?periodShow:"Дата розміщення" }}</span>
												<span class="calendar__icon" v-if="periodShow == ''"></span>
											</p>
										</div>
									</div>
									<div class="calendar" ref="dateRangeFilter" v-if="dateRangeFilterShown" v-on:mouseleave="dateRangeFilterShown=false;">
										<span class="calendar__reset" @click="resetCalendar">Сбросить</span>
										<input type="checkbox" id="calendarSwitch" ref="calendarSwitch" hidden>
										<div class="calendar__container">
											<div class="calendar__start" :class='{calendar__start_mg: periodStart.length==0}'>
												<p class="calendar__heading">Начало периода</p>
												<Datepicker class="" @input="updatePeriodStart" :value="periodStart.length>0?new Date(Date.parse(periodStart)):''" :inline="true"></Datepicker>
											</div>
											<label class="calendar__label" for="calendarSwitch">
												<span class="calendar__switch" :class='{ calendar__switch_enabled: periodStart.length>0}'></span>
											</label>
											<div class="calendar__end">
												<p class="calendar__heading">Окончание периода</p>
												<Datepicker class="" @input="updatePeriodEnd" :value="periodEnd.length>0?new Date(Date.parse(periodEnd)):''" :inline="true"></Datepicker>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div> -->
				<FormSelect
					label="Тип дефекту"
					ref="typesFilter"
					placeholder="Тип дефекту"
					:options="options.options_filter_by_def_type"
					v-model="selectedType"
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
					v-model="selectedStatus"
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
		</mq-layout>
		<mq-layout mq="sm">
					<div class="container_works_mb">
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
									v-model="search_by_author"
									class="form-control"
								/>
								<!-- <div class="input-field form-control">
											<label>Дата розміщення</label>
											<div class="flex-inline" style="flex-wrap: wrap;border: 1px solid var(--color-gray-light);border-radius: 4px;font-size: 0.9rem;">
												<div class="form__wrapper interval table-sort__select">
													<div class="select" style="text-align: left;font-size: .9rem;" title="Фильтрация по дате создания заявки">
														<div class="select-item_choosen" @click="dateRangeFilterShown=!dateRangeFilterShown">
															<p class="select-item_choosen__option placeholder-form" v-bind:class="{'arrow_animation': dateRangeFilterShown}">
																<span>{{ periodShow.length>0?periodShow:"Дата розміщення" }}</span>
																<span class="calendar__icon" v-if="periodShow == ''"></span>
															</p>
														</div>
													</div>
													<div class="calendar" ref="dateRangeFilter" v-if="dateRangeFilterShown" v-on:mouseleave="dateRangeFilterShown=false;">
														<span class="calendar__reset" @click="resetCalendar">Сбросить</span>
														<input type="checkbox" id="calendarSwitch" ref="calendarSwitch" hidden>
														<div class="calendar__container">
															<div class="calendar__start" :class='{calendar__start_mg: periodStart.length==0}'>
																<p class="calendar__heading">Начало периода</p>
																<Datepicker class="" @input="updatePeriodStart" :value="periodStart.length>0?new Date(Date.parse(periodStart)):''" :inline="true"></Datepicker>
															</div>
															<label class="calendar__label" for="calendarSwitch">
																<span class="calendar__switch" :class='{ calendar__switch_enabled: periodStart.length>0}'></span>
															</label>
															<div class="calendar__end">
																<p class="calendar__heading">Окончание периода</p>
																<Datepicker class="" @input="updatePeriodEnd" :value="periodEnd.length>0?new Date(Date.parse(periodEnd)):''" :inline="true"></Datepicker>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div> -->
								<FormSelect
									label="Тип дефекту"
									placeholder="Тип дефекту"
									:options="options.options_filter_by_def_type"
									v-model="selectedType"
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
									v-model="selectedStatus"
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
						</div>
					</div>
		</mq-layout>
	</div>
</template>

<script>
import Vue from 'vue';
// import CollectionList from '../components/CollectionList'

// import defectCards from './mock_data';

export default {
	name: 'defects',
	components: {
		// CollectionList
	},
	data() {
		return {
			options: {
				options_sort_by: [
					{ label: 'Нові', value: 'new' },
					{ label: 'В процесі', value: 'in_progress' },
				],
				options_filter_by_def_type: [
					{ label: 'Тип дефекту', value: '', disabled: 'disabled' },
					{ label: 'Яма', value: 'hole', },
					{ label: 'Ремонтується', value: 'manually', },
					{ label: 'Розмітка', value: 'Markup' },
					{ label: 'Не якісний ремонт', value: 'PoorQualityRepair', },
					{ label: 'Сніг', value: 'Snow', },
					{ label: 'Інородний об\'єкт', value: 'ForeignObj', },
					{ label: 'Яма у дворі', value: 'yard_hole', },
					{ label: 'Руйнування', value: 'ruined', },
				],
				options_filter_by_def_location: [
					{ label: 'Місце розташування дефекту', value: '', disabled: 'disabled' },
					{ label: 'Місто', value: 'city' },
					{ label: 'Шосе', value: 'highway' },
					{ label: 'У дворі', value: 'back_yard' },
				],
				options_filter_by_def_status: [
					{ label: 'Статус дефекту', value: '', disabled: 'disabled' },
					{ label: 'Нові', value: 'new' },
					{ label: 'В процесі', value: 'in_progress' },
				],
			},
			comment: '',
			isComments: false,
			isOpen: false,
			isActive: false,
			isExpand: false,
			appsLoaded: false,
			orgInfo: [],
			searchAuthorFilter: '',
			search_by_author: '',
			search_by_date: '',
			search_by_location_place: '',
			search_by_type: '',
			sort_by: '',
			appsUpdating: false,
			selectedStatus: '',
			selectedType: '',
			listType: '',
			selfFilters: false,
			pendingUpdate: null,
			appsUpdateInterval: null,
		}
	},
	async created() {
		Vue.prototype.$API2 = this;
	},
	mounted() {
		this.$API.title = "Дефекти";
		this.$API.page = "defects";

		if(this.$route.params.listType && ['hole', 'manually', 'ForeignObj', 'ruined', 'PoorQualityRepair', 'Snow', 'yard_hole'].indexOf(this.$route.params.listType) > -1)
			this.listType = this.$route.params.listType;
		else
			this.listType = '';

		this.loadDefects(true);
		this.appsUpdateInterval = setInterval(this.loadDefects, 10);
	},
	methods: {
		listClick(e, url) {
			if(e && (e.which == 2 || e.button == 4)) {
				e.preventDefault(true);
				window.open(url, "_new");
			}
		},
		async loadDefects(change) {
			if (this.appsUpdating) return;
			this.appsUpdating = true;
			try {
				this.pendingUpdate = await this.$API.apiGETv2("/defects?" + this.appQuery() + (!this.appsLoaded ? '&forceUpdate=true' : ''), false);
				this.orgInfo = await this.pendingUpdate.ready;
				if (!this.appsLoaded)
					this.appsLoaded = true;
			} catch (e) {
				console.log(e);
			}
			this.appsUpdating = false;
			this.pendingUpdate = null;
		},
		resetApps() {
			this.orgInfo=[];
			this.appsLoaded = false;
			if(this.pendingUpdate) {
				this.pendingUpdate.abort();
			}
		},
		appQuery() {
			let loadingParams = {};
			loadingParams.type = this.listType;
			// if(this.selectedStatus)
			// 	loadingParams.case_status = this.selectedStatus;
			if(this.selectedType)
				loadingParams.type = this.selectedType;
			return Object.keys(loadingParams).map(key => key + '=' + loadingParams[key]).join('&');
		},
		appListFilter(app) {
			let show = true;

			if(this.searchAuthorFilter.length > 0) {
				show = app.author.name && app.author.name.toLowerCase().includes(this.author.name.toLowerCase());
			}
			return show;
		},
		addQueryParam(param, value) {
			let query = Object.assign({}, this.$route.query);
			query[param] = value;
			this.$router.replace({
				query
			}, e => {});
		},
		removeQueryParam(param) {
			let query = Object.assign({}, this.$route.query);
			delete query[param];
			this.$router.replace({
				query
			}, e => {});
		},
		// changeOrgInfo() {
		// 	this.orgInfo = [];
		// 	this.$eventBus.$emit('applicationUpdated', this.orgInfo)
		// }
	},
	computed: {
		//API Data
		// dfCard(){
		// 	return this.orgInfo.map(card => {
		// 		return {
		// 			id: card.id,
		// 			address: card.address,
		// 			photo: card.photos,
		// 			status: card.case_status,
		// 			comment: card.comments,
		// 			author: card.author.name,
		// 			defect_type: card.defect_type,
		// 			// region_id: card.photos[0].region_id,
		// 		}
		// 	});
		// },
	},
	watch: {
		selectedType() {
			if(this.selectedType === null) {
				this.removeQueryParam('type');
			} else {
				this.addQueryParam('type', this.selectedType);
			}
			this.resetApps();
		},
		'$route.params'(type) {
			// if(!type)
			// 	type = "hole";
			// this.$API.appListType = type;
			// this.$API2.selectedStatus = this.selectedStatus;
			// this.$API2.selectedType = this.selectedType;
			// this.$API2.searchAuthorFilter = this.searchAuthorFilter;
			this.listType = type;
			if(this.$refs.typesFilter)
				this.$refs.typesFilter.reset();
			// if(this.$refs.statusFilter)
			// 	this.$refs.statusFilter.reset();
			this.resetApps();
		},
	},
	beforeDestroy() {
		clearInterval(this.appsUpdateInterval);
	}
}
</script>

<style>
</style>
