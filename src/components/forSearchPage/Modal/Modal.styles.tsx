import styled from "styled-components"

export const ModalWrapper = styled.div`
  background-color: #F4F8FB;
`;

export const ModalHeader = styled.div`
  background-color: #F4F8FB;
  padding: 43px 20px 16px 20px;
  align-items: center;
  position: fixed;
  top: 0;
  width: 100%;
`;

export const ModalCloseButton = styled.div`
`;

export const SetToCurrentLocation = styled.button`
  margin-top: 20px;
  width: 100%;
  height: 40px;
  background-color: #EAEAEA;
  cursor: pointer;
  border: none;
  border-radius: 10px;
  display: flex;
  align-items: center;

  div {
    margin-left: 53px;
    font-family: Pretendard;
    font-size: 17px;
    font-weight: 500;
    line-height: 23.8px;
    letter-spacing: -0.025em;
    text-align: left;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
    color: #C1C1C1;
  }
`;

export const ModalContents = styled.div`
  padding-top: 144px;
  width: 100%;
`;

export const Content = styled.div`
  border-top: 0.5px;
  border-bottom: 0.5px;
  border-style: solid;
  border-color: #EEEEEE;
  width: 100%;
  height: 85px;
  padding: 18.5px 0 18.5px 20px;
  background-color: #FFFFFF;
  cursor: pointer;
`;

export const LocationName = styled.div`
  font-family: Pretendard;
  font-size: 17px;
  font-weight: 500;
  line-height: 23.8px;
  letter-spacing: -0.025em;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: #000000;
`;

export const LocationAddress = styled.div`
  font-family: Pretendard;
  font-size: 14px;
  font-weight: 500;
  line-height: 19.6px;
  letter-spacing: -0.025em;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: #979797;
`;