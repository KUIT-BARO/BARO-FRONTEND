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
        {stage === 1 ? (
          <>
            <div className="bubble left-bubble">
              <p>아래로 드래그하여 선택</p>
              <div className="bubble-arow"></div>
            </div>
            <div className="drag drag-down">
              <div className="gradientBar"></div>
              <div className="circle">
                <div className="bold"></div>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="bubble right-bubble">
              <p>위로 드래그하여 취소</p>
              <div className="bubble-arow"></div>
            </div>
            <div className="drag drag-up">
              <div className="gradientBar"></div>
              <div className="circle">
                <div className="bold"></div>
              </div>
            </div>
          </>
        )}
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
  top: ${(props) => (props.stage === 1 ? "40%" : "30%")};
  left: ${(props) => (props.stage === 1 ? "5%" : "auto")};
  right: ${(props) => (props.stage === 2 ? "5%" : "auto")};
  display: flex;
  flex-direction: column;
  gap: 20px;

  > .bubble {
    position: relative;
    background-color: white;
    padding: 20px 22px;
    border-radius: 100px;
    font-size: 19px;

    > .bubble-arow {
      position: absolute;
      bottom: -5px;
      left: 50%;
      transform: translateX(-50%);
      width: 0;
      height: 0;
      border-left: 15px solid transparent;
      border-right: 15px solid transparent;
      border-top: 10px solid white;
      z-index: 0;
    }
  }

  > .drag {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;

    > .gradientBar {
      position: relative;
      width: 66px;
      height: 205px;
      background: linear-gradient(to top, #5175ff, rgba(0, 0, 0, 0));
      margin-top: 10px;
    }

    > .circle {
      position: absolute;
      width: 36px;
      height: 36px;
      border-radius: 50%;
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

  > .drag-down {
    > .gradientBar {
      background: linear-gradient(to top, #5175ff, rgba(0, 0, 0, 0));
    }
    > .circle {
      bottom: -18px;
    }
  }

  > .drag-up {
    > .gradientBar {
      background: linear-gradient(to bottom, #5175ff, rgba(0, 0, 0, 0));
    }
    > .circle {
      top: -8px;
    }
  }
`;
