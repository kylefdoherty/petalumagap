import React, { Component, Fragment } from 'react'
import {
  Container,
  Button,
  Hero,
  HeroBody,
  Title,
} from 'bloomer'

// TODO - use HOC and/or render props to make this more flexible
// TODO - make it so can have a bg image & a colored overlay
// TODO - make it so you can animate the titles, cta, etc.
class MainHero extends Component {
  render() {
    const { title, subTitle, ctaText, ctaHref } = this.props

    return (
      <Fragment>
        <Hero className="main-hero" isColor='primary' isFullHeight>
          <HeroBody>
            <Container hasTextAlign='centered'>
              <Title>{title}</Title>
              <p className="main-hero__sub-title">
                {subTitle}
              </p>
              <Button href={ctaHref} style={{ marginTop: '2em' }}>
                {ctaText}
              </Button>
            </Container>
          </HeroBody>
        </Hero>
      </Fragment>
    )
  }
}

export default MainHero
