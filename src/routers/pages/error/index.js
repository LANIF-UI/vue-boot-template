import p403 from './routers/403'
import p404 from './routers/404'
import p500 from './routers/500'

export default {
  path: 'error',
  component: () => import('./components'),
  meta: { title: '错误页面' },
  children: [
    p403,
    p404,
    p500,
  ]
}
