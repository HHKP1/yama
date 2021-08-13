<template>
	<div class="just-text">
		<h1>Страница не найдена</h1>
		<h6 style="margin-bottom:40px;">Если у вас возникли какие-то проблемы - напишите в поддержку <a href="mailto:support@ukryama.com.ua" style="color:#34b76c;">support@ukryama.com.ua</a></h6>
		<a class="button" href="/">На главную</a>
	</div>
</template>
<script>
export default {
	name: 'NotFoundPage',
	mounted(){
		this.$parent.title="Ошибка";
	}
};
</script>