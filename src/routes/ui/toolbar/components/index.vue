<template>
  <le-container class="demo" padding>
    <le-main>
      <el-row :gutter="24">
        <el-col :span="24">
          <le-panel header="工具栏">
            <code v-text="'<le-toolbar></le-toolbar>'"></code>
            最常用的后台组件之一
          </le-panel>
        </el-col>
        <el-col :span="24">
          <le-panel header="基本用法">
            <!-- 示例 -->
            <le-toolbar class="toolbar-demo">
              <el-button-group>
                <el-button size="small" type="primary" icon="el-icon-plus">新增</el-button>
                <el-button size="small" icon="el-icon-delete">删除</el-button>
              </el-button-group>
            </le-toolbar>
            <!-- /示例 -->
          </le-panel>
        </el-col>
        <el-col :span="24">
          <le-panel header="组合SearchBar">
            <!-- 示例 -->
            <le-toolbar class="toolbar-demo">
              <!-- 左侧 -->
              <el-button-group>
                <el-button size="small" type="primary" icon="el-icon-plus">新增</el-button>
                <el-button size="small" icon="el-icon-delete">删除</el-button>
              </el-button-group>
              <!-- 右侧 -->
              <template #append>
                <le-search-bar
                  :columns="columns1"
                  @submit="onSubmit"
                  @reset="onReset"
                  mini
                ></le-search-bar>
              </template>
            </le-toolbar>
            <!-- /示例 -->
          </le-panel>
        </el-col>
        <el-col :span="24">
          <le-panel header="组合SearchBar，并可下拉展示更多">
            <!-- 示例 -->
            <le-toolbar class="toolbar-demo">
              <!-- 左侧 -->
              <el-button-group>
                <el-button size="small" type="primary" icon="el-icon-plus">新增</el-button>
                <el-button size="small" icon="el-icon-delete">删除</el-button>
              </el-button-group>
              <!-- 右侧 -->
              <template #append>
                <le-search-bar
                  :columns="columns2"
                  @submit="onSubmit"
                  @reset="onReset"
                  group="adv"
                  mini
                ></le-search-bar>
              </template>
              <!-- 下拉区域 -->
              <template #pulldown>
                <le-search-bar
                  :columns="columns2"
                  @submit="onSubmit"
                  @reset="onReset"
                  no-label
                ></le-search-bar>
              </template>
            </le-toolbar>
            <!-- /示例 -->
          </le-panel>
        </el-col>
      </el-row>
    </le-main>
  </le-container>
</template>

<script>
import { columns1, columns2 } from './columns'

export default {
  name: 'Toolbar',
  data() {
    return {
      columns1,
      columns2
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
.toolbar-demo {
  border: 1px solid #ebeef5;
}
</style>
