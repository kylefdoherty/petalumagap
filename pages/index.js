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
    return (
      <MainLayout>
        <MainHero
          title="Petaluma Gap AVA"
          subTitle="The newest and most unique American Viticulture Area in the U.S."
          ctaText="Checkout the Wineries"
          ctaHref="/wineries"
        />
        <FeaturedWineries />
        <GapFeatures />
        <FeaturedNews />
      </MainLayout>
    )
  }
}

export default HomePage
