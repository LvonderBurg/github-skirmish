import React from 'react';
import {Link} from 'react-router-dom'

export default class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='home-container'>
        <h1>Github Skirmishes</h1>
        <p>Compare your GitHub stats with a friend and see the most popular GitHub repos by programming language</p>
        <Link className='button' to='/skirmish'>
          Battle
        </Link>
      </div>
    );
  }
}
