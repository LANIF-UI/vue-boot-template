import Container from './Container'
import Aside from './Container/components/aside'
import Header from './Container/components/header'
import Main from './Container/components/main'
import Footer from './Container/components/footer'
import SvgIcon from './SvgIcon'
import Panel from './Panel'
import Card from './Card'
import Form from './Form'
import SearchBar from './SearchBar'
import Table from './Table'
import TableOper from './Table/components/table-oper'
import Toolbar from './Toolbar'

const components = [
  Container,
  Aside,
  Header,
  Main,
  Footer,
  SvgIcon,
  Panel,
  Card,
  Form,
  SearchBar,
  Table,
  TableOper,
  Toolbar
]

const install = function(Vue, opts = {}) {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

export default {
  install
}
