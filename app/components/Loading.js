import React from 'react'
import PropTypes from 'prop-types'

const styles = {
  content: {
    textAlign: 'center',
    fontSize: '35px'
  }
}

class Loading extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      text: props.text
    }
  }

  componentDidMount () {
    const stopper = this.props.text + '...'
    this.interval = window.setInterval(() => {
      if (this.state.text === stopper) {
        this.setState({ text: this.props.text })
      } else {
        this.setState((prevState) => {
          return { text: prevState.text + '.' }
        })
      }
    }, this.props.blinkSpeed)
  }

  render () {
    return (
      <p style={styles.content}>
        {this.state.text}
      </p>
    )
  }

  componentWillUnmount () {
    window.clearInterval(this.interval)
  }
}

Loading.propTypes = {
  text: PropTypes.string.isRequired,
  blinkSpeed: PropTypes.number.isRequired
}

Loading.defaultProps = {
  text: 'Loading...',
  blinkSpeed: 300
}

export default Loading
