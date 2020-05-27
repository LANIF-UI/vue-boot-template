import Container from './components/container'
import Aside from './components/aside'
import Header from './components/header'
import Main from './components/main'
import Footer from './components/footer'

Container.install = function(Vue) {
  Vue.component(Container.name, Container)
  Vue.component(Aside.name, Aside)
  Vue.component(Header.name, Header)
  Vue.component(Main.name, Main)
  Vue.component(Footer.name, Footer)
}

export default Container
