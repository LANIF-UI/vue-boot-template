<template>
  <div class="page403">
    <el-row class="error-block">
      <el-col :md="16">
        <div class="center-block">
          <h1 class="error-title">403!</h1>
          <h2 class="error-subtitle">抱歉，你无权访问该页面...</h2>
          <h6 class="error-message">错误: {{ message }}</h6>
          <a href="">
            <el-button class="btn--home" icon="el-icon-thumb" type="primary" plain round>
              Back to home
            </el-button>
          </a>
        </div>
      </el-col>
      <el-col :md="8">
        <svg-icon icon-class="403" style="width: 313px; height: 428px" />
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'Page403',
  computed: {
    message() {
      return 'The webmaster said that you can not enter this page...'
    }
  }
}
</script>

<style lang="scss" scoped>
.page403 {
  background: #fff;
  .ant-layout-content {
    overflow: hidden !important;
  }
  .error-block {
    margin: 100px;
  }
  .center-block {
    margin: 0 100px;
    .error-title {
      font-size: 60px;
      font-weight: 800;
      color: #444;
      margin-bottom: 10px;
    }
    .error-subtitle {
      font-weight: 400;
      font-size: 32px;
      color: #444;
      margin-bottom: 20px;
    }
    .error-message {
      margin-bottom: 40px;
    }
  }
}
</style>
