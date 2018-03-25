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

class Wineries extends Component {
  render() {
    const subTitleStyles = {
      color: 'white',
      padding: '0 10px 0 10px',
    }

    return (
      <MainLayout>
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
