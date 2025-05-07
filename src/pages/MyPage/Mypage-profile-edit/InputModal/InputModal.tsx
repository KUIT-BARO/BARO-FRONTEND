import React, { useState, useEffect } from "react";
import backIcon from "../../../../assets/icons/MypageProfile/backIcon.svg";
import profile1 from "../../../../assets/icons/MypageProfile/manavatar.svg";
import profile2 from "../../../../assets/icons/MypageProfile/womanavatar.svg";
import profile3 from "../../../../assets/icons/MypageProfile/dogavatar.svg";
import profile4 from "../../../../assets/icons/MypageProfile/useravatar.svg";
import {
  InputModalProps,
  RequestPassword,
} from "../../../../interface/api/mypage/mypage";
import {
  ModalOverlay,
  ModalContainer,
  ModalHeader,
  BackButton,
  BackImg,
  HeaderTitle,
  CompleteButton,
  ModalContent,
  InputField,
  ErrorMessage,
  ProfileContent,
  ProfileOptions,
  ProfileOption,
  ProfileImg,
  ProfileDescription,
  PasswordInputBlock,
  PasswordLabel,
} from "./InputModal.styles";

const InputModal: React.FC<InputModalProps> = ({
  isOpen,
  onClose,
  title,
  initialValue,
  onComplete,
  type,
}) => {
  const [selectedProfile, setSelectedProfile] = useState(initialValue);
  const [error, setError] = useState<string | null>(null);
  const [passwords, setPasswords] = useState<RequestPassword>({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const profiles = [
    { id: "profile1", src: profile1 },
    { id: "profile2", src: profile2 },
    { id: "profile3", src: profile3 },
    { id: "profile4", src: profile4 },
  ];

  useEffect(() => {
    if (isOpen) {
      setSelectedProfile(initialValue);
      setError(null);
      setPasswords({
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
      });
    }
  }, [isOpen, initialValue]);

  const handleComplete = () => {
    if (type === "profile") {
      onComplete(selectedProfile);
    } else if (type === "passwordChange") {
      console.log(passwords);
    }
    onClose();
  };

  if (!isOpen) return null;

  return (
    <>
      <ModalOverlay />
      <ModalContainer>
        <ModalHeader>
          <BackButton onClick={onClose}>
            <BackImg src={backIcon} alt="back" />
          </BackButton>
          <HeaderTitle>{title}</HeaderTitle>
          <CompleteButton onClick={handleComplete}>완료</CompleteButton>
        </ModalHeader>

        {type === "profile" ? (
          <ModalContent>
            <ProfileContent>
              <ProfileOptions>
                {profiles.map((profile) => (
                  <ProfileOption
                    key={profile.id}
                    selected={selectedProfile === profile.id}
                    onClick={() => setSelectedProfile(profile.id)}
                  >
                    <ProfileImg src={profile.src} alt={profile.id} />
                  </ProfileOption>
                ))}
              </ProfileOptions>
              <ProfileDescription>
                원하는 사진으로 프로필을 변경해주세요.
              </ProfileDescription>
            </ProfileContent>
          </ModalContent>
        ) : (
          <ModalContent column>
            {[
              { label: "현재 비밀번호", key: "currentPassword" },
              { label: "새 비밀번호", key: "newPassword" },
              { label: "비밀번호 확인", key: "confirmPassword" },
            ].map((item) => (
              <PasswordInputBlock key={item.key}>
                <InputField
                  type="password"
                  value={passwords[item.key as keyof typeof passwords]}
                  onChange={(e) =>
                    setPasswords((prev) => ({
                      ...prev,
                      [item.key]: e.target.value,
                    }))
                  }
                  placeholder={item.label}
                />
              </PasswordInputBlock>
            ))}

            {error && <ErrorMessage>{error}</ErrorMessage>}
          </ModalContent>
        )}
      </ModalContainer>
    </>
  );
};

export default InputModal;
