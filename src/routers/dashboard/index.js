import model from './module'
import store from '@/store'

// module
store.registerModule(model.namespaced, model)

// route
export default {
  path: 'dashboard', // 路径
  name: 'Dashboard', // 菜单名
  component: () => import('./components'),
  meta: { title: 'Dashboard', icon: 'dashboard' }
}
