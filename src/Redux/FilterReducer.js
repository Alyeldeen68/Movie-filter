import React from "react";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movies: [
    {
      name: "The Shawshank Redemption",
      rating: 9,
      size: "L",
      url: "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
      description:
        "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    },
    {
      name: "Se7en",
      rating: 8,
      size: "M",
      url: "https://m.media-amazon.com/images/M/MV5BOTUwODM5MTctZjczMi00OTk4LTg3NWUtNmVhMTAzNTNjYjcyXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
      description:
        "Two detectives, a rookie and a veteran, hunt a serial killer who uses the seven deadly sins as his motives.",
    },
    {
      name: "The Pianist",
      rating: 8,
      size: "S",
      url: "https://m.media-amazon.com/images/M/MV5BOWRiZDIxZjktMTA1NC00MDQ2LWEzMjUtMTliZmY3NjQ3ODJiXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
      description:
        "A Polish Jewish musician struggles to survive the destruction of the Warsaw ghetto of World War II.",
    },
    {
      name: "Toy Story 3",
      rating: 6,
      size: "L",
      url: "https://m.media-amazon.com/images/M/MV5BMTgxOTY4Mjc0MF5BMl5BanBnXkFtZTcwNTA4MDQyMw@@._V1_.jpg",
      description:
        "The toys are mistakenly delivered to a day-care center instead of the attic right before Andy leaves for college.",
    },
  ],
  filterMovies: [
    {
      name: "The Shawshank Redemption",
      rating: 9,
      size: "L",
      url: "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
      description:
        "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    },
    {
      name: "Se7en",
      rating: 8,
      size: "M",
      url: "https://m.media-amazon.com/images/M/MV5BOTUwODM5MTctZjczMi00OTk4LTg3NWUtNmVhMTAzNTNjYjcyXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
      description:
        "Two detectives, a rookie and a veteran, hunt a serial killer who uses the seven deadly sins as his motives.",
    },
    {
      name: "The Pianist",
      rating: 8,
      size: "S",
      url: "https://m.media-amazon.com/images/M/MV5BOWRiZDIxZjktMTA1NC00MDQ2LWEzMjUtMTliZmY3NjQ3ODJiXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
      description:
        "A Polish Jewish musician struggles to survive the destruction of the Warsaw ghetto of World War II.",
    },
    {
      name: "Toy Story 3",
      rating: 6,
      size: "L",
      url: "https://m.media-amazon.com/images/M/MV5BMTgxOTY4Mjc0MF5BMl5BanBnXkFtZTcwNTA4MDQyMw@@._V1_.jpg",
      description:
        "The toys are mistakenly delivered to a day-care center instead of the attic right before Andy leaves for college.",
    },
  ],
};

const filterReducer = createSlice({
  name: "filter",
  initialState,
  reducers: {
    filterByName: (state, action) => {
      state.filterMovies = state.movies.filter((item) => {
        return item.name.toLowerCase().includes(action.payload.toLowerCase());
      });
    },
  },
});

export const { filterByName } = filterReducer.actions;
export default filterReducer.reducer;
