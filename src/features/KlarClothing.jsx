import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/homepage';

export class KlarClothing extends Component {
  state = {};

  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={HomePage} />
        </Switch>
      </div>
    );
  }
}

export default KlarClothing;
