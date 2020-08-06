<template>
  <le-container class="crud" full>
    <le-header>
      <le-toolbar class="toolbar-demo">
        <el-button-group>
          <el-button size="small" type="primary" icon="el-icon-plus">新增</el-button>
          <el-button size="small" icon="el-icon-delete">删除</el-button>
        </el-button-group>
      </le-toolbar>
    </le-header>
    <le-main>
      <le-table
        v-loading="loading"
        :columns="columns"
        :data="dataItems"
        :selected-row-keys="selectedRowKeys"
        @change="onChange"
        @select="onSelect"
        row-key="id"
        select-type="checkbox"
        show-num
        pagination
      ></le-table>
    </le-main>
    <le-footer>
      123
    </le-footer>
  </le-container>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapState, mapActions } = createNamespacedHelpers('crud')
const { name } = mapState(['name'])
const { setName } = mapActions(['setName'])
import { getList } from '../service'
import columns from './columns'

export default {
  name: 'Crud',
  data() {
    return {
      loading: false,
      columns: columns(this),
      dataItems: {
        pageNum: 1,
        pageSize: 10,
        total: 100,
        totalPages: 10,
        list: []
      }
    }
  },
  computed: {
    name
  },
  methods: {
    setName,
    getListData({ pageNum, pageSize, sorter }) {
      this.loading = true
      getList({ pageNum: pageNum || 1, pageSize: pageSize || 10, sorter }).then(resp => {
        this.dataItems = resp.data
        this.loading = false
      })
    },
    onChange({ pageNum, pageSize, sorter, filter }) {
      this.getListData({ pageNum, pageSize, sorter })
    },
    onSelect(rows, row, keys) {
      console.log(rows, row, keys)
    }
  }
}
</script>

<style lang="scss" scoped></style>
