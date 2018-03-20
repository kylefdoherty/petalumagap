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

const NewsCard = ({
  isSize='1/3',
  imgSrc,
  publicationName,
  title,
  snippet,
  pubDate,
}) =>
  <Column isSize={isSize}>
    <Card>
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
          <Title isSize={3}>{title}</Title>
          <p>
            {snippet}
          </p>
          <p>{pubDate}</p>
        </Content>
      </CardContent>
    </Card>
  </Column>

export default NewsCard
