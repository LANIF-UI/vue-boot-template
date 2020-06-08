<template>
  <el-footer
    v-bind="$attrs"
    class="le-footer"
    :height="height"
    :class="{
      'le-footer__height': height,
      'le-footer__padding': padding,
      'le-footer--border': border
    }"
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
    border: Boolean,
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
.le-header--border {
  border-top: 1px solid #e8e8e8;
}
</style>
