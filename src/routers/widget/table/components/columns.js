export const columns1 = self => [
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
        // scope 为单前行
        return (
          <div>
            <el-button onClick={self.onView} type='text' size='small'>查看</el-button>
            <el-button type='text' size='small'>编辑</el-button>
          </div>
        )
      }
    }
  }
];
