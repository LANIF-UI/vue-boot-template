<template>
  <el-dialog :title="record.id ? '修改' : '新增'" :visible="visible" width="400" @close="onClose">
    <le-form ref="form" :columns="columns" :record="record" :footer="false"></le-form>
    <span slot="footer" class="dialog-footer">
      <el-button @click="onClose">取 消</el-button>
      <el-button type="primary" @click="onSubmit">确 定</el-button>
    </span>
  </el-dialog>
</template>

<script>
export default {
  props: ['visible', 'record', 'columns'],
  methods: {
    onSubmit(value) {
      this.$refs.form.submitForm(data => {
        this.$emit('submit', data)
      })
    },
    onClose() {
      this.$emit('close')
    }
  }
}
</script>

<style lang="scss" scoped></style>
