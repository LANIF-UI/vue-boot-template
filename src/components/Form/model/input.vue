<template>
  <el-form-item :label="title" :prop="name" :rules="$attrs.rules">
    <el-input
      v-bind="$attrs"
      v-model="record[name]"
      :type="type"
      :placeholder="_placeholder"
    ></el-input>
  </el-form-item>
</template>

<script>
export default {
  name: 'LeInput',
  props: {
    title: String,
    name: String,
    preview: Boolean,
    type: String,
    record: Object,
    placeholder: String
  },
  computed: {
    _placeholder() {
      return this.placeholder || `请输入${this.title}`
    }
  },
  created() {
  }
}
</script>

<style lang="scss" scoped></style>
