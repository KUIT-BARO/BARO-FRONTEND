import React from 'react';
import { Route, Routes } from "react-router-dom";

import SearchPlace from './SearchPage/SearchPage';
import PinInfoPage from './PinInfoPage/PinInfoPage';
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
          path="/pin/:placeId"
          element={<PinInfoPage />}
        />
        <Route 
          path="/review"
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