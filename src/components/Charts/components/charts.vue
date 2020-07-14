<template>
  <div class="echarts__wrapper" v-resize="onResize">
    <div class="echarts" ref="echarts"></div>
  </div>
</template>

<script>
import echarts from 'echarts/lib/echarts'

export default {
  name: 'LeCharts',
  props: {
    options: Object,
    theme: [String, Object],
    initOptions: Object,
    autoResize: {
      type: Boolean,
      default: true
    }
  },
  watch: {
    options(newValue, oldValue) {
      this.chart.setOption(newValue, newValue !== oldValue)
    }
  },
  mounted() {
    if (this.options) {
      this.init()
    }
  },
  activated() {
    if (this.chart) {
      this.chart.resize()
    }
  },
  destroyed() {
    if (this.chart) {
      this.destroy()
    }
  },
  methods: {
    init(options) {
      if (this.chart) {
        return
      }
      const chart = echarts.init(this.$refs.echarts, this.theme, this.initOptions)
      chart.setOption(options || this.options || {}, true)
      Object.keys(this.$listeners).forEach(event => {
        const handler = this.$listeners[event]
        if (event.indexOf('zr:') === 0) {
          chart.getZr().on(event.slice(3), handler)
        } else {
          chart.on(event, handler)
        }
      })
      this.chart = chart
    },
    refresh() {
      if (this.chart) {
        this.destroy()
        this.init()
      }
    },
    destroy() {
      this.chart.dispose()
      this.chart = null
    },
    onResize(size) {
      if (this.autoResize) {
        this.chart.resize()
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.echarts__wrapper,
.echarts {
  width: 100%;
  height: 100%;
}
</style>
