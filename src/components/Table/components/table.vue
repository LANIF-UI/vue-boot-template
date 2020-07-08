<template>
  <div class="le-table-wrap">
    <el-table
      class="le-table"
      :data="tableData"
      :stripe="stripe"
      v-bind="$attrs"
      :row-key="rowKey"
      ref="leTable"
      @select="handleSelect"
    >
      <template v-for="(item, index) in tcolumns">
        <el-table-column :key="index" v-bind="item" v-if="!item.render"></el-table-column>
        <el-table-column :key="index" v-bind="item" v-else>
          <template slot-scope="scope">
            <render :render="isFunction(item.render) ? item.render(scope) : item.render"></render>
          </template>
        </el-table-column>
      </template>
    </el-table>
    <el-pagination
      v-if="pagination"
      class="le-pagination"
      @size-change="pageSize => handleTableChange({ pageSize })"
      @current-change="pageNum => handleTableChange({ pageNum })"
      v-bind="tpagination"
    ></el-pagination>
  </div>
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
    stripe: {
      type: Boolean,
      default: true
    },
    rowKey: [String, Function],
    data: [Object, Array],
    selectType: String,
    selectedRowKeys: Array,
    onSelect: Function,
    pagination: [Boolean, Object],
    showNum: Boolean
  },
  data() {
    return {
      paginationObj: {
        pageNum: 1,
        pageSize: 10,
        layout: 'total, sizes, prev, pager, next, jumper',
        ...this.pagination
      },
      tselectedRowKeys: [],
      tselectedRow: []
    }
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
      if (this.showNum) {
        cols.unshift({
          type: 'index',
          label: '序号',
          index: this.getIndexNum,
          width: 50
        })
      }
      if (this.selectType === 'checkbox') {
        cols.unshift({
          type: 'selection',
          reserveSelection: true,
          width: 50
        })
      }
      return cols
    },
    tableData() {
      let _data = []
      if (isArray(this.data)) {
        _data = this.data
      } else if (isObject(this.data)) {
        _data = this.data.list
      }

      return _data
    },
    tpagination() {
      if (isArray(this.data)) {
        return {
          total: this.data.length,
          ...this.paginationObj
        }
      } else if (isObject(this.data)) {
        const { pageNum, pageSize, total } = this.data
        return {
          currentPage: pageNum,
          pageSize: pageSize,
          total: total,
          ...this.paginationObj
        }
      }
      return {}
    }
  },
  watch: {
    selectedRowKeys(newValue, oldValue) {
      if (newValue) {
        const selectRow = this.tableData.filter(item => newValue.indexOf(item[this.rowKey]) !== -1)
        this.tselectRow = selectRow
        this.tselectedRowKeys = selectRow.map(item => item[this.rowKey])
        this.$nextTick(() => {
          selectRow.forEach(row => {
            this.$refs.leTable.toggleRowSelection(row, true)
          })
        })
      }
    }
  },
  methods: {
    isFunction,
    handleTableChange({ pageNum, pageSize }) {
      if (pageNum) {
        this.paginationObj.pageNum = pageNum
      } else if (pageSize) {
        this.paginationObj.pageSize = pageSize
      }

      this.$emit('change', this.paginationObj)
    },
    getIndexNum(index) {
      const { pageNum, pageSize } = this.paginationObj
      index = index + 1 + (pageNum - 1) * pageSize
      return index
    },
    handleSelect(val) {
      this.tselectRow = val
      this.tselectedRowKeys = val.map(item => item[this.rowKey])
    }
  }
}
</script>

<style lang="scss">
@import '~@/assets/styles/variables.scss';
@import '~@/assets/styles/mixin.scss';

.le-table-wrap {
  .le-table {
    .el-table-column--selection .cell {
      padding-left: 10px;
      padding-right: 10px;
    }
  }

  .el-pagination {
    float: right;
    margin: 16px 0;
  }
}
</style>
