import React from "react";
import styled from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";

import TopBar from "../../../components/TopBar/TopBar";
import Button from "../../../components/Button/Button";
import Desc from "../../../components/Desc/Desc";
import flag from "../../../assets/icons/flag.svg";
import person from "../../../assets/icons/person.svg";
import date from "../../../assets/icons/date.svg";
import locationIcon from "../../../assets/icons/location.svg";
import crown from "../../../assets/icons/crown.svg";
import ThumbsUp from "../../../assets/icons/Like.png";

import GetSharePromise from "../../../apis/user/GetSharePromise";

export default function PromiseConfirm() {
  const navigate = useNavigate();
  const location = useLocation();
  const promiseData = location.state;

  const [linkPopup, setLinkPopup] = React.useState(false);
  const [link, setLink] = React.useState<string | null>(null);
  const showPopup = async () => {
    try {
      if (!promiseData.promiseId) {
        console.error("promiseId가 설정되지 않았습니다.");
        return null;
      }

      setLinkPopup(true);
      const response = await GetSharePromise(promiseData.promiseId);

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

  return (
    <>
      <ConfirmWrapper>
        <Title>
          <div className="bold">
            <div>{promiseData.name}</div>
            <div>모임이 확정되었어요!</div>
            <div className="light">친구들에게 결과를 BARO 공유해보세요</div>
          </div>
        </Title>
        <img className="image" src={ThumbsUp} alt="" />
        <Content>
          <div className="container">
            <div className="wrap">
              <img src={flag} />
              <p>{promiseData.purpose}</p>
            </div>
            <div className="wrap">
              <img src={crown} />
              <p>{promiseData.leaderName}</p>
            </div>
            <div className="wrap">
              <img src={person} />
              <p>
                {promiseData.leaderName} 외 {promiseData.peopleNumber - 1}명
              </p>
            </div>
            <div className="wrap">
              <img src={locationIcon} />
              <p>{promiseData.place}</p>
            </div>
            <div className="wrap">
              <img src={date} />
              <p>
                {promiseData.dateStart.slice(5, 7).replace(/^0+/, "")}/
                {promiseData.dateStart.slice(8, 10).replace(/^0+/, "")} (
                {new Date(promiseData.dateStart).toLocaleString("ko-KR", {
                  weekday: "short",
                })}
                )
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
        {linkPopup && (
          <LinkPopupWrapper>
            <div>링크가 복사되었습니다.</div>
          </LinkPopupWrapper>
        )}
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
          공유하기
        </Button>
        <Button onClick={() => navigate(-1)} color="Gray">
          완료하기
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
  margin-top: 18px;
  margin-bottom: 150px;

  .image {
    margin: 2px auto 54px auto;
  }
`;
const Title = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  box-sizing: border-box;
  margin-top: 30px;

  .bold {
    color: black;
    font-size: 33px;
    font-weight: 600;
    div {
      margin-top: 10px;
    }
    .light {
      font-size: 16px;
      font-weight: 400;
      color: gray;
      margin-top: 20px;
      margin-bottom: 40px;
    }
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
