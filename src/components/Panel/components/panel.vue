<template>
  <div class="le-panel">
    <div class="le-panel__header" v-if="$slots.header || header">
      <slot name="header">{{ header }}</slot>
    </div>
    <div class="le-panel__body" :style="bodyStyle">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LePanel',
  props: {
    header: {},
    bodyStyle: {}
  }
}
</script>

<style lang="scss" scoped>
.le-panel {
  border-radius: 4px;
  border: 1px solid #ebeef5;
  background-color: #fff;
  overflow: hidden;
}
.le-panel__header {
  padding: 18px 20px;
  border-bottom: 1px solid #ebeef5;
  background: #fafafa;
  box-sizing: border-box;
}
.le-panel__body {
  padding: 20px;
}
</style>
