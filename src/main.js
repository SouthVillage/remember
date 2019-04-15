//入口文件
// console.log('111');
import Vue from 'vue';
//导入渲染的app组件
import app from './App.vue';
import {
  Header,
  Swipe, SwipeItem
} from 'mint-ui';
import './lib/mui/css/mui.css';
import './lib/mui/css/icons-extra.css';
//引入轮播图组件
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
// import './lib/mui/fonts/mui-icons-extra.ttf'  这个包不用引入

//1.引入路由模块  
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//2.引入外部的路由文件
import router from './router.js'
//引入vue-resource模塊
import VueResource from 'vue-resource'
//3.vue使用resource
Vue.use(VueResource)

Vue.component(Header.name, Header);
var vm = new Vue({
  el: '#app',
  render: function (createElments) {
    return createElments(app);
  },
  router
})