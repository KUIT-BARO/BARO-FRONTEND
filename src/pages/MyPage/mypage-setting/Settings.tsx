import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getMyPage } from "../../../apis/user/getMyPage";
import backIcon from "../../../assets/icons/backIcon.svg";
import manAvatar from "../../../assets/icons/manavatar.svg";
import WithdrawModal from "./withdraw/WithdrawModal";
import Navigation from "../../../components/Navigation/Navigation";
import {
  SettingsContainer,
  SettingsHeader,
  BackButton,
  SettingsContent,
  ProfileSection,
  ProfileImage,
  ProfileInfo,
  SettingsMenu,
  MenuItem,
  ErrorMessage,
  ProfileImg,
  Title,
  BackIcon,
  SubTitle,
  UserId,
  Withdraw,
} from "./Settings.styles";

interface UserInfo {
  nickname: string;
  userId: number;
  userProfile: string;
}

const Settings: React.FC = () => {
  const navigate = useNavigate();
  const [withdrawModalOpen, setWithdrawModalOpen] = useState(false);
  const [userInfo, setUserInfo] = useState<UserInfo>({
    nickname: "",
    userId: 0,
    userProfile: "",
  });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        setIsLoading(true);
        const response = await getMyPage.getMyPage();
        console.log("반응 오는거", response);
        if (response.status === 200 && response.data) {
          setUserInfo({
            nickname: response.data.data.user.nickname,
            userId: response.data.data.user.userId,
            userProfile: response.data.data.user.userProfile,
          });
        }
      } catch (error) {
        setError("사용자 정보를 불러오는데 실패했습니다.");
        console.error("사용자 정보 조회 실패:", error);
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
    navigate("/login", { replace: true });
  };

  if (isLoading) {
    return <div>로딩 중...</div>;
  }

  if (error) {
    return <ErrorMessage>{error}</ErrorMessage>;
  }

  return (
    <SettingsContainer>
      <SettingsHeader>
        <BackButton onClick={handleBack}>
          <BackIcon src={backIcon} alt="back" />
        </BackButton>
        <Title>설정</Title>
      </SettingsHeader>

      <SettingsContent>
        <ProfileSection>
          <ProfileImage>
            <ProfileImg src={userInfo.userProfile || manAvatar} alt="profile" />
          </ProfileImage>
          <ProfileInfo>
            <SubTitle>{userInfo.nickname}</SubTitle>
            <UserId>@{userInfo.userId}</UserId>
          </ProfileInfo>
        </ProfileSection>
        <SettingsMenu>
          <MenuItem withdraw onClick={() => setWithdrawModalOpen(true)}>
            <Withdraw>탈퇴하기</Withdraw>
          </MenuItem>
        </SettingsMenu>
      </SettingsContent>

      <WithdrawModal
        isOpen={withdrawModalOpen}
        onClose={() => setWithdrawModalOpen(false)}
        onWithdraw={handleWithdraw}
      />

      <Navigation />
    </SettingsContainer>
  );
};

export default Settings;
