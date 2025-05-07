import styled from "styled-components";

export const TimeTableWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow-x: scroll;
`;

export const DaysLabelWrapper = styled.div`
  display: flex;
  align-items: center;
  white-space: nowrap;
  margin-left: 55px;
  margin-bottom: 10px;
`;
export const DayLabel = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 67px;
  text-align: center;
  font-size: 12px;
  color: #979797;
`;
export const MainContent = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 5px;
`;
export const TimeLabelsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;
`;
export const TimeLabel = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  font-size: 12px;
  color: #979797;
`;

export const TimeColumnWrapper = styled.div<{ datesLength: number }>`
  display: flex;
  gap: 0;
  padding-right: 20px;

  &:last-child {
    border-right: none;
  }
`;
export const TimeColumn = styled.div`
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
`;
export const TimeBlock = styled.div<{
  isSelected: boolean;
  isOtherSelected?: boolean;
}>`
  width: 67px;
  height: 25px;
  background-color: ${({ isSelected, isOtherSelected }) =>
    isOtherSelected
      ? isSelected
        ? "#B3C7F6" // 남이 선택한 시간
        : "white"
      : isSelected
      ? "#2B66F6" // 내가 선택한 시간
      : "white"};
  cursor: ${({ isOtherSelected }) => (isOtherSelected ? "default" : "pointer")};
  border-bottom: 0.68px solid #c1cee1;
  border-top: 0.68px solid #c1cee1;
  border-left: 0.68px solid #c1cee1;

  &:hover {
    background-color: ${(props) => (props.isSelected ? "#5175FF" : "#f0f0f0")};
  }
`;
