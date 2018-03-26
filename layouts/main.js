import {
  Container,
} from 'bloomer'

import Header from '../components/header'
import Nav from '../components/nav'
import MainFooter from '../components/footer'

const defaultContainerStyles = {
  margin: '0',
  minHeight: '500px',
}

const defaultFooterStyles = {
  minHeight: '200px',
  background: 'honeydew',
}

const MainLayout = ({ children, containerStyles, title, description }) =>
  <main>
    <Header title={title} description={description} />
    <Container
      isFluid
      style={containerStyles || defaultContainerStyles}
    >
      <Nav />
      {children}
      <MainFooter/>
    </Container>
  </main>

export default MainLayout
