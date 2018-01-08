import React from "react";
import movieAPI from "./movieAPI";
import MovieList from "./MovieList";

class MovieRating extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedRating: ""
    };
  }

  handleSelect = e => {
    this.setState({ selectedRating: e.target.value });
  };

  render() {
    const { selectedRating } = this.state;
    const ratings = [1,2,3,4,5]
    let filtered = this.props.rated.filter(n => n.rating === selectedRating)
    return (
      <div>
        <select value={selectedRating} onChange={this.handleSelect}>
          {["", ...ratings].map(rating => <option value={rating}>{rating}</option>)}
        </select>
        <MovieList movies={filtered}/>
      </div>
    );
  }
}

export default MovieRating;
