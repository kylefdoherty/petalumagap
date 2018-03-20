import React, { Component } from 'react'
import {
  Section,
  Columns,
  Column,
  Notification,
  Card,
  CardImage,
  CardContent,
  Image,
  Title,
  Subtitle,
} from 'bloomer'

import MainLayout from '../layouts/main'
import MainHero from '../components/hero'
import WineryCard from '../components/winery-card'

class Index extends Component {
  render() {
    return (
      <MainLayout>
        <MainHero
          title="Petaluma Gap AVA"
          subTitle="The newest and most unique American Viticulture Area in U.S."
          ctaText="Checkout the Wineries"
          ctaHref="/wineries"
        />
        <Section className="featured-wineries">
          <Columns isCentered isMultiline>
            {
              [1,2,3,4].map(i => {
                return(
                  <WineryCard
                    key={i}
                    imgSrc="https://via.placeholder.com/1280x960"
                    cardSize={5}
                    subtitleSize={5}
                    titleSize={3}
                    title="The Card Title"
                    subTitle="The Subtitle"
                  />
                )
              })
            }
          </Columns>
        </Section>
        <div style={{ background: 'honeydew', minHeight: '2000px' }}>HOME PAGE</div>
      </MainLayout>
    )
  }
}

export default Index
