import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../../components/Button/Button';
import { getMyPage } from '../../apis/user/getMyPage';
import { useNavigate } from 'react-router-dom';

interface WithdrawModalProps {
  isOpen: boolean;
  onClose: () => void;
  onWithdraw: () => void; // 이 prop이 사용되어야 함
}

const WithdrawModal: React.FC<WithdrawModalProps> = ({
  isOpen,
  onClose,
  onWithdraw,
}) => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  // 모든 로컬 인증 데이터 삭제 함수
  const clearAuthData = () => {
    // 로컬 스토리지에서 인증 관련 데이터 모두 삭제
    localStorage.removeItem('token');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('userId');
    localStorage.removeItem('user');
    localStorage.removeItem('accessToken');
    
    // 세션 스토리지도 확인
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('refreshToken');
    sessionStorage.removeItem('userId');
    sessionStorage.removeItem('user');
    sessionStorage.removeItem('accessToken');
    
    // 쿠키 삭제 (필요한 경우)
    document.cookie.split(";").forEach(cookie => {
      const [name] = cookie.trim().split("=");
      document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    });
  };

  const handleWithdraw = async () => {
    try {
      setIsLoading(true);
      const response = await getMyPage.withdraw();
      
      // 응답 상태 확인 및 로깅
      console.log('탈퇴 응답:', response);
      
      // 로컬 인증 데이터 완전히 삭제
      clearAuthData();
      
      // 성공 메시지 표시
      alert("회원 탈퇴가 완료되었습니다.");
      
      // Settings의 onWithdraw 함수 호출
      onWithdraw();
      
    } catch (error) {
      console.error('탈퇴 실패:', error);
      alert(error instanceof Error ? error.message : "회원 탈퇴에 실패했습니다.");
      onClose();
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <ModalOverlay>
      <ModalContainer>
        <Title>정말로 탈퇴하시겠습니까?</Title>
        <Description>
          탈퇴 시 계정 및 이용 기록은 모두 삭제되며,
          <br />
          삭제된 데이터는 복구되지 않습니다.
        </Description>
        <ButtonContainer>
          <Button 
            onClick={onClose} 
            color="Gray"
            disabled={isLoading}
          >
            취소
          </Button>
          <Button 
            onClick={handleWithdraw} 
            color="Red"
            disabled={isLoading}
          >
            {isLoading ? "처리중..." : "탈퇴하기"}
          </Button>
        </ButtonContainer>
      </ModalContainer>
    </ModalOverlay>
  );
};
  
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: flex-end;
  z-index: 1000;
`;
  
const ModalContainer = styled.div`
  background-color: white;
  width: 100%;
  padding: 52px 20px;
  border-radius: 16px 16px 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
  
const Title = styled.h2`
  font-size: 17px;
  font-weight: 600;
  margin-bottom: 16px;
  text-align: center;
  color: #000000;
`;
  
const Description = styled.p`
  font-size: 17px;
  font-weight: 600;
  line-height: 1.5;
  color: #C1C1C1;
  text-align: center;
  margin-bottom: 32px;
`;
  
const ButtonContainer = styled.div`
  display: flex;
  gap: 8px;
  width: 100%;

  button {
    flex: 1;
    border-radius: 10px !important;
    color: white;
  }
`;
  
export default WithdrawModal;
