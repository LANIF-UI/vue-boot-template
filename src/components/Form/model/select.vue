<template>
  <el-form-item :label="title" :prop="name" :rules="$attrs.rules">
    <el-select
      v-bind="$attrs"
      v-model="record[name]"
      :placeholder="_placeholder"
      @change="onChange"
    >
      <el-option
        v-for="option in dict"
        :key="option.code"
        :value="option.code"
        :label="option.codeName"
      ></el-option>
    </el-select>
  </el-form-item>
</template>

<script>
export default {
  name: 'LeSelect',
  props: {
    title: String,
    name: String,
    preview: Boolean,
    type: String,
    record: Object,
    dict: Array,
    change: Function
  },
  computed: {
    _placeholder() {
      return this.placeholder || `请选择${this.title}`
    }
  },
  created() {},
  methods: {
    onChange(v) {
      this.change && this.change(v)
    }
  }
}
</script>

<style lang="scss" scoped></style>
