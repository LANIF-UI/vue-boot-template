import mo from './module'
import store from '@/store'

// 注册module
store.registerModule(mo.namespaced, mo)

export default {
  path: 'crud', // 路径
  name: 'Crud',
  component: () => import('./components'),
  meta: { title: 'CRUD' },
  children: []
}
