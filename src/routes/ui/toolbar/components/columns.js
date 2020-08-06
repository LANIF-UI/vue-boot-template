export const columns1 = [
  {
    title: '角色类型',
    name: 'roleType',
    dict: [
      { code: '1', codeName: '类型一' },
      { code: '2', codeName: '类型二' },
      { code: '3', codeName: '类型三' }
    ],
    searchItem: {
      type: 'select'
    }
  },
  {
    title: '角色名',
    name: 'roleName',
    searchItem: {}
  },
  {
    title: '顺序',
    name: 'order',
    searchItem: {
      type: 'number',
      min: 1,
      max: 99
    }
  }
];

export const columns2 = [
  {
    title: '角色类型',
    name: 'roleType',
    dict: [
      { code: '1', codeName: '类型一' },
      { code: '2', codeName: '类型二' },
      { code: '3', codeName: '类型三' }
    ],
    searchItem: {
      type: 'select',
      group: 'adv'
    }
  },
  {
    title: '角色名',
    name: 'roleName',
    searchItem: {}
  },
  {
    title: '列一',
    name: 'col1',
    searchItem: {}
  },
  {
    title: '列二',
    name: 'col2',
    searchItem: {}
  },
  {
    title: '列三',
    name: 'col3',
    searchItem: {}
  },
  {
    title: '列四',
    name: 'col4',
    searchItem: {}
  },
  {
    title: '列五',
    name: 'col5',
    searchItem: {}
  },
  {
    title: '列六',
    name: 'col6',
    searchItem: {}
  },
  {
    title: '列七',
    name: 'col7',
    searchItem: {}
  }
];
