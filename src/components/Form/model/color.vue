<template>
  <el-form-item :label="title" :prop="name" :rules="$attrs.rules">
    <el-color-picker v-bind="$attrs" v-model="record[name]"></el-color-picker>
  </el-form-item>
</template>

<script>
export default {
  name: 'LeColor',
  props: {
    title: String,
    name: String,
    preview: Boolean,
    type: String,
    record: Object,
    placeholder: String
  }
}
</script>

<style lang="scss" scoped></style>
