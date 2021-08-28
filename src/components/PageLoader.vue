<template>
	<div style="position:fixed;top:0;left:0;width:100%;height:100vh;z-index:9999;overflow:hidden;">
		<div class="page-loader" v-show="isloaded">
			<div class="circle"></div>
			<div class="circle"></div>
		</div>
		<div id="loader-title">
			<span class="title_ltr" :ref="lett.refName" v-for="lett in letters" :key="lett.id">{{ lett.ltr }}</span>
		</div>
	</div>
</template>

<script>
import gsap from 'gsap';

let timeline;
export default {
	data: () => {
		return {
			isloaded: false,
			letters: [
				{ ltr: 'У', refName: 'ref1' },
				{ ltr: 'к', refName: 'ref2' },
				{ ltr: 'р', refName: 'ref3' },
				{ ltr: 'Я', refName: 'ref4' },
				{ ltr: 'м', refName: 'ref5' },
				{ ltr: 'а', refName: 'ref6' },
			],
			staggerLetters: []
		}
	},
	mounted() {
		document.onreadystatechange = async () => {
			if (await document.readyState == "interactive") {
				this.isloaded = true;
			}
		}
		const leters = this.$refs;
		timeline = gsap.timeline();

		Object.values(leters).forEach(l => {
			// console.log(l);
			this.staggerLetters.push(l);
		})
		// eslint-disable-next-line no-floating-decimal
		timeline.from(this.staggerLetters, { autoAlpha: 0, y: 10, scale: .9, duration: .7, ease: 'power4.Out', stagger: 0.09 }, '+=3');
		// eslint-disable-next-line no-floating-decimal
		timeline.to(this.staggerLetters, { autoAlpha: 0, duration: .8, ease: 'power4.Out', stagger: 0.09 }, '+=1');
	}
}
</script>

<style scoped>
.page-loader {
	display: flex;
	justify-content: center;
	align-items: center;
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	background-color: #333;
	z-index: 999;
}
#loader-title{
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 999;
	position: absolute;
	top: 44%;
	left: 55%;
}
.circle{
	width: 30px;
	height: 30px;
	margin-right: 10px;
	will-change: transform;
}
.circle:first-child {
	background: blue;
	filter: drop-shadow(2px 4px 7px rgba(0,0,0, .4));
	animation: left 1.7s ease-in-out infinite;
}
.circle:last-child {
	background: yellow;
	filter: drop-shadow(2px 4px 7px rgba(0,0,0, .4));
	animation: right 1.7s ease-in-out infinite;
}
@keyframes left {
	0% {
		transform: translateX(0) scale(.8);
		z-index: 5;

	}
	50% {
		transform: translateX(35px) scale(1.2);
	}
	100% {
		transform: translateX(0) scale(.8);
	}
  }
@keyframes right {
	0% {
		transform: translateX(0) scale(1.1);
	}
	50% {
		transform: translateX(-40px) scale(.8);
	}
	100% {
		transform: translateX(0) scale(1.1);
	}
}
.title_ltr{
	font: 700 5rem 'Montserrat-Bold';
	color: transparent;
	position: relative;
	/* margin: 0 4px; */
	will-change: transform;
	background-clip: text;
	background-image: url('../assets/img/ukrainian-pattern.svg');
	background-size:cover;
}
</style>