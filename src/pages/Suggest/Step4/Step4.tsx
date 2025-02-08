import React, { useState } from "react";
import StepInterface from "../../../interface/Step";

import Button from "../../../components/Button/Button";
import Nav from "../../../components/Nav/Nav";

import {
  Wrapper,
  FixedButton,
  Section,
} from "../../../assets/styles/Steps.styles";

import Search from "../../../components/Search/Search";
import PopupOverlay, { UsersWrapper, UserDesc, Popup } from "./Step4.styles";
import checkIcon from "../../../assets/icons/checkIcon.svg";
import checkWhite from "../../../assets/icons/checkWhite.svg";
import x from "../../../assets/icons/x.svg";

import profileImg from "../../../assets/icons/profileImg_1.svg";
import { useNavigate } from "react-router-dom";
export default function Step4({
  handleBack,
  handleExit,
  setSelectFriends,
}: StepInterface) {
  const navigate = useNavigate();

  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const handleShareClick = () => {
    setSelectFriends(true);
    setIsPopupVisible(true);
  };

  const closePopup = () => {
    setIsPopupVisible(false);
    navigate("/suggest/confirm");
  };

  return (
    <>
      <Nav handleBack={handleBack} handleExit={handleExit} color={"Blue"} />
      <Wrapper>
        <Section>
          <Search placeholder={"홍길동"} />
        </Section>
        <Section>
          <User />
        </Section>

        <FixedButton>
          <Button onClick={handleShareClick}>공유하기</Button>
        </FixedButton>

        {isPopupVisible && (
          <PopupOverlay>
            <Popup>
              <div className="x">
                <img src={x} alt="x icon" />
              </div>
              <p>
                <p className="bold">hiheyssup</p>님을 친구 추가 하시겠습니까?
              </p>
              <Button onClick={closePopup}>친구 추가하기</Button>
            </Popup>
          </PopupOverlay>
        )}
      </Wrapper>
    </>
  );
}

const User = () => {
  const [checked, setChecked] = useState([false, false, false]);

  const toggleCheckbox = (index) => {
    const newChecked = [...checked];
    newChecked[index] = !newChecked[index];
    setChecked(newChecked);
  };

  return (
    <UsersWrapper>
      {[0, 1, 2].map((_, index) => (
        <UserDesc key={index}>
          <div className="left">
            <div className="user-icon">
              <img alt="user icon" src={profileImg} />
            </div>
            <div className="user-desc">
              <div className="name">이지환</div>
              <div className="id">@jihwan_lee</div>
            </div>
          </div>
          <div
            className="checkbox"
            style={{
              backgroundColor: checked[index] ? "#5175FF" : "white",
              border: checked[index]
                ? "1.5px solid #5175FF"
                : "1.5px solid #c0c0c0",
            }}
            onClick={() => toggleCheckbox(index)}
          >
            {checked[index] ? (
              <img src={checkWhite} alt="check-icon" />
            ) : (
              <img src={checkIcon} alt="check-icon" />
            )}
          </div>
        </UserDesc>
      ))}
    </UsersWrapper>
  );
};
