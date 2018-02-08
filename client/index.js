import React from 'react'

import { render } from 'react-dom'

import Router from './config/Router'

import { queryById } from './utils/domUtils'

import injectTapEventPlugin from 'react-tap-event-plugin'

import configureStyles from './config/configureStyles'

import { AppContainer } from 'react-hot-loader'

// rehydrate glamor ids
configureStyles()

// Allow for tap events
injectTapEventPlugin()

const renderApp = (Component) => {
  render(
    <AppContainer warnings={false}>
      <Component />
    </AppContainer>,
    queryById('app')
  )
}

renderApp(Router)

if (module.hot) {
  module.hot.accept('./config/Router', () => {
    renderApp(Router)
  })
}
