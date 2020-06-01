<template>
  <el-form
    ref="form"
    :model="record"
    :label-width="labelWidth"
    :label-suffix="labelSuffix"
    v-bind="$attrs"
  >
    <component
      v-for="field in formFields"
      v-bind="field.formItem"
      :record="record"
      :key="field.name"
      :title="field.title"
      :name="field.name"
      :is="field.formItem.type ? `le-${field.formItem.type}` : 'le-input'"
    ></component>
    <el-button type="primary" @click="submitForm">提交</el-button>
    <el-button type="primary" @click="resetForm">重置</el-button>
  </el-form>
</template>

<script>
import model from '../model'
export default {
  name: 'LeForm',
  components: model,
  props: {
    preview: Boolean, // 是否是预览视图，所有表单项将展示为文本模式
    columns: {
      type: Array,
      required: true
    },
    labelWidth: {
      type: String,
      default: '100px'
    },
    labelSuffix: {
      type: String,
      default: '：'
    },
    record: {
      type: Object,
      default() {
        return {}
      }
    }, // 使用record的数据对表单进行赋值 {key:value, key1: value1}
    inline: Boolean, // 行内表单模式
    group: String, // 条件分组，设置这个属性后，会在column.js中过滤有相同group值的项
    row: Object, // el-row的配置
    col: Object, // el-col的配置
    submit: Function // 点击确定按钮
  },
  computed: {
    formFields() {
      const _formFields = this.columns.filter(col => col.formItem)
      if (this.group) {
        return _formFields.filter(col => col.formItem && col.formItem.group === this.group)
      }
      return _formFields
    }
  },
  created() {},
  methods: {
    submitForm() {
      console.log(this.record)
      this.$refs.form.validate(valid => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm() {
      this.$refs.form.resetFields()
    }
  }
}
</script>

<style lang="scss" scoped></style>
