//入口文件
// console.log('111');
import Vue from 'vue';
//导入渲染的app组件
import app from './App.vue';
import {
  Header
} from 'mint-ui';
import './lib/mui/css/mui.css'

Vue.component(Header.name, Header);
var vm = new Vue({
  el: '#app',
  render: function (createElments) {
    return createElments(app);
  }
})