import React from "react";

import Header from "../../components/forSearchPage/Header/Header";
import Navigation from "../../components/Navigation/Navigation";

import KakaoMap from "../../components/forSearchPage/KakaoMap/KakaoMap";
import Places from "../../components/forSearchPage/Places/Places";

export default function SearchPage() {
  return (
    <>
      <Header />
      <KakaoMap mapHeight="350px" />
      <Places />
      <Navigation />
    </>
  );
}
