<template>
  <el-form-item :label="title" :prop="name" :rules="_rules">
    <el-upload
      v-bind="$attrs"
      class="le-upload"
      :file-list="fileList"
      :on-change="handleChange"
      :on-remove="handleRemove"
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
import { isArray, isFunction } from '@/utils'

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
    tip: [String, Function],
    maxFileSize: Number, // 最大文件大小
    fileTypes: Array, // 允许文件类型
    normalize: Function
  },
  data() {
    let _fileList = []
    if (isFunction(this.normalize) && this.record[this.name]) {
      _fileList = this.normalize(this.record[this.name])
    }
    return {
      fileList: _fileList
    }
  },
  computed: {
    _rules() {
      return [...(this.$attrs.rules || []), { validator: this.validator }]
    },
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
  },
  watch: {
    fileList(newValue, oldValue) {
      const parent = this.$parent || this.$root
      this.record[this.name] = newValue
      // this.$emit('el.form.change', newValue);
      parent.validateField(this.name)
    }
  },
  methods: {
    handleChange(file, fileList) {
      this.fileList = fileList
    },
    handleRemove(file, fileList) {
      this.fileList = fileList
    },
    validator(rule, value, callback) {
      this.validatorFileSize(this.maxFileSize, value, callback)
      this.validatorFileTypes(this.fileTypes, value, callback)
      callback()
    },
    validatorFileSize(maxFileSize, value, callback) {
      if (value && value.some && value.some(item => item.size > maxFileSize * 1024)) {
        callback(new Error(`请上传文件大小在${maxFileSize}K以内的文件`))
        return
      }
    },
    validatorFileTypes(fileTypes, value, callback) {
      if (value && isArray(fileTypes) && fileTypes.length > 0) {
        if (
          value.some &&
          value.some(
            item =>
              item.name &&
              !fileTypes.some(type => item.name.toLowerCase().indexOf(type.toLowerCase()) !== -1)
          )
        ) {
          callback(new Error(`请上传${fileTypes.join('、')}，类型文件`))
          return
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>
