import React from "react";
import { Link } from "react-router-dom";

const Movie = ({ movie, rateMovie}) => {

  const ratings = [1, 2, 3, 4, 5]
  const selectedRating = movie.rating ? movie.rating : ""
  return (
    <div>
      <div>
        <h1>{movie.title}</h1>
        <h2> year: {movie.year} </h2>
        <h2> director: {movie.director} </h2>
        <h2> lead: {movie.lead} </h2>
        <h2> genres: {movie.genres.join(", ")} </h2>
        <img alt="" src={movie.image} />
        <Link to="/movies">Back</Link>
      </div>
      <div>
        <p> What rating do you prefer?</p>
        <select id={movie.id} value= {selectedRating} onChange={rateMovie}>
          {["", ...ratings].map(val => <option movie={movie} value={val}>{val}</option>)}
        </select>
      </div>
    </div>
  );
};

export default Movie;
