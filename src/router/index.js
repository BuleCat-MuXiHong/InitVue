import Vue from 'vue'
import Router from 'vue-router'
import SayHi from "@/components/SayHi";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/",
      name: "SayHi",
      component: SayHi
    }
  ]
})
