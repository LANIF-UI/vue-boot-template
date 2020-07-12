import Charts from './components/echarts'

Charts.install = function(Vue) {
  Vue.component(Charts.name, Charts)
}

export default Charts
