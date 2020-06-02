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
    <el-col :span="12">
      <le-panel header="简单用法">
        <!-- 示例 -->
        <le-form :columns="columns1" @submit="onSubmit" @reset="onReset"></le-form>
        <!-- /示例 -->
      </le-panel>
    </el-col>
    <el-col :span="12">
      <le-panel header="赋值">
        <!-- 示例 -->
        <le-form :columns="columns1" :record="record1" @submit="onSubmit"></le-form>
        <!-- /示例 -->
      </le-panel>
    </el-col>
    <el-col :span="24">
      <le-panel header="行内样式（inline）">
        <!-- 示例 -->
        <le-form inline :columns="columns1" @submit="onSubmit"></le-form>
        <!-- /示例 -->
      </le-panel>
    </el-col>
    <el-col :span="12">
      <le-panel header="初始值&默认值（initialValue）">
        <!-- 示例 -->
        <le-form :columns="columns2" @submit="onSubmit"></le-form>
        <!-- /示例 -->
      </le-panel>
    </el-col>
    <el-col :span="12">
      <le-panel header="表单验证">
        <!-- 示例 -->
        <le-form :columns="columns3" @submit="onSubmit"></le-form>
        <!-- /示例 -->
      </le-panel>
    </el-col>
    <el-col :span="12">
      <le-panel header="多列布局">
        <!-- 示例 -->
        <le-form :columns="columns4" @submit="onSubmit"></le-form>
        <!-- /示例 -->
      </le-panel>
    </el-col>
  </el-row>
</template>

<script>
import { columns1, columns2, columns3, columns4 } from './columns'
export default {
  data() {
    return {
      columns1,
      columns2,
      columns3,
      columns4,
      record1: {
        id: 123,
        roleType: '2', // 类型不能错，不能是数字的2
        roleName: '管理员',
        order: 666
      }
    }
  },
  methods: {
    onSubmit(value) {
      alert(JSON.stringify(value))
    },
    onReset() {
      alert('reset')
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
