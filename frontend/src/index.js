import Vue from 'vue';
import VueRouter from 'vue-router';

import routes from './utils/routes';
import RootPage from './view/App.vue';
import style from './style/style.styl'

let VueTouch = require('vue-touch');

Vue.use(VueTouch, { name: 'v-touch' });
Vue.use(VueRouter);

const router = new VueRouter({
    // mode: "history",
    routes: routes.routes
});

const App = new Vue({
    el: '#app',
    router,
    name: 'App',
    render: h => h(RootPage)
});