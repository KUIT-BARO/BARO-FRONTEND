import React from "react";
import styled from "styled-components";

interface PopupModalProps {
  stage: number;
  onClose: () => void;
}

const Popup = ({ stage, onClose }: PopupModalProps) => {
  return (
    <Overlay onClick={onClose}>
      <PopupContent stage={stage} onClick={(e) => e.stopPropagation()}>
        <div className="bubble">
          {stage === 1 ? <p>한 칸씩 선택</p> : <p>재선택하여 취소</p>}
          <div className="bubble-arrow"></div>
        </div>

        <div className="click">
          <div className="gradientBar"></div>
          <div className="circle">
            <div className="bold"></div>
          </div>
        </div>
      </PopupContent>
    </Overlay>
  );
};

export default Popup;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

const PopupContent = styled.div<{ stage: number }>`
  position: fixed;
  top: 40%;
  left: 10%;
  display: flex;
  flex-direction: column;
  gap: 20px;

  > .bubble {
    position: relative;
    background-color: white;
    padding: 18px 20px;
    border-radius: 10px;

    font-size: 19px;
    font-weight: 600;

    > .bubble-arrow {
      position: absolute;
      bottom: -9px; /* 뾰족한 부분이 말풍선 아래로 나오게 */
      left: 50%;
      transform: translateX(-50%);
      width: 0;
      height: 0;
      border-left: 10px solid transparent;
      border-right: 10px solid transparent;
      border-top: 10px solid white; /* 말풍선 배경색과 동일하게 설정 */
      z-index: 0;
      filter: drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.1)); /* 그림자 추가 */
    }
  }

  > .click {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;

    > .gradientBar {
      position: relative;
      width: 67px;
      height: 25px;
      margin-top: 10px;
      background: #5175ff;
    }

    > .circle {
      position: absolute;
      width: 36px;
      height: 36px;
      border-radius: 50%;
      top: 15%;
      background-color: rgba(255, 255, 255, 0.4);

      > .bold {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background-color: white;
        opacity: 1;
      }
    }
  }
`;
