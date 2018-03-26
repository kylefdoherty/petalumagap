import React, { Component } from 'react'
import {
  Content,
  Title,
} from 'bloomer'

import MainLayout from '../layouts/main'
import MainHero from '../components/main-hero'

const TheGapTitle = 'About The Gap - Producing the Top Sonoma Coast Wines | PetalumaGap.wine'
const TheGapDescription = `
  Petaluma Gap is responsible for some of the best Pinot Noir, Syray, and Chardonnay
  you'll find in the Sonoma Coast.`


class TheGap extends Component {
  render() {
    const subTitleStyles = {
      color: 'white',
      padding: '0 10px 0 10px',
    }

    return (
      <MainLayout
        title={TheGapTitle}
        description={TheGapDescription}
      >
        <MainHero minHeight="400px">
          <Title style={{ color: 'white' }}>
            About The Gap
          </Title>
        </MainHero>
        <Content style={{ minHeight: '400px'}}>
          <h3 style={{ textAlign: 'center', marginTop: '3em' }}>
            Page Coming Soon!
          </h3>
        </Content>
      </MainLayout>
    )
  }
}

export default TheGap
