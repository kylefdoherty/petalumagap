import FactStat from '../../components/fact-stat'
import { gapStats } from './data'

const GapStats = () =>
  <section className="in-the-news tg-haslayout tg-paddingbottomzero">
    <div style={{ display: 'flex', flexWrap: 'wrap' }} className="fact-stats-container">
      {
        gapStats.map(stat => {
          return (
            <FactStat
              key={stat.fact}
              stat={stat.stat}
              fact={stat.fact}
              backgroundColor={stat.background}
            />
          )
        })
      }
    </div>
  </section>

export default GapStats
