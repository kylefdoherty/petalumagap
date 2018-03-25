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
import FeaturedNews from '../containers/featured-news'
import FeaturedWineries from '../containers/featured-wineries'
import GapFeatures from '../containers/gap-features'
import MainHero from '../components/main-hero'
import MainLayout from '../layouts/main'
import NewsCard from '../components/news-card'
import SectionTitle from '../components/section-title'
import WineryCard from '../components/winery-card'


class HomePage extends Component {
  render() {
    const ctaStyles = {
      marginTop: '2em',
      background: '#3b55e6',
      border: '#3b55e6',
      color: 'white',
    }

    const subTitleStyles = {
      color: 'white',
      padding: '0 10px 0 10px',
    }

    return (
      <MainLayout>
        <MainHero minHeight="100vh">
          <Title style={{ color: 'white' }}>
            Petaluma Gap AVA
          </Title>
          <p style={subTitleStyles}>
            The newest and most unique American Viticulture Area in the U.S.
          </p>
          <Button
            href="/wineries"
            isSize="large"
            style={ctaStyles}
          >
           Checkout the Wineries
          </Button>
        </MainHero>
        <FeaturedWineries />
        <GapFeatures />
        <FeaturedNews />
      </MainLayout>
    )
  }
}

export default HomePage
