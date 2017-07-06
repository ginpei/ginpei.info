<style scoped>
.tile {
	--size: 100px;
	--padding: 2px;
	--margin: 2px;
	--length: calc(var(--size) - var(--padding) * 2 - var(--margin) * 2);

	background-color: #006;
	background-size: calc(var(--size) / 2);
	background-repeat: no-repeat;
	background-position: center;
	border-color: #999;
	border-style: solid;
	border-width: 0;
	color: #fff;
	float: left;
	height: var(--length);
	margin: var(--margin);
	padding: var(--padding);
	position: relative;
	width: var(--length);
}
.tile:hover {
	border-width: var(--padding);
	padding: 0;
}
.tile--white {
	background-color: #fff;
	color: #006;
}
.tile--large {
	--size: 200px;
}
.tile--wide {
	width: calc(var(--size) * 2 - var(--padding) * 2 - var(--margin) * 2);
}

.title {
	position: absolute;
	left: var(--padding);
	bottom: var(--padding);
}
.tile:hover .title {
	left: 0;
	bottom: 0;
}
</style>

<template>
	<div :class="classes" :style="styles" class="tile">
		<span class="title">{{title}}</span>
	</div>
</template>

<script>
module.exports = {
	props: [
		'color',
		'image',
		'size',
		'title',
	],

	computed: {
		classes() {
			const classes = {
				// colors
				'tile--white': this.color === 'white',

				// sizes
				'tile--large': this.size === 'large',
				'tile--wide': this.size === 'wide',
			};
			return classes
		},

		styles() {
			const styles = {
				backgroundImage: this.backgroundImageStyleUrl,
			};
			console.debug(styles);
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
};
</script>
