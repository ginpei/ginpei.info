<style lang="sass" scoped>
.tile
	--size: 100px
	--padding: 2px
	--margin: 2px
	--borderWidth: 2px
	--spaces: calc(var(--margin) + var(--borderWidth) + var(--padding))
	--length: calc(var(--size) - var(--spaces) * 2)

	background-color: #006
	background-size: calc(var(--size) / 2)
	background-repeat: no-repeat
	background-position: center
	border-color: transparent
	border-style: solid
	border-width: var(--borderWidth)
	color: #fff
	float: left
	height: var(--length)
	margin: var(--margin)
	padding: var(--padding)
	position: relative
	transition: transform 300ms
	width: var(--length)

	&:hover
		border-color: rgba(192,192,192,0.7)

.tile--white
	background-color: #fff
	color: #006

	.title
		text-shadow: 1px 1px 0 #ccc

.tile--light-grey
	background-color: #f2f2f2
	color: #006

	.title
		text-shadow: 1px 1px 0 #ccc

.tile--brown
	background-color: #b89f7a
	color: #fff

.tile--orange
	background-color: #f7b36e
	color: #fff

.tile--light-blue
	background-color: #6699cc
	color: #fff

.tile--large
	--size: 200px

.tile--wide
	width: calc(var(--size) * 2 - var(--spaces) * 2

.tile--fillImage
	background-size: var(--size)


.title
	bottom: var(--padding)
	color: inherit
	font-size: 14px
	left: var(--padding)
	position: absolute
	text-shadow: 1px 1px 0 #666

// indicate external links
a[href^="http:"],
a[href^="https:"],
a[href^="mailto:"]
	.title::after
		content: "🚀"  // rocker emoji
		display: inline-block
		visibility: hidden

	.tile:hover
		.title
			text-decoration: underline

		.title::after
			animation: rocket 1s alternate
			border-bottom-style: none
			border-bottom-width: 0
			opacity: 0
			transform: translate(0.5em, -0.5em)
			visibility: visible

@keyframes rocket
	0%
		opacity: 1
		transform: translate(0, 0)
	50%
		transform: translate(0.5em, -0.5em)
	70%
		opacity: 1
	100%
		opacity: 0
</style>

<template lang="pug">
	tile-link(:id="id" :url="url")
		div(@transitionend="transitionend" :class="classes" :style="styles" class="tile")
			span.title {{title}}
</template>

<script>
const TileLink = require('./TileLink.vue')

module.exports = {
	components: {
		TileLink,
	},

	props: [
		'tile',
	],

	data() {
		return {
			transitioning: false,
		}
	},

	computed: {
		color() {
			return this.tile.color
		},
		fillImage() {
			return this.tile.fillImage
		},
		id() {
			return this.tile.id
		},
		image() {
			return this.tile.image
		},
		size() {
			return this.tile.size
		},
		title() {
			return this.tile.title
		},
		url() {
			return this.tile.url
		},

		open() {
			return this.$route.query.tile === this.id
		},

		classes() {
			const classes = {}

			if (this.color) {
				classes[`tile--${this.color}`] = true
			}

			if (this.size) {
				classes[`tile--${this.size}`] = true
			}

			if (this.fillImage) {
				classes['tile--fillImage'] = true
			}

			return classes
		},

		styles() {
			const styles = {
				backgroundImage: this.backgroundImageStyleUrl,
			}
			if (this.open) {
				styles.transform = 'scale(2)'  // TODO fit screen
				styles.zIndex = 1
			}
			else if (this.transitioning) {
				styles.zIndex = 1
			}
			return styles
		},

		backgroundImageStyleUrl() {
			if (this.image) {
				return `url("./static/images/${this.image}")`
			}
			else {
				return null
			}
		},
	},

	watch: {
		open(newVal, oldVal) {
			this.transitioning = true
		},
	},

	methods: {
		transitionend(event) {
			this.transitioning = false
		},
	},
}
</script>
