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
						url: 'https://github.com/ginpei',
					},
					{
						image: 'twitter.png',
						title: 'Twitter',
						url: 'https://twitter.com/ginpei_en/',
					},
					{
						title: 'Blog',
						url: 'https://ginpen.com/',
					},
					{
						size: 'wide',
						title: 'Instagram',
						url: 'https://instagram.com/ginpei/',
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
						url: 'http://backbonejs.org/',
					},
					{
						title: 'jQuery',
						url: 'https://jquery.com/',
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
						url: 'http://jasmine.github.io/',
					},
					{
						color: 'orange',
						title: 'HTML',
					},
					{
						color: 'light-grey',
						image: 'jade.svg',
						title: 'Pug (Jade)',
						url: 'https://pugjs.org/',
					},
					{
						color: 'light-blue',
						title: 'CSS',
					},
					{
						image: 'sass.png',
						title: 'Sass',
						url: 'http://sass-lang.com/',
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
						url: 'http://rubyonrails.org/',
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
						url: 'https://www.youtube.com/watch?v=f92VWkYl8CI',
					},
					{
						fillImage: true,
						image: 'pianojac.png',
						size: 'large',
						title: '→Pia-no-jaC←',
						url: 'https://www.youtube.com/watch?v=2EEsa_pqGAs',
					},
					{
						color: 'brown',
						title: 'Playing Cajon and Percussions',
					},
					{
						fillImage: true,
						image: 'hiromiUehara.png',
						title: 'Hiromi Uehara',
						url: 'https://www.youtube.com/watch?v=xWNyn9Ttf8w',
					},
					{
						color: 'brown',
						fillImage: true,
						image: 'makingSushi.jpg',
						title: 'Making Sushi',
						url: 'https://twitter.com/search?q=from%3Aginpei_jp%20%23sushi',
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
						url: 'http://www.amazon.co.jp/dp/4844364936',
					},
					{
						fillImage: true,
						image: 'publication-20150325.jpg',
						title: '3 February 2014',
						url: 'http://www.amazon.co.jp/dp/4844364014',
					},
				],
			},
			{
				title: 'Contact',
				contents: [
					{
						size: 'wide',
						title: 'ginpei@gmail.com',
						url: 'mailto:ginpei@gmail.com',
					},
				],
			},
		],
	},
})
