import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";

// import Header from "../../components/forSearchPage/Header/Header";
import Search from "../../components/Search/Search";
import KakaoMap from "../../components/forSearchPage/KakaoMap/KakaoMap";
// import Places from "../../components/forSearchPage/Places/Places";
import Navigation from "../../components/Navigation/Navigation";

import Pencil from "../../assets/icons/연필.svg";

export default function SearchMain() {
  const navigate = useNavigate();

  const [currentLocationName, setCurrentLocationName] = useState<string>("");
  const [searchAddress, setSearchAddress] = useState<string>("");
  
  return (
    <>
      <Header>
        <Search 
          placeholder={currentLocationName}
          value={searchAddress}
          // onChange={(e) => setSearchAddress(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              setSearchAddress(e.target.value);
              e.currentTarget.blur();
            }
          }}
        />
        <img
          className="addPinButton"
          src={Pencil} alt="pencil icon" 
          onClick={() => navigate('/search/reviewplace')}
        />
      </Header>

      <KakaoMap 
        mapHeight="483px" 
        setCurrentLocationName={setCurrentLocationName}
        searchKeyword={searchAddress}
        buttonOn={true}
      />

      {/* <Places /> */}
      <Navigation />
    </>
  );
};

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #F4F8FB;
  padding: 24px 17px 24px 20px;
  gap: 11px;

  .addPinButton {
    width: 40px;
    height: 40px;
    background: none;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
`;