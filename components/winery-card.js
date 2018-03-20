import {
  Card,
  CardContent,
  CardImage,
  Column,
  Image,
  Subtitle,
  Title,
} from 'bloomer'

const WineryCard = ({
  cardSize,
  imgSrc,
  subtitleSize,
  titleSize,
  title,
  subTitle,
}) =>
  <Column isSize={cardSize}>
    <Card>
      <CardImage>
        <Image src={imgSrc} />
      </CardImage>
      <CardContent>
        <Subtitle isSize={subtitleSize}>
          {subTitle}
        </Subtitle>
        <Title isSize={titleSize}>
          {title}
        </Title>
      </CardContent>
    </Card>
  </Column>

export default WineryCard
