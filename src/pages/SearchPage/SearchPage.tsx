import React from 'react';
import { Route, Routes, useNavigate } from "react-router-dom";

import SearchPlace from './SearchPlace';
import ReviewPlace from './ReviewPlace';

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
      </Routes>
    </>
  );
};