import React from 'react';
import { Route, Routes } from "react-router-dom";

import SearchPlace from './SearchMain/SearchMain';
import ReviewPlace from './AddPin/AddPin';
// import BestPlace from './BestPlace/BestPlace';

export default function SearchPage() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<SearchPlace />}
        />
        <Route 
          path=":placeId"
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