import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getMyPage } from "../../../apis/user/getMyPage";
import backIcon from "../../../assets/icons/backIcon.svg";
import manAvatar from "../../../assets/icons/manavatar.svg";

import WithdrawModal from "./Withdraw/WithdrawModal";

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
import InputModal from "../Mypage-profile-edit/InputModal/InputModal";

interface UserInfo {
  nickname: string;
  userId: number;
  userProfile: string;
}

const Settings: React.FC = () => {
  const navigate = useNavigate();
  const [withdrawModalOpen, setWithdrawModalOpen] = useState(false);
  const [passwordModalOpen, setPasswordModalOpen] = useState(false);
  const [userInfo, setUserInfo] = useState<UserInfo>({
    nickname: "",
    userId: 0,
    userProfile: "",
  });

  const handleBack = () => {
    navigate("/mypage");
  };

  const handleWithdraw = () => {
    navigate("/login", { replace: true });
  };

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
          <MenuItem onClick={() => setPasswordModalOpen(true)}>
            <Withdraw>비밀번호 변경</Withdraw>
          </MenuItem>
        </SettingsMenu>
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

      <InputModal
        isOpen={passwordModalOpen}
        onClose={() => setPasswordModalOpen(false)}
        title="비밀번호 변경"
        initialValue=""
        type="passwordChange"
        onComplete={(data) => {
          console.log("비밀번호 변경 정보:", data);
          // 서버 전송 로직 연결 가능
          setPasswordModalOpen(false);
        }}
      />

      <Navigation />
    </SettingsContainer>
  );
};

export default Settings;
