import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { SignupContainer, SignupButton } from "./SignupPage.styles";
import InputSection from "../../../components/SignUpInputSection/InputSection";
import {
  SignupInfo,
  EmailCheckResponse,
} from "../../../interface/api/mypage/mypage";
import useUsers from "../../../hooks/useUsers/useUsers";
import useAuth from "../../../hooks/useAuth/useAuth";
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
  const [isfinalcheck, setisfinalCheck] = useState(false);

  const { signupUser } = useUsers();
  const { sendAuthCode, verifyAuthCode } = useAuth();
  const navigate = useNavigate(); // 성공 시 리디렉션용

  const handleEmailCheck = async () => {
    if (!email) {
      emailRef.current?.focus();
      return;
    } else if (!isValidEmail(email)) {
      alert("이메일 형식이 틀렸습니다.");
      emailRef.current?.focus();
      return;
    }
    try {
      const response = await sendAuthCode(email);
      setisEmailCheck(true);
    } catch (error) {
      alert("이메일 인증에 실패했습니다. 다시 시도해주세요.");
      console.error("Email check error:", error);
    }
  };
  const handleEmailVerify = async () => {
    if (!emailCheck) {
      emailCheckRef.current?.focus();
      return;
    }
    try {
      const emailCheckInfo: EmailCheckResponse = {
        email,
        authCode: emailCheck,
      };
      console.log("emailCheckInfo:", emailCheckInfo);
      const response = await verifyAuthCode(emailCheckInfo);
      if (response?.status === 200) {
        alert("이메일 인증이 완료되었습니다.");
        setisfinalCheck(true);
      } else {
        alert("인증번호가 일치하지 않습니다. 다시 시도해주세요.");
      }
    } catch (error) {
      alert("인증에 실패했습니다. 다시 시도해주세요.");
      console.error("Email verification error:", error);
    }
  };
  const handleSignup = async () => {
    if (!email || !password || !name) {
      alert("모든 항목을 입력해주세요.");
      return;
    }
    const signupData: SignupInfo = {
      email,
      password,
      name,
    };
    try {
      const response = await signupUser(signupData);
      if (response?.status === 200 || response?.status === 201) {
        alert("회원가입이 완료되었습니다!");
        navigate("/login"); // 또는 메인 페이지 등으로 이동
      } else {
        alert("회원가입에 실패했습니다. 다시 시도해주세요.");
      }
    } catch (error) {
      alert("에러가 발생했습니다. 다시 시도해주세요.");
      console.error("Signup error:", error);
    }
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
          onButtonClick={handleEmailVerify}
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

      <SignupButton
        //  disabled={!isfinalcheck}
        onClick={handleSignup}
      >
        회원가입
      </SignupButton>
    </SignupContainer>
  );
};

export default SignupPage;
