import resize from './resize'
import permission from './permission'

const directives = [
  resize,
  permission
]

const install = function(Vue, opts = {}) {
  directives.forEach(directive => {
    Vue.directive(directive.name, directive)
  })
}

export default {
  install
}
