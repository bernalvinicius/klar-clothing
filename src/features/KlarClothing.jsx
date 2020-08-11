import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './components/header';
import HomePage from './pages/homepage';

export class KlarClothing extends Component {
  state = {};

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
        </Switch>
      </div>
    );
  }
}

export default KlarClothing;
