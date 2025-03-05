import styled from "styled-components";

export const SignupContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 0 20px;
  background: linear-gradient(180deg, #5175ff 0%, #cfdae6 100%);
  font-family: "Pretendard", sans-serif;
`;

export const InputSection = styled.div`
  width: 100%;
  max-width: 400px;
  margin-bottom: 24px;
`;

export const InputLabel = styled.label`
  display: block;
  color: white;
  font-size: 19px;
  margin-bottom: 3px;
  font-weight: 900;
`;

export const InputWrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
`;

export const SignupInput = styled.input`
  width: 70%;
  height: 50px;
  border: none;
  border-bottom: 1px solid white;
  background: transparent;
  padding: 0;
  color: white;
  font-family: "Pretendard", sans-serif;
  font-size: 14px;
  font-weight: 400;

  &::placeholder {
    color: rgba(255, 255, 255, 0.8);
    font-weight: 300;
  }

  &:focus {
    outline: none;
  }
`;

export const DuplicateCheckButton = styled.button`
  position: absolute;
  right: 0;
  height: 44px;
  padding: 0 15px;
  background: #5175ff;
  border: none;
  border-radius: 8.6px;
  color: white;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  font-family: "Pretendard", sans-serif;
`;

export const SignupButton = styled.button`
  width: 100%;
  max-width: 400px;
  height: 50px;
  background: #5175ff;
  border: none;
  border-radius: 10px;
  color: white;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  margin-bottom: 24px;
  transition: background-color 0.2s;

  &:hover {
    background: #3561d8;
  }
`;

export const DuplicateMessage = styled.p<{ isError?: boolean }>`
  margin-top: 8px;
  font-size: 14px;
  font-weight: 600;
  color: ${(props) => (props.isError ? "#FF0000" : "#69DB7C")};
`;

export const ResponsiveContainer = styled.div`
  @media (max-width: 768px) {
    ${InputSection}, ${SignupButton} {
      max-width: 100%;
    }
  }
`;
