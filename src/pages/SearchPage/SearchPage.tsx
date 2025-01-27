import React from 'react';
import { Route, Routes, useNavigate } from "react-router-dom";

import SearchPlace from './SearchPlace';
import ReviewPlace from './ReviewPlace';
import BestPlace from './BestPlace';

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
        <Route
          path="bestplace"
          element={<BestPlace />}
        />
      </Routes>
    </>
  );
};