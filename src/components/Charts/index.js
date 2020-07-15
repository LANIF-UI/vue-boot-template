import Charts from './components/charts'
import echarts from 'echarts/lib/echarts'

Charts.install = function(Vue) {
  Vue.component(Charts.name, Charts)
}

export { echarts };
export default Charts
