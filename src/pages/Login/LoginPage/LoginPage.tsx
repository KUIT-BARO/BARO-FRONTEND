import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { postAuth } from "../../../apis/auth/postAuth";
import userIcon from "../../../assets/icons/login_user.svg";
import lockIcon from "../../../assets/icons/login_password.svg";
import Logo from "../../../assets/icons/logo.svg";
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
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (!email || !password) {
      alert("모든 항목을 입력해주세요;");
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
            placeholder="이메일 입력"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </InputWrapper>
        <InputWrapper>
          <Iconimg src={lockIcon} alt="password" />
          <LoginInput
            type="password"
            placeholder="비밀번호 입력"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
