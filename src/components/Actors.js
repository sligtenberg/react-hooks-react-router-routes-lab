import React from "react";
import { actors } from "../data";

function Actors() {

  const actorDivs = actors.map(actor => {

    const movieListItems = actor.movies.map(movie => {
      return <li key={movie}>{movie}</li>
    })

    return (
      <div key={actor.name}>
        {actor.name}
        <ul>
      {movieListItems}
        </ul>
      </div>
    )
  })
  return (
    <div>
      <h1>Actors Page</h1>
      {actorDivs}
    </div>
  );
}

export default Actors;
