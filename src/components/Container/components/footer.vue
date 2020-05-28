<template>
  <el-footer
    v-bind="$attrs"
    class="le-footer"
    :height="height"
    :class="{ 'le-footer__height': height, 'le-footer__padding': padding }"
  >
    <slot />
  </el-footer>
</template>

<script>
export default {
  name: 'LeFooter',
  props: {
    height: {
      type: String,
      default: 'auto'
    },
    padding: Boolean
  }
}
</script>

<style lang="scss" scoped>
@import '~@/assets/styles/variables.scss';

.le-footer {
  padding: 0;
}
.le-footer__padding {
  padding: $containerHeaderPadding;
}
</style>
