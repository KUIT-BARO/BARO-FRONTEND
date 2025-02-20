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
import profileImg_1 from "../../../assets/icons/profileImg_1.svg";
import profileImg_2 from "../../../assets/icons/profileImg_2.svg";
import profileImg_3 from "../../../assets/icons/profileImg_3.svg";
import profileImg_default from "../../../assets/icons/profileImg_default.svg";
import { useNavigate } from "react-router-dom";
import GetFriends from "../../../apis/user/GetFriends";
import GetSearchCode from "../../../apis/user/GetSearchCode";
import PostFriends from "../../../apis/user/PostFriends";

const profileIdToBackendFormat = {
  MAN: profileImg_1,
  WOMAN: profileImg_2,
  DOG: profileImg_3,
  NONE: profileImg_default,
};

export default function Step4({
  handleBack,
  handleExit,
  setSelectFriends,
}: StepInterface) {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [friends, setFriends] = useState([]);
  const [searchedFriends, setSearchedFriends] = useState([]);
  const [selectedFriends, setSelectedFriends] = useState([]);
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [newFriend, setNewFriend] = useState(null);
  const [checked, setChecked] = useState({});

  // 친구 목록 가져오기
  useEffect(() => {
    const fetchFriends = async () => {
      try {
        const response = await GetFriends();
        if (response?.data?.data.friends) {
          setFriends(response.data.data.friends);
        } else {
          setFriends([]);
        }
      } catch (error) {
        console.error("친구 목록을 불러오는 중 오류 발생:", error);
        setFriends([]);
      }
    };
    fetchFriends();
  }, []);

  // 검색어 입력 시 자동 검색 (디바운스 적용)
  useEffect(() => {
    const fetchSearchedFriend = async () => {
      if (!searchTerm.trim()) {
        setSearchedFriends([]);
        return;
      }
      try {
        const response = await GetSearchCode(searchTerm);
        if (response?.data?.data.users) {
          setSearchedFriends(response.data.data.users);
        } else {
          setSearchedFriends([]);
        }
      } catch (error) {
        console.error("검색 중 오류 발생:", error);
        setSearchedFriends([]);
      }
    };

    const debounceTimeout = setTimeout(() => {
      fetchSearchedFriend();
    }, 300);

    return () => clearTimeout(debounceTimeout);
  }, [searchTerm]);

  // 체크박스 클릭 핸들러 (이벤트 전파 방지 + 선택 로직)
  const toggleCheckbox = (e, friend) => {
    e.stopPropagation();
    toggleFriendSelection(friend);
  };

  // 친구 선택 로직
  const toggleFriendSelection = (friend) => {
    // 1) 체크박스 상태 먼저 업데이트
    setChecked((prevChecked) => ({
      ...prevChecked,
      [friend.userId]: !prevChecked[friend.userId],
    }));

    // 2) selectedFriends 배열 갱신
    setSelectedFriends((prev) => {
      const isSelected = prev.some((f) => f.userId === friend.userId);
      if (isSelected) {
        // 이미 선택되어 있다면 해제
        return prev.filter((f) => f.userId !== friend.userId);
      } else {
        // 이미 친구인 상태라면 팝업 없이 추가
        if (friend.isFriend) {
          return [...prev, friend];
        } else {
          // 친구가 아닌 상태면 팝업 노출
          setNewFriend(friend);
          setIsPopupVisible(true);
          return prev; // 아직은 추가하지 않음
        }
      }
    });
  };

  // 팝업에서 "친구 추가하기" 버튼 클릭 시 로직
  const closePopup = async () => {
    if (newFriend) {
      try {
        const response = await PostFriends(newFriend.code);
        console.log("✅ 친구 추가 성공:", response.data);

        // 새로 추가된 친구를 '이미 친구' 상태로 업데이트
        const updatedFriend = { ...newFriend, isFriend: true };

        // friends 목록에 추가
        setFriends((prev) => [...prev, updatedFriend]);

        // selectedFriends에도 추가 (중복 방지)
        setSelectedFriends((prev) => {
          if (!prev.some((f) => f.userId === updatedFriend.userId)) {
            return [...prev, updatedFriend];
          }
          return prev;
        });

        // 체크 상태도 true로 갱신
        setChecked((prevChecked) => ({
          ...prevChecked,
          [updatedFriend.userId]: true,
        }));
      } catch (error) {
        console.error(
          "🚨 친구 추가 실패:",
          error.response ? error.response.data : error
        );
      }
    }
    setIsPopupVisible(false);
  };

  return (
    <>
      <Nav handleBack={handleBack} handleExit={handleExit} color={"Blue"} />
      <Wrapper>
        <Section>
          <Search
            placeholder={"홍길동"}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </Section>

        <Section style={{ marginBottom: "150px" }}>
          {/* 선택된 친구 목록 */}
          <User
            title="내가 선택한 친구"
            friends={selectedFriends}
            toggleCheckbox={toggleCheckbox}
            checked={checked}
          />

          {/* 검색 결과 */}
          {searchedFriends.length > 0 ? (
            <User
              title="검색 결과"
              friends={searchedFriends}
              toggleCheckbox={toggleCheckbox}
              checked={checked}
            />
          ) : searchTerm.trim() ? (
            <p style={{ textAlign: "center", color: "#979797" }}>
              해당 사용자가 없습니다.
            </p>
          ) : (
            // 기존 친구 목록
            <User
              title="친구 목록"
              friends={friends}
              toggleCheckbox={toggleCheckbox}
              checked={checked}
            />
          )}
        </Section>

        <FixedButton>
          <Button onClick={() => navigate("/suggest/confirm")}>공유하기</Button>
        </FixedButton>

        {/* 친구 추가 팝업 */}
        {isPopupVisible && newFriend && (
          <PopupOverlay>
            <Popup>
              <div className="x" onClick={() => setIsPopupVisible(false)}>
                <img src={x} alt="x icon" />
              </div>
              <p>
                <p className="bold">{newFriend.nickname}</p>님을 친구 추가
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

// 친구 목록을 표시하는 User 컴포넌트
const User = ({ title, friends, toggleCheckbox, checked }) => {
  return (
    <>
      {friends.length > 0 && <h3 style={{ margin: "10px 0" }}>{title}</h3>}
      <UsersWrapper>
        {friends.map((friend) => (
          <UserDesc key={friend.userId}>
            <div className="left">
              <div className="user-icon">
                <img
                  alt="user icon"
                  src={
                    profileIdToBackendFormat[friend.profileImage] ||
                    profileImg_default
                  }
                />
              </div>
              <div className="user-desc">
                <div className="name">{friend.nickname}</div>
                <div className="id">@{friend.code}</div>
              </div>
            </div>
            <div
              className="checkbox"
              style={{
                backgroundColor: checked[friend.userId] ? "#5175FF" : "white",
                border: checked[friend.userId]
                  ? "1.5px solid #5175FF"
                  : "1.5px solid #c0c0c0",
              }}
              onClick={(e) => toggleCheckbox(e, friend)}
            >
              <img
                src={checked[friend.userId] ? checkWhite : checkIcon}
                alt="check-icon"
              />
            </div>
          </UserDesc>
        ))}
      </UsersWrapper>
    </>
  );
};
