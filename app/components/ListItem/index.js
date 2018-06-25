import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import {
  ClickableItemContainer,
  ItemColumn,
} from './../StyledComponents';

class ListItem extends Component {

  onClick(id) {
    this.props.history.push(`/beers/${id}`);
  }

  render() {
    const { name, tagline, id } = this.props;
    return (
      <ClickableItemContainer onClick={() => this.onClick(id)} >
        <ItemColumn data-label="Name">
          { name }
        </ItemColumn>
        <ItemColumn data-label="Tagline">
          { tagline }
        </ItemColumn>
      </ClickableItemContainer>
    );
  }

}

ListItem.propTypes = {
  name: PropTypes.string,
  tagline: PropTypes.string,
  id: PropTypes.number,
  history: PropTypes.object,
};

export default withRouter(ListItem);
