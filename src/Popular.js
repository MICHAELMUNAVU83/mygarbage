import React from "react";
import { Link } from "react-router-dom";
function Popular({ movieData }) {
  return (
    <div>
      {movieData.map((movie) => (
        <div>
          <h1>{movie.title}</h1>
          <Link to={`/${movie.id}`}>More Info</Link>
        </div>
      ))}
    </div>
  );
}

export default Popular;
