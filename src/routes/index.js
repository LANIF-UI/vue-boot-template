import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout/BasicLayout'
// import BlankLayout from '@/layout/BlankLayout'
// import InsetLayout from '@/layout/InsetLayout'

/* Router */
import Login from '@/routes/login'
import Blank from '@/routes/blank'
import Background from '@/routes/pages/background'
import ErrorPage from '@/routes/pages/error'
import Dashboard from '@/routes/dashboard'
import Nested from '@/routes/nested'
import Container from '@/routes/ui/container'
import Panel from '@/routes/ui/panel'
import Card from '@/routes/ui/card'
import Dialog from '@/routes/ui/dialog'
import Form from '@/routes/widget/form'
import SearchBar from '@/routes/widget/searchBar'
import Table from '@/routes/widget/table'
import Charts from '@/routes/widget/charts'
import Permission from '@/routes/permission'
import Crud from '@/routes/crud'
import Toolbar from '@/routes/ui/toolbar'
/* <import></import> */

/**
 * Note: sub-menu only appear when route children.length >= 1
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  /* <router></router> */
  Login,
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [Dashboard]
  },
  {
    path: '/ui',
    component: Layout,
    redirect: '/ui/container',
    meta: { title: 'UI元素', icon: 'ui', roles: ['admin'] },
    children: [Container, Panel, Card, Dialog, Toolbar]
  },
  {
    path: '/widget',
    component: Layout,
    redirect: '/widget/form',
    meta: { title: '组件', icon: 'comp', roles: ['admin'] },
    children: [Form, SearchBar, Table, Charts]
  },
  {
    path: '/page',
    component: Layout,
    redirect: '/page/menu1',
    meta: { title: '页面', icon: 'page' },
    children: [Nested, Background, ErrorPage]
  },
  {
    path: '/permission',
    component: Layout,
    redirect: '/permission',
    children: [Permission]
  },
  {
    path: '/example',
    component: Layout,
    redirect: '/example/blank',
    meta: { title: '示例', icon: 'example' },
    children: [Blank, Crud]
  },
  {
    path: 'external-link',
    component: Layout,
    children: [
      {
        path: 'https://github.com/LANIF-UI/vue-boot-template',
        meta: { title: '外部链接', icon: 'link' }
      }
    ]
  },

  // error page, 404 page must be placed at the end !!!
  {
    path: '/403',
    component: () => import('@/components/Pages/403'),
    hidden: true
  },
  {
    path: '*',
    component: () => import('@/components/Pages/404'),
    hidden: true
  }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
