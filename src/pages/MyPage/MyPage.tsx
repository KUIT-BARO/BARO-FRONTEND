import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getMyPage } from "../../apis/user/getMyPage";
import Navigation from "../../components/Navigation/Navigation";
import ScheduleGrid from "../../components/ScheduleGrid/ScheduleGrid";
import settingsIcon from "../../assets/icons/settings.svg";
import editIcon from "../../assets/icons/edit.svg";

import profileImg_1 from "../../assets/icons/profileImg_1.svg";

import profileImg_2 from "../../assets/icons/profileImg_2.svg";

import profileImg_3 from "../../assets/icons/profileImg_3.svg";

import profileImg_default from "../../assets/icons/profileImg_default.svg";

import plusIcon from "../../assets/icons/plus.svg";
import shareIcon from "../../assets/icons/share.svg";
import "./MyPage.styles.css";
import SavedPlaces from "./SavedPlaces";
import PlaceReviews from "./PlaceReviews";

interface UserInfo {
  nickname: string;
  userId: number;
  userProfile: string;
}

const MyPage = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("schedule");
  const scheduleGridRef = useRef<{ openAddModal: () => void }>(null);
  const [userInfo, setUserInfo] = useState<UserInfo>({
    nickname: "",
    userId: 0,
    userProfile: "",
  });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMyPage = async () => {
      try {
        setIsLoading(true);
        const response = await getMyPage.getMyPage();
        if (response.status === 200 && response.data) {
          console.log("마이페이지 조회 결과1 :", response.data);
          console.log("마이페이지 조회 결과2 :", response.data.data.user);

          setUserInfo({
            nickname: response.data.data.user.nickname,
            userId: response.data.data.user.userId,
            userProfile: response.data.data.user.userProfile,
          });
        }
      } catch (error) {
        setError("마이페이지 정보를 불러오는데 실패했습니다.");
        console.error("마이페이지 조회 실패:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMyPage();
  }, []);

  if (isLoading) {
    return <div className="loading">로딩 중...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  const getCurrentSemester = () => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1;
    const semester = month >= 7 ? "2" : "1";
    return `${year}년 ${semester}학기`;
  };

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };
  const handleEditProfile = () => {
    navigate("/profile/edit", { state: { userInfo } });
  };

  const handleSettingsClick = () => {
    navigate("/settings");
  };

  const handleAddScheduleClick = () => {
    scheduleGridRef.current?.openAddModal();
  };

  const getProfileImage = (profileType: string) => {
    switch (profileType) {
      case "MAN":
        return profileImg_1;
      case "WOMAN":
        return profileImg_2;
      case "DOG":
        return profileImg_3;
      case "NONE":
      default:
        return profileImg_default;
    }
  };

  return (
    <div className="mypage-container">
      <header className="mypage-header">
        <h1>마이페이지</h1>
        <button className="settings-button" onClick={handleSettingsClick}>
          <img src={settingsIcon} alt="settings" />
        </button>
      </header>

      <section className="profile-section">
        <div className="profile-image">
          <img
            src={getProfileImage(userInfo.userProfile) || profileImg_default}
            alt="profile"
          />
        </div>
        <div className="profile-info">
          <div className="profile-name-section">
            <h2>{userInfo.nickname}</h2>

            <img
              className="edit-button"
              src={editIcon}
              alt="edit"
              onClick={handleEditProfile}
            />
          </div>
          <p>@{userInfo.userId}</p>
        </div>
      </section>

      <nav className="mypage-nav">
        <button
          className={`nav-button ${activeTab === "schedule" ? "active" : ""}`}
          onClick={() => handleTabChange("schedule")}
        >
          시간표
        </button>
        <button
          className={`nav-button ${
            activeTab === "savedPlaces" ? "active" : ""
          }`}
          onClick={() => handleTabChange("savedPlaces")}
        >
          저장한 장소
        </button>
        <button
          className={`nav-button ${
            activeTab === "placeReviews" ? "active" : ""
          }`}
          onClick={() => handleTabChange("placeReviews")}
        >
          내 장소 리뷰
        </button>
      </nav>

      {activeTab === "schedule" && (
        <div className="schedule-container">
          <div className="schedule-header">
            <span className="semester-text">{getCurrentSemester()}</span>
            <div className="schedule-actions">
              <button
                className="action-button-schedule"
                onClick={handleAddScheduleClick}
              >
                <img src={plusIcon} alt="add" />
              </button>
              <button className="action-button-schedule">
                <img src={shareIcon} alt="share" />
              </button>
            </div>
          </div>

          <ScheduleGrid ref={scheduleGridRef} />
        </div>
      )}

      {activeTab === "savedPlaces" && <SavedPlaces />}

      {activeTab === "placeReviews" && <PlaceReviews />}

      <Navigation />
    </div>
  );
};

export default MyPage;
