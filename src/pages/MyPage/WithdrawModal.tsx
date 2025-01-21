import React from 'react';
import styled from 'styled-components';
import Button from '../../components/Button/Button.tsx';

interface WithdrawModalProps {
    isOpen: boolean;
    onClose: () => void;
    onWithdraw: () => void;
  }
  
  const WithdrawModal: React.FC<WithdrawModalProps> = ({
    isOpen,
    onClose,
    onWithdraw,
  }) => {
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
            <Button onClick={onClose} color="Gray">
              취소
            </Button>
            <Button onClick={onWithdraw} color="Red">
              탈퇴하기
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