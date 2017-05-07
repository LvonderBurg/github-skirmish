import React, { PropTypes } from 'react'
import ReactDOM from 'react-dom'
import './index.css'      // webpack bundles this. Requires the css-loader and the style-loader
import App from './components/App'

ReactDOM.render(
  <App />,
  document.getElementById('app')
)
