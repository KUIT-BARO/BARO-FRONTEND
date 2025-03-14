import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { postAuth } from "../../../apis/auth/postAuth";
import userIcon from "../../../assets/icons/login_user.svg";
import lockIcon from "../../../assets/icons/login_password.svg";
import Logo from "../../../assets/icons/logo.svg";
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
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      if (!id || !password) {
        alert("아이디와 비밀번호를 입력해주세요");
        return;
      }
      const response = await postAuth.login({ id, password });
      if (response.status === 200) {
        console.log("로그인 성공 응답 데이터 :", response);

        sessionStorage.setItem("login", "true");
        sessionStorage.setItem("name", response.data.name);
        sessionStorage.setItem("isAuthenticated", "true");

        window.dispatchEvent(new Event("storage"));
        navigate("/main");
      }
    } catch (error) {
      console.error("로그인 오류:", error);
    }
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
            placeholder="이메일 혹은 아이디 입력"
            value={id}
            onChange={(e) => setId(e.target.value)}
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
