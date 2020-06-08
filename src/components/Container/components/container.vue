<template>
  <el-container
    v-bind="$attrs"
    class="le-container"
    :class="{
      'container--full': full,
      'container--border': border,
      'container--padding': padding,
      'container--frame': frame
    }"
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
    frame: Boolean,
    border: Boolean,
    padding: [Boolean, Number],
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

<style lang="scss">
@import './index.scss'
</style>
