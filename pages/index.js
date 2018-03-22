import React, { Component, Fragment } from 'react'
import {
  Section,
  Columns,
  Column,
  Content,
  Hero,
  HeroBody,
  Container,
  Button,
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

import FeatureColumn from '../components/feature-column'
import MainFooter from '../components/footer'
import MainHero from '../components/main-hero'
import MainLayout from '../layouts/main'
import NewsCard from '../components/news-card'
import SectionTitle from '../components/section-title'
import WineryCard from '../components/winery-card'


class HomePage extends Component {
  render() {
    return (
      <MainLayout>
        <MainHero
          title="Petaluma Gap AVA"
          subTitle="The newest and most unique American Viticulture Area in the U.S."
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
        <Section className="gap-fetaures" style={{ padding: 0 }}>
          <Hero className="main-hero" isColor='primary' isFullHeight>
            <HeroBody>
              <Container hasTextAlign='centered'>
                <p className="main-hero__sub-title">
                  Sonoma Coast, California
                </p>
                <Title>Title</Title>
                <Container isFluid style={{ width: '100%', margin: '0' }}>
                  <Columns isCentered style={{ justifyContent: 'space-around' }}>
                    {
                      [1,2,3].map(feature => {
                        return(
                          <FeatureColumn
                            header="Feature"
                            description="Not only is Petaluma Gap the newest AVA but it's also the closest AVA to San Francico."
                            iconClass="icon-cloud-wind"
                          />
                        )
                      })
                    }
                  </Columns>
                </Container>
              </Container>
            </HeroBody>
          </Hero>
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
        <MainFooter/>
      </MainLayout>
    )
  }
}

export default HomePage
