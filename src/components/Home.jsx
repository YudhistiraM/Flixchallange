import React from 'react';
import MovieList from './MovieList';
import Alert from './Alert';

const Home = props => (
  <div>
    <MovieList {...props} />
    <Alert />
  </div>
);

export default Home;
