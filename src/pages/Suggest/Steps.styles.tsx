import styled from "styled-components";
export const Wrapper = styled.div`
  background-color: #f4f8fb;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  padding-top: 0;
  min-height: 100vh;
  > * {
    margin-top: 20px;
  }
`;

export const FixedButton = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 20px;
  display: flex;
  background-color: #f4f8fb;
`;

export const Section = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 18px;
  margin-bottom: 20px;
  box-sizing: border-box;
  > .btn-wrapper {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`;
