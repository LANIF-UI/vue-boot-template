<template>
  <el-table class="le-table" v-bind="$attrs">
    <el-table-column v-for="(item, index) in tcolumns" :key="index" v-bind="item"></el-table-column>
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
  },
  data() {
    return {}
  },
  computed: {
    tcolumns() {
      const cols = this.columns
        .filter(col => col.tableItem)
        .map(col => {
          const item = col.tableItem
          // select 字典加强
          if (col.dict && !item.render) {
            item.render = (text, record) => {
              return (
                col.dict && col.dict.filter(dic => dic.code === text).map(dic => dic.codeName)[0]
              )
            }
          }
          // 是否有左侧固定列
          // if (item.fixed === true || item.fixed === 'left') {
          //   hasLeftFixedCol = true
          // }
          return {
            label: col.title,
            prop: col.name,
            ...item
          }
        })
      return cols
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/assets/styles/variables.scss';
@import '~@/assets/styles/mixin.scss';

.le-table {
}
</style>
