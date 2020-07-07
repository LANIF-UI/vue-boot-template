import Table from './components/table'
import TableOper from './components/table-oper'

Table.install = function(Vue) {
  Vue.component(Table.name, Table)
  Vue.component(TableOper.name, TableOper)
}

export default Table
