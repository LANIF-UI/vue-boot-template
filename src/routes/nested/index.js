import Menu11 from './routes/menu1'
import Menu12 from './routes/menu2'

export default {
  path: 'menu1',
  component: () => import('./components'),
  name: 'Menu1',
  meta: { title: '多级菜单' },
  children: [
    Menu11,
    Menu12
  ]
}
