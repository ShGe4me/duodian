// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import '@/utils/rem'
import '@/static/css/demo.css'
import 'swiper/dist/css/swiper.css'
import '@/static/fonts/iconfont.css';
import '@/static/css/reset.css';
import '@/static/css/animate.css';
import components from './components/index';
import api from '@/api';
Vue.use(components)
Vue.use(api)
Vue.config.productionTip = false
axios.defaults.withCredentials = true;
/* eslint-disable no-new */
import store from './store'  //引入store仓库
Vue.directive('canRun', {
  inserted:function (el, binding) {
    let timer
    el.addEventListener('keyup', () => {
        if (timer) {
            clearTimeout(timer)
        }
        timer = setTimeout(() => {
                binding.value()
            }, 300)
        })
    }
})
new Vue({
  el: '#app',
  router,
  store,//挂载到实力上
  components: { App },
  template: '<App/>'
})
