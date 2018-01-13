import React from 'react'
import { render } from 'react-dom'
import App from './containers/App'

const AppContainer = () => (
  <App />
)

render(<AppContainer />, document.getElementById('react-root'))
