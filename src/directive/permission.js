
import store from '@/store'
import _ from 'lodash'

function isUserGranted(roles, value) {
  return !!_.intersection(roles, value).length
}

/**
 * v-permission="['admin','editor']" 传入角色数组与当前角色比较显示隐藏当前元素
 * v-permission="(myroles) => true | false" 传入函数自定义显示隐藏当前元素（true显示，false隐藏）
 */
function permission(el, { value, arg, modifiers }, vnode) {
  const roles = store.getters && store.getters.roles || []
  let hasPermission = false
  if (Array.isArray(value)) {
    hasPermission = isUserGranted(roles, value)
  } else if (typeof value === 'function') {
    hasPermission = value(roles)
  }

  if (hasPermission === false) {
    const comment = document.createComment(' ');
    Object.defineProperty(comment, 'setAttribute', {
      value: () => undefined,
    });
    vnode.elm = comment;
    vnode.text = ' ';
    vnode.isComment = true;
    vnode.context = undefined;
    vnode.tag = undefined;
    vnode.data.directives = undefined;

    if (vnode.componentInstance) {
      vnode.componentInstance.$el = comment;
    }

    if (el.parentNode) {
      el.parentNode.replaceChild(comment, el);
    }
  }
}
export default {
  name: 'permission',
  inserted: permission,
  update: permission
}
