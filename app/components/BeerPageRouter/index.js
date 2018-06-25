import { connect } from 'react-redux';
import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import List from './../List';
import BeerPage from './../BeerPage';

function BeerPageRouter() {
  return (
    <Switch>
      <Route exact path="/" component={List} />
      <Route exact path="/beers" component={List} />
      <Route exact path="/beers/:number" component={BeerPage} />
    </Switch>
  );
}

export default withRouter(connect((s) => s)(BeerPageRouter));
