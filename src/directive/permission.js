
import store from '@/store'
import _ from 'lodash'

const roles = store.getters && store.getters.roles || []

function isUserGranted(value) {
  return _.intersection(roles, value).length
}

export default {
  name: 'permission',
  inserted(el, { value, arg, modifiers }, vnode) {
    if (!isUserGranted(value)) {
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
}
