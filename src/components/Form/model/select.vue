<template>
  <el-form-item :label="title" :prop="name" :rules="$attrs.rules">
    <el-input v-bind="$attrs" v-model="record[name]" :type="type"></el-input>
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
    record: Object
  },
  created() {
    console.log(this.$props)
  }
}
</script>

<style lang="scss" scoped></style>
