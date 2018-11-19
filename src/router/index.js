import Vue from 'vue'
import Router from 'vue-router'
import homePage from '@/components/homePage'
import login from '@/components/login'
import utils from '../utils/utils'

Vue.use(Router)

const router = new Router({
    routes: [{
            path: '/', // 默认进入路由
            redirect: '/home' //重定向
        }, {
            path: '*', // 匹配没有注册的路由
            redirect: '/login' //重定向
        },
        {
            path: '/login',
            name: 'login',
            component: login
        }, {
            path: '/homePage',
            name: 'homePage',
            component: homePage
        }
    ]
})

// 全局路由守卫
router.beforeEach((to, from, next) => {
    const nextRoute = ['homePage'];
    const token = utils.getCookie("userId");
    if (to.name == 'login') { //这一步的作用是  当在登陆状态时  返回到登录页直接进入主页面。
        if (token) {
            router.push({ name: 'homePage' });
        }
    }
    if (nextRoute.indexOf(to.name) >= 0) {
        if (!token) {
            router.push({ name: 'login' });
        }
    }
    next();
});


export default router;