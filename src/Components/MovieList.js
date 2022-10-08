import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterByName } from "../Redux/FilterReducer";
import Movie from "./Movie";
import "./MovieList.css";
const MovieList = () => {
  const movies = useSelector((state) => state.filter.filterMovies);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <input
          type="text"
          onChange={(e) => dispatch(filterByName(e.target.value))}
        />
      </div>
      <div className="main-movies">
        {movies.map((movie) => (
          <Movie
            name={movie.name}
            url={movie.url}
            description={movie.description}
          />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
