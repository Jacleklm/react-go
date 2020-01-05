import React, { Component } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import Home from '../pages/Home/index.js'
import Login from '../pages/Login/index.js'
import City from '../pages/City/index.js'
import Detail from '../pages/Detail/index.js'
import Test from '../pages/Test/index.js';

export default class RouteConfig extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/city" exact component={City} />
          <Route path="/detail" exact component={Detail} />
          <Route path="/login" exact component={Login} />
          <Route path="/test" exact component={Test} />
        </Switch>
      </HashRouter>
    )
  }
}
