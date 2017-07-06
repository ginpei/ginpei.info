<style scoped>
.container {
	margin: auto;
	width: 300px;
}
.tile-container {
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
};
</script>
