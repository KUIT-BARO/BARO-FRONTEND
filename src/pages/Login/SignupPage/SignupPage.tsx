import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { SignupContainer, SignupButton } from "./SignupPage.styles";
import InputSection from "../../../components/SignUpInputSection/InputSection";
import { SignupInfo } from "../../../interface/api/mypage/mypage";
const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const SignupPage = () => {
  const [email, setEmail] = useState("");
  const emailRef = useRef<HTMLInputElement>(null);
  const emailCheckRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);

  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [emailCheck, setEmailCheck] = useState("");
  const [isEmailCheck, setisEmailCheck] = useState(false);

  const handleEmailCheck = () => {
    if (!email) {
      emailRef.current?.focus();
      return;
    } else if (!isValidEmail(email)) {
      alert("이메일 형식이 틀렸습니다.");
      emailRef.current?.focus();
      return;
    } else if (isValidEmail(email)) {
      alert("이메일 형식이 틀렸습니다.");
      emailRef.current?.focus();
      return;
    }
    if (!emailCheck) {
      emailCheckRef.current?.focus();
      return;
    }
    if (!password) {
      passwordRef.current?.focus();
      return;
    }
    if (!name) {
      nameRef.current?.focus();
      return;
    }
    setisEmailCheck(true);
  };
  const handleSignup = () => {
    if (!email || !password || !name) {
      alert("모든 항목을 입력해주세요.");
      return;
    }
    const signupData: SignupInfo = {
      email,
      password,
      name,
    };
  };
  const handleEmailVerification = () => {};
  return (
    <SignupContainer>
      <InputSection
        value={email}
        setValue={setEmail}
        placeholder="영어로 입력해주세요"
        buttonText="인증"
        onButtonClick={handleEmailCheck}
        ref={emailRef}
      >
        이메일
      </InputSection>

      {isEmailCheck && (
        <InputSection
          value={emailCheck}
          setValue={setEmailCheck}
          placeholder="인증번호를 입력해주세요"
          buttonText="확인"
          onButtonClick={handleSignup}
          ref={emailCheckRef}
        >
          이메일 인증
        </InputSection>
      )}

      <InputSection
        value={password}
        setValue={setPassword}
        placeholder="8자리 이상 입력해주세요"
        ref={passwordRef}
      >
        비밀번호
      </InputSection>

      <InputSection
        value={name}
        setValue={setName}
        placeholder="사용할 이름을 입력해주세요 (최대 8글자)"
        ref={nameRef}
      >
        이름
      </InputSection>

      <SignupButton>회원가입</SignupButton>
    </SignupContainer>
  );
};

export default SignupPage;
