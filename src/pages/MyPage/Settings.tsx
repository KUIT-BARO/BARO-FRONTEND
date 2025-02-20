import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getMyPage } from '../../apis/user/getMyPage';
import backIcon from "../../assets/icons/backIcon.svg";
import closeIcon from "../../assets/icons/x_gray.svg";
import manAvatar from "../../assets/icons/manavatar.svg";
import WithdrawModal from "./WithdrawModal";
import Navigation from "../../components/Navigation/Navigation";
import "./Settings.styles.css";

interface UserInfo {
  nickname: string;
  userId: number;
  userProfile: string;
}

const Settings = () => {
  const navigate = useNavigate();
  const [withdrawModalOpen, setWithdrawModalOpen] = useState(false);
  const [userInfo, setUserInfo] = useState<UserInfo>({
    nickname: '',
    userId: 0,
    userProfile: '',
  });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        setIsLoading(true);
        const response = await getMyPage.getMyPage();
        if (response.status === 200 && response.data) {
          setUserInfo({
            nickname: response.data.data.user.nickname,
            userId: response.data.data.user.userId,
            userProfile: response.data.data.user.userProfile
          });
        }
      } catch (error) {
        setError('사용자 정보를 불러오는데 실패했습니다.');
        console.error('사용자 정보 조회 실패:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUserInfo();
  }, []);

  const handleBack = () => {
    navigate("/mypage");
  };

  const handleWithdraw = () => {
    setWithdrawModalOpen(false);
    navigate("/");
  };

  if (isLoading) {
    return <div className="loading">로딩 중...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

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
            <img src={userInfo.userProfile || manAvatar} alt="profile" />
          </div>
          <div className="profile-info-setting">
            <h2>{userInfo.nickname}</h2>
            <p>@{userInfo.userId}</p>
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