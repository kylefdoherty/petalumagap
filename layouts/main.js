import {
  Container,
} from 'bloomer'

import Header from '../components/header'
import Nav from '../components/nav'
import MainFooter from '../components/footer'

const defaultContainerStyles = {
  margin: '0',
  height: '2000px',
}

const defaultFooterStyles = {
  minHeight: '200px',
  background: 'honeydew',
}

const MainLayout = ({ children, containerStyles }) =>
  <main>
    <Header />
    <Container isFluid style={containerStyles || defaultContainerStyles}>
      <Nav />
      {children}
      <MainFooter/>
    </Container>
  </main>

export default MainLayout
