import styled from "styled-components";

export const Container = styled.div`
  min-width: 100%;
  background: inherit;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 35px;
  box-sizing: border-box;
  .d-day {
    font-size: 104px;
    color: white;
    font-weight: 700;
  }
`;
export const PromiseWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 10px;
  box-sizing: border-box;
  > .header {
    width: 100%;
    display: flex;
    align-items: center;
    background-color: #edf1ff;
    gap: 20px;
    padding: 15px 20px;
    box-sizing: border-box;
    border-radius: 10px 10px 0 0;
    .d-day {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 14px;
      color: white;
      width: 46px;
      height: 24px;
      background-color: #5175ff;
      border-radius: 20px;
    }
    .bold {
      font-size: 17px;
      font-weight: 600;
    }
  }
  > .main {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 15px;
    padding: 15px 20px;
    box-sizing: border-box;
    border-radius: 0 0 10px 10px;
    > .title {
      font-size: 25px;
      font-weight: 600;
    }
    > .desc {
      display: flex;
      gap: 10px;
      align-items: center;
      font-size: 14px;
      > img {
        width: 18px;
      }
    }
  }
`;
