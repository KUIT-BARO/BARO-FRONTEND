import styled from "styled-components";

export const TimeTableWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow-x: scroll;

  .header {
    margin-left: 50px;
    display: flex;
    align-items: center;
  }

  .main-content {
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 5px;
  }
`;

export const Day = styled.div`
  display: flex;
  white-space: nowrap;

  > .day {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 67px;
    text-align: center;
    padding-left: 10px;
    font-size: 12px;
    color: #979797;
  }
  margin-bottom: 10px;
`;

export const TimeLabel = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;

  > .label {
    width: 50px;
    height: 50px;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    font-size: 12px;
    color: #979797;
  }
`;

export const TimeWrapper = styled.div<{ datesLength: number }>`
  display: flex;
  gap: 0;
  padding-right: 20px;
  > .column {
    width: 67px;
    display: flex;
    flex-direction: column;
    &:last-child {
      > div {
        border-right: 0.68px solid #c1cee1;
      }
    }
    > div {
      margin: 0;
    }
  }
  &:last-child {
    border-right: none;
  }
`;
export const TimeBlock = styled.div<{
  isSelected: boolean;
  isDisabled: boolean;
}>`
  width: 67px;
  height: 25px;
  background-color: ${(props) =>
    props.isDisabled ? "#e0e0e0" : props.isSelected ? "#007BFF" : "#fff"};
  border-bottom: 0.68px solid #c1cee1;
  border-top: 0.68px solid #c1cee1;
  border-left: 0.68px solid #c1cee1;
  cursor: ${(props) => (props.isDisabled ? "not-allowed" : "pointer")};

  &:hover {
    background-color: ${(props) =>
      props.isDisabled ? "#e0e0e0" : props.isSelected ? "#0056b3" : "#f0f0f0"};
  }
`;
