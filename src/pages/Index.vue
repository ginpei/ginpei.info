<style lang="sass" scoped>
.container
	margin: 0 auto 2em
	width: 300px

.title
	margin-bottom: 1em

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
		section.container(v-for="s in $store.state.homeContent")
			h1.title {{s.title}}
			div.tile-container
				tile(v-for="t in s.contents" :tile="t")
		transition(name="fade")
			div(@click="overlay_onclick" v-show="openingTile" class="overlay")
</template>

<script>
const BaseLayout = require('../layouts/BaseLayout.vue')
const Tile = require('../components/Tile.vue')

module.exports = {
	components: {
		BaseLayout,
		Tile,
	},

	computed: {
		openingTile() {
			return Boolean(this.$route.query.tile)
		},
	},

	methods: {
		overlay_onclick(event) {
			this.$router.push('/')
		},
	},
}
</script>
