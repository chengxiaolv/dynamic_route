import Vue from 'vue'
import Router from 'vue-router'
import homePage from '@/components/homePage'
import login from '@/components/login'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'login',
        component: login
    }, {
        path: '/homePage',
        name: 'homePage',
        component: homePage
    }]
})