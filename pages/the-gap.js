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
  whatIsIt: {
    header: 'What is the Petaluma Gap?',
    content: [
      'The Petaluma Gap is not only the newest American Viticulture Area but it just might be the most interesting.',
      'It is a literal 15-mile wide wind gap that cuts through the coastal mountains from Tomales and Bodega bays inland to Petaluma until it finally reaches San Pablo Bay. This wind tunnel creates a corridor for the coastal wind and fog to travel through cooling the region and causing large temperature swings throughout the day. All these variables create an environment for grapes that produce some truly unique flavors and is why the Petaluma Gap is responsible for some intense Pinot Noirs, Syrahs, and Chardonnays.',
    ],
  },
  theWind: {
    header: 'What Causes the Wind?',
    content: [
      'Sea Breezes or Onshore breezes are when the wind blows from a large body of water (the Pacific Ocean) towards a landmass (Petaluma). This happens because during the day land heats up faster than the ocean and causes the air to expand and become less dense.  Thus, the air pressure over land is less than that over the ocean causing it to flow inland.  The strength of the offshore wind is directly proportional to the temperature difference between the land and ocean. Now add in a 15-mile wind gap (tunnel) and it\'s as if you\'ve opened the floodgates of a dam.',
    ],
  },
  theFog: {
    header: 'What Causes the Fog?',
    content: [
      'Coastal fog is largely caused by sea spray and airborne salt crystals from the salt water. Researchers have also found that Kelp seaweed releases iodine particles into the air which alongside the sea salt can become the nuclei (basis) for condensation of water vapor, creating fog.',
      'The Sonoma Coast is thus a natural fog machine due to its large cliffs and rocks creating lots of ocean spray as the waves crash against them and it\'s abundant kelp beds. The fog generated in Tomales and Bodega Bays then is pushed through the Petaluma wind gap by the coastal breeze.',
    ]
  },
  theClimate: {
    header: 'The Gap Climate',
    content: [
      'The coastal fog and winds combine to create a truly unique microclimate. Anyone who has spent time around Tomales, Sebastopol, and Petaluma can tell you about the thickness of the early morning fog and strength of the afternoon winds.',
      'The general daily pattern for the Gap is:'
    ],

  }

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
        <Content style={{ minHeight: '400px', width: '80%', margin: 'auto', marginBottom: '5rem' }}>
          <h3>
            What is the Petaluma Gap?
          </h3>
          <p>
            The Petaluma Gap is not only the newest American Viticulture Area but it just might be the most interesting.
          </p>
          <p>
            It is a literal 15-mile wide wind gap that cuts through the coastal mountains from Tomales and Bodega bays inland to Petaluma until it finally reaches San Pablo Bay. This wind tunnel creates a corridor for the coastal wind and fog to travel through cooling the region and causing large temperature swings throughout the day. All these variables create an environment for grapes that produce some truly unique flavors and is why the Petaluma Gap is responsible for some intense Pinot Noirs, Syrahs, and Chardonnays.
          </p>
          <h3>
            The Gap Climate
          </h3>
          <p>
            The coastal fog and winds combine to create a truly unique microclimate. Anyone who has spent time around Tomales, Sebastopol, and Petaluma can tell you about the thickness of the early morning fog and strength of the afternoon winds.
          </p>
          <p>
            The general daily pattern for the Gap is:
          </p>
          <ul>
            <li>Early morning fog comes in from the Pacific Ocean</li>
            <li>It burns off by late morning and the temperatures begin to rise</li>
            <li>The inland areas continue to heat up causing the air pressure to drop and coastal breezes to push inland </li>
            <li>By late afternoon the winds are really blowing and fog begins to form out at the coast</li>
            <li>By late evening and night, the fog has moved inland just as it did in the morning</li>
          </ul>
          <p>
            This near daily weather pattern results in harsh temperature swings of 40-50 degrees and means that the grapes in the Petaluma Gap are smaller, ripen later, and develop more intense flavors.
          </p>
          <h3>
            What Causes the Wind?
          </h3>
          <p>
            Sea Breezes or Onshore breezes are when the wind blows from a large body of water (the Pacific Ocean) towards a landmass (Petaluma). This happens because during the day land heats up faster than the ocean and causes the air to expand and become less dense.  Thus, the air pressure over land is less than that over the ocean causing it to flow inland.  The strength of the offshore wind is directly proportional to the temperature difference between the land and ocean. Now add in a 15-mile wind gap (tunnel) and it's as if you've opened the floodgates of a dam.
          </p>
          <h3>
            What Causes the Fog?
          </h3>
          <p>
            Coastal fog is largely caused by sea spray and airborne salt crystals from the salt water. Researchers have also found that Kelp seaweed releases iodine particles into the air which alongside the sea salt can become the nuclei (basis) for condensation of water vapor, creating fog.
          </p>
          <p>
            The Sonoma Coast is thus a natural fog machine due to its large cliffs and rocks creating lots of ocean spray as the waves crash against them and it's abundant kelp beds. The fog generated in Tomales and Bodega Bays then is pushed through the Petaluma wind gap by the coastal breeze.
          </p>
        </Content>
        <style jsx>{`
          h3 {
            margin-top: 3rem;
          }
          p {
            text-align: left;
          }
          ul {
            text-align: left;
          }
        `}</style>
      </MainLayout>
    )
  }
}

export default TheGap
