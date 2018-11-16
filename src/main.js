// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from "./vuex/store"; //引入vuex的集中块。
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

require('./mockjs.js') //引入mockjs。

import https from "./axios/axios.js"; //引入封装的axios  
Vue.prototype.https = https; //引入到原型上。

import * as filters from './utils/filters'; //其中import * as filters from ‘./filters/filter.js’是导入filter.js文件中的所有过滤器
Object.keys(filters).forEach(key => {
    Vue.filter(key, filters[key]);
})

import utils from "./utils/utils.js"; //引入封装的全局方法
Vue.prototype.utils = utils; //将全局方法注册到原型上。


Vue.config.productionTip = false

Vue.use(ElementUI);

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>',
    // store, //使用vuex。
    // created() { // 为了解决刷新页面  vuex里面的值，丢失的问题。
    //     var val = this.$store.getters.bookList;
    //     if (val.length == 0) {
    //         var list = JSON.parse(localStorage.getItem("bookList"));
    //         this.$store.dispatch("assignment", list);
    //     }
    // }
})