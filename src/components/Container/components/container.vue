<template>
  <el-container
    v-bind="$attrs"
    class="le-container"
    :class="{ 'container--full': full, 'container--border': border }"
  >
    <slot />
  </el-container>
</template>

<script>
export default {
  name: 'LeContainer',
  props: {
    full: {
      type: Boolean,
      default: false
    },
    border: Boolean
  }
}
</script>

<style lang="scss" scoped>
@import '~@/assets/styles/variables.scss';
.le-container {
  position: relative;
}
.container--border {
  border: $containerHeaderBorder;
}
.container--full {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>
