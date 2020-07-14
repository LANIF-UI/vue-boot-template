<template>
  <div class="le-panel" :class="{ 'le-panel__full': full }">
    <div class="le-panel__header" v-if="$slots.header || header || $slots.append">
      <div>
        <slot name="header">{{ header }}</slot>
      </div>
      <slot name="append"></slot>
    </div>
    <div class="le-panel__sub-header" v-if="$slots.subHeader || subHeader || $slots.subAppend">
      <div>
        <slot name="subHeader">{{ subHeader }}</slot>
      </div>
      <slot name="subAppend"></slot>
    </div>
    <div class="le-panel__body" :style="{ ...bodyStyle, height }">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LePanel',
  props: {
    full: Boolean,
    header: String,
    bodyStyle: Object,
    subHeader: String,
    height: String
  }
}
</script>

<style lang="scss" scoped>
@import '~@/assets/styles/variables.scss';
@import '~@/assets/styles/mixin.scss';

.le-panel {
  border-radius: 4px;
  border: 1px solid $borderColor;
  background-color: #fff;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.08);
}
.le-panel__full {
  @include abs-full;
  display: flex;
  flex-direction: column;
}
.le-panel__header,
.le-panel__sub-header {
  flex: none;
  height: $panelHeaderHeight;
  padding: $panelHeaderPadding;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid $borderColor;
}
.le-panel__header {
  background: $panelHeaderBackgroundColor;
}
.le-panel__body {
  padding: $panelBodyPadding;
  overflow: auto;
  flex: auto;
}
</style>
