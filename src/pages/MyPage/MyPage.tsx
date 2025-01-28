import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Navigation from '../../components/forMyPromises/Layout/Navigation/Navigation';
import ScheduleGrid from '../../components/ScheduleGrid/ScheduleGrid';
import settingsIcon from '../../assets/icons/settings.svg';
import editIcon from '../../assets/icons/edit.svg';
import manAvatar from '../../assets/icons/manavatar.svg';
import plusIcon from '../../assets/icons/plus.svg';
import shareIcon from '../../assets/icons/share.svg';
import './MyPage.styles.css';
import SavedPlaces from './SavedPlaces';

const MyPage = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('schedule');
  const scheduleGridRef = useRef<{ openAddModal: () => void }>(null);
  
  const getCurrentSemester = () => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1;
    const semester = month >= 7 ? '2' : '1';
    return `${year}년 ${semester}학기`;
  };

  const dummyUser = {
    name: '이지환',
    username: '@jihwan_lee',
    profileImage: manAvatar
  };

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  const handleEditProfile = () => {
    navigate('/profile/edit');
  };

  const handleSettingsClick = () => {
    navigate('/settings');
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
          <div className="schedule-header">
            <span className="semester-text">{getCurrentSemester()}</span>
            <div className="schedule-actions">
              <button 
                className="action-button" 
                onClick={handleAddScheduleClick}
              >
                <img src={plusIcon} alt="add" />
              </button>
              <button className="action-button">
                <img src={shareIcon} alt="share" />
              </button>
            </div>
          </div>
          
          <ScheduleGrid ref={scheduleGridRef} />
        </div>
      )}

      {activeTab === 'savedPlaces' && <SavedPlaces />} 
      
      <Navigation />
    </div>
  );
};

export default MyPage;