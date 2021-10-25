<template>
	<div class="content_wrapper">
		<mq-layout mq="md+">
			<div class="filters_block">
								<div class="defect_filters">
										<p class="filter_title" style="text-align:left;">фільтри</p>
								</div>
								<FormInput
									title=""
									label="Адреса"
									prefix=""
									placeholder="Пошук дефектів за адресою"
									v-model="searchAddressFilter"
									class="form-control"
								/>
								<FormSelect
									label="Регіон"
									placeholder="Тип дефекту"
									:options="options.options_filter_by_region_id"
									v-model="selectedRegion"
									class="form-control"
								/>
								<div class="input-field form-control">
									<label style="position:absolute;left:0">Дата розміщення</label>
									<div class="flex-inline" style="flex-wrap: wrap;border: 1px solid var(--color-gray-light);padding: 10px 50px 10px 6px;border-radius: 4px;font-size: 0.9rem;">
										<div class="form__wrapper interval table-sort__select">
											<div class="select" style="text-align: left;font-size: .9rem;" title="Фільтрація по даті розміщення">
												<div class="select-item_choosen" @click="dateRangeFilterShown=!dateRangeFilterShown">
													<p class="select-item_choosen__option placeholder-form" v-bind:class="{'arrow_animation': dateRangeFilterShown}">
														<span>{{ periodShow.length>0?periodShow:"Дата розміщення" }}</span>
														<img class="calendar_icon" src="../assets/img/calendar.png" alt="">
														<span class="calendar__icon" v-if="periodShow == ''"></span>
													</p>
												</div>
											</div>
											<div class="calendar" ref="dateRangeFilter" v-if="dateRangeFilterShown" v-on:mouseleave="dateRangeFilterShown=false;">
												<span class="calendar__reset" @click="resetCalendar">Скинути</span>
												<input type="checkbox" id="calendarSwitch" ref="calendarSwitch" hidden>
												<div class="calendar__container">
													<div class="calendar__start" :class='{calendar__start_mg: periodStart.length==0}'>
														<p class="calendar__heading">Початок періоду</p>
														<Datepicker class="" @input="updatePeriodStart" :value="periodStart.length>0?new Date(Date.parse(periodStart)):''" :inline="true"></Datepicker>
													</div>
													<label class="calendar__label" for="calendarSwitch">
														<span class="calendar__switch" :class='{ calendar__switch_enabled: periodStart.length>0}'></span>
													</label>
													<div class="calendar__end">
														<p class="calendar__heading">Закінчення періоду</p>
														<Datepicker class="" @input="updatePeriodEnd" :value="periodEnd.length>0?new Date(Date.parse(periodEnd)):''" :inline="true"></Datepicker>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<FormSelect
									label="Тип дефекту"
									ref="typesFilter"
									placeholder="Тип дефекту"
									:options="options.options_filter_by_defect_type"
									v-model="selectedType"
									class="form-control"
								/>
								<FormSelect
									label="Розташування"
									placeholder="Місце розташування дефекту"
									:options="options.options_filter_by_def_location_type"
									v-model="selectedLocationType"
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
									<p style="width:100%">
										<label style="display:flex" for="customcheck">
											<input type="checkbox" id="customcheck" @click="selfFilters = !selfFilters" v-model="selfFilters" class="filled-in"/>
											<span class="custom_checkbox">Показувати тільки мої дефекти</span>
										</label>
									</p>
								</div>
								<button :key="dfCard.id" class="btn outline_button" v-if="!queryCheck.some(o => queryStr.includes(o))" @click="showMap = !showMap">{{ !showMap?'Показати на мапі':'Згорнути мапу' }}</button>
								<button class="btn custom_button" @click="loadDefects()">Показати</button>
								<button class="btn custom_button" @click="resetFilters(true)">Скинути всі фільтри</button>
			</div>
			<!-- <GoogleMap modalTitle="Google" :defectId="defectID.defID" v-if="showMap"/> -->
		</mq-layout>
		<mq-layout mq="sm_album">
			<div class="filters_block">
								<div class="defect_filters">
										<p class="filter_title" style="text-align:left;">фільтри</p>
								</div>
								<FormInput
									title=""
									label="Адреса"
									prefix=""
									placeholder="Пошук дефектів за адресою"
									v-model="searchAddressFilter"
									class="form-control"
								/>
								<FormSelect
									label="Регіон"
									placeholder="Тип дефекту"
									:options="options.options_filter_by_region_id"
									v-model="selectedRegion"
									class="form-control"
								/>
								<div class="input-field form-control">
									<label>Дата розміщення</label>
									<div class="flex-inline" style="flex-wrap: wrap;border: 1px solid var(--color-gray-light);padding: 10px 50px 10px 6px;border-radius: 4px;font-size: 0.9rem;">
										<div class="form__wrapper interval table-sort__select">
											<div class="select" style="text-align: left;font-size: .9rem;" title="Фільтрація по даті розміщення">
												<div class="select-item_choosen" @click="dateRangeFilterShown=!dateRangeFilterShown">
													<p class="select-item_choosen__option placeholder-form" v-bind:class="{'arrow_animation': dateRangeFilterShown}">
														<span>{{ periodShow.length>0?periodShow:"Дата розміщення" }}</span>
														<img class="calendar_icon" src="../assets/img/calendar.png" alt="">
														<span class="calendar__icon" v-if="periodShow == ''"></span>
													</p>
												</div>
											</div>
											<div class="calendar" ref="dateRangeFilter" v-if="dateRangeFilterShown" v-on:mouseleave="dateRangeFilterShown=false;">
												<span class="calendar__reset" @click="resetCalendar">Скинути</span>
												<input type="checkbox" id="calendarSwitch" ref="calendarSwitch" hidden>
												<div class="calendar__container">
													<div class="calendar__start" :class='{calendar__start_mg: periodStart.length==0}'>
														<p class="calendar__heading">Початок періоду</p>
														<Datepicker class="" @input="updatePeriodStart" :value="periodStart.length>0?new Date(Date.parse(periodStart)):''" :inline="true"></Datepicker>
													</div>
													<label class="calendar__label" for="calendarSwitch">
														<span class="calendar__switch" :class='{ calendar__switch_enabled: periodStart.length>0}'></span>
													</label>
													<div class="calendar__end">
														<p class="calendar__heading">Закінчення періоду</p>
														<Datepicker class="" @input="updatePeriodEnd" :value="periodEnd.length>0?new Date(Date.parse(periodEnd)):''" :inline="true"></Datepicker>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<FormSelect
									label="Тип дефекту"
									ref="typesFilter"
									placeholder="Тип дефекту"
									:options="options.options_filter_by_defect_type"
									v-model="selectedType"
									class="form-control"
								/>
								<FormSelect
									label="Розташування"
									placeholder="Місце розташування дефекту"
									:options="options.options_filter_by_def_location_type"
									v-model="selectedLocationType"
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
								<button :key="dfCard.id" class="btn outline_button" v-if="!queryCheck.some(o => queryStr.includes(o))" @click="showMap = !showMap">{{ !showMap?'Показати на мапі':'Згорнути мапу' }}</button>
								<button class="btn custom_button" @click="loadDefects()">Показати</button>
								<button class="btn custom_button" @click="resetFilters(true)">Скинути всі фільтри</button>
			</div>
			<!-- <GoogleMap modalTitle="Google" :defectId="defectID.defID" v-if="showMap"/> -->
		</mq-layout>
		<mq-layout mq="sm">
					<div class="container_works_mb">
						<div class="container_defects_mb">
							<div class="filters_controls_mb">
										<p class="filter_title_mb" :class="{expand: isExpand}" @click="isExpand = !isExpand" style="text-align:left;">фільтри</p>
										<!-- <div class="sorted_item_mb">
											<FormSelect
												label="Сортування"
												placeholder=""
												:options="options.options_sort_by"
												v-model="sort_by"
												class="form-control_outline_mb"
												type="search"
											/>
										</div> -->
							</div>
							<div class="defect_filters_mb">
								<div class="filters_block_mb" :class="{expand: isExpand}">
									<div class="input-field form-control">
											<label>Дата розміщення</label>
											<div class="flex-inline" style="flex-wrap: wrap;padding: 10px 6px;border: 1px solid var(--color-gray-light);border-radius: 4px;font-size: 0.9rem;">
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
								</div>
									<FormInput
									title=""
									label="Адреса"
									prefix=""
									placeholder="Пошук дефектів за адресою"
									v-model="searchAddressFilter"
									class="form-control"
								/>
								<FormSelect
									label="Тип дефекту"
									placeholder="Тип дефекту"
									:options="options.options_filter_by_defect_type"
									v-model="selectedType"
									class="form-control"
								/>
								<FormSelect
									label="Розташування"
									placeholder="Місце розташування дефекту"
									:options="options.options_filter_by_def_location_type"
									v-model="selectedLocationType"
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
									<button :key="dfCard.id" class="btn outline_button" v-if="!queryCheck.some(o => queryStr.includes(o))" @click="showMap = !showMap">{{ !showMap?'Показати на мапі':'Згорнути мапу' }}</button>
									<button class="btn custom_button" :class="{active: btnActive}" @click="loadDefects()">Показати</button>
									<button class="btn custom_button" @click="resetFilters(true)">Скинути всі фільтри</button>
								</div>
							</div>
						</div>
					</div>
		</mq-layout>
	</div>
</template>

<script>
import Vue from 'vue';
import Datepicker from 'vuejs-datepicker';

// import defectCards from './mock_data';

export default {
	name: 'defects',
	components: {
		Datepicker,
	},
	data() {
		return {
			options: {
				options_sort_by: [
					{ label: 'Новий', value: 'new' },
					{ label: 'Погоджений', value: 'approved' },
					{ label: 'В процесі', value: 'in_progress' },
					{ label: 'Відправлений', value: 'sent' },
					{ label: 'Немає відповіді', value: 'no_answer' },
					{ label: 'Ескалований', value: 'escalation' },
					{ label: 'Є відповідь', value: 'replied' },
					{ label: 'Виправлений', value: 'fixed' },
					{ label: 'Відхилиний', value: 'rejected' },
				],
				options_filter_by_region_id: [
					{ label: 'Оберіть регіон', disabled: 'disabled' },
					{ label: 'Всі регіони', value: '', },
					{ label: 'АР Крим', value: '2', },
					{ label: 'Вінницька область', value: '3', },
					{ label: 'Волинська область', value: '4' },
					{ label: 'Дніпропетровська область', value: '5', },
					{ label: 'Донецька область', value: '6', },
					{ label: 'Житомирська область', value: '7', },
					{ label: 'Закарпатська область', value: '8', },
					{ label: 'Запорізька', value: '9', },
					{ label: 'ІваноФранківська область', value: '10', },
					{ label: 'Київська область', value: '11', },
					{ label: 'Кіровоградська область', value: '12', },
					{ label: 'Луганська область', value: '13', },
					{ label: 'Львівська область', value: '14', },
					{ label: 'Миколаївська область', value: '15' },
					{ label: 'Одеська область', value: '16', },
					{ label: 'Полтавська область', value: '17', },
					{ label: 'Рівненська область', value: '18', },
					{ label: 'Сумська область', value: '19', },
					{ label: 'Тернопільська область', value: '20', },
					{ label: 'Харківська область', value: '21', },
					{ label: 'Херсонська область', value: '22', },
					{ label: 'Хмельницька', value: '23', },
					{ label: 'Черкаська область', value: '24', },
					{ label: 'Чернігівська область', value: '25', },
					{ label: 'Чернівецька область', value: '26' },
					{ label: 'Севастополь', value: '27', },
					{ label: 'Київ', value: '115', },
				],
				options_filter_by_defect_type: [
					{ label: 'Тип дефекту', value: '', disabled: 'disabled' },
					{ label: 'Яма', value: 'hole', },
					{ label: 'Ремонтується', value: 'manually', },
					{ label: 'Розмітка', value: 'Markup' },
					{ label: 'Не якісний ремонт', value: 'PoorQualityRepair', },
					{ label: 'Сніг', value: 'Snow', },
					{ label: 'Інородний об\'єкт', value: 'ForeignObj', },
					{ label: 'Яма у дворі', value: 'yard_hole', },
					{ label: 'Руйнування', value: 'ruined', },
					{ label: 'Освітлення', value: 'lighting', },
				],
				options_filter_by_def_location_type: [
					{ label: 'Місце розташування дефекту', value: '', disabled: 'disabled' },
					{ label: 'Місто', value: 'city' },
					{ label: 'Шосе', value: 'highway' },
					{ label: 'У дворі', value: 'back_yard' },
				],
				options_filter_by_def_status: [
					{ label: 'Статус дефекту', value: '', disabled: 'disabled' },
					{ label: 'Новий', value: 'new' },
					{ label: 'Погоджений', value: 'approved' },
					{ label: 'В процесі', value: 'in_progress' },
					{ label: 'Відправлений', value: 'sent' },
					{ label: 'Немає відповіді', value: 'no_answer' },
					{ label: 'Ескалований', value: 'escalated' },
					{ label: 'Є відповідь', value: 'replied' },
					{ label: 'Виправлений', value: 'fixed' },
					{ label: 'Відхилений', value: 'rejected' },
				],
			},
			comment: '',
			isComments: false,
			showMap: false,
			isOpen: false,
			isActive: false,
			isExpand: false,
			btnActive: false,
			appsLoaded: false,
			orgInfo: [],
			filterOrgInfo: [],
			regions: [],
			searchAddressFilter: '',
			search_by_date: '',
			search_by_type: '',
			sort_by: '',
			appsUpdating: false,
			selectedRegion: '',
			selectedLocationType: '',
			selectedStatus: '',
			selectedType: '',
			// listType: 'ruined',
			selfFilters: false,
			periodStart: '',
			periodEnd: '',
			page: 1,
			limit: 100,
			pendingUpdate: null,
			dateRangeFilterShown: false,
			appsUpdateInterval: null,
			queryCheck: [],
			queryStr: '',
		}
	},
	async created() {
		Vue.prototype.$API2 = this;
		// this.loadRegions(true);
		this.$eventBus.$on('orgN', async e => {
			if(e!=this.orgInfo) {
				await this.loadDefects(true);
			}
		})
	},
	beforeUpdate(){
		// if(Object.keys(this.$route.query))
		// 	this.btnActive=true;
	},
	mounted() {
		this.$API.title = "Дефекти";
		this.$API.page = "defects";
		// console.log(this.$route);

		this.searchAddressFilter=this.$API.appsFilter.searchAddressFilter;
		this.search_by_date=this.$API.appsFilter.search_by_date;
		this.search_by_type=this.$API.appsFilter.search_by_type;
		this.sort_by=this.$API.appsFilter.sort_by;
		this.selectedRegion=this.$API.appsFilter.selectedRegion;
		this.selectedLocationType=this.$API.appsFilter.selectedLocationType;
		this.selectedStatus=this.$API.appsFilter.selectedStatus;
		this.selectedType=this.$API.appsFilter.selectedType;
		this.periodStart=this.$API.appsFilter.periodStart;
		this.periodEnd=this.$API.appsFilter.periodEnd;

		// this.$cookies.set('yamasession', '77d89dff-1fd7-4d0c-83ab-81b5204b342a')

		// if(this.$route.params.listType && ['hole', 'manually', 'ForeignObj', 'ruined', 'PoorQualityRepair', 'Snow', 'yard_hole'].indexOf(this.$route.params) > -1)
		// 	this.listType = this.$route.params.listType;
		// else
		// 	this.listType = '';
		// Object.entries(this.$route.query).forEach(([key, value]) => {
		// 	if(key in this.$API.appsFilters) {
		// 		this.$API.appsFilters[key] = value;
		// 	}
		// });
		this.loadDefects(true);
	},
	methods: {
		resetFilters() {
			this.resetApps();
			this.searchAddressFilter='';
			this.search_by_date='';
			this.search_by_type='';
			this.sort_by='';
			this.selectedRegion='';
			this.selectedLocationType='';
			this.selectedStatus='';
			this.selectedType='';
			this.periodStart='';
			this.periodEnd='';
		},
		listClick(e, url) {
			if(e && (e.which == 2 || e.button == 4)) {
				e.preventDefault(true);
				window.open(url, "_new");
			}
		},
		async loadDefects(change){
			if(this.appsUpdating) return;
			this.appsUpdating=true;
			if(!this.isActive)
				this.isActive=true;
			if(!this.btnActive)
				this.btnActive=true;
			if(!this.appsLoaded)
				this.appsLoaded=true;
			try{
				this.pendingUpdate = this.$API.apiGETv2("/defects?" + this.appQuery() + (!this.appsLoaded?'&forceUpdate=true':''));
				let result = await this.pendingUpdate.ready;
				if(!this.isActive)
					this.isActive=true;
				this.orgInfo = result;
				if(!this.appsLoaded)
					this.appsLoaded = true;
				this.btnActive=false;
				this.$eventBus.$emit('orgInfo', this.orgInfo);
			}catch(e){
				console.log(e);
				this.isActive=true;
			}
			this.appsUpdating = false;
			this.pendingUpdate = null;
		},
		// async loadRegions(change){
		// 	try{
		// 		let result = await this.$API.apiGET("/regions");

		// 		this.regions=result;
		// 	}catch(e){
		// 		console.log(e);
		// 	}
		// },
		resetApps() {
			// this.orgInfo=[];
			this.appsLoaded = false;
			if(this.pendingUpdate) {
				this.pendingUpdate.abort();
			}
		},
		updatePeriodStart(date) {
			this.periodStart = this.$moment(date).format("MM-DD-YYYY");
			if(this.periodEnd !== '') {
				let start = date;
				let end = Date.parse(this.periodEnd);
				if(start > end) {
					this.periodEnd = this.periodStart;
				}
			}
			this.$refs.calendarSwitch.checked = true;
		},
		updatePeriodEnd(date) {
			this.periodEnd = this.$moment(date).format("MM-DD-YYYY");
			let start = Date.parse(this.periodStart);
			let end = date;
			if(start > end) {
				this.periodStart = this.periodEnd;
			}
			this.dateRangeFilterShown = false;
			this.$refs.calendarSwitch.checked = false;
		},
		resetCalendar() {
			this.periodStart = '';
			this.periodEnd = '';
			this.dateRangeFilterShown = false;
			this.$refs.calendarSwitch.checked = false;
		},
		appQuery() {
			let loadingParams = {};
			// loadingParams.type = this.listType;
			if(this.selectedStatus)
				loadingParams.status = this.selectedStatus;
			if(this.periodStart)
				loadingParams.since = this.periodStart;
			if(this.periodEnd)
				loadingParams.to = this.periodEnd;
			if(this.selectedType)
				loadingParams.type = this.selectedType;
			if(this.selectedLocationType)
				loadingParams.location = this.selectedLocationType;
			if(this.searchAddressFilter)
				loadingParams.address = this.searchAddressFilter;
			if(this.selectedRegion)
				loadingParams.region = this.selectedRegion;
			return Object.keys(loadingParams).map(key => key + '=' + loadingParams[key]).join('&');
		},
		appListFilter(app) {
			let show = true;

			if(this.searchAddressFilter.length > 0) {
				show = app.address && app.address.toLowerCase().includes(this.searchAddressFilter.toLowerCase());
			}
			if(!show) return false;

			if(this.periodStart.length > 0 && this.periodEnd.length > 0) {
				show = app.added >= Date.parse(this.periodStart) && app.added <= Date.parse(this.periodEnd) + 86400000;
			}
			if(!show) return false;

			return true;
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
		changeOrgInfo() {
			// this.orgInfo = [];
			this.$eventBus.$emit('applicationUpdated', this.orgInfo)
		},
	},
	computed: {
		periodShow() {
			if(this.periodStart) {
				let start = this.$moment(Date.parse(this.periodStart)).format("DD-MM-YYYY");
				if(this.periodEnd) {
					let end = this.$moment(Date.parse(this.periodEnd)).format("DD-MM-YYYY");
					return ('c ' + start + ' по ' + end).replace(/-/g, ".");
				}
				return ('с ' + start).replace(/-/g, ".");
			}
			return '';
		},
		defectID() {
			return this.orgInfo.map(def => {
				return {
					defID: def.id
				}
			})
		},
		dfCard(){
			return this.orgInfo.map(card => {
				return {
					id: card.id,
					address: card.address,
					photo: card.photos,
					status: card.case_status.current.status,
					comments: card.comments,
					// author: card.author.name,
					defect_type: card.defect_type,
					// region_id: card.photos[0].region_id,
				}
			});
		},
	},
	watch: {
		periodStart() {
			if(this.periodStart == '') {
				this.removeQueryParam('since');
			} else {
				this.addQueryParam('since', this.periodStart);
			}
			this.loadDefects(true);
		},
		periodEnd() {
			if(this.periodEnd == '') {
				this.removeQueryParam('to');
			} else {
				this.addQueryParam('to', this.periodEnd);
			}
			this.loadDefects(true);
		},
		selectedStatus() {
			if(this.selectedStatus == '') {
				this.removeQueryParam('status');
			} else {
				this.addQueryParam('status', this.selectedStatus);
			}
			this.loadDefects(true);
		},
		selectedRegion() {
			if(this.selectedRegion == '') {
				this.removeQueryParam('region');
			} else {
				this.addQueryParam('region', this.selectedRegion);
			}
			this.loadDefects(true);
		},
		selectedType() {
			if(this.selectedType == '') {
				this.removeQueryParam('type');
			} else {
				this.addQueryParam('type', this.selectedType);
			}
			this.loadDefects(true);
		},
		selectedLocationType() {
			if(this.selectedLocationType == '') {
				this.removeQueryParam('location');
			} else {
				this.addQueryParam('location', this.selectedLocationType);
			}
			// this.resetApps();
			this.loadDefects(true);
		},
		searchAddressFilter() {
			if(this.searchAddressFilter == '') {
				this.removeQueryParam('address');
			} else {
				this.addQueryParam('address', this.searchAddressFilter);
			}
			this.resetApps();
			this.loadDefects(true);
			this.isActive=true;
		},
		// '$route.query'(query){
		// 	console.log(Object.keys(query).length);
		// 	if(Object.keys(query).length===0){
		// 		this.loadDefects(true);
		// 	}
		// }
		page(){
			this.loadDefects()
		}
	},
	beforeDestroy() {
		this.$API.appsFilter.searchAddressFilter=this.searchAddressFilter;
		this.$API.appsFilter.search_by_date=this.search_by_date;
		this.$API.appsFilter.search_by_type=this.search_by_type;
		this.$API.appsFilter.sort_by=this.sort_by;
		this.$API.appsFilter.selectedRegion=this.selectedRegion;
		this.$API.appsFilter.selectedLocationType=this.selectedLocationType;
		this.$API.appsFilter.selectedStatus=this.selectedStatus;
		this.$API.appsFilter.selectedType=this.selectedType;
		this.$API.appsFilter.periodStart=this.periodStart;
		this.$API.appsFilter.periodEnd=this.periodEnd;
		clearInterval('orgN');
		clearInterval(this.appsUpdateInterval);
		this.resetApps();
	},
}
</script>

<style>
	.calendar_icon {
        color: rgba(0, 0, 0, 0);
        opacity: 1;
        /*display: block;*/
        background: url(../assets/img/calendar.png) no-repeat center;
        background-size: 2% 2%;
        width: 20px;
        height: 20px;
        position: absolute;
        right: 20px;
        top: 30%;
    }
	.btn-map-enter-active {
		transition: all 0.5s ease-out;
		color:red
	}
	.btn-map-leave-active {
		transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
	}
	/* .btn-map-enter-to{
		transform: translateX(-100px);
	} */
	/* .btn-map-leave-to{
		transform: translateX(0px);
	} */
	.btn-map-enter-to{
		transform: translateX(100px);
		color:red;
	}
	.btn-map-leave{
		transform: translateX(0px);
	}
	.select-item_choosen:hover {
		border: solid 1px var(--border-color-hover);
	}

	.calendar__container{
		width: 600px;
		/* position: relative; */
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-align: center;
		-ms-flex-align: center;
		align-items: center;
		-webkit-transform: translateX(0px);
		transform: translateX(0px);
		-webkit-transition: all .3s;
		transition: all .3s;
	}

	.calendar {
		position: absolute;
		top: 30px;
		left: 0;
		padding: 10px;
		border: 1px solid var(--color-gray-light);
		border-radius: 4px;
		background-color: var(--background-color-normal);
		z-index: 2;
		overflow: hidden;
		/* height: 330px; */
		max-width: 350px;
		width: 315px;
		box-sizing: border-box;
	}

	.calendar__switch_enabled{
		display: block;
	}

	#calendarSwitch:not(:checked)~.calendar__container .calendar__switch {
		width: 20px;
		content: url('../assets/img/icons/arrow-right.svg');
	}

	#calendarSwitch:checked~.calendar__container .calendar__switch {
		width: 20px;
		content: url('../assets/img/icons/arrow-left.svg');
	}

	#calendarSwitch:checked~.calendar__container {
		transform: translateX(-290px) !important;
		transition: all .3s;
	}

	#calendarSwitch:not(:checked)~.calendar__container .calendar__switch {
		width: 20px;
		content: url('../assets/img/icons/arrow-right.svg');
	}

	#calendarSwitch:checked~.calendar__container .calendar__switch {
		width: 20px;
		content: url('../assets/img/icons/arrow-left.svg');
		transition: all .3s;
	}

	#calendarSwitch:checked~.calendar__container {
		transform: translateX(-310px);
		transition: all .3s;
	}
	.calendar__start,
	.calendar__end {
		align-self: flex-start;
	}
	.vdp-datepicker__calendar {
		border: none !important;
		background: var(--background-color-normal) !important;
		width: 280px !important;
	}
	.calendar__reset {
		position: absolute;
		top: 22px;
		right: 16px;
		z-index: 99;
	}

	.calendar__reset:hover {
		background-color: var(--status-color-warning);
		cursor: pointer;
		border-radius: 4px;
		padding: 2px;
		transition: all .2s ease-in;
	}

	.calendar__heading {
		font-size: 1.2rem;
		margin-top: 10px;
		margin-bottom: 10px;
		margin-left: 10px;
		text-align: left;
	}
	.calendar__label{
		display: flex;
	}
	.calendar__label:hover {
		cursor: pointer;
		background: var(--background-color-prefooter);
		border-radius: 4px;
	}
	.calendar__start_mg {
		margin-right: 40px;
	}
</style>