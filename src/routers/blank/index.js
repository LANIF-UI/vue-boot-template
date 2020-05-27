import mo from './module'
import store from '@/store'

// 注册module
store.registerModule(mo.namespaced, mo)

export default {
  path: 'blank', // 路径
  name: 'Blank',
  component: () => import('./components'),
  meta: { title: 'Blank' },
  children: []
}
