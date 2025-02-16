import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "../../components/Navigation/Navigation";
import ScheduleGrid from "../../components/ScheduleGrid/ScheduleGrid";
import settingsIcon from "../../assets/icons/settings.svg";
import editIcon from "../../assets/icons/edit.svg";
import manAvatar from "../../assets/icons/manavatar.svg";
import plusIcon from "../../assets/icons/plus.svg";
import shareIcon from "../../assets/icons/share.svg";
import "./MyPage.styles.css";
import SavedPlaces from "./SavedPlaces";
import PlaceReviews from "./PlaceReviews";
import { getMyPage } from '../../apis/user/getMyPage';

const MyPage = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("schedule");
  const scheduleGridRef = useRef<{ openAddModal: () => void }>(null);
  const [userInfo, setUserInfo] = useState({
    nickname: '',
    userId: '',
    userProfile: '',
  });

  useEffect(() => {
    const fetchMyPage = async () => {
      try {
        const response = await getMyPage.getMyPage();
        if (response.status === 200 && response.data) {
          setUserInfo({
            nickname: response.data.user.nickname,
            userId: response.data.user.userId,
            userProfile: response.data.user.userProfile
          });
          alert(userInfo);
          
        }
      } catch (error) {
        console.error('마이페이지 조회 실패:', error);
      }
    };

    fetchMyPage();
  }, []);

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
    navigate("/profile/edit");
  };

  const handleSettingsClick = () => {
    navigate("/settings");
  };

  const handleAddScheduleClick = () => {
    scheduleGridRef.current?.openAddModal();
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
          <img src={userInfo.userProfile} alt="profile" />
        </div>
        <div className="profile-info">
          <div className="profile-name-section">
            <h2>{userInfo.nickname}</h2>
            <button className="edit-button" onClick={handleEditProfile}>
              <img src={editIcon} alt="edit" />
            </button>
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