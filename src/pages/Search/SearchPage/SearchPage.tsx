import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";

import Search from "../../../components/Search/Search";
import CategroyTab from "./CategoryTab";
import KakaoMap from "../../../components/forSearchPage/KakaoMap/KakaoMap";
import Navigation from "../../../components/Navigation/Navigation";

import Pencil from "../../../assets/icons/Search/pencil.svg";

export default function SearchPage() {
  const navigate = useNavigate();

  const [currentLocationName, setCurrentLocationName] = useState<string>("");
  const [searchAddress, setSearchAddress] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  
  return (
    <Layout>
      <Header>
        <Search 
          placeholder={currentLocationName}
          value={searchAddress}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              setSearchAddress(e.target.value);
              // e.currentTarget.blur();
            }
          }}
        />
        <img
          className="addPinButton"
          src={Pencil} alt="pencil icon" 
          onClick={() => navigate('/search/review')}
        />
      </Header>

      <CategroyTab onCategorySelected={setSelectedCategory} />

      <KakaoMap 
        mapHeight="74vh" 
        setCurrentLocationName={setCurrentLocationName}
        searchKeyword={searchAddress}
        buttonOn={true}
        staticMap={false}
        selectedCategory={selectedCategory}
      />

      <Navigation />
    </Layout>
  );
};

const Layout = styled.div`
  background-color: #F4F8FB;
  width: 100%;
  min-height: 95vh;
`;
const Header = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #F4F8FB;
  padding: 24px 17px 0px 20px;
  z-index: 50;
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