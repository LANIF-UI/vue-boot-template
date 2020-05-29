import Container from './Container'
import Aside from './Container/components/aside'
import Header from './Container/components/header'
import Main from './Container/components/main'
import Footer from './Container/components/footer'
import SvgIcon from './SvgIcon'
import Panel from './Panel'
import Card from './Card'

const components = [
  Container,
  Aside,
  Header,
  Main,
  Footer,
  SvgIcon,
  Panel,
  Card
]

const install = function(Vue, opts = {}) {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

export default {
  install
}
