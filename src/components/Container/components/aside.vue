<template>
  <el-aside
    v-bind="$attrs"
    class="le-aside"
    :width="width"
    :class="{ 'le-aside__width': width }"
  >
    <slot />
  </el-aside>
</template>

<script>
export default {
  name: 'LeAside',
  props: {
    width: {
      type: String,
      default: 'auto'
    }
  }
}
</script>

<style lang="scss" scoped></style>
