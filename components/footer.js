import Link from 'next/link'
import {
  Footer,
  Container,
  Content,
  Columns,
  Column,
  Icon,
  Title,
} from 'bloomer'

const MainFooter = () => {
  const liStyles = {
    marginTop: '10px',
  }

  const linkStyles = {
    color: '#bebebe',
  }

  const titleStyles = {
     borderBottom: '1px solid #bebebe',
     paddingBottom: '10px',
     color: 'white'
  }

  return (
    <Footer id='footer' style={{ background: '#2b2a2a', paddingBottom: '1em', paddingTop: '5em' }}>
      <Container style={{ width: '80%' }}>
        <Columns isCentered style={{ justifyContent: 'space-between', marginBottom: '4em' }}>
          <Column isSize={3}>
            <Title isSize={5} style={titleStyles}>
              Pages
            </Title>
            <ul>
              <li style={liStyles}>
                <Link prefetch href="/">
                  <a style={linkStyles}>Home</a>
                </Link>
              </li>
              <li style={liStyles}>
                <Link prefetch href="/wineries">
                  <a style={linkStyles}>Wineries</a>
                </Link>
              </li>
            </ul>
          </Column>
          <Column isSize={3}>
            <Title isSize={5} style={titleStyles}>
              Terms & Privacy
            </Title>
            <ul>
              <li style={liStyles}>
                <Link prefetch href="/terms">
                  <a style={linkStyles}>Terms of Use</a>
                </Link>
              </li>
              <li style={liStyles}>
                <Link prefetch href="/privacy-policy">
                  <a style={linkStyles}>Privacy Policy</a>
                </Link>
              </li>
            </ul>
          </Column>
          <Column isSize={3}>
            <Title isSize={5} style={titleStyles}>
              Get in Touch
            </Title>
            <a style={linkStyles} href="mailto:hello@petalumagap.wine?Subject=Hello" target="_top">hello@petalumagap.wine</a>
          </Column>
        </Columns>
        <Columns style={{ borderTop: '1px solid #bebebe'}}>
          <Column style={{ color: '#bebebe' }}>
            Copyright ©2018. All rights reserved.
          </Column>
        </Columns>
      </Container>
    </Footer>
  )
}

export default MainFooter
