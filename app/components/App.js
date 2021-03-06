import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Nav from './Nav.js'
import Popular from './Popular.js'
import Home from './Home.js'
import Skirmish from './Skirmish.js'
import Results from './Results.js'

// const Router = ReactRouter.BrowserRouter
// const Route = ReactRouter.Route


class App extends React.Component {
  render() {
    return (
    <Router>
      <div className="container">
        <Nav />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/skirmish' component={Skirmish} />
          <Route path='/skirmish/results' component={Results} />
          <Route path='/popular' component={Popular} />
          <Route render={() => <p>Not found</p>} />
        </Switch>
      </div>
    </Router>
    );
  }
}

App.propTypes = {
};


module.exports = App
