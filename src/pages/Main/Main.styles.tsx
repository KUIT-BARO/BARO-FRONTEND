import styled from "styled-components";

export const Layout = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding: 20px;
  background: linear-gradient(to bottom, #5175ff 22%, #a1b3f8 36%, #f0f0f0 80%, #747474 110%);
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .logo {
    height: 20px;
    margin: 0;
  }

  .header-controls {
    display: flex;
    align-items: center;
    gap: 22px;
  }

  .logout-btn {
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-shrink: 0;
    color: var(--bg-bluewhite, #F4F8FB);
    font-feature-settings: 'liga' off, 'clig' off;
    text-shadow: 0px 0px 2px rgba(215, 222, 247, 0.30);
    font-family: Pretendard;
    font-size: 10px;
    font-style: normal;
    font-weight: 600;
    line-height: 140%; /* 14px */
    letter-spacing: -0.25px;

    &:hover {
      text-decoration: underline;
    }
  }

  .alarm-wrapper {
    position: relative;
    cursor: pointer;

    > span {
      position: absolute;
      background-color: red;
      width: 5px;
      height: 5px;
      border-radius: 50%;
      top: -5px;
      right: -5px;
    }
  }
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 68px;
`;

export const Ddays = styled.div`
  color: #FFF;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Pretendard;
  font-size: 128px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%; /* 179.2px */
  letter-spacing: -3.2px;
  margin: 26px 0 68px 0;
`;

export const Title = styled.div`
  margin: 74px auto 28px auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: white;
  font-size: 14px;
  font-weight: 600;

  .name {
    margin-bottom: 21px;
    color: var(--bg-bluewhite, #F4F8FB);
    text-align: center;
    font-feature-settings: 'liga' off, 'clig' off;
    text-shadow: 0px 0px 2px rgba(215, 222, 247, 0.30);
    font-family: Pretendard;
    font-size: 36px;
    font-style: normal;
    font-weight: 600;
    line-height: 140%; /* 50.4px */
    letter-spacing: -0.9px;
  }

  .bold {
    margin-bottom: 36px;
    color: var(--bg-bluewhite, #F4F8FB);
    text-align: center;
    font-feature-settings: 'liga' off, 'clig' off;
    text-shadow: 0px 0px 2px rgba(215, 222, 247, 0.30);
    font-family: Pretendard;
    font-size: 25px;
    font-style: normal;
    font-weight: 600;
    line-height: 140%; /* 35px */
    letter-spacing: -0.625px;
  }

  .noteImg {
    width: 148px;
    height: 154px;
    margin: 0 auto;
  }
`;

export const PromiseBtn = styled.div`
  @media screen and (max-width: 400px) {
    width: 98%;
  }
  width: 362px;
  height: 121px;
  cursor: pointer;
  margin: 38px auto 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0px 0px 4px 0px #D7DEF7;



  img {
    width: 24px;
    height: 24px;
    margin: -10px 0 10px 0;
  }

  div {
    color: #404040;
    text-align: center;
    font-family: Pretendard;
    font-size: 17px;
    font-style: normal;
    font-weight: 500;
    line-height: 140%; /* 23.8px */
    letter-spacing: -0.425px;
  }
`;
