<template>
  <div class="le-toolbar">
    <div class="content-box">
      <div class="top-panel">
        <div class="left-block">
          <slot></slot>
        </div>
        <div class="right-block" :class="{ out: openPullDown }">
          <slot name="append"></slot>
        </div>
      </div>
      <div v-if="$slots.pulldown" class="pulldown-panel" :class="{ open: openPullDown }">
        <span
          class="pulldown-handle"
          :title="openPullDown ? '收起' : '展开'"
          @click="togglePullDown"
        >
          <span :class="openPullDown ? 'el-icon-caret-top' : 'el-icon-caret-bottom'" />
          {{ openPullDown ? '收起' : '展开' }}
        </span>
        <div class="pulldown-body">
          <slot name="pulldown"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LeToolbar',
  props: {
    pullDown: Boolean
  },
  data() {
    return {
      openPullDown: false
    }
  },
  methods: {
    togglePullDown(e) {
      e.stopPropagation()
      e.preventDefault()

      this.openPullDown = !this.openPullDown
    }
  }
}
</script>

<style lang="scss">
@import '~@/assets/styles/variables.scss';

.le-toolbar {
  position: relative;
  overflow: hidden;
  min-height: $panelHeaderHeight;
  margin-bottom: 0;
  line-height: 1;
  border-bottom: 1px solid $borderColor;
  .top-panel {
    height: $panelHeaderHeight;
    overflow: hidden;
    display: flex;
    align-items: center;
    margin-left: 20px;

    .right-block {
      position: absolute;
      top: 7px;
      right: 20px;
      transition: transform 0.3s ease-out;
      transform: translateX(0);
      &.out {
        transform: translateX(120%);
      }
    }
  }
  .pulldown-panel {
    max-height: 0;
    transition: max-height 0.5s;
    background: #fff;

    &.open {
      max-height: 400px;
    }
    .pulldown-handle {
      width: 50px;
      height: 10px;
      font-size: 12px;
      border: 1px solid $borderColor;
      border-radius: 4px 4px 0 0;
      border-bottom: none;
      text-align: center;
      line-height: 10px;
      transition: all 0.2s;
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      margin: 0 auto;
      background: #fff;
      box-shadow: 0px 8px 18px -3px #9e9e9e;
      z-index: 2;
      overflow: hidden;
      cursor: pointer;
      span {
        display: flex;
        justify-content: center;
      }
      &:hover {
        width: 60px;
        height: 25px;
        color: $colorPrimary;
      }
    }
    .pulldown-body {
      margin-top: 0;
      position: relative;
      overflow: hidden;
      background: #f9f9f9;
      border-top: 1px solid $borderColor;
      padding: 10px;
      .el-form-item {
        margin-bottom: 10px;
      }
    }
  }
}
</style>
