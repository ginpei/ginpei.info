<style scoped>
.container {
	margin: auto;
	width: 300px;
}
.tile-container {
}
.overlay {
	background-color: rgba(0,0,0,0.5);
	height: 100%;
	left: 0;
	position: fixed;
	top: 0;
	width: 100%;
}
</style>

<template>
	<base-layout>
		<section class="container">
			<h1>About Ginpei</h1>
			<div class="tile-container">
				<tile title="Ginpei" image="ginpei.png" color="white" size="large"></tile>
				<tile title="GitHub" image="github.png"></tile>
				<tile title="Twitter" image="twitter.png"></tile>
				<tile title="Blog"></tile>
				<tile title="Instagram" size="wide"></tile>
			</div>
		</section>
		<div @click="overlay_onclick" v-show="openingTile" class="overlay"></div>
	</base-layout>
</template>

<script>
const BaseLayout = require('../layouts/BaseLayout.vue');
const Tile = require('../components/Tile.vue');

module.exports = {
	components: {
		BaseLayout,
		Tile,
	},

	data() {
		return {
			openingTile: false,
		};
	},

	watch: {
		'$route.query.tile' (newVal, oldVal) {
			this.openingTile = !!newVal;
		},
	},

	methods: {
		overlay_onclick(event) {
			this.$router.push('/');
		},
	},
};
</script>
