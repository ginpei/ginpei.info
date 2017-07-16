<style lang="sass" scoped>
.container
	margin: auto
	width: 300px

.tile-container

.overlay
	background-color: rgba(0,0,0,0.5)
	height: 100%
	left: 0
	position: fixed
	top: 0
	width: 100%

.fade-enter-active,
.fade-leave-active
  transition: opacity 300ms

.fade-enter,
.fade-leave-to
  opacity: 0

</style>

<template lang="pug">
	base-layout
		section(class="container")
			h1 About Ginpei
			div(class="tile-container")
				tile(title="Ginpei" image="ginpei.png" color="white" size="large")
				tile(title="GitHub" image="github.png")
				tile(title="Twitter" image="twitter.png")
				tile(title="Blog")
				tile(title="Instagram" size="wide")
		section(class="container")
			h1 Skills
			div(class="tile-container")
				tile(title="JavaScript" image="javascript.png" color="white" size="large" fill-image="yes")
				tile(title="Backbone.js" image="backbone.svg" color="light-grey")
		transition(name="fade")
			div(@click="overlay_onclick" v-show="openingTile" class="overlay")
</template>

<script>
const BaseLayout = require('../layouts/BaseLayout.vue');
const Tile = require('../components/Tile.vue');

module.exports = {
	components: {
		BaseLayout,
		Tile,
	},

	computed: {
		openingTile() {
			return !!this.$route.query.tile
		},
	},

	methods: {
		overlay_onclick(event) {
			this.$router.push('/');
		},
	},
};
</script>
