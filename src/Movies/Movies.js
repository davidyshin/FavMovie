// Import libraries
import React from "react";
import { Route, Switch } from "react-router-dom";
// Import the mock API
import movieAPI from "./movieAPI";
// Import React Components
import Movie from "./Movie";
import MovieList from "./MovieList";
import MovieRating from "./MovieRating"
import MovieGenres from "./MovieGenres"


class Movies extends React.Component {
  constructor() {
    super()
    this.state = {
      rated: []
    }
  }
  renderMovie = props => {
    console.log("render movie")
    const { id } = props.match.params;
    const movie = movieAPI.getOne(id);
    if (!movie) {
      return <div> could not find movie </div>;
    } else {
      return <Movie
        movie={movie} 
        rateMovie={this.rateMovie}
      />;
    }
  };

  renderMovieList = () => {
    console.log("render movie list")

    const movies = movieAPI.getAll();
    return <MovieList movies={movies} />;
  };

  rateMovie = (e) => {
    const { rated }= this.state
    const movie = movieAPI.getOne(e.target.id)
    movie.rating = e.target.value

    if (!rated.includes(movie)) {
      this.setState({
        rated: [...rated, movie]
      })
    } else {
      let newList = rated.filter(n => n.id !== e.target.id)
      this.setState({
        rated: [...newList, movie]
      })
    }
    //console.log(this.state)
  }

  renderRated = () =>{
    console.log("render rated", this.state)
    let rated = this.state.rated
      return <MovieRating
        rated={rated}
      />;

  };

  render() {
    console.log(this.state)
    return (
      <div>
        <Switch>
          <Route exact path="/movies" render={this.renderMovieList} />
          <Route path="/movies/rated/" render={this.renderRated} />
          <Route path="/movies/genre/" component={MovieGenres} />          
          <Route path="/movies/specific/:id" render={this.renderMovie} />
        </Switch>
      </div>
    );
  }
}
export default Movies;
