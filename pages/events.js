import React, { Component } from 'react'
import {
  Button,
  Card,
  CardContent,
  CardFooter,
  CardFooterItem,
  CardHeader,
  CardHeaderIcon,
  CardHeaderTitle,
  CardImage,
  Column,
  Columns,
  Container,
  Content,
  Hero,
  HeroBody,
  HeroFooter,
  HeroHeader,
  Icon,
  Image,
  Media,
  MediaLeft,
  MediaContent,
  Nav,
  NavCenter,
  NavItem,
  NavLeft,
  NavRight,
  Notification,
  Section,
  Subtitle,
  Tab,
  TabLink,
  TabList,
  Tabs,
  Title,
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


const events = [
  {
    dateTime: '2018-04-21T15:00',
    title: 'Keller Estate Hosts an Afternoon of Truffles & Pinot Noir',
    details: 'The afternoon will begin with a discussion hosted by Todd about one of the most prized mushrooms in the world, the Black Périgord Truffle. As the presentation goes on, you will be treated to a six-course delight...'
  }
]

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
        <Container style={{ width: '80%' }}>
          <h2 style={{ marginTop: '2rem' }}>Upcoming Events</h2>
          <div className="events-container" style={{ margin: 'auto', height: '500px', marginTop: '1rem' }}>
            <Card>
              <CardContent style={{ display: 'flex', justifyContent: 'space-around' }}>
                <CardImage style={{ width: '30%' }}>
                  <Image src='https://via.placeholder.com/250x250' />
                </CardImage>
                <Content style={{ width: '60%' }}>
                  <p className="event-date">Sat. April 21, 3:00 PM</p>
                  <h3 style={{ margin: 'none' }}>Keller Estate Hosts an Afternoon of Truffles & Pinot Noir</h3>
                  <p>The afternoon will begin with a discussion hosted by Todd about one of the most prized mushrooms in the world, the Black Périgord Truffle. As the presentation goes on, you will be treated to a six-course delight...</p>
                  <Button isColor='danger' isOutlined>Tickets $25</Button>
                </Content>
              </CardContent>
              <CardFooter>
                <CardFooterItem></CardFooterItem>
                <CardFooterItem>Share</CardFooterItem>
              </CardFooter>
            </Card>
          </div>
        </Container>
      </MainLayout>
    )
  }
}

export default Wineries
