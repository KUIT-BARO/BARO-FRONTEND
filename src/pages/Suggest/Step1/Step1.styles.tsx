import styled from "styled-components";
export const Wrapper = styled.div`
  background-color: #f4f8fb;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 20px;
`;

export const Section = styled.section`
  width: 100%;
  height: calc(100vh - 2em - 90px);

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  box-sizing: border-box;

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
