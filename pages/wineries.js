import React, { Component } from 'react'
import {
  Section,
  Columns,
  Column,
  Content,
  Hero,
  HeroBody,
  HeroHeader,
  Container,
  Button,
  Notification,
  Card,
  CardImage,
  CardContent,
  Nav,
  NavLeft,
  NavItem,
  NavRight,
  HeroFooter,
  Tabs,
  Tab,
  TabLink,
  TabList,
  NavCenter,
  Icon,
  Image,
  Title,
  Subtitle,
  CardHeader,
  CardHeaderTitle,
} from 'bloomer'

import MainLayout from '../layouts/main'
import MainHero from '../components/main-hero'
import AllGapWineries from '../containers/all-gap-wineries'

const GapWineriesTitle = `Petaluma Gap Wineries -
      The Closest Wineries to San Francisco | PetalumaGap.wine`
const GapWineriesDescription = `
  Petaluma Gap wineries are only 30 miles north of San Francisco. In addition to
  being the closest wineries to San Francisco they're also producing some of the
  most interesting wines in California.`


class Wineries extends Component {
  render() {
    const subTitleStyles = {
      color: 'white',
      padding: '0 10px 0 10px',
    }

    return (
      <MainLayout
        title={GapWineriesTitle}
        description={GapWineriesDescription}
      >
        <MainHero minHeight="400px">
          <Title style={{ color: 'white' }}>
            Petaluma Gap Wineries
          </Title>
        </MainHero>
        <AllGapWineries />
      </MainLayout>
    )
  }
}

export default Wineries
