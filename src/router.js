const Home = require('./components/misc/Home.vue');
const Vue = require('vue');
const VueRouter = require('vue-router');

Vue.use(VueRouter);

module.exports = new VueRouter({
	routes: [
		{ path: '/', component: Home },
	],
});
