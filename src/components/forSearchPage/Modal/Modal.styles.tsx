import styled from "styled-components"

export const ModalWrapper = styled.div`
  background-color: #F4F8FB;
`;

export const ModalHeader = styled.div<{ isSettingLocation?: boolean }>`
  background-color: #F4F8FB;
  padding: ${props => props.isSettingLocation ? '24px 20px 100px 20px' : '24px 20px 0 20px'};
  align-items: center;
  position: fixed;
  top: 0;
  width: 100%;
`;

export const ModalCloseButton = styled.div`
  cursor: pointer;
`;

export const SetToCurrentLocation = styled.button`
  margin-top: 30px;
  margin-bottom: 15px;
  width: 100%;
  height: 40px;
  background-color: #EAEAEA;
  cursor: pointer;
  border: none;
  border-radius: 10px;
  display: flex;
  align-items: center;

  img {
    margin-left: 10px;
  }

  div {
    margin-left: 12px;
    margin-top: 1px;
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
  padding-top: 134px;
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

export const SettingLocation = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    cursor: pointer;
  }

  div {
    font-family: Pretendard;
    font-size: 19px;
    color: #000000;
    margin-right: 10px;
  }
`;

export const SettingLocationContents = styled.div`
  margin-top: 68px;
`;

export const SettingButtonWrapper = styled.div`
  padding: 30px 20px 0 20px;
  margin-top: 0px;
  background-color: #FFFFFF;
  border-top: 1px solid #EEEEEE;
  position: fixed;
  width: 100%;
`;

export const LocationTitle = styled.div`
  font-family: Pretendard;
  font-size: 19px;
  color: #000000;
`;

export const LocationDetail = styled.div`
  font-family: Pretendard;
  font-size: 14px;
  color: #979797;
  margin-top: 8px;
`;

export const SettingButton = styled.button`
  margin-top: 24px;
  width: 100%;
  height: 50px;
  border-radius: 10px;
  border: none;
  background-color: #5175FF;
  color: #FFFFFF;
  cursor: pointer;
  font-family: Pretendard;
  font-size: 16px;
`;