import styled from "styled-components";

export const Container = styled.div`
  min-width: 100%;
  background: inherit;
  display: flex;
  flex-direction: column;
  align-items: center;
  // gap: 35px;
  box-sizing: border-box;
  .d-day {
    font-size: 104px;
    color: white;
    font-weight: 700;
  }
`;
export const PromiseWrapper = styled.div`
  margin-top: 21px;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: 16px;
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
  }
  > .main {
    margin-left: 41px;
    margin-top: 17px;
    padding-right: 20px;
    // width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    // gap: 15px;
    padding: 0;
    box-sizing: border-box;
    border-radius: 0 0 10px 10px;

    > .title {
      font-size: 25px;
      font-weight: 600;
      color: #5175FF;
      margin-top: 10px;
    }

    > .location {
      font-size: 14px;
      color: black;
      > img {
        width: 16px;
        height: 16px;
        margin-right: 3px;
      }
    }

    > .bold {
      font-size: 25px;
      font-weight: 600;
    }

    > .desc-wrapper {
      display: flex;
      justify-content: space-between;
      width: 100%;

      > .desc {
        margin-top: 12px;
        margin-bottom: 14px;
        display: flex;
        gap: 4.33px;
        align-items: center;
        font-size: 14px;
        color: black;
        > img {
          width: 16px;
          height: 16px;
        }
      }
      > .d-day {
        right: 0;
        margin-right: 26px;
        margin-top: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 14px;
        color: white;
        width: 46px;
        height: 24px;
        background-color: #FF6467;
        border-radius: 20px;
      }
    }
  }
`;
