<template>
  <le-container class="demo" padding>
    <le-main>
      <el-row :gutter="24">
        <el-col :span="24">
          <le-panel header="Dialog 对话框">
            <code v-text="'就是element的dialog只是改了下样子'"></code>
          </le-panel>
        </el-col>
        <el-col :span="12">
          <!-- 示例 -->
          <le-panel header="弹窗">
            <el-button type="text" @click="dialogVisible = true">点击打开 Dialog</el-button>
            <el-dialog title="提示" :visible.sync="dialogVisible" width="30%">
              <span>这是一段信息</span>
              <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false" size="medium">取 消</el-button>
                <el-button type="primary" @click="dialogVisible = false" size="medium">确 定</el-button>
              </span>
            </el-dialog>
          </le-panel>
          <!-- /示例 -->
        </el-col>
      </el-row>
    </le-main>
  </le-container>
</template>

<script>
export default {
  name: 'Dialog',
  data() {
    return {
      dialogVisible: false
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
