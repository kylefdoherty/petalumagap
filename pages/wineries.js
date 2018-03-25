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
import AllGapWineries from '../containers/all-gap-wineries'

class Wineries extends Component {
  render() {
    return (
      <MainLayout>
        <Container>
          <AllGapWineries />
        </Container>
      </MainLayout>
    )
  }
}

export default Wineries
