import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navigation from '../../components/forMyPromises/Layout/Navigation/Navigation';
import ScheduleGrid from '../../components/ScheduleGrid/ScheduleGrid';
import settingsIcon from '../../assets/icons/settings.svg';
import editIcon from '../../assets/icons/edit.svg';
import manAvatar from '../../assets/icons/manavatar.svg';
import './MyPage.styles.css';

const MyPage = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('schedule');
  
  const dummyUser = {
    name: '이지환',
    username: '@ijhwan_lee',
    profileImage: manAvatar
  };

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  const handleEditProfile = () => {
    navigate('/profile/edit');
  };

  return (
    <div className="mypage-container">
      <header className="mypage-header">
        <h1>마이페이지</h1>
        <button className="settings-button">
          <img src={settingsIcon} alt="settings" />
        </button>
      </header>

      <section className="profile-section">
        <div className="profile-image">
          <img src={dummyUser.profileImage} alt="profile" />
        </div>
        <div className="profile-info">
          <div className="profile-name-section">
            <h2>{dummyUser.name}</h2>
            <button className="edit-button" onClick={handleEditProfile}>
              <img src={editIcon} alt="edit" />
            </button>
          </div>
          <p>{dummyUser.username}</p>
        </div>
      </section>

      <nav className="mypage-nav">
        <button 
          className={`nav-button ${activeTab === 'schedule' ? 'active' : ''}`}
          onClick={() => handleTabChange('schedule')}
        >
          시간표
        </button>
        <button 
          className={`nav-button ${activeTab === 'savedPlaces' ? 'active' : ''}`}
          onClick={() => handleTabChange('savedPlaces')}
        >
          저장한 장소
        </button>
        <button 
          className={`nav-button ${activeTab === 'placeReviews' ? 'active' : ''}`}
          onClick={() => handleTabChange('placeReviews')}
        >
          내 장소 리뷰
        </button>
      </nav>

      {activeTab === 'schedule' && (
        <div className="schedule-container">
          <div className="schedule-actions">
            <button className="schedule-button filled">시간표 편집</button>
            <button className="schedule-button outlined">시간표 공유</button>
          </div>
          
          <ScheduleGrid />
        </div>
      )}
      
      <Navigation />
    </div>
  );
};

export default MyPage;