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
    <Footer id='footer' style={{ background: '#2b2a2a', paddingBottom: '1em' }}>
      <Container style={{ width: '80%' }}>
        <Columns isCentered style={{ justifyContent: 'space-between', marginBottom: '4em' }}>
          <Column isSize={3}>
            <Title isSize={5} style={titleStyles}>
              Pages
            </Title>
            <ul>
              <li style={liStyles}><a style={linkStyles} href="/">Home</a></li>
              <li style={liStyles}><a style={linkStyles} href="/wineries">Wineries</a></li>
            </ul>
          </Column>
          <Column isSize={3}>
            <Title isSize={5} style={titleStyles}>
              Terms & Privacy
            </Title>
            <ul>
              <li style={liStyles}><a style={linkStyles} href="/terms">Terms of Use</a></li>
              <li style={liStyles}><a style={linkStyles} href="/privacy-policy">Privacy Policy</a></li>
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
