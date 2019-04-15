import VueRouter from 'vue-router'
import Home from './components/tapbar/HomeContainer.vue'
import Member from './components/tapbar/MemberContainer.vue'
import ShopCar from './components/tapbar/ShopCarContainer.vue'
import Search from './components/tapbar/SearchContainer.vue'
// 3. 创建路由对象
var router = new VueRouter({
  routes: [
    {path:'/',redirect:'/home'},
   {path:'/home',component:Home},
   {path:'/Member',component:Member},
   {path:'/ShopCar',component:ShopCar},
   {path:'/Search',component:Search}
  ],
  linkActiveClass:"mui-active"
})

// 把路由对象暴露出去
export default router