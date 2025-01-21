import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../../components/Button/Button';
import backIcon from '../../assets/icons/backIcon.svg';
import moreIcon from '../../assets/icons/more.svg';
import trashIcon from '../../assets/icons/trash.svg';

const Contact = () => {
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);
  const [hasEmail, setHasEmail] = useState(true);
  const [email, setEmail] = useState('barojihwan@naver.com');
  const [isAddingEmail, setIsAddingEmail] = useState(false);
  const [newEmail, setNewEmail] = useState('');

  const handleBack = () => {
    if (isAddingEmail) {
      setIsAddingEmail(false);
      setNewEmail('');
    } else {
      navigate(-1);
    }
  };

  const handleDelete = () => {
    setEmail('');
    setHasEmail(false);
    setShowDropdown(false);
  };

  const handleMoreClick = () => {
    setShowDropdown(!showDropdown);
  };

  const handleAddEmailClick = () => {
    setIsAddingEmail(true);
  };

  const handleEmailSubmit = () => {
    if (newEmail) {
      setEmail(newEmail);
      setHasEmail(true);
      setIsAddingEmail(false);
      setNewEmail('');
    }
  };

  if (isAddingEmail) {
    return (
      <Container>
        <Header>
          <BackButton onClick={handleBack}>
            <img src={backIcon} alt="back" />
          </BackButton>
          <Title>연락처</Title>
        </Header>

        <Content isAddingEmail={true}>
          <ContentTitle>이메일 추가</ContentTitle>
          <Description>
            현재 사용 중인 계정을 유지할 수 있도록 이메일 주소를 등록해주세요
          </Description>
          
          <EmailInput
            type="email"
            value={newEmail}
            onChange={(e) => setNewEmail(e.target.value)}
            placeholder="이메일 입력"
          />

          <ButtonContainer>
            <StyledButtonWrapper>
              <Button onClick={handleEmailSubmit} color="Blue">
                다음
              </Button>
            </StyledButtonWrapper>
          </ButtonContainer>
        </Content>
      </Container>
    );
  }

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
          <StyledButtonWrapper>
            <Button onClick={handleAddEmailClick} color="Blue">
              이메일 추가
            </Button>
          </StyledButtonWrapper>
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
  height: ${props => props.isAddingEmail ? 'calc(100vh - 80px)' : 'auto'};
  display: flex;
  flex-direction: column;
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
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
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

const EmailInput = styled.input`
  width: 100%;
  padding: 16px 0;
  border: none;
  border-bottom: 1px solid #E3EAF4;
  background: none;
  font-size: 17px;
  color: #000000;
  font-weight: 600;

  &::placeholder {
    color: #9FA1A6;
  }

  &:focus {
    outline: none;
    border-bottom: 1px solid #5175FF;
  }
`;

const ButtonContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 20px;
`;

const StyledButtonWrapper = styled.div`
  button {
    border-radius: 10px !important;
  }
`;

export default Contact;