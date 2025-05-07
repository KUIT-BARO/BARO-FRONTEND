import React from 'react';
import { Route, Routes } from "react-router-dom";


import SearchPlace from './SearchPage/SearchPage';
import ReviewPlace from './AddPin/AddPin';
// import BestPlace from './BestPlace/BestPlace';

export default function Search() {

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<SearchPlace />}
        />
        <Route 

          path="/place/:id"

          element={<ReviewPlace />}
        />
        {/* <Route
          path="bestplace"
          element={<BestPlace />}
        /> */}
      </Routes>
    </>
  );
};