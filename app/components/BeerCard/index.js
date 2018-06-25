import PropTypes from 'prop-types';
import React from 'react';
import {
  Card,
  CardContainer,
  CardImage,
  CardInfoContainer,
  CardInfoDescription,
  CardInfoTitle,
} from './../StyledComponents';

function BeerCard(props) {
  const { name, tagline, description } = props;
  const imgUrl = props.image_url;
  return (
    <CardContainer>
      <Card>
        <CardImage src={imgUrl} />
        <CardInfoContainer>
          <CardInfoTitle>
            Name: {name}, Tagline: {tagline}
          </CardInfoTitle>
          <CardInfoDescription>
            {description}
          </CardInfoDescription>
        </CardInfoContainer>
      </Card>
    </CardContainer>
  );
}

BeerCard.propTypes = {
  image_url: PropTypes.string,
  name: PropTypes.string,
  tagline: PropTypes.string,
  description: PropTypes.string,
};

export default BeerCard;
