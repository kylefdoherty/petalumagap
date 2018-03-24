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

class Wineries extends Component {
  render() {
    return (
      <MainLayout>
        <Hero isSize='medium'>
          <HeroBody>
              <Container hasTextAlign='centered'>
                  <Title>Page Coming Soon</Title>
              </Container>
          </HeroBody>
        </Hero>
      </MainLayout>
    )
  }
}

export default Wineries
