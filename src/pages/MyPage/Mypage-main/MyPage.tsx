import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getMyPage } from "../../../apis/user/getMyPage";
import Navigation from "../../../components/Navigation/Navigation";
import settingsIcon from "../../../assets/icons/mypage/settings.svg";
import editIcon from "../../../assets/icons/mypage/edit.svg";
import Default from "../../../assets/icons/Profileimg/Default.svg";
import {
  EditButton,
  MyPageContainer,
  MyPageHeader,
  ProfileImage,
  ProfileInfo,
  ProfileSection,
  SettingsButton,
  Title,
  SettingImg,
  ProfileImg,
  NickName,
  UserId,
} from "./MyPage.styles";
import Schedule from "./Schedule/Schedule";
import { UserInfo } from "../../../interface/api/mypage/mypage";

const dummydata: UserInfo = {
  userName: "황규운",
  email: "gka365@naver.com",
  profileImage: Default,
};
const MyPage: React.FC = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("schedule");
  const [userInfo, setUserInfo] = useState<UserInfo>(dummydata);

  return (
    <MyPageContainer>
      <MyPageHeader>
        <Title>마이페이지</Title>
        <SettingsButton onClick={() => navigate("/settings")}>
          <SettingImg src={settingsIcon} alt="settings" />
        </SettingsButton>
      </MyPageHeader>
      <ProfileSection>
        <ProfileImage>
          <ProfileImg src={userInfo.profileImage} alt="profile" />
        </ProfileImage>
        <ProfileInfo>
          <NickName>{userInfo.userName}</NickName>
          <EditButton
            src={editIcon}
            alt="edit"
            onClick={() => navigate("/profile/edit")}
          />
          <UserId>@{userInfo.email}</UserId>
        </ProfileInfo>
      </ProfileSection>
      <Schedule />
      <Navigation />
    </MyPageContainer>
  );
};

export default MyPage;
