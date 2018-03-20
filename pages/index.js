import React, { Component, Fragment } from 'react'
import {
  Section,
  Columns,
  Column,
  Content,
  Notification,
  Card,
  CardImage,
  CardContent,
  Image,
  Title,
  Subtitle,
  CardHeader,
  CardHeaderTitle,
} from 'bloomer'

import MainLayout from '../layouts/main'
import MainHero from '../components/hero'
import WineryCard from '../components/winery-card'
import SectionTitle from '../components/section-title'
import NewsCard from '../components/news-card'


class HomePage extends Component {
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
          <SectionTitle title="Featured Wineries" />
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
        <Section className="featured-news">
          <SectionTitle title="In The News" />
          <Columns isCentered isMultiline>
            {
              [1,2,3].map(i => {
                return(
                  <NewsCard
                    key={i}
                    pubDate="December 7, 2017"
                    imgSrc="https://via.placeholder.com/1280x960"
                    publicationName="Press Democrat"
                    snippet="People Keep Asking If I’m Back, And I Haven’t Really Had An Answer, But Now, Yeah, I’m Thinking I’m Back."
                    title="Article Title"
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

export default HomePage
