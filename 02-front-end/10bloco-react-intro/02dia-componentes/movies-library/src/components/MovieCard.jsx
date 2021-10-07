// implement MovieCard component here
import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';
import { StyledMovieCard, StyledMovieImg, StyledMovieCardBody, StyledTitle, StyledSubtitle, StyledStoryline} from './style';
function MovieCard({ movie }) {
  return (
    <StyledMovieCard>
      <StyledMovieImg src={ movie.imagePath } alt={ movie.title } />
      <StyledMovieCardBody>
        <StyledTitle>{movie.title}</StyledTitle>
        <StyledSubtitle>{movie.subtitle}</StyledSubtitle>
        <StyledStoryline>{movie.storyline}</StyledStoryline>
      </StyledMovieCardBody>
      <Rating rating={ movie.rating } />
    </StyledMovieCard>
  );
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
    imagePath: PropTypes.string,
  }).isRequired,
};

export default MovieCard;
