import {
  Section,
  Columns,
} from 'bloomer'

import SectionTitle from '../../components/section-title'
import NewsCard from '../../components/news-card'

import { featuredNews } from './data'

  // {
  //   title: 'Expect intense pinot, syrah and chardonnay from Petaluma Gap',
  //   excerpt: 'Is it possible to bottle the wind? In a word, yes. The Petaluma Gap winegrowers say they produce wines that reveal their wind-swept terroir, and I agree with them; the wind absolutely shows up in the bottle.',
  //   publication: 'Press Democrat',
  //   pubDate: 'December 8, 2017',
  //   url: 'http://www.pressdemocrat.com/lifestyle/7666640-181/expect-intense-pinot-syrah-and',
  //   img: {
  //     url: 'http://www.pressdemocrat.com/csp/mediapool/sites/dt.common.streams.StreamServer.cls?STREAMOID=o_QhLvsnNfd6RuDNvTx7bM$daE2N3K4ZzOUsqbU5sYtm1t3kUZFfA9QaLcA_irerWCsjLu883Ygn4B49Lvm9bPe2QeMKQdVeZmXF$9l$4uCZ8QDXhaHEp3rvzXRJFdy0KqPHLoMevcTLo3h8xh70Y6N_U_CryOsw6FTOdKL_jpQ-&CONTENTTYPE=image/jpeg',
  //     altText: 'Petaluma Gap',
  //   },
  // },


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
