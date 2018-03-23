import {
  Section,
  Columns,
} from 'bloomer'

import SectionTitle from '../../components/section-title'
import WineryCard from '../../components/winery-card'

import { featuredWineries } from './data'

// feature: 'Winery Feature',
//     name: 'Kastania Vineyards',
//     description: '',
//     img: {
//       url: '/static/images/wineries/kastania.jpg',
//       altText: 'Kstania Vineyards',
//     },
//     website: 'http://www.kastaniavineyards.com/',

const FeaturedWineries = () =>
  <Section className="featured-wineries">
    <SectionTitle title="Featured Wineries" />
    <Columns isCentered isMultiline>
      {
        featuredWineries.map(winery => {
          return(
            <WineryCard
              key={winery.feature}
              imgSrc={winery.img.url}
              imgAlt={winery.img.altText}
              cardSize={5}
              subtitleSize={5}
              titleSize={3}
              title={winery.name}
              subTitle={winery.feature}
              wineryUrl={winery.website}
            />
          )
        })
      }
    </Columns>
  </Section>

export default FeaturedWineries
