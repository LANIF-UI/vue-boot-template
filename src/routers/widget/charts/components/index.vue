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
          <li
            v-for="(item, index) in chartTypes"
            :key="index"
            :class="{ active: activeKey === item.key }"
            @click="activeKey = item.key"
          >
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
            <component :is="current.components" />
            <!-- /示例 -->
          </le-panel>
        </le-main>
      </le-container>
    </le-main>
  </le-container>
</template>

<script>
export default {
  data() {
    return {
      activeKey: 'Line',
      chartTypes: [
        {
          title: '折线图 / Line',
          icon: 'el-icon-data-line',
          key: 'Line',
          components: () => import('./line.vue')
        },
        {
          title: '柱状图 / Bar',
          icon: 'el-icon-s-data',
          key: 'Bar',
          components: () => import('./bar.vue')
        },
        {
          title: '柱状图 / Keyboard',
          icon: 'el-icon-s-data',
          key: 'Keyboard',
          components: () => import('./keyboard.vue')
        },
        {
          title: '饼图 / Pie',
          icon: 'el-icon-pie-chart',
          key: 'Pie',
          components: () => import('./pie.vue')
        },
        {
          title: '点图 / Scatter',
          icon: 'el-icon-lollipop',
          key: 'Scatter',
          components: () => import('./scatter.vue')
        },
        {
          title: '地图 / Map',
          icon: 'el-icon-map-location',
          key: 'Map',
          components: () => import('./map.vue')
        },
        {
          title: '雷达图 / Radar',
          icon: 'el-icon-place',
          key: 'Radar',
          components: () => import('./radar.vue')
        },
        {
          title: '仪表盘 / Gauge',
          icon: 'el-icon-odometer',
          key: 'Gauge',
          components: () => import('./gauge.vue')
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
        color: #666;
        transition: 0.3s;
        border-bottom: 1px solid #f0f0f0;
        transition: .5s ease-out;
        cursor: pointer;
        &:hover {
          background-color: #eeeeee;
          color: #666;
        }
        &.active {
          background: #67c23a;
          color: #fff;
          i {
            font-size: 22px;
          }
        }
        > i {
          font-size: 14px;
          margin-right: 10px;
        }
      }
    }
  }
}
</style>
