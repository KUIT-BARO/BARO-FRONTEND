import styled from "styled-components";

export const PinPopupWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #f4f8fb;
  padding: 0 10px;
  gap: 10px;
`;
export const Section = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 15px;
  gap: 20px;
`;
export const SectionTitle = styled.span`
  font-weight: 600;
  font-size: 19px;
`;
export const CategoriesWrapper = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;

export const Category = styled.div<{ selected: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 83px;
  height: 40px;
  background-color: ${({ selected }) => (selected ? "#5175ff" : "#F4F8FB")};
  color: ${({ selected }) => (selected ? "#F4F8FB" : "#5175ff")};
  border: 1.5px solid ${({ selected }) => (selected ? "#F4F8FB" : "#5175ff")};
  border-radius: 10px;

  font-weight: 600;
  font-size: 12px;

  cursor: pointer;
`;
