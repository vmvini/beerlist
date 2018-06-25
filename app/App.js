import { connect } from 'react-redux';
import React from 'react';
import { withRouter } from 'react-router-dom';
import Main from './components/Main';

function App() {
  return (
    <Main />
  );
}

export default withRouter(connect((s) => s)(App));
