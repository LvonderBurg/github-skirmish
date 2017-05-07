import React from 'react'
import PropTypes from 'prop-types'


function PlayerPreview (props) {
  return (
    <div>
      <div className='column'>
        <img
          className='avatar'
          src={props.avatar}
          alt={`Avatar for ${props.username}`}
        />
        <h2 className='username'>@{props.username}</h2>
      </div>
      <button
        className='reset'
        onClick={props.onReset.bind(null, props.id)}
      >
        Reset
      </button>
    </div>
  )
}
PlayerPreview.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onReset: PropTypes.func.isRequired
}

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
    this.handleReset = this.handleReset.bind(this)
  }

  // id must be ['playerOne','playerTwo'], username can be any string
  handleSubmit (id, username) {
    this.setState({
      [id + 'Name']: username,
      [id + 'Image']: `https://www.github.com/${username}.png?size=200`
    })
  }

  handleReset (id) {
    this.setState({
      [id + 'Name']: '',
      [id + 'Image']: null
    });
  }

  render () {
    const playerOneName = this.state.playerOneName
    const playerTwoName = this.state.playerTwoName
    const playerOneImage = this.state.playerOneImage
    const playerTwoImage = this.state.playerTwoImage
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
          {playerOneImage !== null &&
            <PlayerPreview
              avatar={playerOneImage}
              username={playerOneName}
              onReset={this.handleReset}
              id='playerOne'
            />
          }
          {!playerTwoName &&
            <PlayerInput
              id='playerTwo'
              label='Player Two'
              onSubmit={this.handleSubmit}
            />
          }
          {playerTwoImage !== null &&
            <PlayerPreview
              avatar={playerTwoImage}
              username={playerTwoName}
              onReset={this.handleReset}
              id='playerTwo'
            />
          }
        </div>
      </div>
    )
  }
}

export default Skirmish
