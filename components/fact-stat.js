import React, { Component, PropTypes } from 'react'
import VisibilitySensor from 'react-visibility-sensor'
import numeral from 'numeral'

const statStyles = {
  borderBottom: '1px solid white',
  paddingBottom: '15px',
  margin: '0',
  color: '#fff',
  fontSize: '42px',
  lineHeight: '32px',
  padding: '20px 30px',
}

const factStyles = {
  paddingTop: '20px',
  color: '#fff',
  fontSize: '16px',
  fontWeight: '300',
  lineHeight: '16px',
}

const blockWrapperStyles = {
  color: 'fff',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  textAlign: 'center',
  alignItems: 'center',
}

class FactStat extends Component {
  constructor(props) {
    super(props)

    this.state = {
      stat: 0,
    }

    this.countUp = this.countUp.bind(this)
    this.onChange = this.onChange.bind(this)
  }

  onChange(isVisible) {
    if (isVisible) {
      this.countUp()
    }
  }

  countUp() {
    const maxCount = this.props.stat
    const countSpeed = 3000 / maxCount
    const { stat } = this.state
    let step = 1

    if (maxCount > 1000) {
      step = 10
    }

    if (maxCount > 10000) {
      step = 100
    }

    if (maxCount > 100000) {
      step = 500
    }

    if (stat < maxCount) {
      this.setState((prevState, props) => {
        return { stat: prevState.stat + step }
      })
      setTimeout(this.countUp, countSpeed)
    }
  }

  render() {
    const { backgroundColor, fact } = this.props
    const formatNum = numeral(1000).format('0,0');

    return (
      <div className="fact-stat-block">
        <VisibilitySensor onChange={this.onChange} />
        <div className="fact-stat-block__wrapper" style={blockWrapperStyles}>
          <p style={statStyles} className="stat">
            {
              numeral(this.state.stat).format('0,0')
            }
          </p>
          <p style={factStyles} className="fact">
            {fact}
          </p>
        </div>
        <style jsx>{`
          .fact-stat-block {
            width: 25%;
            min-height: 200px;
            background: ${backgroundColor};
            display: flex;
            flex-direction: column;
            justify-content: center;
            alighn-items: center;
          }

          @media (max-width: 992px) {
            .fact-stat-block {
              width: 50%;
            }
          }

          @media (max-width: 768px) {
            .fact-stat-block {
              width: 100%;
            }
          }
        `}</style>
      </div>
    )
  }
}

export default FactStat
