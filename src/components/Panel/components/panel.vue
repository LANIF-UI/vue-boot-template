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
@import '~@/assets/styles/variables.scss';

.le-panel {
  border-radius: 4px;
  border: 1px solid $borderColor;
  background-color: #fff;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.08);
}
.le-panel__header {
  padding: $panelHeaderPadding;
  border-bottom: 1px solid $borderColor;
  background: $panelHeaderBackgroundColor;
}
.le-panel__body {
  padding: $panelBodyPadding;
}
</style>
