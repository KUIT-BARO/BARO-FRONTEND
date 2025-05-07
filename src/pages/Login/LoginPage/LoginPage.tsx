import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import userIcon from "../../../assets/icons/Login/login_user.svg";
import lockIcon from "../../../assets/icons/Login/login_password.svg";
import Logo from "../../../assets/icons/Login/logo.svg";
import { LoginInfo } from "../../../interface/api/auth/auth";
import {
  LoginContainer,
  LogoWrapper,
  WelcomeText,
  InputContainer,
  InputWrapper,
  LoginInput,
  ButtonBox,
  AutoLoginWrapper,
  AutoLoginCheckbox,
  SignupWrapper,
  Line,
  SignupText,
  Logoimg,
  Iconimg,
  AutoLabel,
} from "./LoginPage.styles";
import Button from "../../../components/Button/Button";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);

  const handleLogin = () => {
    if (!email) {
      emailRef.current?.focus();
      return;
    }
    if (!password) {
      passwordRef.current?.focus();
      return;
    }
    const loginData: LoginInfo = {
      email,
      password,
    };
  };

  return (
    <LoginContainer>
      <LogoWrapper>
        <Logoimg src={Logo} alt="BARO" />
      </LogoWrapper>
      <WelcomeText>BARO에 오신 것을 환영합니다</WelcomeText>

      <InputContainer>
        <InputWrapper>
          <Iconimg src={userIcon} alt="user" />
          <LoginInput
            type="text"
            placeholder={
              isEmailFocused ? "이메일을 입력해주세요" : "이메일 입력"
            }
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onFocus={() => setIsEmailFocused(true)}
            onBlur={() => setIsEmailFocused(false)}
            ref={emailRef}
          />
        </InputWrapper>
        <InputWrapper>
          <Iconimg src={lockIcon} alt="password" />
          <LoginInput
            type="password"
            placeholder={
              isPasswordFocused ? "비밀번호를 입력해주세요!" : "비밀번호 입력"
            }
            onFocus={() => setIsPasswordFocused(true)}
            onBlur={() => setIsPasswordFocused(false)}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            ref={passwordRef}
          />
        </InputWrapper>
      </InputContainer>

      <AutoLoginWrapper>
        <AutoLoginCheckbox id="autoLogin" />
        <AutoLabel htmlFor="autoLogin">자동로그인 설정</AutoLabel>
      </AutoLoginWrapper>

      <ButtonBox>
        <Button onClick={handleLogin}>로그인</Button>
      </ButtonBox>
      <SignupWrapper>
        <Line>────</Line>
        <SignupText as={Link} to="/signup">
          회원가입
        </SignupText>
        <Line>────</Line>
      </SignupWrapper>
    </LoginContainer>
  );
};

export default LoginPage;
