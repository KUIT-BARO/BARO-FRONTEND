import React, { useEffect } from "react";
import styled from "styled-components";
import SubTitle from "../../../components/SubTitle/SubTitle";
import Desc from "../../../components/Desc/Desc";
import Button from "../../../components/Button/Button";

import flag from "../../../assets/icons/flag.svg";
import person from "../../../assets/icons/person.svg";
import date from "../../../assets/icons/date.svg";
import locationIcon from "../../../assets/icons/location.svg";
import crown from "../../../assets/icons/crown.svg";
import formatDateToShort from "../../../utils/formatDateToShort";
import SuggestInterface from "../../../interface/Suggest";
import { useNavigate } from "react-router-dom";
import PostPromise from "../../../apis/promise/postPromise";
import PostPromiseShare from "../../../apis/Promise/PostPromiseShare";

interface PopupProps extends SuggestInterface {
  setPromiseId: (promiseId) => void;
  onClose: () => void;
  name: string;
  dateStart: string;
  dateEnd: string;
  peopleNum: number;
  purpose: string;
  placeName: string;
  placeId: number;
}

export default function Popup({
  setPromiseId,
  onClose,
  name,
  dateStart,
  dateEnd,
  peopleNum,
  purpose,
  placeName,
  placeId,
  promiseId,
  codeList,
}: PopupProps) {
  const navigate = useNavigate();

  const handlePostPromise = async () => {
    try {
      const response = await PostPromise(
        name,
        dateStart,
        dateEnd,
        peopleNum,
        purpose,
        placeId
      );
      if (response) {
        console.log(response.data.data);
        setPromiseId(response.data.data.promiseId);
      }
    } catch (error) {
      console.error("약속 생성 중 오류 발생:", error);
    }
  };

  useEffect(() => {
    if (promiseId) {
      PostPromiseShare(promiseId, codeList)
        .then(() => {
          navigate("/suggest/step4");
        })
        .catch((error) => console.error("약속 공유 중 오류 발생:", error));
    }
  }, [promiseId]); // `promiseId`가 변경될 때 실행

  const user = sessionStorage.getItem("name");
  return (
    <Overlay>
      <PopupContent>
        <SubTitle>약속 정보를 확인해주세요</SubTitle>
        <Desc>입력하신 내용이 모두 정확한지 체크해주세요</Desc>
        <InfoBox>
          <p className="title">{name}</p>
          <div className="container">
            <div className="wrap">
              <img src={flag} />
              <p>{purpose}</p>
            </div>
            <div className="wrap">
              <img src={crown} />
              <p>{user}</p>
            </div>
            <div className="wrap">
              <img src={person} />
              <p>
                {user} 외 {peopleNum}
              </p>
            </div>
            <div className="wrap">
              <img src={locationIcon} />
              <p>{placeName}</p>
            </div>
            <div className="wrap">
              <img src={date} />
              <p>
                {formatDateToShort(dateStart)} ~ {formatDateToShort(dateEnd)}
              </p>
            </div>
          </div>
        </InfoBox>
        <div
          style={{
            position: "relative",
            width: "100%",
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "column",
            gap: "8px",
          }}
        >
          <Button
            onClick={async () => {
              await handlePostPromise();
              onClose();
              navigate("/suggest/step4");
            }}
          >
            약속제안생성
          </Button>
          <Button onClick={onClose} color="Gray">
            수정하기
          </Button>
        </div>
      </PopupContent>
    </Overlay>
  );
}

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

const PopupContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  background-color: white;

  border-radius: 24px 24px 0px 0px;
  padding: 25px 20px;
  gap: 10px;
  text-align: center;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
`;

const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;
  width: 100%;
  background-color: #f4f8fb;

  border-radius: 24px;
  padding: 20px;
  box-sizing: border-box;
  .title {
    font-size: 20px;
    font-weight: 600;
  }
  .container {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .container > .wrap {
    display: flex;
    align-items: center;
    gap: 12px;
    > p {
      font-size: 16px;
      font-weight: 400;
    }
  }
`;
