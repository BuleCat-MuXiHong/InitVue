import Vue from 'vue'
import Router from 'vue-router'
import SayHi from "@/components/SayHi";
import VueIf from "@/components/For_If_bind_on";
import Blog from "@/components/Blog";
import BlogList from "@/components/BlogList";
import List from "@/components/List";
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:"/list",
      name:"list",
      component:List
    },
    {
      path: "/",
      name: "SayHi",
      component: SayHi
    },
    {
      path:'/for',
      name:"vue-for",
      component:VueIf
      // component:()=>import('@/components/VueIf')  //懒加载方式写法
    },
    {
      path:'/blog',
      name:'Blog',
      component:Blog
    },
    {
      path:'/blogList',
      name:"blogList",
      component:BlogList
    }
  ]
})
