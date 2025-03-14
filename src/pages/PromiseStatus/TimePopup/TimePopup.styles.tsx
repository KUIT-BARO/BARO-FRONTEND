import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: #f4f8fb;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 20px 0 0 20px;
  gap: 18px;
  min-height: 100vh;
`;

export const Section = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 13px;
  margin-bottom: 20px;
  box-sizing: border-box;
  > .btn-wrapper {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`;

export const ImgWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  align-items: center;
  gap: 3px;
  > img {
    width: 30px;
    height: 30px;
    border-radius: 50%;
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

export const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-right: 20px;
`;
export const ButtonWrapper = styled.div`
  display: flex;
  gap: 3px;
`;
