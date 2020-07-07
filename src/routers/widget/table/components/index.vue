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
            <le-table :columns="columns1" :data="dataItems1" v-loading="loading"></le-table>
            <!-- /示例 -->
          </le-panel>
        </el-col>
        <el-col :span="12">
          <le-panel header="data可以为数组类型">
            <!-- 示例 -->
            <le-table :columns="columns1" :data="dataItems1.list" v-loading="loading"></le-table>
            <!-- /示例 -->
          </le-panel>
        </el-col>
        <el-col :span="12">
          <le-panel header="内部分页">
            <!-- 示例 -->
            <le-table
              v-loading="loading"
              :columns="columns1"
              :data="dataItems1"
              @change="onChange"
              pagination
            ></le-table>
            <!-- /示例 -->
          </le-panel>
        </el-col>
        <el-col :span="12">
          <le-panel header="行号，多选，初始值">
            <!-- 示例 -->
            <le-table
              v-loading="loading"
              :columns="columns2"
              :data="dataItems1"
              :selected-row-keys="[2, 4]"
              row-key="id"
            ></le-table>
            <!-- /示例 -->
          </le-panel>
        </el-col>
      </el-row>
    </le-main>
  </le-container>
</template>

<script>
import { columns1, columns2 } from './columns'
import { getList } from '../service'

export default {
  data() {
    return {
      loading: false,
      columns1: columns1(this),
      columns2,
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
    this.getListData({})
  },
  methods: {
    getListData({ pageNum, pageSize }) {
      this.loading = true
      getList({ pageNum: pageNum || 1, pageSize: pageSize || 10 }).then(resp => {
        this.dataItems1 = resp.data
        this.loading = false
      })
    },
    onChange({ pageNum, pageSize }) {
      this.getListData({ pageNum, pageSize })
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
