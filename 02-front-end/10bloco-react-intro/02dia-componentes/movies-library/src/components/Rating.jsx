// implement Rating component here
import React from 'react';
import PropTypes from 'prop-types';
import { StyledRating, StyledRatingSection } from './style';
function Rating({ rating }) {
  return (
    <StyledRatingSection>
      <StyledRating>{rating}</StyledRating>
    </StyledRatingSection>
  );
}

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default Rating;
