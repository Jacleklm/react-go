import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import FastClick from 'fastclick';
import Route from './router'
import './style/reset.css'
import './style/border.css'
import './style/iconfont.css'
// import {Provider} from 'react-redux'

FastClick.attach(document.body)

const render = Component => {
  ReactDOM.render(
    <Component />,
    document.getElementById('root')
  )
}
render(Route)

serviceWorker.unregister();

