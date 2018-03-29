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
import GapStats from '../containers/gap-stats'

const HomeTitle = 'Petaluma Gap Wines - Wind to Wine | PetalumaGap.wine'
const HomeDescription = `
  Petaluma Gap is America's newest and most interesting American Viticulture
  Area (AVA). Best known for bold & unique Pinot Noir as well as Chardonnay and
  Syrah. Located only 30 miles North of San Francisco via Highway 101 make it
  the most accessible wine region in the Bay Area.
`

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
      fontSize: '22px',
    }

    return (
      <MainLayout
        title={HomeTitle}
        description={HomeDescription}
      >
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
        <div>
          <blockquote><p className="quotation">
            What’s remarkable about these Petaluma Gap wines is how the “wind tunnel” effect plays out in the bottle. The wind gives these late ripening grapes time to develop potent flavors, while allowing them to retain their crisp acidity.</p>
            <footer>— Peg Melnik, Press Democrat</footer>
          </blockquote>
          <style jsx>{`
            blockquote {
              width: 70%;
              margin: auto;
              text-align: center;
              margin-top: 6em;
              margin-bottom 4em;
            }

            @media (max-width: 769px) {
              blockquote {
                width: 90%;
              }
            }

            .quotation {
              font-size: 30px;
              quotes: '\\201C' '\\201D' '\\2018' '\\2019';
              padding: 10px 20px;
              line-height: 1.4;
              color: black;
            }
            .quotation:before {
              content: open-quote;
              display: inline;
              height: 0;
              line-height: 0;
              left: -10px;
              position: relative;
              top: 30px;
              color: #ccc;
              font-size: 3em;
            }
            .quotation::after {
              content: close-quote;
              display: inline;
              height: 0;
              line-height: 0;
              left: 10px;
              position: relative;
              top: 35px;
              color: #ccc;
              font-size: 3em;
            }
            footer {
              margin:0;
              text-align: right;
              font-size: 1.5em;
              font-style: italic;
              color: black;
            }


            @media (max-width: 769px) {
              footer {
                text-align: center;
              }
            }
          `}</style>
        </div>
        <FeaturedWineries />
        <GapFeatures />
        <GapStats />
        <FeaturedNews />
      </MainLayout>
    )
  }
}

export default HomePage
