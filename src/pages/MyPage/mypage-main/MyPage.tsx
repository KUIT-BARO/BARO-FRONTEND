import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getMyPage } from "../../../apis/user/getMyPage";
import Navigation from "../../../components/Navigation/Navigation";
import settingsIcon from "../../../assets/icons/mypage/settings.svg";
import editIcon from "../../../assets/icons/mypage/edit.svg";
import profileImg_default from "../../../assets/icons/mypage/profileImg_default.svg";
import SavedPlaces from "../SavedPlaces";
import PlaceReviews from "../PlaceReviews";
import {
  EditButton,
  MyPageContainer,
  MyPageHeader,
  NavButton,
  ProfileImage,
  ProfileInfo,
  ProfileSection,
  SettingsButton,
  Nav,
} from "./MyPage.styles";
import Schedule from "./Schedule/Schedule";

interface UserInfo {
  nickname: string;
  userId: number;
  userProfile: string;
}

const MyPage: React.FC = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("schedule");
  const [userInfo, setUserInfo] = useState<UserInfo>({
    nickname: "",
    userId: 0,
    userProfile: "",
  });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMyPage = async () => {
      try {
        setIsLoading(true);
        const response = await getMyPage.getMyPage();
        if (response.status === 200 && response.data) {
          setUserInfo({
            nickname: response.data.data.user.nickname,
            userId: response.data.data.user.userId,
            userProfile: response.data.data.user.userProfile,
          });
        }
      } catch (error) {
        setError("마이페이지 정보를 불러오는데 실패했습니다.");
      } finally {
        setIsLoading(false);
      }
    };
    fetchMyPage();
  }, []);

  if (isLoading) return <div>로딩 중...</div>;
  if (error) return <div>{error}</div>;

  return (
    <MyPageContainer>
      <MyPageHeader>
        <h1>마이페이지</h1>
        <SettingsButton onClick={() => navigate("/settings")}>
          <img src={settingsIcon} alt="settings" />
        </SettingsButton>
      </MyPageHeader>
      <ProfileSection>
        <ProfileImage>
          <img src={profileImg_default} alt="profile" />
        </ProfileImage>
        <ProfileInfo>
          <h2>{userInfo.nickname}</h2>
          <EditButton
            src={editIcon}
            alt="edit"
            onClick={() => navigate("/profile/edit")}
          />
          <p>@{userInfo.userId}</p>
        </ProfileInfo>
      </ProfileSection>
      <Schedule />
      <Navigation />
    </MyPageContainer>
  );
};

export default MyPage;
