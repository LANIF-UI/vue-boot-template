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
      </el-row>
    </le-main>
  </le-container>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
.el-col {
  position: relative;
  margin-bottom: 24px;
}
</style>
