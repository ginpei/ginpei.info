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
.fade-enter-active,
.fade-leave-active {
  transition: opacity 300ms;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>

<template>
	<base-layout>
		<section v-for="c in contents" class="container">
			<h1>{{c.title}}</h1>
			<tile
				v-for="t in c.tiles"
				:id="t.id"
				:color="t.color"
				:fill-image="t.fillImage && 'yes'"
				:image="t.image"
				:size="t.size"
				:title="t.title"
				></tile>
		</section>
		<transition name="fade">
			<div @click="overlay_onclick" v-show="openingTile" class="overlay"></div>
		</transition>
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
			contents: [
				{
					title: 'About Ginpei',
					tiles: [
						{
							color: 'white',
							id: 'ginpei',
							image: 'ginpei.png',
							size: 'large',
							title: 'Ginpei',
						},
						{
							id: 'github',
							image: 'github.png',
							title: 'GitHub',
						},
						{
							id: 'twitter',
							image: 'twitter.png',
							title: 'Twitter',
						},
						{
							id: 'blog',
							title: 'Blog',
						},
						{
							id: 'instagram',
							size: 'wide',
							title: 'Instagram',
						},
					],
				},
				{
					title: 'About Ginpei',
					tiles: [
						{
							color: 'white',
							fillImage: true,
							id: 'javascript',
							image: 'javascript.png',
							size: 'large',
							title: 'JavaScript',
						},
						{
							color: 'light-grey',
							id: 'backbonejs',
							image: 'backbone.svg',
							title: 'Backbone.js',
						},
					],
				},
			],
		};
	},

	computed: {
		openingTile() {
			return !!this.$route.query.tile;
		},
	},

	methods: {
		overlay_onclick(event) {
			this.$router.push('/');
		},
	},
};
</script>
