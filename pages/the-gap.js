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

const AboutTheGap = {
  header: 'About the Gap',
  gapOverview: {
    header: 'Bottled Wind',
    content: `
      The Petaluma Gap is not only the newest American Viticulture Area
      but it just might be the most interesting. It is a literal 15-mile
      wide wind gap that cuts through the coastal mountains from Tomales
      and Bodega bays inland to Petaluma. This wind tunnel creates a corridor
      for the coastal wind and fog to travel through cooling the region and
      causing large temperature swings throughout the day. All these variables
      create an environment for grapes that produce some truly unique flavors and
      is why the Petaluma Gap is responsible for some intense Pinot Noirs, Syrahs,
      and Chardonnays.
    `,
    img: {
      url: '/static/images/vineyard-small.jpg',
      altText: 'Vineyard',
    },
  },
}


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
        <Content style={{ minHeight: '400px', width: '80%', margin: 'auto', textAlign: 'center' }}>
          <h3 style={{ textAlign: 'center', marginTop: '3em' }}>
            What is the Petaluma Gap?
          </h3>
          <p>
            The Petaluma Gap is not only the newest American Viticulture Area
            but it just might be the most interesting. It is a literal 15-mile
            wide wind gap that cuts through the coastal mountains from Tomales
            and Bodega bays inland to Petaluma. This wind tunnel creates a corridor
            for the coastal wind and fog to travel through cooling the region and
            causing large temperature swings throughout the day. All these variables
            create an environment for grapes that produce some truly unique flavors and
            is why the Petaluma Gap is responsible for some intense Pinot Noirs, Syrahs,
            and Chardonnays.
          </p>
          <h3 style={{ textAlign: 'center', marginTop: '3em' }}>
            The Gap Climate
          </h3>
          <h3 style={{ textAlign: 'center', marginTop: '3em' }}>
            The Gap History
          </h3>
        </Content>
      </MainLayout>
    )
  }
}

export default TheGap
