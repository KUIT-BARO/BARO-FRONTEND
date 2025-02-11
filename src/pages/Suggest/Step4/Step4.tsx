import React, { useEffect, useState } from "react";
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
import GetFriends from "../../../apis/user/GetFriends";
import GetSearchCode from "../../../apis/user/GetSearchCode";
export default function Step4({
  handleBack,
  handleExit,
  setSelectFriends,
}: StepInterface) {
  const navigate = useNavigate();

  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchedFriend, setSearchedFriend] = useState(null);
  const [selectedFriend, setSelectedFriend] = useState(null);
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };
  const handleSearchSubmit = async () => {
    try {
      const response = await GetSearchCode(searchTerm);
      if (response?.data?.users) {
        setSearchedFriend(response.data.users[0]);
      } else {
        setSearchedFriend(null);
      }
    } catch (error) {
      console.error("검색 중 오류 발생:", error);
      setSearchedFriend(null);
    }
  };

  const handleSelectSearchedFriend = () => {
    if (searchedFriend) {
      setSelectedFriend(searchedFriend);
      setIsPopupVisible(true);
    }
  };
  const closePopup = () => {
    setIsPopupVisible(false);
    navigate("/suggest/confirm");
  };

  //공유하기 bTn
  const handleShareClick = () => {
    navigate("/suggest/confirm");
  };

  return (
    <>
      <Nav handleBack={handleBack} handleExit={handleExit} color={"Blue"} />
      <Wrapper>
        <Section>
          <Search
            placeholder={"홍길동"}
            value={searchTerm}
            onChange={handleSearchChange}
            onKeyDown={(e) => e.key === "Enter" && handleSearchSubmit()}
          />
        </Section>
        <Section>
          {searchedFriend ? (
            <UsersWrapper>
              <UserDesc
                key={searchedFriend.userId}
                onClick={handleSelectSearchedFriend}
              >
                <div className="left">
                  <div className="user-icon">
                    <img
                      alt="user icon"
                      src={searchedFriend.profileImage || profileImg}
                    />
                  </div>
                  <div className="user-desc">
                    <div className="name">{searchedFriend.nickname}</div>
                    <div className="id">{searchedFriend.code}</div>
                  </div>
                </div>
              </UserDesc>
            </UsersWrapper>
          ) : (
            <User />
          )}
        </Section>

        <FixedButton>
          <Button onClick={handleShareClick}>공유하기</Button>
        </FixedButton>

        {isPopupVisible && selectedFriend && (
          <PopupOverlay>
            <Popup>
              <div
                className="x"
                onClick={() => {
                  setIsPopupVisible(false);
                }}
              >
                <img src={x} alt="x icon" />
              </div>
              <p>
                <p className="bold">{selectedFriend.nickname}</p>님을 친구 추가
                하시겠습니까?
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
  const [friends, setFriends] = useState([]);
  const [checked, setChecked] = useState([]);

  useEffect(() => {
    const fetchFriends = async () => {
      try {
        const response = await GetFriends();
        if (response?.data?.friends) {
          setFriends(response.data.friends);
          setChecked(new Array(response.data.friends.length).fill(false));
        }
      } catch (error) {
        console.error("친구 목록을 불러오는 중 오류 발생:", error);
      }
    };

    fetchFriends();
  }, []);

  const toggleCheckbox = (index) => {
    setChecked((prevChecked) => {
      const newChecked = [...prevChecked];
      newChecked[index] = !newChecked[index];
      return newChecked;
    });
  };

  return (
    <UsersWrapper>
      {friends.map((friend, index) => (
        <UserDesc key={friend.friendId}>
          <div className="left">
            <div className="user-icon">
              <img alt="user icon" src={friend.profileImage || profileImg} />
            </div>
            <div className="user-desc">
              <div className="name">{friend.nickname}</div>
              <div className="id">{friend.code}</div>
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
