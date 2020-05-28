<template>
  <le-container class="app-wrapper">
    <le-main>
      <transition name="fade-transform" mode="out-in">
        <router-view :key="key" />
      </transition>
    </le-main>
  </le-container>
</template>

<style lang="scss" scoped>
@import '~@/assets/styles/mixin.scss';
@import '~@/assets/styles/variables.scss';

.app-wrapper {
  @include clearfix;
  position: relative;
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding: $insetLayoutPadding;

  &.mobile.openSidebar {
    position: fixed;
    top: 0;
  }
}
</style>
