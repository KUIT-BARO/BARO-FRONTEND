import styled from "styled-components";
export const Wrapper = styled.div`
  background-color: #f4f8fb;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 20px;
  gap: 20px;
  > .placeholder {
    height: 90px;
  }
`;

export const Section = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 17px;
  box-sizing: border-box;
`;

export const FixedButton = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 90px;
  padding: 20px;
  display: flex;

  background-color: #f4f8fb;
  box-sizing: border-box;
`;
