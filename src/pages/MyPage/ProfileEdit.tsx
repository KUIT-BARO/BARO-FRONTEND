import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import backIcon from '../../assets/icons/backIcon.svg';
import editIcon from '../../assets/icons/edit_white.svg';
import manAvatar from '../../assets/icons/manavatar.svg';
import Navigation from '../../components/forMyPromises/Layout/Navigation/Navigation';
import './ProfileEdit.styles.css';

const ProfileEdit = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '이지환',
    username: 'jihwan_lee'
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleBack = () => {
    navigate(-1);
  };

  const handleComplete = () => {
    // TODO: 서버에 수정된 데이터 전송
    navigate(-1);
  };

  const handleImageChange = () => {
    // TODO: 이미지 업로드 구현
  };

  return (
    <div className="profile-edit-container">
      <header className="profile-edit-header">
        <button className="back-button" onClick={handleBack}>
          <img src={backIcon} alt="back" />
        </button>
        <h1>프로필 수정</h1>
        <button className="complete-button" onClick={handleComplete}>
          완료
        </button>
      </header>

      <div className="profile-edit-content">
        <div className="profile-image-section">
          <div className="profile-image-edit">
            <img src={manAvatar} alt="profile" />
          </div>
          <div className="edit-badge" onClick={handleImageChange}>
            <img src={editIcon} alt="edit" />
          </div>
        </div>

        <div className="input-group">
          <div className="input-row">
            <div className="input-label">이름</div>
            <div className="input-field-wrapper">
              <input
                type="text"
                name="name"
                className="input-field"
                value={formData.name}
                onChange={handleInputChange}
                maxLength={12}
              />
              <div className="char-count">{formData.name.length}/12</div>
            </div>
          </div>
        </div>

        <div className="input-group">
          <div className="input-row">
            <div className="input-label">아이디</div>
            <div className="input-field-wrapper">
              <input
                type="text"
                name="username"
                className="input-field"
                value={formData.username}
                onChange={handleInputChange}
                maxLength={15}
              />
              <div className="char-count">{formData.username.length}/15</div>
            </div>
          </div>
        </div>
      </div>

      <Navigation />
    </div>
  );
};

export default ProfileEdit;