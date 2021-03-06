import React from 'react'
import {NavLink} from 'react-router-dom'

function Nav (props) {
  return (
    <ul className='nav'>
      <li>
        <NavLink exact activeClassName="active" to="/">Home</NavLink>
      </li>
      <li>
        <NavLink activeClassName="active" to="/skirmish">Skirmish</NavLink>
      </li>
      <li>
        <NavLink activeClassName="active" to="/popular">Popular Repos</NavLink>
      </li>
    </ul>
  )
}

module.exports = Nav
