<template>
  <le-container class="demo" full>
    <le-aside width="350px" class="charts-page-sider">
      <div class="header">
        <h3>ECharts 图表</h3>
        <ul class="icon-list">
          <li>
            <i class="el-icon-info" />
            <b>作者：</b>
            百度 ECharts 团队
          </li>
          <li>
            <p>
              <i class="el-icon-info" />
              <b>网站：</b>
              <a href="http://echarts.baidu.com" target="_blank">
                http://echarts.baidu.com
              </a>
            </p>
          </li>
        </ul>
      </div>
      <div class="side-list">
        <ul class="charts-type-list">
          <li v-for="(item, index) in chartTypes" :key="index" @click="activeKey = item.key">
            <i :class="item.icon" />
            {{ item.title }}
          </li>
        </ul>
      </div>
    </le-aside>
    <le-main>
      <le-container full>
        <le-main padding>
          <le-panel height="400px">
            <div slot="header">
              <i :class="current.icon" />
              {{ current.title }}
            </div>
            <!-- 示例 -->
            <le-charts :options="options"></le-charts>
            <!-- /示例 -->
          </le-panel>
        </le-main>
      </le-container>
    </le-main>
  </le-container>
</template>

<script>
import LeCharts from '@/components/Charts'

export default {
  components: {
    LeCharts
  },
  data() {
    return {
      activeKey: 'Bar',
      chartTypes: [
        {
          title: '折线图 / Line',
          icon: 'el-icon-data-line',
          key: 'Line',
          components: './line'
        },
        {
          title: '柱状图 / Bar',
          icon: 'el-icon-s-data',
          key: 'Bar',
          components: './bar'
        },
        {
          title: '饼图 / Pie',
          icon: 'el-icon-pie-chart',
          key: 'Pie',
          components: './pie'
        },
        {
          title: '点图 / Scatter',
          icon: 'el-icon-lollipop',
          key: 'Scatter',
          components: './scatter'
        },
        {
          title: '地图 / Map',
          icon: 'el-icon-map-location',
          key: 'Map',
          components: './Map'
        },
        {
          title: '雷达图 / Radar',
          icon: 'el-icon-place',
          key: 'Radar',
          components: './radar'
        },
        {
          title: '仪表盘 / Gauge',
          icon: 'el-icon-odometer',
          key: 'Gauge',
          components: './gauge'
        }
      ]
    }
  },
  computed: {
    current() {
      return this.chartTypes.filter(item => item.key === this.activeKey)[0]
    },
    options() {
      return require(`${this.current.components}`).default
    }
  },
  methods: {}
}
</script>

<style lang="scss">
.charts-page {
  &-sider {
    border-right: 1px solid #eee;
    background: #f5f5f5;
    .header {
      padding: 20px 20px 0px;
      .icon-list {
        list-style: none;
        margin-top: 20px;
        font-size: 14px;
        padding-left: 5px;
        li:first-child {
          margin-bottom: 10px;
        }
        i {
          color: #f6bb42;
          margin-right: 10px;
        }
      }
    }
    .charts-type-list {
      list-style: none;
      padding-left: 0px;
      li {
        padding: 12px 26px;
        color: #999;
        transition: 0.3s;
        border-bottom: 1px solid #f0f0f0;
        cursor: pointer;
        &:hover {
          background-color: #eeeeee;
          color: #666;
        }
        > i {
          margin-right: 10px;
        }
      }
    }
  }
}
</style>
