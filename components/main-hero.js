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
    const imgUrl = 'static/images/vineyard.jpg'

    return (
      <Fragment>
        <div className="main-hero">
          <Container hasTextAlign='centered'>
            <Title style={{ color: 'white' }}>{title}</Title>
            <p className="main-hero__sub-title">
              {subTitle}
            </p>
            <Button href={ctaHref} style={{ marginTop: '2em' }}>
              {ctaText}
            </Button>
          </Container>
        </div>
        <style jsx>{`
          .main-hero {
            min-height: 700px;
            background-image:
              linear-gradient(rgba(59,85,230, 0.70), rgba(59,85,230, 0.70)),
              url(${imgUrl});
            background-position: center center;
            background-repeat: no-repeat;
            background-attachment: fixed;
            background-size: cover;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .main-hero__sub-title {
            color: white;
            padding: 0 10px 0 10px;
          }
        `}</style>
      </Fragment>
    )
  }
}

export default MainHero
