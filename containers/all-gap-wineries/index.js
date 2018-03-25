import {
  Section,
  Columns,
} from 'bloomer'

import SectionTitle from '../../components/section-title'
import WineryCard from '../../components/winery-card'

import { wineries } from './data'

const AllGapWineries = () =>
  <Section className="all-wineries">
    <SectionTitle title="Petaluma Gap Wineries" />
    <Columns isCentered isMultiline>
      {
        wineries.map(winery => {
          return(
            <WineryCard
              key={winery.name}
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

export default AllGapWineries
