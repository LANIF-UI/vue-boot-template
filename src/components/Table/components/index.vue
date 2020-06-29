<template>
  <el-table class="le-table" v-bind="$attrs">

  </el-table>
</template>

<script>
export default {
  name: 'LeTable',
  props: {
    columns: {
      type: Array,
      required: true
    },
    dataItems: Object,
    selectType: String,
    onSelect: Function
  }
}
</script>

<style lang="scss" scoped>
@import '~@/assets/styles/variables.scss';
@import '~@/assets/styles/mixin.scss';

.le-table {

}
</style>
