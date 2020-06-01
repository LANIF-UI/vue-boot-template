<template>
  <el-row :gutter="24">
    <el-col :span="24">
      <le-panel header="表单组件（Form）">
        <code v-text="'<le-form></le-form>'"></code>
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
    <el-col :span="12" style="height: 300px;">
      <le-panel header="简单用法">
        <!-- 示例 -->
        <le-form :columns="columns1">111</le-form>
        <!-- /示例 -->
      </le-panel>
    </el-col>
  </el-row>
</template>

<script>
import { columns1 } from './columns'
export default {
  data() {
    return {
      columns1
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
