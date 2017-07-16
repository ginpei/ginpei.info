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
						fillImage: true,
						image: 'javascript.png',
						size: 'large',
						title: 'JavaScript',
					},
					{
						color: 'light-grey',
						image: 'Backbone.svg',
						title: 'Backbone.js',
					},
					{
						title: 'jQuery',
					},
					{
						color: 'light-grey',
						image: 'coffeescript.png',
						title: 'CoffeeScript',
					},
					{
						color: 'light-grey',
						image: 'jasmine.svg',
						title: 'Jasmine',
					},
					{
						color: 'orange',
						title: 'HTML',
					},
					{
						color: 'light-grey',
						image: 'jade.svg',
						title: 'Jade',
					},
					{
						color: 'light-blue',
						title: 'CSS',
					},
					{
						image: 'sass.png',
						title: 'Sass',
					},
					{
						image: 'vim.svg',
						title: 'Vim',
					},
					{
						image: 'git.png',
						title: 'Git',
					},
					{
						image: 'Ruby_on_Rails.svg',
						title: 'Ruby on Rails',
						size: 'wide',
					},
					{
						image: 'cpp.png',
						title: 'C++',
					},
				],
			},
			{
				title: 'Favorite and Hobby',
				contents: [
					{
						title: 'Rock Music',
					},
					{
						title: 'Playing Drums',
					},
					{
						color: 'white',
						fillImage: true,
						image: 'thePillows.png',
						title: 'the pillows',
					},
					{
						fillImage: true,
						image: 'pianojac.png',
						size: 'large',
						title: '→Pia-no-jaC←',
					},
					{
						color: 'brown',
						title: 'Playing Cajon and Percussions',
					},
					{
						fillImage: true,
						image: 'hiromiUehara.png',
						title: 'Hiromi Uehara',
					},
					{
						color: 'brown',
						fillImage: true,
						image: 'makingSushi.jpg',
						title: 'Making Sushi',
					},
				],
			},
			{
				title: 'Paper Publication',
				contents: [
					{
						fillImage: true,
						image: 'publication-20140203.jpg',
						title: '25 March 2015',
					},
					{
						fillImage: true,
						image: 'publication-20150325.jpg',
						title: '3 February 2014',
					},
				],
			},
			{
				title: 'Contact',
				contents: [
					{
						size: 'wide',
						title: 'ginpei@gmail.com',
					},
				],
			},
		],
	},
})
