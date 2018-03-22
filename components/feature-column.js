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
  iconClass,
  iconStyle,
}) =>
  <Column isSize={colSize} style={colStyles || defaultcolStyles}>
    <Content>
      <span>
        <i
          style={iconStyle || defaultIconStyles}
          className={iconClass}
        />
      </span>
      <h2 style={headerStyles || defaultHeaderStyles}>
        {header}
      </h2>
      <p>
        {description}
      </p>
    </Content>
  </Column>

export default FeatureColumn
