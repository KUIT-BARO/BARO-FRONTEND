import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../../components/Button/Button';
import backIcon from '../../assets/icons/backIcon.svg';
import moreIcon from '../../assets/icons/more.svg';
import trashIcon from '../../assets/icons/trash.svg'

const Contact = () => {
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);
  const [hasEmail, setHasEmail] = useState(true); // 이메일 존재 여부
  const [email, setEmail] = useState('barojihwan@naver.com');

  const handleBack = () => {
    navigate(-1);
  };

  const handleDelete = () => {
    setEmail('');
    setHasEmail(false);
    setShowDropdown(false);
  };

  const handleMoreClick = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <Container>
      <Header>
        <BackButton onClick={handleBack}>
          <img src={backIcon} alt="back" />
        </BackButton>
        <Title>연락처</Title>
      </Header>

      <Content>
        <ContentTitle>내 연락처</ContentTitle>
        <Description>
          현재 사용 중인 계정을 유지할 수 있도록 이메일 주소를 등록해주세요
        </Description>

        {hasEmail ? (
          <EmailContainer>
            <Email>{email}</Email>
            <MoreButton onClick={handleMoreClick}>
              <img src={moreIcon} alt="more" />
              {showDropdown && (
                <Dropdown>
                  <DropdownButton onClick={handleDelete}>
                    <img src={trashIcon} alt="delete" />
                    삭제하기
                  </DropdownButton>
                </Dropdown>
              )}
            </MoreButton>
          </EmailContainer>
        ) : (
          <Button onClick={() => {}} color="Blue">
            이메일 추가
          </Button>
        )}
      </Content>
    </Container>
  );
};

const Container = styled.div`
  padding-top: 20px;
  background-color: #F4F8FB;
  min-height: 100vh;
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  padding: 0 20px;
  margin-bottom: 40px;
  position: relative;
`;

const BackButton = styled.button`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  position: absolute;
  left: 20px;
`;

const Title = styled.h1`
  width: 100%;
  text-align: center;
  font-size: 19px;
  font-weight: 600;
`;

const Content = styled.div`
  padding: 0 20px;
`;

const ContentTitle = styled.h2`
  font-size: 25px;
  font-weight: 600;
  margin-bottom: 12px;
`;

const Description = styled.p`
  font-size: 17px;
  color: #979797;
  margin-bottom: 32px;
  font-weight: 600;
  line-height: 1.3;
`;

const EmailContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-block: 12px;
  border-block: 1px solid #F0F0F0;
`;

const Email = styled.span`
  font-size: 17px;
  font-weight: 600;
  color: #919191;
  font-weight: 600;
`;

const MoreButton = styled.button`
  background: none;
  border: none;
  padding: 8px;
  cursor: pointer;
  position: relative;
`;

const Dropdown = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  background: white;
  border-radius: 12px;
  z-index: 10;
`;

const DropdownButton = styled.button`
      display: flex;
    width: 100%;
    padding: 12px 21px;
    background: none;
    border: none;
    text-align: left;
    font-size: 14px;
    color: #919191;
    font-weight: 600;
    cursor: pointer;
    white-space: nowrap;
    align-items: center;

  img {
    width: 20px;
    height: 20px;
    margin-right: 8px;
  }
`;

export default Contact;