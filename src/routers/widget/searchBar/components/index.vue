<template>
  <le-container class="demo" padding>
    <le-main>
      <el-row :gutter="24">
        <el-col :span="24">
          <le-panel header="搜索条组件（SearchBar）">
            <code v-text="'<le-search-bar></le-search-bar>'"></code>
            通常结合
            <code>columns.js</code>
            来使用，由columns定义其数据结构， 支持多种类型数据(
            <code>
              cascade，date，editor，text，textarea，password，select，transfer，transferTree，treeSelect，table，
              custom(自定义)，checkbox，radio，autoComplete，upload，line(分隔线)等
            </code>
            )， 扩展自element-ui的Form组件，可以使用它的api。
          </le-panel>
        </el-col>
        <el-col :span="24">
          <le-panel header="简单用法">
            <!-- 示例 -->
            <le-search-bar :columns="columns1" @submit="onSubmit" @reset="onReset"></le-search-bar>
            <!-- /示例 -->
          </le-panel>
        </el-col>
        <el-col :span="24">
          <le-panel header="no-label样式">
            <!-- 示例 -->
            <le-search-bar :columns="columns1" no-label @submit="onSubmit" @reset="onReset"></le-search-bar>
            <!-- /示例 -->
          </le-panel>
        </el-col>
        <el-col :span="24">
          <le-panel header="mini样式">
            <!-- 示例 -->
            <le-search-bar :columns="columns1" mini @submit="onSubmit" @reset="onReset"></le-search-bar>
            <!-- /示例 -->
          </le-panel>
        </el-col>
        <el-col :span="24">
          <le-panel header="Form样式">
            <!-- 示例 -->
            <le-search-bar :columns="columns1" :inline="false" @submit="onSubmit" @reset="onReset"></le-search-bar>
            <!-- /示例 -->
          </le-panel>
        </el-col>
      </el-row>
    </le-main>
  </le-container>
</template>

<script>
import { columns1 } from './columns'
export default {
  data() {
    return {
      columns1
    }
  },
  methods: {
    onSubmit(value) {
      alert(JSON.stringify(value))
    },
    onReset() {
      alert('reset')
    },
    say() {
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
