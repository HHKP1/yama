<template>
	<div class="input-field">
		<label :for="id">{{label}}</label>
		<input :id="id" :title="title" :placeholder="placeholder" :disabled="disabled" :prefix="prefix" :accept="accept" :value="value" :type="type" :ref="refs" :min="min" :max="max" :step="step"
			:data-length="dataLength"
			:data-success="dataSuccess"
			:data-error="dataError"
			:class="{'retail-input': 'retail-input', 'form-input': 'form-input'}"
			@input="$emit('input', $event.target.value)">
			<!-- <span :class="{ 'prefix': 'prefix' }">{{ prefix }}</span> -->
			<!-- <label :for="id">{{label}}</label> -->
	</div>
</template>
<script>
export default {
	props: {
		label: {
			type: String,
			required: false,
			default: ""
		},
		title: { type: String, required: true },
		type: {
			type: String,
			default: 'text',
			validator(value) {
				return ['text', 'email', 'password', 'tel', 'search', 'date', 'select', 'checkbox', 'number', 'file'].includes(value);
			}
		},
		max: { type: String, required: false },
		min: { type: String, required: false },
		step: { type: String, required: false },
		placeholder: { type: String, required: false },
		prefix: { type: String, required: false },
		disabled: { type: String, required: false },
		dataError: { type: String },
		dataSuccess: { type: String },
		dataLength: { type: String, required: false },
		refs: { type: Object },
		id: { type: String, required: false },
		accept: { type: String, required: false },
		value: {
			type: String,
			required: false,
		},
		mask: {
			type: String,
			default: '',
			required: false
		},
	}
};
</script>
<style scoped>
@import "~materialize-css/dist/css/materialize.css";
	/* .input-field > label{
		font-size: .9rem !important;
	} */
	.input-field > input{
		font-size: .9rem !important;
		font-family: "Montserrat-regular", Arial, sans-serif !important;
		padding: 6px 50px 6px 6px;
	}
	.input-field > input:not([type="date"]):not([type="text"]){
		position: relative;
		top: 0;
		right: 0;
		cursor: pointer;
		background: url(../assets/img/search_icon.png) no-repeat center right !important;
		/* clip-path: polygon(100% 0%, 0 0%, 50% 100%) !important; */
	}
	input {
		border: 1px solid #ccc !important;
		margin: 0 !important;
	}
	input::-webkit-input-placeholder{
		padding: 0 8px 0 0;
		color: var(--color-gray) !important;
	}
	input[type="text"]::-webkit-input-placeholder{
		text-indent: 4% !important;
		font-size: 12px;
		opacity: 1;
	}
	input[type="text"]::-webkit-input-placeholder{
		text-indent: 4% !important;
		font-size: 12px;
		opacity: 1;
		position: relative;
		top: 0px;
		right: 10px;
	}
	.input-field{
		position: relative;
		margin-top: .9rem !important;
		margin-bottom: .9rem !important;
	}
	.input-field>label.active{
		display: block;
		background: var(--color-white);
		background-color: var(--color-white);
		padding: 0 6px;
		transform-origin: 0 0;
		transform: translate(14px, -6px);
		font-size: 0.8rem !important;
		z-index: 1;
	}
	.input-field > label#currency {
		-webkit-transform: translateY(8px) translateX(16px) scale(0.8) !important;
		transform: translateY(8px) translateX(16px) scale(0.8) !important;
		-webkit-transform-origin: 0 0 !important;
		transform-origin: 0 0 !important;
	}
	.input-field > label {
		color: var(--color-gray);
		position: absolute;
		top: 0;
		left: 0;
		font-size: 1rem;
		cursor: text;
		transition: transform .2s ease-out, color .2s ease-out;
		transform-origin: 0% 100%;
		text-align: initial;
		/* transform: translateY(9px) !important; */
	}
	::-webkit-calendar-picker-indicator {
		color: rgba(0, 0, 0, 0);
		opacity: 1;
		display: block;
		background-size: cover;
		position: absolute;
		right: 2px;
		top: 30%;
	}
	.input-field label input[type="date"]{
		-webkit-transform: translateY(8px) translateX(16px) scale(0.8) !important;
		transform: translateY(8px) translateX(26px) scale(0.8) !important;
		-webkit-transform-origin: 0 0 !important;
		transform-origin: 0 0 !important;
	}
	.input-field input[type="date"]{
		color: var(--color-gray) !important;
	}
	.input-field #prefix{
		padding: 40px 0 17px 55px!important;
		box-sizing: border-box !important;
		max-width: 350px !important;
	}
	.retail-input{
		border: 1px solid #34B76C;
		-webkit-box-shadow: 0 1px 0 0 #26a69a;
		box-shadow: 0 0 1px 1px #26a69a;
	}
	.form-input{
		border-radius: 4px !important;
		max-width: 350px;
		height: 1.5rem !important;
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
			font-size: 14px !important;
		}
	}
	@media all and (min-width: 450px) {
		.input-field .helper-text{
			font-size: 16px !important;
		}
	}
	@media all and (min-width: 1020px) {
		.input-field .helper-text{
			font-size: 16px !important;
		}
	}
	.form-control{
		flex-flow: row wrap;
		flex: 0 0 50%;
		display: flex;
		/* padding: 0 0 0 80px; */
		justify-content: center;
	}
	.form-control_outline{
		flex-flow: row wrap;
		flex: 0 1 30%;
		display: flex;
	}
	/* .input-field > label:not(.label-icon).active {
		background-color: var(--color-white);
		padding: 0 6px;
	} */
	.input-field > label:not(.label-icon).is-invalid,.invalid {
		color: red;
		/*border-color: red;*/
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
		.prefix{
			position: absolute !important;
			/*top: 1.4rem !important;*/
		}
	}
	.input-field > label {
		color: #9e9e9e;
		position: absolute;
		top: 0;
		left: 0;
		font-size: 1rem;
		cursor: text;
		transition: transform .2s ease-out, color .2s ease-out;
		transform-origin: 0% 100%;
		text-align: initial;
		/* transform: translateY(9px) !important; */
}
	label#date{
		-webkit-transform: translateY(8px) translateX(16px) scale(0.8);
		transform: translateY(8px) translateX(16px) scale(0.8);
		-webkit-transform-origin: 0 0;
		transform-origin: 0 0;
	}
	/*.prefix{*/
	/*    display: none;*/
	/*}*/
	.prefix{
		top: 0px;
		width: 25px;
		cursor: pointer;
		background: url(../assets/img/search_icon.png) no-repeat center center !important;
		/* clip-path: polygon(100% 0%, 0 0%, 50% 100%) !important; */
	}
	@media (max-width: 450px) {
	.prefix{
		top: 32px;
		font-size: 15px !important;
	}
	}
</style>
