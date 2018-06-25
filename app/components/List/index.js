import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import ListItem from './../ListItem';
import SearchBar from './../SearchBar';
import { Div, ListContainer, ItemContainer, ItemColumn } from './../StyledComponents';
import * as actions from './../../actions';
class List extends Component {

  componentDidMount() {
    this.props.dispatch(actions.fetchBeers());
  }

  renderLoading() {
    return (
      <Div> loading... </Div>
    );
  }

  renderList(list, isLoading) {
    if (isLoading) {
      return this.renderLoading();
    }
    if (list.length === 0) return <p> no items found </p>;
    return (
      <ListContainer>
        <ItemContainer>
          <ItemColumn>Name</ItemColumn>
          <ItemColumn>Tagline</ItemColumn>
        </ItemContainer>
        {
          list
          .map((beer) => <ListItem key={beer.id} {...beer} />)
        }
      </ListContainer>
    );
  }

  render() {
    const { list, isLoading } = this.props;
    return (
      <Div>
        <SearchBar />
        { this.renderList(list, isLoading) }
      </Div>
    );
  }

}

const stateCallback = (state) => ({
  ...state.beersState,
});

List.propTypes = {
  list: PropTypes.array,
  isLoading: PropTypes.bool,
  dispatch: PropTypes.func,
};

export default withRouter(connect(stateCallback)(List));
