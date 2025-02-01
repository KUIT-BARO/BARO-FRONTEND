import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import backIcon from "../../assets/icons/backIcon.svg";
import closeIcon from "../../assets/icons/x_gray.svg";
import manAvatar from "../../assets/icons/manavatar.svg";
import InputModal from "./InputModal";
import WithdrawModal from "./WithdrawModal";
import Navigation from "../../components/Navigation/Navigation";
import Toast from "./Toast";
import "./Settings.styles.css";

const Settings = () => {
  const navigate = useNavigate();
  const [passwordModalOpen, setPasswordModalOpen] = useState(false);
  const [withdrawModalOpen, setWithdrawModalOpen] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const userData = {
    name: "이지환",
    username: "jihwan_lee",
    profileImage: manAvatar,
  };

  const handleBack = () => {
    navigate("/mypage");
  };

  const handlePasswordComplete = (newPassword: string) => {
    setShowToast(true);
  };

  const handleWithdraw = () => {
    setWithdrawModalOpen(false);
    navigate("/");
  };

  const handleContactClick = () => {
    navigate("/contact");
  };

  return (
    <div className="settings-container">
      <header className="settings-header">
        <button className="back-button" onClick={handleBack}>
          <img src={closeIcon} alt="close" />
        </button>
        <h1>설정</h1>
      </header>

      <div className="settings-content">
        <div className="profile-section-setting">
          <div className="profile-image">
            <img src={userData.profileImage} alt="profile" />
          </div>
          <div className="profile-info-setting">
            <h2>{userData.name}</h2>
            <p>@{userData.username}</p>
          </div>
        </div>

        <div className="settings-menu">
          <button className="menu-item" onClick={handleContactClick}>
            <span>연락처</span>
          </button>

          <button
            className="menu-item"
            onClick={() => setPasswordModalOpen(true)}
          >
            <span>비밀번호 변경</span>
          </button>

          <button
            className="menu-item withdraw"
            onClick={() => setWithdrawModalOpen(true)}
          >
            <span>탈퇴하기</span>
          </button>
        </div>
      </div>

      <InputModal
        isOpen={passwordModalOpen}
        onClose={() => setPasswordModalOpen(false)}
        title="비밀번호 변경"
        initialValue=""
        placeholder="새 비밀번호를 입력해주세요"
        maxLength={20}
        onComplete={handlePasswordComplete}
        type="password"
      />

      <WithdrawModal
        isOpen={withdrawModalOpen}
        onClose={() => setWithdrawModalOpen(false)}
        onWithdraw={handleWithdraw}
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

export default Settings;
0;
