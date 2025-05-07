import styled from "styled-components";

export const Layout = styled.div`
  background-color: #F4F8FB;
`;

export const Header = styled.div<{ isSettingLocation?: boolean }>`
  background-color: #F4F8FB;
  padding: ${props => props.isSettingLocation ? '24px 28px 100px 13px' : '24px 28px 0 13px'};
  align-items: center;
  position: fixed;
  top: 0;
  width: 100%;

  img {
    cursor: pointer;
  }

  button {
    margin: 30px 8px 15px 8px;
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
      margin-right: 12px;
    }

    div {
      margin-top: 1px;
      color: #C1C1C1;
      font-feature-settings: 'liga' off, 'clig' off;
      font-size: 17px;
      font-style: normal;
      font-weight: 500;
      line-height: 140%; /* 23.8px */
      letter-spacing: -0.425px;
    }  
  }
`;

export const LocationsWrapper = styled.div`
  padding-top: 134px;
  width: 100%;
`;

export const Location = styled.div`
  border-top: 0.5px;
  border-bottom: 0.5px;
  border-style: solid;
  border-color: #EEEEEE;
  width: 100%;
  height: 85px;
  padding: 18.5px 0 18.5px 20px;
  background-color: #FFFFFF;
  cursor: pointer;

  .name {
    color: #000;
    font-feature-settings: 'liga' off, 'clig' off;
    font-size: 17px;
    font-style: normal;
    font-weight: 500;
    line-height: 140%; /* 23.8px */
    letter-spacing: -0.425px;
  }

  .address {
    color: #979797;
    font-feature-settings: 'liga' off, 'clig' off;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 140%; /* 19.6px */
    letter-spacing: -0.35px;
  }
`;

export const SettingLocationHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 19px;
  color: #000000;
  margin-right: 10px;
`;

export const SettingLocation = styled.div`
  margin-top: 68px;
`;

export const SettingButton = styled.div`
  padding: 24px 20px 0 20px;
  margin-top: 0px;
  background-color: #FFFFFF;
  border-top: 1px solid #EEEEEE;
  position: fixed;
  width: 100%;

  .current-name {
    color: #000;
    font-feature-settings: 'liga' off, 'clig' off;
    font-size: 19px;
    font-style: normal;
    font-weight: 500;
    line-height: 140%; /* 26.6px */
    letter-spacing: -0.475px;
  }

  .current-address {
    color: #979797;
    font-feature-settings: 'liga' off, 'clig' off;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 140%; /* 19.6px */
    letter-spacing: -0.35px;
  }

  button {
    margin-top: 24px;
    width: 100%;
    height: 50px;
    border-radius: 10px;
    border: none;
    background-color: #5175FF;
    cursor: pointer;
    color: #FFF;
    text-align: center;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 140%; /* 22.4px */
    letter-spacing: -0.4px;
  }
`;