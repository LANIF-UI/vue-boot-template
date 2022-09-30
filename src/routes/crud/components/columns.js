export const columns = self => [
  {
    title: '名称',
    name: 'name',
    tableItem: {},
    formItem: {},
    searchItem: {}
  },
  {
    title: '年龄',
    name: 'age',
    tableItem: {},
    formItem: {}
  },
  {
    title: '地址',
    name: 'address',
    tableItem: {},
    formItem: {}
  },
  {
    title: '操作',
    tableItem: {
      width: 180,
      render: scope => h => {
        // scope 为当前行数据
        return (
          <le-table-oper>
            <el-button icon="el-icon-edit" onClick={e => self.onEdit(scope.row)} />
            <el-button icon="el-icon-delete" onClick={e => self.onDelete(scope.row)} />
          </le-table-oper>
        )
      }
    }
  }
]
