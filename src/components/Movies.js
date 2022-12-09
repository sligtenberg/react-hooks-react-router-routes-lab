import React from "react";
import { movies } from "../data";

function Movies() {

  const movieDivs = movies.map(movie => {

    const genreListItems = movie.genres.map(genre => {
      return <li>{genre}</li>
    })

    return (
      <div>
        {movie.title}
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
