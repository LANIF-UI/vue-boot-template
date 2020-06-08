<template>
  <el-header
    v-bind="$attrs"
    class="le-header"
    :height="height"
    :class="{
      'le-header__height': height,
      'le-header__padding': padding,
      'le-header--border': border
    }"
  >
    <slot />
  </el-header>
</template>

<script>
export default {
  name: 'LeHeader',
  props: {
    height: {
      type: String,
      default: 'auto'
    },
    border: Boolean,
    padding: Boolean
  },
}
</script>

<style lang="scss" scoped>
@import '~@/assets/styles/variables.scss';

.le-header {
  padding: 0;
}
.le-header__padding {
  padding: $containerHeaderPadding;
}
.le-header--border {
  border-bottom: 1px solid #e8e8e8;
}
</style>
