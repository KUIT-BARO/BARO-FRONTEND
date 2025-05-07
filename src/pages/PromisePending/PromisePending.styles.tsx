import styled from "styled-components";
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #f4f8fb;
  min-height: 100vh;
  width: 100%;
  box-sizing: border-box;
`;
export const Placeholder = styled.div`
  height: 80px;
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
export const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 30px;
  padding: 0 20px;
  margin-top: 20px;
  box-sizing: border-box;
`;
export const Desc = styled.div`
  text-align: center;
  line-height: 1.5;
`;
export const BtnWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
  box-sizing: border-box;
`;
export const VoteBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 326px;
  border-radius: 10px;
  background-color: white;
  cursor: pointer;
`;
export const VoteBtnImg = styled.img`
  width: 115px;
`;
export const Footer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 10px 20px 20px;
  background-color: white;
`;

export const ProgressContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
export const ImgsWrapper = styled.div`
  position: relative;
`;

export const ImgWrapper = styled.div<{ percent: number; offset: number }>`
  position: absolute;
  top: -54px;
  left: ${({ percent, offset }) =>
    `clamp(-10px, calc(${percent}% - 20px + ${offset}px), calc(100% - 30px))`};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: white;
  border-radius: 50px;
  padding: 5px;
  transition: left 0.3s ease;

  &::after {
    content: "";
    position: absolute;
    bottom: -8px;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-top: 10px solid white;
  }
`;

export const UserImg = styled.img`
  width: 39px;
  border-radius: 50%;
  border: 3px solid white;
  background-color: white;
`;
export const CrownImg = styled.img`
  position: absolute;
  top: -18px;
  width: 18px;
`;

export const ProgressBar = styled.div`
  height: 14px;
  width: 100%;
  border-radius: 24px;
  background-color: #d6e6fa;
  transition: width 0.3s ease;
`;
export const Progress = styled.div<{ percent: number }>`
  border-radius: 24px;
  height: 100%;
  background-color: #5175ff;
  width: ${({ percent }) => percent}%;
`;
