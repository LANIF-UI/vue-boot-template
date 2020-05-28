<template>
  <el-header
    v-bind="$attrs"
    class="le-header"
    :height="height"
    :class="{ 'le-header__height': height, 'le-header__padding': padding }"
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
    padding: Boolean
  }
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
</style>
