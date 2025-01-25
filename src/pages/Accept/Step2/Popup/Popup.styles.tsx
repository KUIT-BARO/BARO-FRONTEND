import styled from "styled-components";

interface CategoryProps {
  isSelected: boolean;
}

export const SubTitle = styled.div`
  font-size: 19px;
  font-weight: 600;
  text-align: left;
`;

export const CategoryWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  box-sizing: border-box;
`;

export const Category = styled.div<{ isSelected: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 80px;
  height: 40px;
  white-space: nowrap;
  border-radius: 10px;
  border: 1.5px solid #5175ff;
  box-sizing: border-box;

  font-size: 12px;
  color: ${(props) => (props.isSelected ? "#fff" : "#5175ff")};
  font-weight: 600;
  background-color: ${(props) =>
    props.isSelected ? "#5175ff" : "transparent"};
  cursor: pointer;

  &:hover {
    background-color: ${(props) => (props.isSelected ? "#5175ff" : "#e0e7ff")};
  }
`;
export const CategoryWithNumber = styled.div<{ isSelected: boolean }>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 80px;
  height: 40px;
  white-space: nowrap;
  border-radius: 10px;
  box-sizing: border-box;
  font-size: 12px;
  color: #fff;
  font-weight: 600;
  background-color: #5175ff;
  cursor: pointer;
  margin-bottom: 5px;

  > .number {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 20px;
    min-width: 16px;
    max-width: 34px;
    top: -5px;
    left: -3px;
    padding: 0px 4px;
    background-color: white;
    color: #5175ff;
    border-radius: 100px;
    border: 1px solid #5175ff;
  }
`;

export const LocationWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;

  font-size: 14px;
  font-weight: 500;
  color: #979797;
  padding-bottom: 20px;
  border-bottom: 1px solid black;
  > .title {
    font-size: 17px;
    font-weight: 500;
    color: black;
  }
  > .scope {
    display: flex;
    gap: 10px;
  }

  > .categories {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
  }
  > .categories .category {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 28px;
    padding: 4px 10px 4px 10px;
    font-size: 12px;
    font-weight: 600;
    border-radius: 10px;
    border: 1.5px solid #5175ff;
    color: #5175ff;
  }
`;
