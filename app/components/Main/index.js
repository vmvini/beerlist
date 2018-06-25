import { connect } from 'react-redux';
import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import BeerPageRouter from './../BeerPageRouter';

function Main() {
  return (
    <Switch>
      <Route path="/" component={BeerPageRouter} />
    </Switch>
  );
}

export default withRouter(connect((s) => s)(Main));
