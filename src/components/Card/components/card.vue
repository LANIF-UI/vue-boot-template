<template>
  <div class="le-card" :class="{ ['le-card--' + type]: type }">
    <div class="le-card__header" v-if="$slots.header || header || $slots.append">
      <div class="le-card__header--title">
        <slot name="header">{{ header }}</slot>
      </div>
      <div class="le-card__header--append">
        <slot name="append">{{ append }}</slot>
      </div>
    </div>
    <div class="le-card__body">
      <slot></slot>
    </div>
    <div class="le-card__footer" v-if="$slots.footer || footer || $slots.footerAppend">
      <div>
        <slot name="footer">{{ footer }}</slot>
      </div>
      <slot name="footerAppend">{{ footerAppend }}</slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LeCard',
  props: {
    type: String,
    header: String,
    footer: String,
    append: String,
    footerAppend: String
  }
}
</script>

<style lang="scss" scoped>
@import '~@/assets/styles/variables.scss';
.le-card {
  border-radius: 4px;
  border: 1px solid $borderColor;
  background-color: #fff;
  &--info {
    border-left: 4px solid $colorInfo;
  }
  &--success {
    border-left: 4px solid $colorSuccess;
  }
  &--warning {
    border-left: 4px solid $colorWarning;
  }
  &--danger {
    border-left: 4px solid $colorDanger;
  }
}
.le-card + .le-card {
  margin-top: 10px;
}
.le-card__header,
.le-card__footer {
  color: $colorTextSecondary;
  padding: $cardHeaderPadding;
  height: $cardHeaderHeight;
  flex: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.le-card__header--title {
  font-size: $fontSizeMedium;
  font-weight: 700;
  color: $colorTextPrimary;
}
.le-card__header--append {
  height: $cardHeaderHeight;
  display: flex;
  align-items: center;
}
.le-card__body {
  padding: $cardBodyPadding;
  overflow: auto;
  flex: auto;
  color: $colorTextBase;
}
</style>
