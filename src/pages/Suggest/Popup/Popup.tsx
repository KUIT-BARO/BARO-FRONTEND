import React from "react";
import { useNavigate } from "react-router-dom";

import SuggestInterface from "../../../interface/SuggestPromise/Suggest";

import Button from "../../../components/Button/Button";
import Question from "../../../components/Question/Question";
import { InfoBox, Overlay, PopupContent } from "./Popup.styles";

import formatDateToShort from "../../../utils/formatDateToShort";

import PostPromise from "../../../apis/promise/postPromise";
import PostPromiseShare from "../../../apis/promise/PostPromiseShare";

import crown from "../../../assets/icons/Promise/crown.svg";
import calender from "../../../assets/icons/Promise/calender.svg";
import location from "../../../assets/icons/Promise/location.svg";

interface PopupProps extends SuggestInterface {
  setPromiseId: (promiseId: number) => void;
  handleClosePopup: () => void;
}

export default function Popup({
  handleClosePopup,
  name,
  placeName,
  dateStart,
  dateEnd,
}: PopupProps) {
  const navigate = useNavigate();

  const handlePostPromise = async () => {
    // try {
    //   const response = await PostPromise(
    //     name,
    //     dateStart,
    //     dateEnd,
    //     peopleNum,
    //     purpose,
    //     placeId
    //   );
    //   if (response) {
    //     console.log(response.data.data);
    //     setPromiseId(response.data.data.promiseId);
    //   }
    // } catch (error) {
    //   console.error("약속 생성 중 오류 발생:", error);
    // }
  };

  // useEffect(() => {
  //   if (promiseId) {
  //     PostPromiseShare(promiseId, codeList)
  //       .then(() => {
  //         navigate("/suggest/step4");
  //       })
  //       .catch((error) => console.error("약속 공유 중 오류 발생:", error));
  //   }
  // }, [promiseId]); // `promiseId`가 변경될 때 실행

  const user = sessionStorage.getItem("name");
  return (
    <Overlay>
      <PopupContent>
        <Question
          title="약속 정보를 확인해주세요"
          desc="입력하신 내용이 모두 정확한지 체크해주세요"
        />

        <InfoBox>
          <p className="title">{name}</p>
          <div className="container">
            <div className="wrap">
              <img src={crown} />
              <p>{user}</p>
            </div>

            <div className="wrap">
              <img src={location} />
              <p>{placeName}</p>
            </div>
            <div className="wrap">
              <img src={calender} />
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
              // await handlePostPromise();
              handleClosePopup();
              navigate("/main");
            }}
          >
            확인
          </Button>
          <Button onClick={handleClosePopup} color="White">
            수정할래요
          </Button>
        </div>
      </PopupContent>
    </Overlay>
  );
}
