import React from "react";
import movieAPI from "./movieAPI";
import MovieList from "./MovieList";

class MovieGenres extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedGenre: ""
    };
  }

  handleSelect = e => {
    this.setState({ selectedGenre: e.target.value });
  };

  render() {
    const { selectedGenre } = this.state;

    const genres = movieAPI.getGenres();
    const moviesByGenre = movieAPI.getMoviesByGenre(selectedGenre);
    
    return (
      <div>
        <select value={selectedGenre} onChange={this.handleSelect}>
          {["", ...genres].map(genre => <option value={genre}>{genre}</option>)}
        </select>
        <MovieList movies={moviesByGenre} />
      </div>
    );
  }
}

export default MovieGenres;
