import React from 'react';
import { useNavigate } from 'react-router-dom';
import backIcon from '../../assets/icons/backIcon.svg';
import womanAvatar from '../../assets/icons/womanavatar.svg';
import ScheduleGrid from '../../components/ScheduleGrid/ScheduleGrid';
import './UserSchedulePage.styles.css';

const UserSchedulePage = () => {
  const navigate = useNavigate();

  const dummyUser = {
    name: '김예진',
    username: '@yejin_kim',
    profileImage: womanAvatar
  };

  return (
    <div className="user-schedule-container">
      <header className="user-schedule-header">
        <button onClick={() => navigate(-1)} className="back-button">
          <img src={backIcon} alt="back" />
        </button>
        <h1></h1>
      </header>

      <section className="user-profile-section">
        <div className="profile-image">
          <img src={dummyUser.profileImage} alt="profile" />
        </div>
        <div className="profile-info">
          <h2>{dummyUser.name}</h2>
          <p>{dummyUser.username}</p>
        </div>
      </section>

      
      <ScheduleGrid readOnly />
      
    </div>
  );
};

export default UserSchedulePage;