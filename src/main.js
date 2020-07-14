import Vue from 'vue'

import 'normalize.css/normalize.css'

import ElementUI from 'element-ui'
import LEementUI from './components'
// import 'element-ui/lib/theme-chalk/index.css'
// import locale from 'element-ui/lib/locale/lang/en' // lang i18n
import direcives from './directive'

import '@/assets/styles/index.scss' // global css

import App from './App'
import store from './store'
import router from './routers'

import '@/assets/images' // icon
import '@/permission' // permission control

/**
 * If you don't want to use mock-server
 * you want to use MockJs for mock api
 * you can execute: mockXHR()
 *
 * Currently MockJs will be used in the production environment,
 * please remove it before going online ! ! !
 */
if (process.env.NODE_ENV === 'production') {
  const { mockXHR } = require('../mock/mock-xhr')
  mockXHR()
}

// 国际化配置
// Vue.use(ElementUI, { locale })
Vue.use(ElementUI)

// 自定义组件
Vue.use(LEementUI)
// 自定指令
Vue.use(direcives)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
