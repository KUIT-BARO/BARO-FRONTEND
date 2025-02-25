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
import profileImg_default from "../../../assets/icons/mypage/profileImg_default.svg";
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
  codeList,
  setCodeList,
}: StepInterface) {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  //내 친구
  const [friends, setFriends] = useState([]);
  const [selectedFriends, setSelectedFriends] = useState([]);
  //내가 찾는 친구
  const [searchedFriends, setSearchedFriends] = useState([]);
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [newFriend, setNewFriend] = useState(null);
  // 친구 목록 가져오기
  useEffect(() => {
    const fetchFriends = async () => {
      try {
        const response = await GetFriends();
        if (response?.data?.data.friends) {
          setFriends(response?.data?.data.friends);
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
          console.log(response.data.data.users);
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

  // 팝업에서 "친구 추가하기" 버튼 클릭 시 로직
  const closePopup = async (friend) => {
    try {
      await PostFriends(friend.code); // `friendCode`가 아니라 `friend.code` 사용
    } catch (error) {
      console.error(
        "🚨 친구 추가 실패:",
        error.response ? error.response.data : error
      );
    }
    setIsPopupVisible(false);
    setFriends((prev) => [...prev, friend]);
    setCodeList((prev) => Array.from(new Set([...prev, friend.code]))); // `friend.friendCode` -> `friend.code`
    setSelectedFriends((prev) => [...prev, friend]); // 친구 목록에도 추가
    setNewFriend(null);
  };
  useEffect(() => {
    console.log("업데이트된 selectedFriends:", selectedFriends);
  }, [selectedFriends]);

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
            data={selectedFriends}
            codeList={codeList}
            setCodeList={setCodeList}
            friends={friends}
            setNewFriend={setNewFriend}
            setIsPopupVisible={setIsPopupVisible}
            setSelectedFriends={setSelectedFriends}
            selectedFriends={selectedFriends}
          />

          {/* 검색 결과 */}
          {searchedFriends.length > 0 ? (
            <User
              title="검색 결과"
              data={searchedFriends}
              codeList={codeList}
              friends={friends}
              setNewFriend={setNewFriend}
              setCodeList={setCodeList}
              setIsPopupVisible={setIsPopupVisible}
              setSelectedFriends={setSelectedFriends}
              selectedFriends={selectedFriends}
            />
          ) : searchTerm.trim() ? (
            <p style={{ textAlign: "center", color: "#979797" }}>
              해당 사용자가 없습니다.
            </p>
          ) : (
            // 기존 친구 목록
            <User
              title="친구 목록"
              data={friends}
              friends={friends}
              codeList={codeList}
              setCodeList={setCodeList}
              setNewFriend={setNewFriend}
              setIsPopupVisible={setIsPopupVisible}
              setSelectedFriends={setSelectedFriends}
              selectedFriends={selectedFriends}
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
              <Button onClick={() => closePopup(newFriend)}>
                친구 추가하기
              </Button>
            </Popup>
          </PopupOverlay>
        )}
      </Wrapper>
    </>
  );
}

// 친구 목록을 표시하는 User 컴포넌트
const User = ({
  title,
  data,
  friends,
  setNewFriend,
  codeList,
  setCodeList,
  setIsPopupVisible,
  selectedFriends,
  setSelectedFriends,
}) => {
  return (
    <>
      {friends.length > 0 && <h3 style={{ margin: "10px 0" }}>{title}</h3>}
      <UsersWrapper>
        {data.map((friend) => {
          const isAdded = codeList.includes(friend.code); // `friend.code` 사용
          const alreadyFriend = friends.some((f) => f.code === friend.code);
          console.log("friends 배열:", friends);
          console.log("현재 friend 객체:", friend);
          console.log("현재 friend.code:", friend.code);
          console.log(
            "alreadyFriend 판별:",
            friends.some((f) => f.code === friend.code)
          );

          return (
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
                  backgroundColor: isAdded ? "#5175FF" : "white",
                  border: isAdded
                    ? "1.5px solid #5175FF"
                    : "1.5px solid #c0c0c0",
                }}
                onClick={() => {
                  if (!isAdded) {
                    if (!alreadyFriend) {
                      setNewFriend(friend);
                      setIsPopupVisible(true); // 팝업 띄우기
                    } else {
                      setCodeList((prev) =>
                        Array.from(new Set([...prev, friend.code]))
                      ); // friend.friendCode -> friend.code
                      setSelectedFriends((prev) => [...prev, friend]); // 친구 목록에도 추가
                      setNewFriend(null);
                    }
                  } else {
                    setCodeList((prev) => {
                      const updatedCodeList = prev.filter(
                        (code) => code !== friend.code
                      );
                      console.log("업데이트된 codeList:", updatedCodeList);
                      return updatedCodeList;
                    });
                    setSelectedFriends((prev) => {
                      const updatedCodeList = prev.filter(
                        (f) => f.code !== friend.code
                      );
                      console.log("업데이트된 codeList:", updatedCodeList);
                      return updatedCodeList;
                    });
                  }
                }}
              >
                <img src={isAdded ? checkWhite : checkIcon} alt="check-icon" />
              </div>
            </UserDesc>
          );
        })}
      </UsersWrapper>
    </>
  );
};
