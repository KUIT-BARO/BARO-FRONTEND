import styled from "styled-components";
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #f4f8fb;
  min-height: 100vh;
  width: 100%;
  box-sizing: border-box;
  .placeholder {
    height: 80px;
  }
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
  > .desc {
    text-align: center;
    line-height: 1.5;
  }
  > .btn-wrapper {
    width: 100%;
    display: flex;
    gap: 10px;
    box-sizing: border-box;
    > .btn {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 50%;
      height: 326px;
      border-radius: 10px;
      background-color: white;
      cursor: pointer;
      > img {
        width: 115px;
      }
    }
  }
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
  margin-top: 60px;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const ImgWrapper = styled.div<{ percent: number }>`
  position: absolute;
  top: -54px;
  left: ${({ percent }) =>
    `clamp(-10px, calc(${percent}% - 20px), calc(100% - 30px))`};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: white;
  border-radius: 50px; /* 풍선 모양 */
  padding: 5px;
  transition: left 0.3s ease;

  &::after {
    content: "";
    position: absolute;
    bottom: -8px; /* 꼬리 위치 */
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-top: 10px solid white; /* 말풍선 꼬리 */
  }

  > .crown {
    position: absolute;
    top: -18px; /* 왕관이 살짝 위로 올라가도록 조정 */
    width: 18px;
  }

  > .user {
    width: 39px;
    border-radius: 50%;
    border: 3px solid white;
    background-color: white;
  }
`;

export const Progress = styled.div<{ percent: number }>`
  height: 14px;
  border-radius: 24px;
  background-color: #d6e6fa;
  transition: width 0.3s ease;

  > .progress {
    border-radius: 24px;
    height: inherit;
    background-color: #5175ff;
    width: ${({ percent }) => percent}%;
  }
`;
