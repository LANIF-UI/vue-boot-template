export default {
  path: '/<%= name %>', // 路径
  name: '<%= capitalize(name) %>',
  component: () => import('./components'),
  meta: { title: '<%= title %>' },
  children: []
}
