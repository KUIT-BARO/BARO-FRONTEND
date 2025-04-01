import React, { useState, useMemo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import backIcon from "../../../assets/icons/backIcon.svg";
import editIcon from "../../../assets/icons/edit_white.svg";
import profile1 from "../../../assets/icons/manavatar.svg";
import profile2 from "../../../assets/icons/womanavatar.svg";
import profile3 from "../../../assets/icons/dogavatar.svg";
import profile4 from "../../../assets/icons/useravatar.svg";
import Navigation from "../../../components/Navigation/Navigation";
import InputModal from "./InputModal/InputModal";
import Toast from "./Toast/Toast";
import { RequestProfile } from "../../../interface/api/mypage/mypage";
import { getMyPage } from "../../../apis/user/getMyPage";
import {
  ProfileEditContainer,
  ProfileEditHeader,
  BackButton,
  HeaderTitle,
  CompleteButton,
  ProfileEditContent,
  ProfileImageSection,
  ProfileImageEdit,
  EditBadge,
  InputGroup,
  InputRow,
  InputLabel,
  InputFieldWrapper,
  InputField,
  CharCount,
  BackImg,
  ProfileImg,
  EditImg,
} from "./ProfileEdit.styles";

const dummydata: RequestProfile = {
  newName: "",
  newProfileImage: "NONE",
};
const ProfileEdit: React.FC = () => {
  const navigate = useNavigate();

  const profileIdToBackendFormat = useMemo(
    () => ({
      profile1: "MAN",
      profile2: "WOMAN",
      profile3: "DOG",
      profile4: "NONE",
    }),
    []
  );

  const profileImages = useMemo(
    () => ({ profile1, profile2, profile3, profile4 }),
    []
  );

  const [formData, setFormData] = useState({
    newName: dummydata.newName,
    newProfileImage:
      Object.keys(profileIdToBackendFormat).find(
        (key) => profileIdToBackendFormat[key] === dummydata.newProfileImage
      ) || "profile4",
  });

  const [nameModalOpen, setNameModalOpen] = useState(false);
  // const [usernameModalOpen, setUsernameModalOpen] = useState(false);
  const [profileModalOpen, setProfileModalOpen] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleBack = useCallback(() => navigate(`/mypage`), [navigate]);
  const handleComplete = () => {
    const requestprofile: RequestProfile = {
      newName: formData.newName,
      newProfileImage: formData.newProfileImage,
    };
    navigate(`/mypage`);
  };
  const handleImageChange = () => setProfileModalOpen(true);
  const handleProfileComplete = useCallback(
    async (newProfile: string) => {
      try {
        await getMyPage.updateProfileImage(
          profileIdToBackendFormat[newProfile]
        );
        setFormData((prev) => ({ ...prev, profileImage: newProfile }));
        setShowToast(true);
      } catch (error) {
        console.error("프로필 이미지 변경 오류:", error);
      }
    },
    [profileIdToBackendFormat]
  );
  const renderInputModal = (
    isOpen: boolean,
    setOpen: React.Dispatch<React.SetStateAction<boolean>>,
    title: string,
    value: string,
    maxLength: number,
    onComplete: (value: string) => void,
    type?: "username" | "profile"
  ) => (
    <InputModal
      isOpen={isOpen}
      onClose={() => setOpen(false)}
      title={title}
      initialValue={value}
      placeholder={`${title}을(를) 설정해주세요`}
      maxLength={maxLength}
      onComplete={(newValue) => {
        setFormData((prev) => ({
          ...prev,
          [type === "username" ? "username" : "name"]: newValue,
        }));
        setShowToast(true);
      }}
      type={type}
    />
  );

  return (
    <ProfileEditContainer>
      <ProfileEditHeader>
        <BackButton onClick={handleBack}>
          <BackImg src={backIcon} alt="back" />
        </BackButton>
        <HeaderTitle>프로필 수정</HeaderTitle>
        <CompleteButton onClick={handleComplete}>완료</CompleteButton>
      </ProfileEditHeader>

      <ProfileEditContent>
        <ProfileImageSection>
          <ProfileImageEdit onClick={handleImageChange}>
            <ProfileImg
              src={profileImages[formData.newProfileImage]}
              alt="profile"
            />
          </ProfileImageEdit>
          <EditBadge onClick={handleImageChange}>
            <EditImg src={editIcon} alt="edit" />
          </EditBadge>
        </ProfileImageSection>

        <InputGroup>
          <InputRow>
            <InputLabel>이름</InputLabel>
            <InputFieldWrapper>
              <InputField
                value={formData.newName}
                readOnly
                onFocus={() => setNameModalOpen(true)}
              />
              <CharCount>{formData.newName.length}/12</CharCount>
            </InputFieldWrapper>
          </InputRow>
        </InputGroup>

        {/* <InputGroup>
          <InputRow>
            <InputLabel>아이디</InputLabel>
            <InputFieldWrapper>
              <InputField
                value={formData.username}
                readOnly
                onFocus={() => setUsernameModalOpen(true)}
              />
              <CharCount>{formData.username.length}/15</CharCount>
            </InputFieldWrapper>
          </InputRow>
        </InputGroup> */}
      </ProfileEditContent>

      {renderInputModal(
        nameModalOpen,
        setNameModalOpen,
        "이름",
        formData.newName,
        12,
        (newName) => {
          setFormData((prev) => ({ ...prev, name: newName }));
        }
      )}

      {/* {renderInputModal(
        usernameModalOpen,
        setUsernameModalOpen,
        "아이디",
        formData.username,
        15,
        (newUsername) => {
          setFormData((prev) => ({ ...prev, username: newUsername }));
        },
        "username"
      )} */}

      <InputModal
        isOpen={profileModalOpen}
        onClose={() => setProfileModalOpen(false)}
        title="사진 선택"
        initialValue={formData.newProfileImage}
        onComplete={handleProfileComplete}
        type="profile"
      />

      <Toast
        message="업데이트 완료"
        isVisible={showToast}
        onClose={() => setShowToast(false)}
      />
      <Navigation />
    </ProfileEditContainer>
  );
};

export default ProfileEdit;
