import {
  Section,
  Columns,
  Column,
  Content,
  Hero,
  HeroBody,
  Container,
  Button,
  Notification,
  Card,
  CardImage,
  CardContent,
  Image,
  Title,
  Subtitle,
  CardHeader,
  CardHeaderTitle,
} from 'bloomer'

import FeatureColumn from '../../components/feature-column'

import { gapFeatures } from './data'

const GapFeatures = () =>
  <Section style={{ padding: 0 }}>
    <div className="main-hero">
      <Container hasTextAlign='centered' style={{ paddingTop: '3em', paddingBottom: '3em' }}>
        <p className="main-hero__sub-title">
          Sonoma Coast, California
        </p>
        <Title style={{ color: 'white', marginBottom: '2em', padding: '0 1em 0 1em' }}>
          Wine Forged From Wind & Fog
        </Title>
        <Container isFluid style={{ width: '100%', margin: '0' }}>
          <Columns isCentered style={{ justifyContent: 'space-around', padding: '0 1em 0 1em' }}>
            {
              gapFeatures.map(feature => {
                return(
                  <FeatureColumn
                    header={feature.feature}
                    iconStyles={{ color: 'white' }}
                    descriptionStyles={{ color: 'white' }}
                    description={feature.description}
                    iconClass={feature.iconClass}
                  />
                )
              })
            }
          </Columns>
        </Container>
      </Container>
    </div>
    <style jsx>{`
      .main-hero {
        min-height: 700px;
        background-image:
          linear-gradient(rgba(59,85,230, 0.70), rgba(59,85,230, 0.70)),
          url(/static/images/sonoma-coast-fog.jpg);
        background-position: center center;
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-size: cover;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .main-hero__sub-title {
        color: white;
        padding: 0 10px 0 10px;
      }
    `}</style>
  </Section>

export default GapFeatures
