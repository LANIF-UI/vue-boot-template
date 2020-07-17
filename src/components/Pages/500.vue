<template>
  <div class="page500">
    <el-row class="error-block">
      <el-col :md="16">
        <div class="center-block">
          <h1 class="error-title">500!</h1>
          <h2 class="error-subtitle">抱歉，我们出现了一个意想不到的失误...</h2>
          <h6 class="error-message">错误: {{ message }}</h6>
          <a href="">
            <el-button class="btn--home" icon="el-icon-thumb" type="primary" plain round>
              Back to home
            </el-button>
          </a>
        </div>
      </el-col>
      <el-col :md="8">
        <img :src="error500" width="313" height="428" alt="error" />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import error500 from '@/assets/images/error.gif'

export default {
  name: 'Page500',
  data() {
    return {
      error500
    }
  },
  computed: {
    message() {
      return 'ooops...'
    }
  }
}
</script>

<style lang="scss" scoped>
.page500 {
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
