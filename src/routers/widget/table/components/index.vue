<template>
  <le-container class="demo" padding>
    <le-main>
      <el-row :gutter="24">
        <el-col :span="24">
          <le-panel header="数据表格（Table）">
            <code v-text="'<le-table></le-table>'"></code>
            通常结合
            <code>columns.js</code>
            来使用，由columns定义其数据结构， 扩展自element-ui的Table
          </le-panel>
        </el-col>
        <el-col :span="12">
          <le-panel header="简单用法">
            <!-- 示例 -->
            <le-table :columns="columns1" :data="dataItems1"></le-table>
            <!-- /示例 -->
          </le-panel>
        </el-col>
      </el-row>
    </le-main>
  </le-container>
</template>

<script>
import { columns1 } from './columns'
import { getList } from '../service'

export default {
  data() {
    return {
      columns1: columns1(this),
      dataItems1: {
        pageNum: 1,
        pageSize: 10,
        total: 100,
        totalPages: 10,
        list: []
      }
    }
  },
  mounted() {
    getList({ pageNum: 1, pageSize: 10 }).then(resp => {
      this.dataItems1.list = resp.data.list
    })
  },
  methods: {
    onView() {
      alert('hi~')
    }
  }
}
</script>

<style lang="scss" scoped>
.el-col {
  position: relative;
  margin-bottom: 24px;
}
</style>
