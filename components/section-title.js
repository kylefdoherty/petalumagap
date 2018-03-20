import {
  Title,
} from 'bloomer'

const defaultContainerStyles = {
  width: '50%',
  display: 'block',
  margin: 'auto',
  paddingTop: '1em',
  paddingBottom: '3em',
}

const defaultTitleStyles = {
  textAlign: 'center',
  margin: '0',
}

const defaultUnderlineStyles = {
  width: '6em',
  background: 'honeydew',
  display: 'block',
  margin: 'auto',
  borderBottom: '3px solid black',
  marginTop: '.5em',
}


const SectionTitle = ({
  containerStyles,
  title,
  titleStyles,
  underlineStyles,
}) =>
  <div
    className="title-container"
    style={defaultContainerStyles || containerStyles}
  >
    <Title
      style={defaultTitleStyles || titleStyles}
      isSize={2}
    >
      {title}
    </Title>
    <span
      className="title-border-bottom"
      style={defaultUnderlineStyles || underlineStyles}
    />
  </div>

export default SectionTitle
