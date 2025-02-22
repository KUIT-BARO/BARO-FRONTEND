import React, { useState } from "react";

import styled from "styled-components";

import formatDateToShort from "../../utils/formatDateToShort";
import StepInterface from "../../interface/Step";
import SuggestInterface from "../../interface/Suggest";

import TopBar from "../../components/TopBar/TopBar";
import Button from "../../components/Button/Button";
import Desc from "../../components/Desc/Desc";
import flag from "../../assets/icons/flag.svg";
import person from "../../assets/icons/person.svg";
import date from "../../assets/icons/date.svg";
import locationIcon from "../../assets/icons/location.svg";
import crown from "../../assets/icons/crown.svg";

import 약속제안완료 from "../../assets/icons/약속제안완료.png";
import { useNavigate } from "react-router-dom";
import GetSharePromise from "../../apis/user/GetSharePromise";

interface ConfirmProps extends StepInterface, SuggestInterface {
  selectFriends: boolean;
  promiseId: number;
}

export default function Confirm({
  handleBack,
  handleExit,
  name,
  purpose,
  peopleNum,
  placeName,
  dateStart,
  dateEnd,
  promiseId,
}: ConfirmProps) {
  const navigate = useNavigate();
  const [linkPopup, setLinkPopup] = useState(false);
  const [link, setLink] = useState<string | null>(null);
  const showPopup = async () => {
    try {
      if (!promiseId) {
        console.error("promiseId가 설정되지 않았습니다.");
        return null;
      }

      setLinkPopup(true);
      const response = await GetSharePromise(promiseId);

      if (response?.data?.data.url) {
        setLink(response.data.data.url);
        setTimeout(() => {
          setLinkPopup(false);
        }, 1000);

        return response.data.data.url; // ✅ 공유 링크 반환
      }
    } catch (error) {
      console.error("공유 링크 가져오는 중 오류 발생:", error);
    }
    return null; // 실패 시 null 반환
  };

  const user = sessionStorage.getItem("name");

  return (
    <>
      {linkPopup && (
        <LinkPopupWrapper>
          <div>링크가 복사되었습니다.</div>
        </LinkPopupWrapper>
      )}
      <ConfirmWrapper>
        <TopBar handleBack={handleBack} handleExit={handleExit} />
        <Title>
          <p className="bold">
            {name}
            <br />
            모임 준비가 완료되었어요!
          </p>
          <Desc>친구들에게 약속을 BARO 공유해봐요</Desc>
        </Title>
        <Content>
          <img src={약속제안완료} alt="confirm icon" width={"200px"} />
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
        </Content>
      </ConfirmWrapper>
      <div
        style={{
          position: "fixed",
          bottom: 0,
          width: "100%",
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          gap: "8px",
          background: "white",
        }}
      >
        <Button
          onClick={async () => {
            const copiedLink = await showPopup(); // 공유 링크를 가져온 후
            if (copiedLink) {
              try {
                await navigator.clipboard.writeText(copiedLink);
                console.log("링크 복사 완료:", copiedLink);
              } catch (error) {
                console.error("클립보드 복사 실패:", error);
              }
            } else {
              console.warn("복사할 링크가 없습니다.");
            }
          }}
        >
          링크 복사하기
        </Button>

        <Button onClick={() => navigate(-1)} color="Gray">
          수정하기
        </Button>
      </div>
    </>
  );
}

const ConfirmWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  justify-content: flex-start;
  padding: 20px;
  background-color: white;
  box-sizing: border-box;
  margin-bottom: 150px;
`;
const Title = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  box-sizing: border-box;
  .bold {
    color: black;
    font-size: 33px;
    font-weight: 600;
  }
`;
const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  gap: 30px;

  .container {
    width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    gap: 10px;
    > .wrap {
      display: flex;
      align-items: center;
      gap: 12px;
      > p {
        font-size: 16px;
        font-weight: 400;
      }
    }
  }
`;
const LinkPopupWrapper = styled.div`
  position: fixed;
  bottom: 20%;
  left: 50%;

  transform: translate(-50%, 50%);
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 70px;
  padding: 0 20px;
  border-radius: 16px;
  background-color: #f5f5f5;
  font-size: 17px;
  font-weight: 600;
  z-index: 1000;
  opacity: 0.8;
  animation: fadeInOut 3s ease-in-out forwards;

  @keyframes fadeInOut {
    0% {
      opacity: 0;
      transform: translate(-50%, 55%);
    }
    10% {
      opacity: 1;
      transform: translate(-50%, 50%);
    }
    90% {
      opacity: 1;
      transform: translate(-50%, 50%);
    }
    100% {
      opacity: 0;
      transform: translate(-50%, 45%);
    }
  }
`;
