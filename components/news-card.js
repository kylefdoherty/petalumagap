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
import truncate from 'truncate'

const NewsCard = ({
  isSize='1/3',
  imgSrc,
  publicationName,
  title,
  snippet,
  pubDate,
}) =>
  <Column isSize={isSize}>
    <Card style={{ borderBottom: '5px solid black' }}>
      <CardHeader>
        <CardHeaderTitle>
          {publicationName}
        </CardHeaderTitle>
      </CardHeader>
      <CardImage>
        <Image src={imgSrc} />
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
  </Column>

export default NewsCard
