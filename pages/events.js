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
import truncate from 'truncate'
import format from 'date-fns/format'

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
    dateTime: '2018-05-22',
    details: 'Winery and Grower Members of the Petaluma Gap are invited to attend the third in our series of technical seminars; the topic on May 22 will be  IRRIGATION STRATEGY IN THE PETALUMA GAP AND HOW IT CAN WORK FOR EVERYONE.  This discussion will be led by Mark Greenspan, Founder & President, Advanced Viticulture, Inc., along  with panelists Scott Welch, Assistant Vineyard Manager, Jackson Family Wines and Erica Stancliff, Winemaker, Trombetta Family Wines. Together they will describe how they use both technology and management of available resources, to make sure when irrigation is needed most that the available water will be sufficient and used most effectively. <a href="boom" target="_blank">Request an Invitation</a> ',
    title: 'PGWA Seminar at Karah Estate',
    price: 25,
    winery: 'Karah Estate',
  },
  {
    dateTime: '2018-06-2',
    details: 'Petaluma Drinks is an annual weekend tasting event involving all of Petaluma’s craft alcohol producers.  This town has a close community of brewers, vineyard managers, winemakers, cider makers, and distillers ready to welcome you into their tasting rooms, ranches, and facilities for a taste!  Ticket holders will be able to visit each producer once during the weekend.  Many producers are offering purchase discounts for ticket holders, in case you want to take something home with you.   The ticket includes a voucher for any food item at Petaluma’s centrally located food truck park: The Block.  20% of the ticket price will be donated to charitable organizations: 10% of the ticket price will be donated to the COTS homeless foundation, and another 10% to PAS animal shelter.',
    title: 'Petaluma Drinks!',
    price: 65,
    winery: 'Petaluma',
  }
]

class EventCard extends Component {
  state = {
    showFullDetails: false,
  }

  toggleDetails = () => {
    console.log("TOGGLE")
    this.setState((prevState, props) => ({
      showFullDetails: !prevState.showFullDetails
    }))
  }

  displayDetails = (details) => {
    return this.state.showFullDetails ? details : truncate(details, 200)
  }

  render() {
    const { dateTime, details, title, price } = this.props

    return (
      <Card style={{ marginBottom: '3rem' }}>
        <CardContent style={{ display: 'flex', justifyContent: 'space-around' }}>
          <CardImage style={{ width: '30%' }}>
            <Image src='https://via.placeholder.com/250x250' />
          </CardImage>
          <Content style={{ width: '60%' }}>
            <div className="event-container__header" style={{ display: 'flex', justifyContent: 'space-between' }}>
              <p className="event-date">
                {format(dateTime, 'ddd, MMM D')}
              </p>
              <Button style={{ width: '100px' }} isColor='danger' isOutlined>
                {
                  price === 0 ?
                    'FREE' :
                    `$${price}`
                }
              </Button>
            </div>
            <h3 style={{ margin: 'none' }}>{title}</h3>
            <h5>By Kastania Winery</h5>
            <p dangerouslySetInnerHTML={{ __html: this.displayDetails(details) }} />
            <p
              style={{cursor: 'pointer', color: '#ff3860', textDecoration: 'underline', textAlign: 'right'}}
              onClick={this.toggleDetails}
            >
              {
                this.state.showFullDetails ?
                  'Hide' :
                  'Show More'
              }
            </p>
          </Content>
        </CardContent>
        <CardFooter>
          <CardFooterItem></CardFooterItem>
          <CardFooterItem>Share</CardFooterItem>
        </CardFooter>
      </Card>
    )
  }
}

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
          <div className="events-container" style={{ margin: 'auto', height: '1000px', marginTop: '1rem' }}>
            {
              events.map((event) => {
                return (
                  <EventCard
                    dateTime={event.dateTime}
                    details={event.details}
                    title={event.title}
                    price={event.price  }
                  />
                )
              })
            }
          </div>
        </Container>
      </MainLayout>
    )
  }
}

export default Wineries
