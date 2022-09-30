<template>
  <le-container class="crud" full>
    <le-header>
      <le-toolbar class="toolbar-demo">
        <el-button-group>
          <el-button size="small" type="primary" icon="el-icon-plus" @click="onAdd">新增</el-button>
          <el-button size="small" icon="el-icon-delete" @click="onDelete()">删除</el-button>
        </el-button-group>
        <template #append>
          <le-search-bar
            :columns="columns"
            @submit="onSearch"
            @reset="onSearch"
            mini
          ></le-search-bar>
        </template>
      </le-toolbar>
    </le-header>
    <le-main padding scroll>
      <le-table
        ref="table"
        v-loading="loading"
        :columns="columns"
        :data="dataItems"
        @change="onChange"
        @select="onSelect"
        row-key="id"
        select-type="checkbox"
        show-num
        pagination
      ></le-table>
    </le-main>
    <le-footer></le-footer>
    <FormDialog
      :columns="columns"
      :visible="visibleForm"
      :record="record"
      @submit="onSubmitForm"
      @close="onCloseForm"
    />
  </le-container>
</template>

<script>
import { getList } from '../service'
import { columns } from './columns'
import FormDialog from './FormDialog'

export default {
  name: 'Crud',
  components: {
    FormDialog
  },
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
      },
      selectedRow: [],
      visibleForm: false,
      record: {}
    }
  },
  mounted() {
    this.getListData({})
  },
  methods: {
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
      this.selectedRow = rows
    },
    onAdd() {
      this.record = {}
      this.visibleForm = true
    },
    onEdit(data) {
      this.record = data
      this.visibleForm = true
    },
    onDelete(data) {
      if (!data && !this.selectedRow.length) {
        this.$message.warning('请选择要删除的数据！')
        return
      }
      this.$confirm('是否删除所选数据?', '警告', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$message.success('操作成功！')
        this.getListData({})

        this.$refs.table.clearSelection()
        this.selectedRow = []
      })
    },
    onSearch(data) {
      this.getListData({})
    },
    onSubmitForm(data) {
      this.visibleForm = false
      this.$message.success('操作成功！')
      this.getListData({})
    },
    onCloseForm() {
      this.visibleForm = false
    }
  }
}
</script>

<style lang="scss" scoped></style>
