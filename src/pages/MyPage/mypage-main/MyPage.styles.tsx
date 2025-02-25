import styled from "styled-components";

export const MyPageContainer = styled.div`
  padding-block: 20px;
  background-color: #f4f8fb;
  min-height: 100vh;
  position: relative;
`;

export const MyPageHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 24px;
  position: relative;
  background-color: #f4f8fb;
  z-index: 10;

  h1 {
    font-size: 19px;
    font-weight: 600;
  }
`;

export const SettingsButton = styled.button`
  position: absolute;
  right: 0;
  background: none;
  border: none;
  padding: 20px;
  cursor: pointer;
`;

export const ProfileSection = styled.section`
  display: flex;
  align-items: center;
  margin-bottom: 32px;
  padding-inline: 20px;
`;

export const ProfileImage = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 1px solid #94aaff;
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
    display: flex;
    align-items: center;
    margin-top: 8px;
    font-size: 19px;
    font-weight: 600;
  }

  p {
    color: #919191;
    font-size: 17px;
    font-weight: 600;
  }
`;

export const EditButton = styled.img`
  width: 20px;
  height: 20px;
  cursor: pointer;
`;

export const Nav = styled.nav`
  display: flex;
  border-block: 1px solid #e3eaf4;
`;

export const NavButton =
  styled.button <
  { active: Boolean } >
  `
  flex: 1;
  background: none;
  border: none;
  padding: 18px 0;
  font-size: 17px;
  font-weight: 600;
  color: ${(props) => (props.active ? "#5175ff" : "#919191")};
  cursor: pointer;
  position: relative;

  ${(props) =>
    props.active &&
    `
    font-weight: 600;
    &::after {
      content: "";
      position: absolute;
      bottom: -1px;
      left: 0;
      right: 0;
      height: 2px;
      background-color: #5175ff;
    }
  `}
`;
