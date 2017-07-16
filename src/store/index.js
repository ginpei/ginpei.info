const Vue = require('vue')
const Vuex = require('vuex')

Vue.use(Vuex)

module.exports = new Vuex.Store({
	state: {
		homeContent: [
			{
				title: 'About Ginpei',
				contents: [
					{
						color: 'white',
						image: 'ginpei.png',
						size: 'large',
						title: 'Ginpei',
					},
					{
						image: 'github.png',
						title: 'GitHub',
					},
					{
						image: 'twitter.png',
						title: 'Twitter',
					},
					{
						title: 'Blog',
					},
					{
						size: 'wide',
						title: 'Instagram',
					},
				],
			},
			{
				title: 'Skills',
				contents: [
					{
						color: 'white',
						fillImage: 'yes',
						image: 'javascript.png',
						size: 'large',
						title: 'JavaScript',
					},
					{
						color: 'light-grey',
						image: 'Backbone.svg',
						title: 'Backbone.js',
					},
				],
			},
		],
	},
})
