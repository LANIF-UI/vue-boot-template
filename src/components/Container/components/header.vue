<template>
  <el-header v-bind="$attrs">
    <slot />
  </el-header>
</template>

<script>
export default {
  name: 'LeHeader',
  componentName: 'ElHeader'
}
</script>

<style lang="scss" scoped></style>
