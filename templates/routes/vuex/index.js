import mo from './module'
import store from '@/store'

// 注册module
store.registerModule(mo.namespaced, mo)

export default {
  path: '/<%= name %>', // 路径
  name: '<%= capitalize(name) %>',
  component: () => import('./components'),
  meta: { title: '<%= title %>' },
  children: []
}
