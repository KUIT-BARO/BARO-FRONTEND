import styled from "styled-components";
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f4f8fb;
  min-height: 100vh;
  box-sizing: border-box;
`;
export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2em;
  font-weight: 600;
  font-size: 18px;
  color: #1a1a1a;
  background-color: white;
`;
export const Main = styled.div``;
export const Footer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 20px;
  background-color: white;
`;
export const ProgressContainer = styled.div`
  width: 100%;
  height: 6px;
  background-color: #d4dbf7;
  border-radius: 24px;
  overflow: hidden;
`;

export const Progress = styled.div<{ percent: number }>`
  height: 100%;
  width: ${({ percent }) => percent}%;
  background-color: #5175ff;
  border-radius: 5px;
  transition: width 0.3s ease;
`;
