import styled from "styled-components";

export const SettingsContainer = styled.div`
  padding-top: 20px;
  padding-bottom: 80px;
  background-color: #f4f8fb;
  min-height: 100vh;
`;

export const SettingsHeader = styled.header`
  display: flex;
  align-items: center;
  padding: 0 42px;
  margin-bottom: 24px;
  position: relative;

  h1 {
    width: 100%;
    text-align: center;
    font-size: 19px;
    font-weight: 600;
  }
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

export const SettingsContent = styled.div``;

export const ProfileSection = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 32px;
  border-bottom: 1px solid #f0f0f0;
  padding: 0 20px 24px;
`;

export const ProfileImage = styled.div`
  width: 84px;
  height: 84px;
  border-radius: 50%;
  background-color: #f0f4ff;
  margin-right: 16px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const ProfileInfo = styled.div`
  h2 {
    font-size: 19px;
    font-weight: 600;
    margin-bottom: 9px;
    color: #000000;
  }

  p {
    color: #919191;
    font-size: 17px;
    font-weight: 600;
  }
`;

export const SettingsMenu = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MenuItem = styled.button<{ withdraw?: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;
  background: none;
  border: none;
  border-bottom: 1px solid #f0f0f0;
  font-size: 17px;
  font-weight: 600;
  cursor: pointer;
  text-align: left;
  color: ${(props) => (props.withdraw ? "#ff5151" : "#000000")};

  ${(props) => props.withdraw && `border-bottom: none;`}
`;

export const ErrorMessage = styled.div`
  color: #ff5151;
  font-size: 14px;
  margin-top: 8px;
`;

export const BackIcon = styled.img``;
export const Title = styled.h1``;
export const ProfileImg = styled.img``;
export const SubTitle = styled.h2``;
export const UserId = styled.p``;
export const Withdraw = styled.span`
  padding: 0 20px;
`;
