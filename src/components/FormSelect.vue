<template>
	<div class="input-field">
		<label :for="id">
			{{ label }}
		</label>
		<span @click="resetFilter" title="Скинути фільтр" class="close_icon" v-if="value">
			<img src="../assets/img/icons/cross.svg" alt="">
		</span>
		<select
		:value="value"
		:disabled="disabled"
		:placaholder="placeholder"
		:id="id"
		:class="{
		'form-input': 'form-input','active': 'active', 'form-control_outline': 'form-control_outline', 'form-control_outline_mb': 'form-control_outline_mb', 'form-control': 'form-control'
		}"
				@change.self="$emit('input', $event.target.value)"
		>
			<option
					v-for="opt in options"
					:key="opt.value"
					:value="opt.value"
					:disabled="opt.disabled"
					:selected="value === opt.value"
			>
			{{ opt.label || 'No label' }}
			</option>
		</select>
		</div>
</template>

<script>
export default {
// eslint-disable-next-file no-indent
	name: "FormSelect",
	props: {
		label: {
			type: String,
			required: false,
			default: '',
		},
		placeholder: { type: String, required: false },
		id: { type: String, required: false },
		dataError: { type: String },
		dataSuccess: { type: String },
		options: {
			type: Array,
			required: true,
			// validator(opts) {
			// 	return !opts.find(opt => typeof opt !== 'object');
			// }
		},
		disabled: {
			type: String,
			required: false
		},
		value: {
			type: String,
			required: true,
		},
	},
	data(){
		return {
		}
	},
	methods: {
		resetFilter(){
			this.startValue='';
		},
		removeQueryParam(param) {
			let query = Object.assign({}, this.$route.query);
			delete query[param];
			this.$router.replace({
				query
			}, e => {});
		},
	},
	computed: {
		startValue: {
			get: function () {
				return this.value;
			},
			set: function(newValue){
				// $emit is the correct way to update props:
				this.$emit('input', newValue);
			}
		}
	},
	watch: {
		value(){
			if(this.value=='')
				this.removeQueryParam(this.$route.query);
		}
	}
};
</script>

<style scoped>
	.close_icon{
		position:absolute;
		right:10%;
		top:25%;
		z-index:99;
		transition:all 0.4s ease-out;
	}
	.close_icon img{
		width: 18px;
		height: 18px;
	}
	.close_icon:hover{
		transform: scale(1.2);
	}
	.input-field > label{
		font-size: .9rem;
		padding: 0 6px 0 6px;
		position: absolute;
	}
	select {
		display: flex;
		/*box-sizing: border-box;*/
		background-color: rgba(255, 255, 255, .1);
		padding: 0;
		font-size: 1.6rem;
		color: var(--color-gray) !important;
	}
	select:focus {
		outline: none;
	}
	.input-field > select{
		font-size: .9rem !important;
		font-family: "Montserrat", Arial, sans-serif !important;
		height: 2.5rem;
		border-radius: 4px !important;
	}
	.input-field > select.active{
		/* background: url('../assets/img/icons/cross.svg') no-repeat right; */
		background-size: 16px 16px;
	}
	@media (max-width: 450px){
		.input-field > select{
			max-height: 35px !important;
			width: 100%;
		}
	}
	.input-field > label:not(.label-icon).active {
		color: #34B76C;
	}
	.input-field > label:not(.label-icon).active {
		background: url('../assets/img/icons/cross.svg') no-repeat right;
	}
	.input-field > label:not(.label-icon).is-invalid,.invalid {
		color: red;
		/*border-color: red;*/
	}
	.input-field > input.is-invalid, .invalid{
		color: #1D1E1E;
		border-color: red;
	}
	label > input[type="select"].is-valid,.valid{
		color: #1D1E1E !important;
		/*border-color: red;*/
	}
	.input-field > label:not(.label-icon).is-valid,.valid{
		color: #1D1E1E;
	}
	.input-field > span .is-valid,.valid{
		color: #1D1E1E;
	}
	.input-field > label:not(.label-icon).is-valid_input, .valid_input{
		color: #1D1E1E;
	}
	input[type="select"]::placeholder{
		color: #000;
		opacity: 1 !important;
	}
	.retail-input{
		border: 1px solid #26a69a;
		-webkit-box-shadow: 0 1px 0 0 #26a69a;
		box-shadow: 0 0 1px 1px #26a69a;
	}
	.form-input{
		border-radius: 8px !important;
		max-width: 400px;
		height: 4rem !important;
		font-size: 1rem;
		/*max-height: 60px;*/
	}
	.full_width{
		width: 100%;
	}
	.input-field {
		position: relative;
		margin-top: .5rem;
		margin-bottom: .5rem;
	}
	.input-field .helper-text::after {
		opacity: 1;
		position: absolute;
		top: 0;
		left: 0;
		padding-left: 16px;
	}
	@media all and (min-width: 320px) {
		.input-field .helper-text{
			font-size: 10px !important;
		}
	}
	@media all and (min-width: 640px) {
		.input-field .helper-text{
			font-size: 14px !important;
		}
	}
	@media all and (min-width: 1020px) {
		.input-field .helper-text{
			font-size: 16px !important;
		}
	}
	@media all and (min-width: 1020px) {
		.input-field .helper-text{
			font-size: 18px !important;
		}
	}
	.form-control{
		flex-flow: row wrap;
		flex: 1 1 50%;
		display: flex;
		cursor: pointer;
	}
	.input-field > label:not(.label-icon).active {
		color: #34B76C;
	}
	.input-field > label:not(.label-icon).is-invalid,.invalid {
		color: red;
	}
	.input-field > label:not(.label-icon).is-valid,.valid{
		color: #34B76C;
	}
	@media all and (max-width: 450px){
		.form-control{
			flex: 1 1 51% !important;
			flex-flow: row wrap;
			display: flex;
		}
		.input-field > label{
			font-size: 1rem;
		}
	}
</style>
