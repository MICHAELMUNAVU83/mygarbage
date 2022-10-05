import React from "react";

function Navbar({ setMovieType }) {
  return (
    <div>
      <button onClick={() => setMovieType("popular")}>Popular</button>
      <button onClick={() => setMovieType("top_rated")}>Top Rated</button>
    </div>
  );
}

export default Navbar;
