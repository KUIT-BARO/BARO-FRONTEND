import React, { useState, useEffect } from "react";
import backIcon from "../../../../assets/icons/backIcon_white.svg";
import profile1 from "../../../../assets/icons/manavatar.svg";
import profile2 from "../../../../assets/icons/womanavatar.svg";
import profile3 from "../../../../assets/icons/dogavatar.svg";
import profile4 from "../../../../assets/icons/useravatar.svg";
import {
  ModalOverlay,
  ModalContainer,
  ModalHeader,
  BackButton,
  BackImg,
  HeaderTitle,
  CompleteButton,
  ModalContent,
  FieldWrapper,
  InputField,
  CharCount,
  ErrorMessage,
  ProfileContent,
  ProfileOptions,
  ProfileOption,
  ProfileImg,
  ProfileDescription,
} from "./InputModal.styles";

interface InputModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  initialValue: string;
  placeholder?: string;
  maxLength?: number;
  onComplete: (value: string) => void;
  type?: "name" | "username" | "profile";
}

const InputModal: React.FC<InputModalProps> = ({
  isOpen,
  onClose,
  title,
  initialValue,
  placeholder,
  maxLength,
  onComplete,
  type = "name",
}) => {
  const [value, setValue] = useState(initialValue);
  const [error, setError] = useState<string | null>(null);
  const [selectedProfile, setSelectedProfile] = useState(initialValue);

  const profiles = [
    { id: "profile1", src: profile1 },
    { id: "profile2", src: profile2 },
    { id: "profile3", src: profile3 },
    { id: "profile4", src: profile4 },
  ];

  useEffect(() => {
    if (isOpen) {
      setValue(initialValue);
      setSelectedProfile(initialValue);
      setError(null);
    }
  }, [isOpen, initialValue]);

  const handleComplete = () => {
    if (type === "profile") {
      onComplete(selectedProfile);
    } else {
      onComplete(value);
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

        <ModalContent>
          {type === "profile" ? (
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
          ) : (
            <FieldWrapper>
              <InputField
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                maxLength={maxLength}
                placeholder={placeholder}
                autoFocus
              />
              <CharCount>
                {value.length}/{maxLength}
              </CharCount>
              {error && <ErrorMessage>{error}</ErrorMessage>}
            </FieldWrapper>
          )}
        </ModalContent>
      </ModalContainer>
    </>
  );
};

export default InputModal;
