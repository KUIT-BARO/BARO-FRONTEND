import React from "react";
import { Route, Routes } from "react-router-dom";
import PromisePending from "../PromisePending/PromisePending";

function RoutePromise() {
  const dummyStatus = { promiseStatus: "PENDING", isHost: true };
  return (
    <Routes>
      {dummyStatus.promiseStatus == "PENDING" ? (
        <Route path="/" element={<PromisePending />} />
      ) : (
        ""
      )}
    </Routes>
  );
}

export default RoutePromise;
