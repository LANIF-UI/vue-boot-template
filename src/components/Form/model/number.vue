<template>
  <el-form-item :label="title" :prop="name" :rules="_rules">
    <el-input
      v-bind="$attrs"
      v-model="record[name]"
      :placeholder="_placeholder"
      autocomplete="off"
    ></el-input>
  </el-form-item>
</template>

<script>
import { isNumstr } from '@/utils'
export default {
  name: 'LeNumber',
  props: {
    title: String,
    name: String,
    preview: Boolean,
    type: String,
    record: Object
  },
  computed: {
    _rules() {
      return [...(this.$attrs.rules || []), { validator: this.validatorNumber }]
    },
    _placeholder() {
      return this.placeholder || `请输入${this.title}`
    }
  },
  created() {},
  methods: {
    validatorNumber(rule, value, callback) {
      if (typeof value !== 'undefined' && !isNumstr(value)) {
        return callback(new Error(`${this.title}须为数字类型`))
      } else {
        callback()
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>
