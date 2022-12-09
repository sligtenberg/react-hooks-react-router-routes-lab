import React from "react";
import { directors } from "../data";

function Directors() {

  const directorDivs = directors.map(director => {
    
    const moviesListItems = director.movies.map(movie => {
      return <li key={movie}>{movie}</li>
    })

    return (
      <div key={director.name}>
        {director.name}
        <ul>
          {moviesListItems}
        </ul>
      </div>
    )
  })

  return (
    <div>
      <h1>Directors Page</h1>
      {directorDivs}
    </div>
  );
}

export default Directors;
