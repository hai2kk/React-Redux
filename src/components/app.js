import React, { Component } from 'react';
import MovieSearchBar from '../container/MovieSearchBar';
import MovieList from '../container/MovieList';
import SelectedMovies from '../container/SelectedMovies'

export default class App extends Component {
  render() {
    return (
      <div>
        <MovieSearchBar />
        <MovieList />
        <SelectedMovies />
      </div>
    );
  }
}
