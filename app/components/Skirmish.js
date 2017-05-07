import React from 'react'
import PropTypes from 'prop-types'

class PlayerInput extends React.Component {
  constructor (props) {
    super(props)
    this.state = { username: '' }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange (e) {
    const value = e.target.value
    this.setState({
      username: value
    })
  }
  handleSubmit (e) {
    e.preventDefault()
    this.props.onSubmit(
      this.props.id,
      this.state.username
    )
  }
  render () {
    return (
      <form className='column' onSubmit={this.handleSubmit}>
        <label className='header' htmlFor='username'>
          {this.props.label}
        </label>
        <input
          id='username'
          placeholder='GitHub username'
          type='text'
          autoComplete='off'
          value={this.state.username}
          onChange={this.handleChange} />
        <button className='button' type='submit' disabled={!this.state.username}>
          Submit
        </button>
      </form>
    )
  }
}
PlayerInput.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired
}

class Skirmish extends React.Component {
  constructor () {
    super()
    this.state = {
      playerOneName: '',
      playerTwoName: '',
      playerOneImage: null,
      playerTwoImage: null
    }

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  // id must be ['playerOne','playerTwo'], username can be any string
  handleSubmit (id, username) {
    this.setState({
      [id + 'Name']: username,
      [id + 'Image']: `https://www.github.com/${username}.png?size=200`
    })
  }

  render () {
    const playerOneName = this.state.playerOneName
    const playerTwoName = this.state.playerTwoName
    return (
      <div>
        <h1>This is a comparison of your and your friend's stats (tbc)</h1>
        <div className='row'>
          {!playerOneName &&
            <PlayerInput
              id='playerOne'
              label='Player One'
              onSubmit={this.handleSubmit}
            />
          }
          {!playerTwoName &&
            <PlayerInput
              id='playerTwo'
              label='Player Two'
              onSubmit={this.handleSubmit}
            />
          }
        </div>
      </div>
    )
  }
}

export default Skirmish
