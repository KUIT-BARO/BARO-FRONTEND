// ScheduleGridView.styles.ts
import styled from "styled-components";

export const Wrapper = styled.div`
  padding-inline: 20px;
  padding-bottom: 20px;
`;

export const DaysHeader = styled.div`
  display: flex;
  padding-left: 40px;
`;

export const DayItem = styled.div`
  flex: 1;
  text-align: center;
  font-size: 12px;
  font-weight: 600;
  color: #979797;
  padding: 10px 0;
`;

export const MainGridContainer = styled.div`
  display: flex;
`;

export const TimeColumn = styled.div`
  width: 35px;
  flex-shrink: 0;
`;

export const TimeSlot = styled.div<{ halfHour?: boolean }>`
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 600;
  color: ${({ halfHour }) => (halfHour ? "transparent" : "#979797")};
`;

export const Container = styled.div`
  flex: 1;
  border: 0.5px solid #c1cee1;
  border-radius: 10px;
  overflow: hidden;
  background-color: #f4f8fb;
  display: flex;
`;

export const DayColumn = styled.div`
  flex: 1;
  position: relative;
  border-right: 0.5px solid #c1cee1;

  &:last-child {
    border-right: none;
  }
`;

export const GridCell = styled.div<{ halfHour?: boolean }>`
  height: 20px;
  border-bottom: 0.5px solid #c1cee1;

  &:last-child {
    border-bottom: none;
  }
`;

export const ScheduleItem = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  z-index: 1;
  font-size: 11px;
  font-weight: 600;
  color: #fff;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: pre-line;
  display: flex;
  align-items: flex-start;
  padding: 6px;
  height: 100%;
`;
