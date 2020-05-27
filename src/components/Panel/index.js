import Panel from './components/panel'

Panel.install = function(Vue) {
  Vue.component(Panel.name, Panel)
}

export default Panel
