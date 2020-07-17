import store from './store'
import router from './routers'
import { Message } from 'element-ui'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
import { getToken } from '@/utils/auth' // get token from cookie
import getPageTitle from '@/utils/get-page-title'
import _ from 'lodash'

function hasPermission(currentRoles, to) {
  if (to.path === '/403') {
    return true
  }
  if (Array.isArray(to.matched)) {
    for (let i = to.matched.length - 1; i >= 0; i--) {
      const roles = to.matched[i].meta.roles;
      if (Array.isArray(roles)) {
        const hasRoles = _.intersection(roles, currentRoles)
        if (hasRoles.length) {
          return true
        } else {
          return false
        }
      } else if (!roles) {
        continue
      }
    }
  }
  return true
}

NProgress.configure({ showSpinner: false }) // NProgress Configuration

const whiteList = ['/login'] // no redirect whitelist

router.beforeEach(async(to, from, next) => {
  // start progress bar
  NProgress.start()

  // set page title
  document.title = getPageTitle(to.meta.title)

  // determine whether the user has logged in
  const hasToken = getToken()

  if (hasToken) {
    if (to.path === '/login') {
      // if is logged in, redirect to the home page
      next({ path: '/' })
      NProgress.done()
    } else {
      const roles = store.getters.roles
      if (roles && roles.length) {
        if (hasPermission(roles, to)) {
          next()
        } else {
          next('/403')
          NProgress.done()
        }
      } else {
        try {
          // get user info
          const { roles } = await store.dispatch('user/getInfo')
          if (hasPermission(roles, to)) {
            next()
          } else {
            next('/403')
            NProgress.done()
          }
        } catch (error) {
          // remove token and go to login page to re-login
          await store.dispatch('user/resetToken')
          Message.error(error || 'Has Error')
          next(`/login?redirect=${to.path}`)
          NProgress.done()
        }
      }
    }
  } else {
    /* has no token*/

    if (whiteList.indexOf(to.path) !== -1) {
      // in the free login whitelist, go directly
      next()
    } else {
      // other pages that do not have permission to access are redirected to the login page.
      next(`/login?redirect=${to.path}`)
      NProgress.done()
    }
  }
})

router.afterEach(() => {
  // finish progress bar
  NProgress.done()
})
