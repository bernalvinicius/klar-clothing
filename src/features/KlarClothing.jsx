import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './components/header';
import Checkout from './pages/checkout';
import HomePage from './pages/homepage';
import ShopPage from './pages/shop';

export class KlarClothing extends Component {
  state = {};

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/checkout" component={Checkout} />
        </Switch>
      </div>
    );
  }
}

export default KlarClothing;
