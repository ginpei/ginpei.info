<style lang="sass" scoped>
.tile
	--size: 100px
	--padding: 2px
	--margin: 2px
	--length: calc(var(--size) - var(--padding) * 2 - var(--margin) * 2)

	background-color: #006
	background-size: calc(var(--size) / 2)
	background-repeat: no-repeat
	background-position: center
	border-color: #999
	border-style: solid
	border-width: 0
	color: #fff
	float: left
	height: var(--length)
	margin: var(--margin)
	padding: var(--padding)
	position: relative
	transition: transform 300ms
	width: var(--length)

.tile:hover
	border-width: var(--padding)
	padding: 0

.tile--white
	background-color: #fff
	color: #006

.tile--light-grey
	background-color: #f2f2f2
	color: #006

.tile--large
	--size: 200px

.tile--wide
	width: calc(var(--size) * 2 - var(--padding) * 2 - var(--margin) * 2)

.tile--fillImage
	background-size: var(--size)


.title
	bottom: var(--padding)
	color: inherit
	left: var(--padding)
	position: absolute

.tile:hover .title
	bottom: 0
	left: 0
</style>

<template>
	<div @transitionend="transitionend" :class="classes" :style="styles" class="tile">
		<router-link :to="`/?tile=${this.title}`" class="title">{{title}}</router-link>
	</div>
</template>

<script>
module.exports = {
	props: [
		'color',
		'fill-image',
		'image',
		'size',
		'title',
	],

	data() {
		return {
			transitioning: false,
		};
	},

	computed: {
		open() {
			return this.$route.query.tile === this.title;
		},

		classes() {
			const classes = {};

			if (this.color) {
				classes[`tile--${this.color}`] = true;
			}

			if (this.size) {
				classes[`tile--${this.size}`] = true;
			}

			if (this.fillImage === 'yes') {
				classes['tile--fillImage'] = true;
			}

			return classes
		},

		styles() {
			const styles = {
				backgroundImage: this.backgroundImageStyleUrl,
			};
			if (this.open) {
				styles.transform = `scale(2)`;  // TODO fit screen
				styles.zIndex = 1;
			}
			else if (this.transitioning) {
				styles.zIndex = 1;
			}
			return styles;
		},

		backgroundImageStyleUrl() {
			if (this.image) {
				return `url("./static/images/${this.image}")`;
			}
			else {
				return null;
			}
		},
	},

	watch: {
		open(newVal, oldVal) {
			this.transitioning = true;
		},
	},

	methods: {
		transitionend(event) {
			this.transitioning = false;
		},
	},
};
</script>
