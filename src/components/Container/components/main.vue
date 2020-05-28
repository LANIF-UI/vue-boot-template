<template>
  <el-main
    class="le-main"
    :class="{ 'le-main__padding': padding }"
    v-bind="$attrs"
  >
    <slot />
  </el-main>
</template>

<script>
export default {
  name: 'LeMain',
  props: {
    padding: Boolean // 是否带内边距
  }
}
</script>

<style lang="scss" scoped>
@import '~@/assets/styles/variables.scss';

.le-main {
  padding: 0;
}
.le-main__padding {
  padding: $containerMainPadding;
}
</style>
