<template>
  <el-main
    class="le-main"
    :class="{ 'le-main__padding': padding, 'le-main__scroll': scroll }"
    v-bind="$attrs"
  >
    <slot />
  </el-main>
</template>

<script>
export default {
  name: 'LeMain',
  props: {
    padding: Boolean, // 是否带内边距
    scroll: Boolean // 是否需要带滚动条
  }
}
</script>

<style lang="scss" scoped>
@import '~@/assets/styles/variables.scss';

.le-main {
  padding: 0;
  overflow: hidden;
}
.le-main__padding {
  padding: $containerMainPadding;
}
.le-main__scroll {
  overflow: auto;
}
</style>
