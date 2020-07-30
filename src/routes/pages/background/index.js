export default {
  path: 'background', // 路径
  name: 'Background',
  component: () => import('./components'),
  meta: { title: '页面背景' },
  children: []
}
