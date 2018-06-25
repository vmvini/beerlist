import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Div, TextInput } from './../StyledComponents';
import * as actions from './../../actions';

class SearchBar extends Component {

  onValueChange() {
    this.props.dispatch(actions.setSearchName(this.searchInput.value));
  }

  onKeyPress(e) {
    if (e.key === 'Enter' && !this.props.isLoading) {
      this.props.dispatch(actions.fetchBeers());
    }
  }

  render() {
    const { searchText } = this.props;
    return (
      <Div >
        <TextInput
          type="text"
          innerRef={(input) => { this.searchInput = input; }}
          value={searchText}
          placeholder="Search beers by name and press enter"
          onChange={() => this.onValueChange()}
          onKeyPress={(e) => this.onKeyPress(e)}
        />
      </Div>
    );
  }

}

const stateCallback = (state) => ({
  searchText: state.serviceState.searchName,
  isLoading: state.beersState.isLoading,
});

SearchBar.propTypes = {
  searchText: PropTypes.string,
  isLoading: PropTypes.bool,
  dispatch: PropTypes.func,
};

export default connect(stateCallback)(SearchBar);
