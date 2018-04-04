import {
  Card,
  CardContent,
  CardHeader,
  CardHeaderTitle,
  CardImage,
  Column,
  Content,
  Image,
  Title,
} from 'bloomer'
import LazyLoad from 'react-lazyload'
import truncate from 'truncate'

const NewsCard = ({
  isSize='1/3',
  imgSrc,
  publicationName,
  title,
  snippet,
  pubDate,
  url,
}) =>
  <Column isSize={isSize}>
    <a href={url} target="_blank">
      <Card style={{ borderBottom: '5px solid black', minHeight: '620px' }}>
        <CardHeader>
          <CardHeaderTitle>
            {publicationName}
          </CardHeaderTitle>
        </CardHeader>
        <CardImage>
          <LazyLoad height={200}>
            <Image src={imgSrc} />
          </LazyLoad>
        </CardImage>
        <CardContent>
          <Content>
            <Title isSize={4}>{title}</Title>
            <p>
              {truncate(snippet, 190)}
            </p>
            <p>{pubDate}</p>
          </Content>
        </CardContent>
      </Card>
    </a>
  </Column>

export default NewsCard
