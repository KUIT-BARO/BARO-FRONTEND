import styled, { keyframes } from "styled-components";

// ✅ 애니메이션 정의
const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50%) translateY(100px);
  }
  to {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }
`;

const fadeOutDown = keyframes`
  from {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }
  to {
    opacity: 0;
    transform: translateX(-50%) translateY(100px);
  }
`;

// ✅ 토스트 컨테이너
export const ToastContainer = styled.div<{ visible: boolean }>`
  position: fixed;
  bottom: 100px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px 22px;
  background-color: rgba(81, 117, 255, 0.3);
  border-radius: 10px;
  gap: 8px;
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  animation: ${({ visible }) => (visible ? fadeInUp : fadeOutDown)} 0.5s
    ease-in-out;
`;

// ✅ 아이콘 스타일
export const ToastIcon = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #5175ff;
  border-radius: 50%;
`;

// ✅ 메시지 스타일
export const ToastMessage = styled.span`
  color: white;
  font-size: 16px;
  font-weight: 600;
`;
