import React from "react";
import { movies } from "../data";

function Movies() {

  const movieDivs = movies.map(movie => {

    const genreListItems = movie.genres.map(genre => {
      return <li key={genre}>{genre}</li>
    })

    return (
      <div key={movie.title}>
        {movie.title}: {movie.time} minutes
        <ul>
          {genreListItems}
        </ul>
      </div>
    )
  })

  return (
    <div>
      <h1>Movies Page</h1>
      {movieDivs}
    </div>
  );
}

export default Movies;
