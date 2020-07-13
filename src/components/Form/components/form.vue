<template>
  <el-form
    ref="form"
    class="le-form"
    :model="formData"
    :label-width="labelWidth"
    :label-suffix="labelSuffix"
    v-bind="$attrs"
    @submit.native.prevent
  >
    <component
      v-for="(field, i) in formFields"
      v-bind="field.formItem"
      :key="field.name || i"
      :record="formData"
      :title="field.title"
      :name="field.name"
      :dict="field.dict"
      :label="field.title"
      :is="getType(field.formItem)"
    >
      <component
        v-for="(subField, j) in Array.isArray(field.formItem) && field.formItem"
        v-bind="{
          ...subField.formItem,
          ...(subField.formItem.col || {
            record: formData,
            title: subField.title,
            name: subField.name,
            dict: subField.dict
          })
        }"
        :class="'le-form__' + (subField.formItem.type || 'input')"
        :key="subField.name || j"
        :is="getType(subField.formItem)"
      >
        <component
          v-bind="subField.formItem"
          :record="formData"
          :title="subField.title"
          :name="subField.name"
          :dict="subField.dict"
          :is="getType(subField.formItem, true)"
        ></component>
      </component>
    </component>
    <el-form-item class="form-btns" v-if="footer">
      <slot name="submitBtn">
        <el-button
          type="primary"
          icon="el-icon-check"
          @click="submitForm"
          native-type="submit"
          :title="submitBtn"
        >
          {{ submitBtn || '提交' }}
        </el-button>
      </slot>
      <slot name="resetBtn">
        <el-button icon="el-icon-refresh-right" @click="resetForm" :title="resetBtn">
          {{ resetBtn || '重置' }}
        </el-button>
      </slot>
      <slot name="action"></slot>
    </el-form-item>
  </el-form>
</template>

<script>
import model from '../model'
import { isFunction, isArray } from '@/utils'
import _ from 'lodash'
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
      default: ':'
    },
    record: Object, // 使用record的数据对表单进行赋值 {key:value, key1: value1}
    group: String, // 条件分组，设置这个属性后，会在column.js中过滤有相同group值的项
    row: Object, // el-row的配置
    col: Object, // el-col的配置
    submit: Function, // 点击确定按钮事件
    footer: {
      type: Boolean,
      default: true
    },
    submitBtn: String, // 提交按钮文字，如果为slot则可自定义提交按钮区域
    resetBtn: String // 重置按钮文字，如果为slot则可自定义重置按钮区域
  },
  data() {
    let _formFields = this.columns.filter(col => col.formItem)
    if (this.group) {
      _formFields = _formFields.filter(col => col.formItem.group === this.group)
    }

    const _formData = _formFields
      .map(field => ({
        [field.name]: this.getValue(field.formItem, field.name)
      }))
      .reduce((p, n) => Object.assign(p, n), this.record || {})

    return {
      formFields: _formFields,
      formData: _.pickBy(_formData, _.identity)
    }
  },
  watch: {
    columns(newValue, oldValue) {
      let _formFields = newValue.filter(col => col.formItem)
      if (this.group) {
        _formFields = _formFields.filter(col => col.formItem.group === this.group)
      }
      this.formFields = _formFields
    },
    record(newValue, oldValue) {
      const _formData = this.formFields
        .map(field => ({
          [field.name]: this.getValue(field.formItem, field.name)
        }))
        .reduce((p, n) => Object.assign(p, n), this.record || {})
      this.formData = _formData
    }
  },
  methods: {
    submitForm(cb) {
      this.$refs.form.validate((valid, errFields) => {
        if (valid) {
          if (_.isFunction(cb)) cb(this.formData)
          else this.$emit('submit', this.formData)
        } else {
          console.log('error submit!!', errFields)
          return false
        }
      })
    },
    resetForm() {
      this.$refs.form.resetFields()
      this.$emit('reset', this.formData)
    },
    getValue(formItem, name) {
      if (formItem.initialValue || (this.record && this.record[name])) {
        if (isFunction(formItem.normalize)) {
          return formItem.normalize((this.record && this.record[name]) || formItem.initialValue)
        } else {
          return (this.record && this.record[name]) || formItem.initialValue
        }
      }
    },
    getType(formItem, isFinal) {
      if (isArray(formItem)) {
        return 'el-form-item'
      }
      if (formItem.col && !isFinal) {
        return 'el-col'
      }
      if (!formItem.type) {
        return 'le-input'
      }
      return 'le-' + formItem.type
    }
  }
}
</script>

<style lang="scss">
.el-form-item__content .el-select {
  width: 100%;
}
.le-form__divider {
  text-align: center;
  .el-divider {
    margin: 0;
    display: inline-block;
    vertical-align: middle;
    position: relative;
  }
  .el-divider--horizontal {
    width: 60%;
  }
}
// 表格布局col会继承父级el-row的gutter，会出现错位
.le-form [class*='el-col-'] {
  padding: 0 !important;
}
</style>
