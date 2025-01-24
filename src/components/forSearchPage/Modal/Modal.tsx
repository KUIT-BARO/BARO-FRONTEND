import React from "react";

import { ModalWrapper, ModalHeader, ModalCloseButton, SetToCurrentLocation, ModalContents 
  , Content, LocationName, LocationAddress
} from "./Modal.styles";

import BackIcon from '../../../assets/icons/backIcon.svg'

export default function Modal(props) {

  function updateisModalOpen() {
    props.updateisModalOpen(false);
  };

  return (
    <ModalWrapper>
      <ModalHeader>
        <ModalCloseButton onClick={updateisModalOpen}>
          <img src={BackIcon} alt="back icon" />
        </ModalCloseButton>
        <SetToCurrentLocation>
          <img src="" alt="" />
          <div>현재 위치로 설정하기</div>
        </SetToCurrentLocation>
      </ModalHeader>
      <ModalContents>
        {[...Array(10)].map((_, index) => (
          <Content>
            <LocationName>스타벅스 건대입구점</LocationName>
            <LocationAddress>서울 광진구 화양동 5-47</LocationAddress>
          </Content>  
        ))}
      </ModalContents>
    </ModalWrapper>
  );
};