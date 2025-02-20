import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import backIcon from "../../assets/icons/backIcon.svg";
import editIcon from "../../assets/icons/edit_white.svg";
import profile1 from "../../assets/icons/manavatar.svg";
import profile2 from "../../assets/icons/womanavatar.svg";
import profile3 from "../../assets/icons/dogavatar.svg";
import profile4 from "../../assets/icons/useravatar.svg";
import Navigation from "../../components/Navigation/Navigation";
import InputModal from "./InputModal";
import Toast from "./Toast";
import "./ProfileEdit.styles.css";
import { getMyPage } from "../../apis/user/getMyPage";

const ProfileEdit = () => {
  const navigate = useNavigate();

  const profileIdToBackendFormat = {
    profile1: "MAN",
    profile2: "WOMAN",
    profile3: "DOG",
    profile4: "NONE",
  };
  const location = useLocation();
  const receivedUserInfo = location.state?.userInfo || {
    nickname: "",
    userId: 0,
    userProfile: "NONE",
  };

  const [formData, setFormData] = useState({
    name: receivedUserInfo.nickname,
    username: `@${receivedUserInfo.userId}`,
    profileImage:
      Object.keys(profileIdToBackendFormat).find(
        (key) => profileIdToBackendFormat[key] === receivedUserInfo.userProfile
      ) || "profile4", // 기본 이미지 설정
  });

  const [nameModalOpen, setNameModalOpen] = useState(false);
  const [usernameModalOpen, setUsernameModalOpen] = useState(false);
  const [profileModalOpen, setProfileModalOpen] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const profileImages = {
    profile1,
    profile2,
    profile3,
    profile4,
  };

  const handleProfileComplete = async (newProfile: string) => {
    try {
      await getMyPage.updateProfileImage(profileIdToBackendFormat[newProfile]);
      setFormData((prev) => ({ ...prev, profileImage: newProfile }));
      setShowToast(true);
    } catch (error) {
      console.error("프로필 이미지 변경 오류:", error);
    }
  };

  const handleBack = () => {
    navigate(`/mypage`);
  };

  const handleComplete = () => {
    // TODO: 서버에 수정된 데이터 전송
    navigate(`/mypage`);
  };

  const handleImageChange = () => {
    setProfileModalOpen(true);
  };

  const handleNameComplete = (newName: string) => {
    setFormData((prev) => ({ ...prev, name: newName }));
    setShowToast(true);
  };

  const handleUsernameComplete = (newUsername: string) => {
    setFormData((prev) => ({ ...prev, username: newUsername }));
    setShowToast(true);
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
            <img src={profileImages[formData.profileImage]} alt="profile" />
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
                onFocus={() => setNameModalOpen(true)}
                readOnly
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
                onFocus={() => setUsernameModalOpen(true)}
                readOnly
              />
              <div className="char-count">{formData.username.length}/15</div>
            </div>
          </div>
        </div>
      </div>

      <InputModal
        isOpen={nameModalOpen}
        onClose={() => setNameModalOpen(false)}
        title="이름"
        initialValue={formData.name}
        placeholder="이름을 설정해주세요"
        maxLength={12}
        onComplete={handleNameComplete}
      />

      <InputModal
        isOpen={usernameModalOpen}
        onClose={() => setUsernameModalOpen(false)}
        title="아이디"
        initialValue={formData.username}
        placeholder="아이디를 설정해주세요"
        maxLength={15}
        onComplete={handleUsernameComplete}
        type="username"
      />

      <InputModal
        isOpen={profileModalOpen}
        onClose={() => setProfileModalOpen(false)}
        title="사진 선택"
        initialValue={formData.profileImage}
        onComplete={handleProfileComplete}
        type="profile"
      />

      <Toast
        message="업데이트 완료"
        isVisible={showToast}
        onClose={() => setShowToast(false)}
      />

      <Navigation />
    </div>
  );
};

export default ProfileEdit;
