<template lang="pug">
	a(v-if="external" :href="url")
		slot
	router-link(v-else :to="internalUrl")
		slot
</template>

<script>
module.exports = {
	props: [
		'id',
		'url',
	],

	computed: {
		external() {
			return Boolean(this.url)
		},

		internalUrl() {
			return `/?tile=${this.id}`
		},
	},
}
</script>
