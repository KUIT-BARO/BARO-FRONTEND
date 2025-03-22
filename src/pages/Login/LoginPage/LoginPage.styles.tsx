import styled from "styled-components";

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 0 20px;
  background: linear-gradient(180deg, #5175ff 0%, #cfdae6 100%);
  font-family: "Pretendard", sans-serif;
`;

export const LogoWrapper = styled.div`
  margin-bottom: 16px;
`;

export const WelcomeText = styled.div`
  color: white;
  font-size: 16px;
  margin-bottom: 60px;
  font-weight: 700;
`;

export const InputContainer = styled.div`
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 20px;
`;

export const InputWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const Iconimg = styled.img`
  width: 24px;
  height: 24px;
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  z-index: 1;
`;

export const LoginInput = styled.input`
  width: 100%;
  height: 50px;
  background: rgba(255, 255, 255, 0.3);
  border: none;
  border-radius: 10px;
  padding: 0 16px 0 52px;
  color: white;
  font-family: "Pretendard", sans-serif;
  font-size: 15px;
  font-weight: 400;
  backdrop-filter: blur(4px);

  &::placeholder {
    color: rgba(255, 255, 255, 0.8);
  }

  &:focus {
    outline: none;
    background: rgba(255, 255, 255, 0.4);
  }
`;

export const AutoLoginWrapper = styled.div`
  width: 100%;
  max-width: 400px;
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  color: white;
  font-size: 14px;
`;

export const AutoLoginCheckbox = styled.input.attrs({ type: "checkbox" })`
  appearance: none;
  width: 16px;
  height: 16px;
  border: 1px solid white;
  border-radius: 2px;
  margin-right: 8px;
  cursor: pointer;
  background-color: transparent;
  position: relative;

  &:checked {
    background-color: rgba(255, 255, 255, 0.3);
  }

  &:checked::after {
    content: "✓";
    position: absolute;
    color: white;
    font-size: 12px;
    left: 2px;
    top: -1px;
  }
`;

export const ButtonBox = styled.div`
  max-width: 400px;
  width: 100%;
  margin-bottom: 24px;
  &:hover {
    background: #3561d8;
  }
`;

export const SignupWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: rgba(0, 0, 0, 0.6);
`;

export const Line = styled.span`
  font-size: 14px;
  font-weight: 500;
  color: white;
`;

export const SignupText = styled.a`
  font-size: 14px;
  font-weight: 500;
  color: white;
  text-decoration: none;
`;

export const ResponsiveContainer = styled.div`
  @media (max-width: 768px) {
    ${InputContainer} {
      max-width: 100%;
    }
  }
`;

export const Logoimg = styled.img``;

export const Passwardimg = styled.img``;

export const AutoLabel = styled.label``;
