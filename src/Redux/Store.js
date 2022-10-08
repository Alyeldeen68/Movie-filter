import React from "react";
import { configureStore } from "@reduxjs/toolkit";
import FilterReducer from "./FilterReducer";

const store = configureStore({
  reducer: {
    filter: FilterReducer,
  },
});

export default store;
