import React from 'react';
import styled from 'styled-components';

import bellIcon from '../../../assets/icons/forMyPromises/bell-black.svg';

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <div></div>
        <Title>나의 약속</Title>
        <Icons>
          <IconButton>
            <img src={bellIcon} alt="notifications" />
          </IconButton>
        </Icons>
      </HeaderContent>
    </HeaderContainer>
  );
};

export const HeaderContainer = styled.div`
  position: fixed;
  top: 0px;
  z-index: 50;
  background-color: #F4F8FB;
  width: 100%;
`;
export const HeaderContent = styled.div`
  max-width: 72rem;
  margin-left: auto;
  margin-right: auto;
  padding-top: 20px;
  padding-left: 1rem;
  padding-right: 1rem;
  height: 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
export const Title = styled.div`
  width: 69px;
  height: 27px;
  font-family: Pretendard;
  font-size: 19px;
  font-weight: 600;
  line-height: 26.6px;
  letter-spacing: -0.025em;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  margin-left: 35px;
  display: flex;
`;
export const Icons = styled.div`
  display: flex;
  gap: 1rem;
`;
export const IconButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;

export default Header;