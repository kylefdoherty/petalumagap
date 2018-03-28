import React, { Component, Fragment } from 'react'
import {
  Container,
  Button,
  Hero,
  HeroBody,
  Title,
} from 'bloomer'


class MainHero extends Component {
  render() {
    const { children, minHeight } = this.props
    const imgUrl = 'static/images/vineyard.jpg'
    const mobileImgUrl = 'static/images/vineyard_mobile.jpg'


    return (
      <Fragment>
        <div className="main-hero">
          <Container hasTextAlign='centered'>
            {children}
          </Container>
        </div>
        <style jsx>{`
          .main-hero {
            min-height: ${minHeight};
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

          @media (max-width: 769px) {
            .main-hero {
              background-image:
              linear-gradient(rgba(59,85,230, 0.70), rgba(59,85,230, 0.70)),
              url(${mobileImgUrl});
            }
          }
        `}</style>
      </Fragment>
    )
  }
}

export default MainHero
