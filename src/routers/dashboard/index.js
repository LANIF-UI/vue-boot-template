import model from './module'
import store from '@/store'

// module
store.registerModule(model.namespaced, model)

// route
export default {
  path: 'dashboard', // 路径
  name: 'Dashboard',
  component: () => import('./components'),
  meta: { title: '仪表盘', icon: 'dashboard' }
}
