import p403 from './routes/403'
import p404 from './routes/404'
import p500 from './routes/500'

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
