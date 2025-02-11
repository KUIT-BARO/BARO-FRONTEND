import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import backIcon from "../../assets/icons/backIcon.svg";
import closeIcon from "../../assets/icons/x_gray.svg";
import manAvatar from "../../assets/icons/manavatar.svg";
import WithdrawModal from "./WithdrawModal";
import Navigation from "../../components/Navigation/Navigation";
import "./Settings.styles.css";

const Settings = () => {
  const navigate = useNavigate();
  const [withdrawModalOpen, setWithdrawModalOpen] = useState(false);

  const userData = {
    name: "이지환",
    username: "jihwan_lee",
    profileImage: manAvatar,
  };

  const handleBack = () => {
    navigate("/mypage");
  };

  const handleWithdraw = () => {
    setWithdrawModalOpen(false);
    navigate("/");
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
          <button
            className="menu-item withdraw"
            onClick={() => setWithdrawModalOpen(true)}
          >
            <span>탈퇴하기</span>
          </button>
        </div>
      </div>

      <WithdrawModal
        isOpen={withdrawModalOpen}
        onClose={() => setWithdrawModalOpen(false)}
        onWithdraw={handleWithdraw}
      />

      <Navigation />
    </div>
  );
};

export default Settings;
