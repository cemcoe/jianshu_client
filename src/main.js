import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
// main.js
import toast from 'components/common/toast'

import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'

Vue.use(mavonEditor)
// 安装toast插件
Vue.use(toast)



// 图片懒加载
import VueLazyload from 'vue-lazyload'

import loading from './assets/img/loading/loading.gif'
Vue.use(VueLazyload, {
  loading,
  
})


Vue.config.productionTip = false

import './assets/css/reset.css'
import './assets/css/values.css'

// https://forum.vuejs.org/t/vue-router-vuex/43055

router.beforeEach((to, from, next) => {
  // if (to.name !== 'Login') {
  //   console.log(store.state.auth)
  // }
  // next()
  if (to.meta.requireAuth) {
    console.log('此页面需要登录才能访问')
    // 登录成功，放行
    if (store.state.user.name) {
      // vuex 中有用户信息
      next()	//放行
    } else {
      // 跳转到登录界面
      next({ path: "/login" })
    }
  }
  next()
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
