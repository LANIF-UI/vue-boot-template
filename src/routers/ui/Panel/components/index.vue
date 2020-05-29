<template>
  <el-row :gutter="24">
    <el-col :span="24">
      <le-panel header="面板容器">
        <code v-text="'<le-panel></le-panel>'"></code>
      </le-panel>
    </el-col>
    <el-col :span="12">
      <!-- 示例 -->
      <le-panel>
        <div slot="header">
          <el-radio-group v-model="radio" size="small">
            <el-radio-button label="top">按钮一</el-radio-button>
            <el-radio-button label="right">按钮二</el-radio-button>
          </el-radio-group>
        </div>
        <div slot="append">
          <el-input
            placeholder="请输入内容"
            prefix-icon="el-icon-search"
            size="small"
            style="width: 120px; margin-right: 5px"
          ></el-input>
          <el-button type="text" icon="el-icon-refresh">刷新</el-button>
        </div>
        自定义头部 使用
        <code>slot#header</code>
        设置左侧，或
        <code>slot#append</code>
        设置右侧内容
      </le-panel>
      <!-- /示例 -->
    </el-col>
    <el-col :span="12">
      <!-- 示例 -->
      <le-panel>
        <div slot="header">
          <el-radio-group v-model="radio" size="small">
            <el-radio-button label="top">按钮一</el-radio-button>
            <el-radio-button label="right">按钮二</el-radio-button>
          </el-radio-group>
        </div>
        <div slot="append">
          <el-input
            placeholder="请输入内容"
            prefix-icon="el-icon-search"
            size="small"
            style="width: 120px"
          ></el-input>
        </div>
        <div slot="subHeader">
          <el-dropdown>
            <span class="el-dropdown-link">
              <i class="el-icon-platform-eleme"></i>
              下拉菜单
              <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>黄金糕</el-dropdown-item>
              <el-dropdown-item>狮子头</el-dropdown-item>
              <el-dropdown-item>螺蛳粉</el-dropdown-item>
              <el-dropdown-item disabled>双皮奶</el-dropdown-item>
              <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
        <div slot="subAppend">
          <el-button type="text" icon="el-icon-refresh">刷新</el-button>
          <el-button type="text" icon="el-icon-plus">新建</el-button>
        </div>
        sub header 样式
        <code>slot#subHeader</code>
        设置左侧，或
        <code>slot#subAppend</code>
        设置右侧内容
      </le-panel>
      <!-- /示例 -->
    </el-col>
    <el-col :span="12" style="height: 300px;">
      <!-- 示例 -->
      <le-panel>
        <ul>
          <li>简单面板</li>
          <li>简单面板</li>
          <li>简单面板</li>
          <li>简单面板</li>
          <li>简单面板</li>
        </ul>
      </le-panel>
      <!-- /示例 -->
    </el-col>
    <el-col :span="12">
      <div style="height: 300px; position: relative;">
        <!-- 示例 -->
        <le-panel full>
          <div slot="header">
            面板容器
          </div>
          <ul>
            <li>使用<code>full</code>属性撑满父容器</li>
            <li>使用<code>full</code>属性撑满父容器</li>
            <li>使用<code>full</code>属性撑满父容器</li>
            <li>使用<code>full</code>属性撑满父容器</li>
            <li>使用<code>full</code>属性撑满父容器</li>
            <li>使用<code>full</code>属性撑满父容器</li>
            <li>使用<code>full</code>属性撑满父容器</li>
            <li>使用<code>full</code>属性撑满父容器</li>
            <li>使用<code>full</code>属性撑满父容器</li>
            <li>使用<code>full</code>属性撑满父容器</li>
            <li>使用<code>full</code>属性撑满父容器</li>
            <li>使用<code>full</code>属性撑满父容器</li>
            <li>使用<code>full</code>属性撑满父容器</li>
            <li>使用<code>full</code>属性撑满父容器</li>
            <li>使用<code>full</code>属性撑满父容器</li>
            _(:зゝ∠)_
          </ul>
        </le-panel>
        <!-- /示例 -->
      </div>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: 'Panel',
  data() {
    return {
      radio: 'top'
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
