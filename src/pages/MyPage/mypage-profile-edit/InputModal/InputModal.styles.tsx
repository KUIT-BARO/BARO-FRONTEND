import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(5px);
  z-index: 1000;
`;

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: transparent;
  z-index: 1001;
  display: flex;
  flex-direction: column;
`;

export const ModalHeader = styled.header`
  display: flex;
  align-items: center;
  padding: 20px;
  position: relative;
`;

export const BackButton = styled.button`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  position: absolute;
  left: 20px;
`;

export const BackImg = styled.img`
  width: 24px;
  height: 24px;
`;

export const HeaderTitle = styled.h1`
  width: 100%;
  text-align: center;
  font-size: 19px;
  font-weight: 600;
  color: white;
`;

export const CompleteButton = styled.button`
  border: none;
  padding: 8px 16px;
  border-radius: 10px;
  background-color: #5175ff;
  color: white;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  position: absolute;
  right: 20px;
`;

export const ModalContent = styled.div`
  padding: 0 20px;
  flex: 1;
  display: flex;
  align-items: center;
`;

export const FieldWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const InputField = styled.input`
  width: 100%;
  border: none;
  border-bottom: 2px solid #616161;
  font-size: 16px;
  background: none;
  padding: 8px 0;
  color: white;
  font-weight: 600;

  &:focus {
    outline: none;
    border-bottom: 2px solid #5175ff;
  }

  &::placeholder {
    color: rgba(255, 255, 255, 0.6);
  }
`;

export const CharCount = styled.div`
  text-align: right;
  font-size: 16px;
  color: rgba(255, 255, 255, 0.6);
  position: absolute;
  right: 0;
  top: 18px;
  transform: translateY(-50%);
  font-weight: 600;
`;

export const ErrorMessage = styled.div`
  color: #ff4b4b;
  font-size: 14px;
  margin-top: 8px;
  position: absolute;
  left: 0;
  top: 40px;
  width: 100%;
  font-weight: 600;
`;

export const ProfileContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ProfileOptions = styled.div`
  display: flex;
  gap: 16px;
  justify-content: center;
  margin-bottom: 32px;
`;

export const ProfileOption = styled.button<{ selected: boolean }>`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  border: ${({ selected }) =>
    selected ? "2px solid #5175FF" : "1px solid #94AAFF"};
  background-color: #f0f4ff;
  overflow: hidden;
  cursor: pointer;
  padding: 0;
`;

export const ProfileImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const ProfileDescription = styled.p`
  color: white;
  font-size: 14px;
  font-weight: 500;
  text-align: center;
`;
