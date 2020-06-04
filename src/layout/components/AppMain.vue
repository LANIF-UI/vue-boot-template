<template>
  <section class="app-main">
    <le-container>
      <le-main>
        <transition name="fade-transform" mode="out-in">
          <router-view :key="key" />
        </transition>
      </le-main>
    </le-container>
  </section>
</template>

<script>
export default {
  name: 'AppMain',
  computed: {
    key() {
      return this.$route.path
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/assets/styles/variables.scss';

.app-main {
  min-height: calc(100vh - #{$navbarHeight});
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
}
.fixed-header + .app-main {
  min-height: 100vh;
  padding-top: $navbarHeight;
}
</style>

<style lang="scss">
// fix css style bug in open el-dialog
.el-popup-parent--hidden {
  .fixed-header {
    padding-right: 15px;
  }
}
</style>
