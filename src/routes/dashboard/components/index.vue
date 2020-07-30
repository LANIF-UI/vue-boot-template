<template>
  <le-container class="dashboard-page" padding>
    <le-main>
      <el-row :gutter="20">
        <el-col :md="6">
          <le-panel class="qq">
            <i class="icon el-icon-grape" />
            <h2>
              <b>523</b>
            </h2>
            <h5 class="text-muted">QQ</h5>
          </le-panel>
        </el-col>
        <el-col :md="6">
          <le-panel class="wechat">
            <i class="icon el-icon-watermelon" />
            <h2>
              <b>99+</b>
            </h2>
            <h5 class="text-muted">微信</h5>
          </le-panel>
        </el-col>
        <el-col :md="6">
          <le-panel class="skype">
            <i class="icon el-icon-dessert" />
            <h2>
              <b>2</b>
            </h2>
            <h5 class="text-muted">skype</h5>
          </le-panel>
        </el-col>
        <el-col :md="6">
          <le-panel class="github">
            <i class="icon el-icon-sugar" />
            <h2>
              <b>1k+</b>
            </h2>
            <h5 class="text-muted">github</h5>
          </le-panel>
        </el-col>
      </el-row>
      <el-row>
        <el-col>
          <le-panel header="数据面板组件" height="300px">
            <div class="flex">
              <div class="flex-auto-hidden flex flex-column">
                <h4 class="flex-none">销售额分布</h4>
                <div class="flex-auto-hidden">
                  <Keyboard />
                </div>
              </div>
              <div class="flex-none sales-order">
                <h4>门店销售额排名</h4>
                <ul>
                  <li v-for="(item, i) in rankingListData" :key="i">
                    <span>{{ i + 1 }}</span>
                    <span>{{ item.title }}</span>
                    <span>{{ item.total }}</span>
                  </li>
                </ul>
              </div>
            </div>
          </le-panel>
        </el-col>
      </el-row>
      <el-row :gutter="24">
        <el-col :md="8">
          <le-panel header="地图" height="260px">
            <Map />
          </le-panel>
        </el-col>
        <el-col :md="8">
          <le-panel header="饼图" height="260px">
            <Pie />
          </le-panel>
        </el-col>
        <el-col :md="8">
          <le-panel header="柱状图" height="260px">
            <Bar />
          </le-panel>
        </el-col>
      </el-row>
    </le-main>
  </le-container>
</template>

<script>
import Bar from '@/routes/widget/charts/components/bar'
import Keyboard from '@/routes/widget/charts/components/keyboard'
import Pie from '@/routes/widget/charts/components/pie'
import Map from '@/routes/widget/charts/components/map'

const rankingListData = []
for (let i = 0; i < 7; i += 1) {
  rankingListData.push({
    title: `工专路 ${i} 号店`,
    total: 323234
  })
}

export default {
  name: 'Dashboard',
  components: {
    Bar,
    Keyboard,
    Pie,
    Map
  },
  data() {
    return {
      rankingListData
    }
  }
}
</script>

<style lang="scss">
@import './index.scss';

.el-col {
  position: relative;
  margin-bottom: 24px;
}
</style>
