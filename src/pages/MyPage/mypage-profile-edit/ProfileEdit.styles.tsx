import styled from "styled-components";

export const ProfileEditContainer = styled.div`
  padding-top: 20px;
  padding-bottom: 80px;
  background-color: #f4f8fb;
  min-height: 100vh;
`;

export const ProfileEditHeader = styled.header`
  display: flex;
  align-items: center;
  padding: 0 20px;
  margin-bottom: 40px;
  position: relative;
`;

export const BackButton = styled.button`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  position: absolute;
  left: 20px;

  img {
    width: 24px;
    height: 24px;
  }
`;

export const HeaderTitle = styled.h1`
  width: 100%;
  text-align: center;
  font-size: 19px;
  font-weight: 600;
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

export const ProfileEditContent = styled.div`
  padding: 0 20px;
`;

export const ProfileImageSection = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
  position: relative;
  width: fit-content;
  margin-left: auto;
  margin-right: auto;
`;

export const ProfileImageEdit = styled.div`
  width: 84px;
  height: 84px;
  border-radius: 50%;
  border: 1px solid #94aaff;
  background-color: #f0f4ff;
  overflow: hidden;
  position: relative;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const EditBadge = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  width: 24px;
  height: 24px;
  background-color: #5175ff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 1;

  img {
    width: 14px;
    height: 14px;
  }
`;

export const InputGroup = styled.div`
  margin-bottom: 32px;
`;

export const InputRow = styled.div`
  display: flex;
  position: relative;
  align-items: center;
`;

export const InputLabel = styled.div`
  width: 80px;
  font-size: 16px;
  color: black;
  font-weight: 600;
  margin-bottom: 0;
`;

export const InputFieldWrapper = styled.div`
  flex: 1;
  position: relative;
  display: flex;
  align-items: center;
`;

export const InputField = styled.input`
  flex: 1;
  border: none;
  border-bottom: 2px solid #c1c1c1;
  font-size: 16px;
  background: none;
  padding: 8px 0;
  cursor: pointer;

  &:focus {
    outline: none;
    border-bottom: 2px solid #5175ff;
  }
`;

export const CharCount = styled.div`
  font-size: 16px;
  color: #c1c1c1;
  margin-left: 8px;
  white-space: nowrap;
`;

export const BackImg = styled.img``;
export const ProfileImg = styled.img``;
export const EditImg = styled.img``;
