import styled from "styled-components";

export const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
export const ImgWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  align-items: center;
  gap: 3px;
  > .img {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: black;
  }
  > .plus {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 24px;
    height: 30px;
    padding: 5px 4px 5px 4px;
    border-radius: 24px;
    background-color: white;
    color: #757575;
  }
`;
export const ButtomWrapper = styled.div`
  display: flex;
  gap: 3px;
`;
