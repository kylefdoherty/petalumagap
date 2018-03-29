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
    <script dangerouslySetInnerHTML={{ __html:
      `(function(s,u,m,o,j,v) {
        j=u.createElement(m);
        v=u.getElementsByTagName(m)[0];
        j.async=1;j.src=o;
        j.dataset.sumoSiteId='bb9885084f237f58d4bc6f846365d7c7021638f10e949f5b98bc59153760dad2';
        v.parentNode.insertBefore(j,v)
      })(window, document,'script', '//load.sumo.com/')`
    }} />
  </main>

export default MainLayout
