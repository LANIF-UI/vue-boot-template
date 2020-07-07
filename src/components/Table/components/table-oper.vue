<template>
  <div class="table-row-button" @click.stop><slot /></div>
</template>

<script>
export default {
  name: 'LeTableOper'
}
</script>

<style lang="scss">
@import '~@/assets/styles/variables.scss';

.table-row-button {
  button,
  a {
    border: none;
    background-color: transparent;
    height: 20px;
    color: $colorPrimary;
    padding: 0px 5px !important;
    outline: none;
    vertical-align: middle;
    overflow: hidden;
    > i {
      font-size: 20px;
      vertical-align: top;
      margin-left: 0 !important;
    }
    &:hover,
    &:focus {
      background-color: transparent;
      color: lighten($colorPrimary, 10%);
    }
    &:active,
    &.active {
      background-color: transparent;
      color: darken($colorPrimary, 10%);
    }

    &.disabled,
    &[disabled],
    fieldset[disabled] & {
      &,
      &:hover,
      &:focus,
      &:active,
      &.active {
        background-color: transparent;
        color: #ccc;
      }
    }
  }
}
</style>
