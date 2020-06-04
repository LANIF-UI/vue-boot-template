<template>
  <le-container padding>
    <le-main class="demo">
      <el-row :gutter="24">
        <el-col :span="24">
          <le-panel header="布局容器">
            <code v-text="'<le-container></le-container>'"></code>
            <code v-text="'<le-header></le-header>'"></code>
            <code v-text="'<le-footer></le-footer>'"></code>
            <code v-text="'<le-aside></le-aside>'"></code>
          </le-panel>
        </el-col>
        <el-col :span="12" style="height: 300px;">
          <!-- 示例 -->
          <le-container>
            <le-header>Header</le-header>
            <le-main>Main(流式布局头、尾、内容无内边距)</le-main>
            <le-footer>Footer</le-footer>
          </le-container>
          <!-- /示例 -->
        </el-col>
        <el-col :span="12" style="height: 300px;">
          <div style="height: 300px; position: relative;">
            <!-- 示例 -->
            <le-container>
              <le-header>Header</le-header>
              <le-container>
                <le-aside width="200px">Aside</le-aside>
                <le-main>带侧边栏</le-main>
              </le-container>
            </le-container>
            <!-- /示例 -->
          </div>
        </el-col>
        <el-col :span="12">
          <div style="height: 300px; position: relative;">
            <!-- 示例 -->
            <le-container full>
              <le-header>Header</le-header>
              <le-main>Main(添加full属性会撑满父容器)</le-main>
              <le-footer>Footer</le-footer>
            </le-container>
            <!-- /示例 -->
          </div>
        </el-col>
        <el-col :span="12" style="height: 300px;">
          <div style="height: 300px; position: relative;">
            <!-- 示例 -->
            <le-container full border>
              <le-aside width="200px">Aside</le-aside>
              <le-main>
                <le-container full>
                  <le-header>Header</le-header>
                  <le-main>带侧边栏并撑满父容器</le-main>
                  <le-footer>Footer</le-footer>
                </le-container>
              </le-main>
            </le-container>
            <!-- /示例 -->
          </div>
        </el-col>
      </el-row>
    </le-main>
  </le-container>
</template>

<script>
export default {
  name: 'Container',
  data() {
    return {
      rawHtml: '<code>fff</code>'
    }
  }
}
</script>

<style lang="scss" scoped>
.el-col {
  position: relative;
  margin-bottom: 24px;
}
.le-header,
.le-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
}

.le-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
}

.demo .le-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
