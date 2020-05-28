<template>
  <el-container
    v-bind="$attrs"
    class="le-container"
    :class="{ 'container--full': full, 'container--border': border }"
    :direction="isVertical"
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
    border: Boolean,
    direction: String
  },
  computed: {
    isVertical() {
      if (this.direction === 'vertical') {
        return 'vertical'
      } else if (this.direction === 'horizontal') {
        return 'horizontal'
      } else if (
        this.$slots &&
        this.$slots.default &&
        this.$slots.default.some(vnode => {
          const tag = vnode.componentOptions && vnode.componentOptions.tag
          return tag === 'le-header' || tag === 'le-footer'
        })
      ) {
        return 'vertical'
      } else {
        return 'horizontal'
      }
    }
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
