import React, { Component } from 'react';
import MovieSearchBar from '../container/MovieSearchBar';
import MovieList from '../container/MovieList';

export default class App extends Component {
  render() {
    return (
      <div>
        <MovieSearchBar />
        <MovieList />
      </div>
    );
  }
}
