import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'font-awesome/css/font-awesome.min.css'
import axios from "axios";

axios.defaults.baseURL = "http://localhost:8081"
Vue.prototype.$http = axios



Vue.config.productionTip = false

//全局注册
Vue.use(ElementUI)



new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
