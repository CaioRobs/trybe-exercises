import React from 'react';
import Header from './components/Header';
import MovieList from './components/MovieList';
import movies from './data';
import { StyledApp } from './components/style';

function App() {
  return (
    <StyledApp>
      <Header />
      <MovieList movies={ movies } />
    </StyledApp>
  );
}

export default App;
