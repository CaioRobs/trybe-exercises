// implement MovieList component here
import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';
import { MoviesSection } from './style';
//2
function MovieList({ movies }) {
  return (
    <MoviesSection>
      {movies.map((movie) => {
        const { title } = movie;
        return <MovieCard movie={ movie } key={ title } />;
      })}
    </MoviesSection>
  );
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieList;
