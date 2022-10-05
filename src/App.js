import "./App.css";
import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Popular from "./Popular";
import ExtraShit from "./ExtraShit";
function App() {
  const [movieType, setMovieType] = useState("popular");
  const [movieData, setMovieData] = useState([]);
  const fetchMovies = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieType}?api_key=15e383204c1b8a09dbfaaa4c01ed7e17&language=en-US&page=1`
    )
      .then((res) => res.json())
      .then((data) => {
        setMovieData(data.results);
      });
  };
  useEffect(() => {
    fetchMovies();
  }, [movieType]);

  return (
    <div className="App">
      <Router>
        <Navbar setMovieType={setMovieType} />
        <Routes>
          <Route path="/" element={<Popular movieData={movieData} />} />
          <Route
            path="/:movieId"
            element={<ExtraShit movieData={movieData} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
