import {
  Section,
  Columns,
} from 'bloomer'

import SectionTitle from '../../components/section-title'
import NewsCard from '../../components/news-card'

import { featuredNews } from './data'


const FeaturedNews = () =>
  <Section className="featured-news">
    <SectionTitle title="In The News" />
    <Columns isCentered isMultiline>
      {
        featuredNews.map(article => {
          return(
            <NewsCard
              key={article.title}
              pubDate={article.pubDate}
              imgSrc={article.img.url}
              publicationName={article.publication}
              snippet={article.excerpt}
              title={article.title}
            />
          )
        })
      }
    </Columns>
  </Section>

export default FeaturedNews
