import {
  Card,
  CardContent,
  CardImage,
  Column,
  Image,
  Subtitle,
  Title,
} from 'bloomer'
import LazyLoad from 'react-lazyload'

const WineryCard = ({
  cardSize,
  imgAlt,
  imgSrc,
  subtitleSize,
  titleSize,
  title,
  subTitle,
  wineryUrl,
}) =>
  <Column isSize={cardSize}>
    <a href={wineryUrl} target="_blank">
      <Card>
        <CardImage>
          <LazyLoad height={200}>
            <Image src={imgSrc} />
          </LazyLoad>
        </CardImage>
        <CardContent>
          {
            subTitle &&
              <Subtitle isSize={subtitleSize}>
                {subTitle}
              </Subtitle>
          }
          <Title isSize={titleSize}>
            {title}
          </Title>
        </CardContent>
      </Card>
    </a>
  </Column>

export default WineryCard
