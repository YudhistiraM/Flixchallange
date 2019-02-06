import React, { Component } from 'react';
import MovieList from './MoviePopuler/MovieList';
import Menu from './Menu';

function MoviePopuler() {
  return (
    <div>
      <Menu />

      <MovieList />
    </div>
  )
}

export default MoviePopuler;
