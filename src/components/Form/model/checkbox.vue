<template>
  <el-form-item :label="title" :prop="name" :rules="$attrs.rules">
    <el-checkbox-group v-bind="$attrs" v-model="record[name]">
      <el-checkbox v-for="option in dict" :key="option.code" :label="option.code">
        {{ option.codeName }}
      </el-checkbox>
    </el-checkbox-group>
  </el-form-item>
</template>

<script>
export default {
  name: 'LeCheckbox',
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
