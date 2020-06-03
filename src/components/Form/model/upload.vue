<template>
  <el-form-item :label="title" :prop="name" :rules="$attrs.rules">
    <el-upload
      v-bind="$attrs"
      class="le-upload"
      action="https://jsonplaceholder.typicode.com/posts/"
      :on-preview="handlePreview"
      :on-remove="handleRemove"
      :before-remove="beforeRemove"
      :limit="3"
      :on-exceed="handleExceed"
      :file-list="fileList"
      multiple
    >
      <render :render="uploadButton"></render>
      <div v-if="tip" slot="tip" class="el-upload__tip">
        <render :render="tip"></render>
      </div>
    </el-upload>
  </el-form-item>
</template>

<script>
import render from './render'

export default {
  name: 'LeUpload',
  components: {
    render
  },
  props: {
    title: String,
    name: String,
    preview: Boolean,
    type: String,
    record: Object,
    render: Function,
    tip: [String, Function]
  },
  computed: {
    uploadButton() {
      if (this.render) {
        return this.render
      } else {
        return h => (
          <el-button size='small' type='primary' icon='el-icon-upload2' plain>
            点击上传
          </el-button>
        )
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>
