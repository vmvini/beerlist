import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import BeerCard from './../BeerCard';
import * as actions from './../../actions';

class BeerPage extends Component {

  componentDidMount() {
    const match = this.props.match;
    const id = match.params.number;
    const { dispatch } = this.props;
    if (isNaN(id)) {
      dispatch(actions.setBeerNotFound(id));
      return;
    }
    dispatch(actions.setCurrentBeer(id));
    dispatch(actions.fetchSingleBeer());
  }

  renderCard() {
    const {
      notFound,
      beer,
      invalidTerm,
      isLoading,
    } = this.props;

    if (notFound) {
      return (
        <h2>Beer not found for term {invalidTerm}</h2>
      );
    }
    if (isLoading) {
      return (
        <BeerCard description="Loading beer..." name="..." tagline="..." />
      );
    }
    return (
      <BeerCard {...beer} />
    );
  }

  render() {
    return (
      <div>
        <Link to="/">Back to list</Link>
        {this.renderCard()}
      </div>
    );
  }
}

BeerPage.propTypes = {
  match: PropTypes.object,
  dispatch: PropTypes.func,
  notFound: PropTypes.bool,
  beer: PropTypes.object,
  invalidTerm: PropTypes.string,
  isLoading: PropTypes.bool,
};

export default withRouter(connect((s) => s.beerPageState)(BeerPage));
