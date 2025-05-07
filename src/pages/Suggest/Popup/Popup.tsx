import React from "react";
import { useNavigate } from "react-router-dom";

import Button from "../../../components/Button/Button";
import Question from "../../../components/Question/Question";
import {
  InfoBox,
  Overlay,
  PopupContent,
  InfoTitle,
  InfoContainer,
  InfoWrap,
  InfoText,
  ButtonColumn,
} from "./Popup.styles";

import formatDateToShort from "../../../utils/formatDateToShort";

import crown from "../../../assets/icons/Promise/crown.svg";
import calender from "../../../assets/icons/Promise/calender.svg";
import location from "../../../assets/icons/Promise/location.svg";

interface PopupProps {
  setPromiseId: (promiseId: number) => void;
  handleClosePopup: () => void;
  name: string;
  placeName: string;
  dateStart: Date;
  dateEnd: Date;
}

export default function Popup({
  handleClosePopup,
  setPromiseId,
  name,
  placeName,
  dateStart,
  dateEnd,
}: PopupProps) {
  const navigate = useNavigate();
  const user = sessionStorage.getItem("name");

  const handleConfirm = async () => {
    // TODO: 서버 연동 예정
    // const response = await PostPromise(...);
    // setPromiseId(response.data.promiseId);

    handleClosePopup();
    navigate("/main");
  };

  return (
    <Overlay>
      <PopupContent>
        <Question
          title="약속 정보를 확인해주세요"
          desc="입력하신 내용이 모두 정확한지 체크해주세요"
        />

        <InfoBox>
          <InfoTitle>{name}</InfoTitle>
          <InfoContainer>
            <InfoWrap>
              <img src={crown} alt="주최자" />
              <InfoText>{user}</InfoText>
            </InfoWrap>
            <InfoWrap>
              <img src={location} alt="장소" />
              <InfoText>{placeName}</InfoText>
            </InfoWrap>
            <InfoWrap>
              <img src={calender} alt="날짜" />
              <InfoText>
                {formatDateToShort(dateStart)} ~ {formatDateToShort(dateEnd)}
              </InfoText>
            </InfoWrap>
          </InfoContainer>
        </InfoBox>

        <ButtonColumn>
          <Button onClick={handleConfirm}>확인</Button>
          <Button onClick={handleClosePopup} color="White">
            수정할래요
          </Button>
        </ButtonColumn>
      </PopupContent>
    </Overlay>
  );
}
