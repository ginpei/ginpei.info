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
						id: 'ginpei',
						image: 'ginpei.png',
						size: 'large',
						title: 'Ginpei',
					},
					{
						id: 'github',
						image: 'github.png',
						title: 'GitHub',
						url: 'https://github.com/ginpei',
					},
					{
						id: 'twitter',
						image: 'twitter.png',
						title: 'Twitter',
						url: 'https://twitter.com/ginpei_en/',
					},
					{
						id: 'blog',
						title: 'Blog',
						url: 'https://ginpen.com/',
					},
					{
						id: 'instagram',
						image: 'instagram.png',
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
						id: 'javascript',
						image: 'javascript.png',
						size: 'large',
						title: 'JavaScript',
					},
					{
						color: 'white',
						fillImage: true,
						id: 'vuejs',
						image: 'vuejs.png',
						title: 'Vue.js',
						url: 'https://vuejs.org/',
					},
					{
						color: 'light-grey',
						id: 'backbonejs',
						image: 'backbone.svg',
						title: 'Backbone.js',
						url: 'http://backbonejs.org/',
					},
					{
						id: 'jquery',
						title: 'jQuery',
						url: 'https://jquery.com/',
					},
					{
						color: 'light-grey',
						id: 'coffeescript',
						image: 'coffeescript.png',
						title: 'CoffeeScript',
					},
					{
						color: 'light-grey',
						id: 'jasmine',
						image: 'jasmine.svg',
						title: 'Jasmine',
						url: 'http://jasmine.github.io/',
					},
					{
						color: 'orange',
						id: 'html',
						title: 'HTML',
					},
					{
						color: 'light-grey',
						id: 'pug',
						image: 'jade.svg',
						title: 'Pug (Jade)',
						url: 'https://pugjs.org/',
					},
					{
						color: 'light-blue',
						id: 'css',
						title: 'CSS',
					},
					{
						id: 'sass',
						image: 'sass.png',
						title: 'Sass',
						url: 'http://sass-lang.com/',
					},
					{
						id: 'vim',
						image: 'vim.svg',
						title: 'Vim',
					},
					{
						id: 'git',
						image: 'git.png',
						title: 'Git',
					},
					{
						id: 'rubyonrails',
						image: 'Ruby_on_Rails.svg',
						title: 'Ruby on Rails',
						size: 'wide',
						url: 'http://rubyonrails.org/',
					},
					{
						id: 'cpp',
						image: 'cpp.png',
						title: 'C++',
					},
				],
			},
			{
				title: 'Favorite and Hobby',
				contents: [
					{
						id: 'rockmusic',
						title: 'Rock Music',
					},
					{
						id: 'playingdrums',
						title: 'Playing Drums',
					},
					{
						color: 'white',
						fillImage: true,
						id: 'thepillows',
						image: 'thePillows.png',
						title: 'the pillows',
						url: 'https://www.youtube.com/watch?v=f92VWkYl8CI',
					},
					{
						fillImage: true,
						id: 'pianojac',
						image: 'pianojac.png',
						size: 'large',
						title: '→Pia-no-jaC←',
						url: 'https://www.youtube.com/watch?v=2EEsa_pqGAs',
					},
					{
						color: 'brown',
						id: 'playingcajonandpercussions',
						title: 'Playing Cajon and Percussions',
					},
					{
						fillImage: true,
						id: 'hiromiuehara',
						image: 'hiromiUehara.png',
						title: 'Hiromi Uehara',
						url: 'https://www.youtube.com/watch?v=xWNyn9Ttf8w',
					},
					{
						color: 'brown',
						fillImage: true,
						id: 'makingsushi',
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
						id: 'publication20150325',
						image: 'publication-20140203.jpg',
						title: '25 March 2015',
						url: 'http://www.amazon.co.jp/dp/4844364936',
					},
					{
						fillImage: true,
						id: 'publication20140203',
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
						id: 'ginpeigmailcom',
						size: 'wide',
						title: 'ginpei@gmail.com',
						url: 'mailto:ginpei@gmail.com',
					},
				],
			},
		],
	},
})
