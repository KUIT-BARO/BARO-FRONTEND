import React from "react";

import { ModalWrapper, ModalHeader, ModalCloseButton, SetToCurrentLocation, ModalContents,
  Content, LocationName, LocationAddress,
  SettingLocation, SettingLocationContents, SettingButtonWrapper, LocationTitle, LocationDetail, SettingButton
} from "./Modal.styles";

import KakaoMap from '../KakaoMap/KakaoMap';

import BackIcon from '../../../assets/icons/backIcon.svg';
import Scope from '../../../assets/icons/스코프.svg';

export default function Modal(props) {

  function updateisModalOpen() {
    props.updateisModalOpen(false);
  };

  const [isSettingLocation, setIsSettingLocation] = React.useState(false);
  const handleSettingLocation = () => {
    setIsSettingLocation(!isSettingLocation);
  };

  return (
    <ModalWrapper>
      <ModalHeader>
        {!isSettingLocation && <>
          <ModalCloseButton onClick={updateisModalOpen}>
            <img src={BackIcon} alt="back icon" />
          </ModalCloseButton>
          <SetToCurrentLocation onClick={() => {handleSettingLocation()}}>
            <img src={Scope} alt="scope icon" />
            <div>현재 위치로 설정하기</div>
          </SetToCurrentLocation>
        </>}
        {isSettingLocation && 
          <SettingLocation>
            <img src={BackIcon} alt="back icon" onClick={() => {handleSettingLocation()}}/>
            <div>현재 위치</div>
            <div></div>
          </SettingLocation>
        }
      </ModalHeader>
      {!isSettingLocation && <ModalContents>
        {[...Array(10)].map((_, index) => (
          <Content>
            <LocationName>스타벅스 건대입구점</LocationName>
            <LocationAddress>서울 광진구 화양동 5-47</LocationAddress>
          </Content>  
        ))}
      </ModalContents>}
      {isSettingLocation && <SettingLocationContents>
        <KakaoMap mapHeight="70vh" />
        <SettingButtonWrapper>
          <LocationTitle>스타벅스 건대입구점</LocationTitle>
          <LocationDetail>서울 광진구 화양동 5-47</LocationDetail>
          <SettingButton><>이 주소로 설정하기</></SettingButton>
        </SettingButtonWrapper>
      </SettingLocationContents>}
    </ModalWrapper>
  );
};