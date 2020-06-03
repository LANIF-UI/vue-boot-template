<template>
  <el-divider v-bind="$attrs">
    <render :render="title"></render>
  </el-divider>
</template>

<script>
import render from './render'
export default {
  name: 'LeDivider',
  components: {
    render
  },
  props: {
    title: [String, Function]
  }
}
</script>

<style lang="scss" scoped></style>
