import React, { useState } from "react";

import Header from "../../components/forSearchPage/Header/Header";
import Navigation from "../../components/Navigation/Navigation";

import KakaoMap from "../../components/forSearchPage/KakaoMap/KakaoMap";
import Places from "../../components/forSearchPage/Places/Places";

export default function SearchPage() {
  const [currentLocationName, setCurrentLocationName] = useState<string>("");
  const [searchAddress, setSearchAddress] = useState<string>("");
  
  return (
    <>
      <Header 
        placeholder={currentLocationName} 
        onSearch={setSearchAddress}
      />
      <KakaoMap 
        mapHeight="350px" 
        setCurrentLocationName={setCurrentLocationName}
        searchKeyword={searchAddress}
      />
      <Places />
      <Navigation />
    </>
  );
}
