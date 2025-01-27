import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 30px auto 0 auto;
  padding: 20px 23px 0 16px;
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
  background-color: #ffffff;
  border-radius: 10px;
  overflow: hidden;
  box-sizing: border-box;
`;
export const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  > .date {
    font-size: 19px;
    font-weight: 600;
  }
  > .date-buttons {
    display: flex;
    align-items: center;
    > img {
      cursor: pointer;
      width: 22px;
    }
  }
`;
export const Table = styled.table`
  width: 100%;
  table-layout: fixed;
  border-collapse: collapse;
  thead {
    .days {
      font-size: 13px;
      font-weight: 600;
      color: #c0c0c0;
      padding-bottom: 8px;
    }
  }

  th,
  td {
    width: 44px;
    text-align: center;
  }
  td {
    height: 44px;
  }
`;

export const DateCell = styled.td<{ isToday: boolean; isSelected: boolean }>`
  width: 44px;
  height: 44px;
  padding: 11px;
  text-align: center;
  vertical-align: top;
  position: relative;
  color: ${(props) => (props.isSelected ? "#fff" : "#000000")};
  background-color: ${(props) =>
    props.isSelected ? "#5175FF" : "transparent"};
  font-size: 20px;
  font-weight: 400;
  border-radius: ${(props) => (props.isSelected ? "50%" : "none")};
  cursor: pointer;
  box-sizing: border-box;
`;

export const EventIndicators = styled.div`
  display: flex;
  justify-content: center;
  gap: 2px;
  margin-top: 5px;

  span {
    width: 3px;
    height: 3px;
    background-color: #ff6b6b;
    border-radius: 50%;
  }

  span:nth-child(2) {
    background-color: #ffa94d;
  }

  span:nth-child(3) {
    background-color: #74c0fc;
  }
`;

export const ScheduleWrapper = styled.div`
  margin-top: 20px;
  padding: 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  background-color: white;
  box-shadow: 0px 0px 4px 0px #C9D2F5;
`;