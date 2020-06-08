<template>
  <el-form-item :label="title" :prop="name" :rules="$attrs.rules">
    <el-radio-group v-bind="$attrs" v-model="record[name]">
      <el-radio v-for="option in dict" :key="option.code" :label="option.code">
        {{ option.codeName }}
      </el-radio>
    </el-radio-group>
  </el-form-item>
</template>

<script>
export default {
  name: 'LeRadio',
  props: {
    title: String,
    name: String,
    preview: Boolean,
    type: String,
    record: Object,
    dict: Array
  }
}
</script>

<style lang="scss" scoped></style>
