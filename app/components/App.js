import React from 'react'

import Popular from './Popular.js'


class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <Popular />
      </div>
    );
  }
}

App.propTypes = {
};


module.exports = App
