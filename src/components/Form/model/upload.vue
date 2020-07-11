<template>
  <el-form-item :label="title" :prop="name" :rules="_rules">
    <le-form-upload class="le-upload" v-bind="$attrs" v-model="record[name]">
      <render :render="uploadButton" v-if="max ? max > record[name].length : true"></render>
      <div v-else class="no-allow">
        <el-button size="small" icon="el-icon-upload2" disabled>
          点击上传
        </el-button>
      </div>
      <div v-if="tip" slot="tip" class="el-upload__tip">
        <render :render="tip"></render>
      </div>
    </le-form-upload>
  </el-form-item>
</template>

<script>
import render from '@/components/BaseComponent/render'
import LeFormUpload from '../components/form-upload'
import { isArray } from '@/utils'

export default {
  name: 'LeUpload',
  components: {
    render,
    LeFormUpload
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
    max: Number // 最大数量
  },
  inject: {
    elForm: {
      default: ''
    },
    elFormItem: {
      default: ''
    }
  },
  computed: {
    _rules() {
      return [...(this.$attrs.rules || []), { validator: this.validator }]
    },
    uploadButton() {
      if (this.render) {
        return this.render(this.record[this.name])
      } else {
        return h => (
          <el-button size='small' type='primary' icon='el-icon-upload2' plain>
            点击上传
          </el-button>
        )
      }
    }
  },
  methods: {
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

<style lang="scss" scoped>
.no-allow {
  height: 0px;
  user-select: none;
  pointer-events: none;
}
</style>
