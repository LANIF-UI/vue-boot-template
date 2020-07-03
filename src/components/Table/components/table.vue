<template>
  <el-table class="le-table" :data="tableData" v-bind="$attrs">
    <template v-for="(item, index) in tcolumns">
      <el-table-column :key="index" v-bind="item" v-if="!item.render"></el-table-column>
      <el-table-column :key="index" v-bind="item" v-else>
        <template slot-scope="scope">
          <render :render="isFunction(item.render) ? item.render(scope) : item.render"></render>
        </template>
      </el-table-column>
    </template>
  </el-table>
</template>

<script>
import { isObject, isArray, isFunction } from '@/utils'
import render from '../../BaseComponent/render'

export default {
  name: 'LeTable',
  components: {
    render
  },
  props: {
    columns: {
      type: Array,
      required: true
    },
    data: [Object, Array],
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
    },
    tableData() {
      if (isArray(this.data)) {
        return this.data
      } else if (isObject(this.data)) {
        return this.data.list
      }
      return []
    }
  },
  methods: {
    isFunction
  }
}
</script>

<style lang="scss" scoped>
@import '~@/assets/styles/variables.scss';
@import '~@/assets/styles/mixin.scss';

.le-table {
}
</style>
