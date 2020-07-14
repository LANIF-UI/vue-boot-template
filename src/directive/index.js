import resize from './resize'

const directives = [
  resize
]

const install = function(Vue, opts = {}) {
  directives.forEach(directive => {
    Vue.directive(directive.name, directive)
  })
}

export default {
  install
}
