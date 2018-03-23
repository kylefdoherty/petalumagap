import {
  Column,
  Content,
} from 'bloomer'

const defaultcolStyles = {
  textAlign: 'center',
  justifyContent: 'space-around',
}

const defaultIconStyles = {
  fontSize: '60px',
}

const defaultHeaderStyles = {
  marginTop: '0.5em',
  color: 'white',
}

const FeatureColumn = ({
  colSize=3,
  colStyles,
  header,
  headerStyles,
  description,
  descriptionStyles,
  iconClass,
  iconStyles,
}) =>
  <Column isSize={colSize} style={colStyles || defaultcolStyles}>
    <Content>
      <span>
        <i
          style={{...defaultIconStyles, ...iconStyles}}
          className={iconClass}
        />
      </span>
      <h2 style={{...defaultHeaderStyles, ...headerStyles}}>
        {header}
      </h2>
      <p style={descriptionStyles}>
        {description}
      </p>
    </Content>
  </Column>

export default FeatureColumn
