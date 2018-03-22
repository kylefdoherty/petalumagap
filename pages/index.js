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

import MainLayout from '../layouts/main'
import MainHero from '../components/hero'
import WineryCard from '../components/winery-card'
import SectionTitle from '../components/section-title'
import NewsCard from '../components/news-card'
import MainFooter from '../components/footer'


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
        <Section className="gap-fetaures" style={{ padding: 0 }}>
          <Hero className="main-hero" isColor='primary' isFullHeight>
            <HeroBody>
              <Container hasTextAlign='centered'>
                <Subtitle>The Subtitle</Subtitle>
                <Title>Title</Title>
                <Button href="www.boom.com" style={{ marginTop: '2em' }}>
                  Submit
                </Button>
                <div style={{ heigh: '200px', width: '90%', background: 'blue', margin: 'auto' }}>
                  <Columns isCentered>
                    <Column isSize='1/3'>
                      Feature
                    </Column>
                    <Column isSize='1/3'>
                      Feature
                    </Column>
                    <Column isSize='1/3'>
                      Feature
                    </Column>
                  </Columns>
                </div>
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
