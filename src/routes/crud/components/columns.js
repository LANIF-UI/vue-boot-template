export default self => [
  {
    title: '名称',
    name: 'name',
    tableItem: {}
  },
  {
    title: '年龄',
    name: 'age',
    tableItem: {}
  },
  {
    title: '地址',
    name: 'address',
    tableItem: {}
  },
  {
    title: '操作',
    tableItem: {
      width: 180,
      render: scope => h => {
        // scope 为当前行数据
        return (
          <le-table-oper>
            <el-button icon='el-icon-edit'></el-button>
            <el-button icon='el-icon-delete'></el-button>
          </le-table-oper>
        )
      }
    }
  }
];
