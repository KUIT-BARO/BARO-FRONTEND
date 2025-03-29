import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postAuth } from "../../../apis/auth/postAuth";
import { SignupContainer, SignupButton } from "./SignupPage.styles";
import InputSection from "../../../components/SignUpInputSection/InputSection";
const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};
interface SignupPayload {
  id: string;
  password: string;
  nickname: string;
}
const SignupPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");
  const [emailCheck, setEmailCheck] = useState("");
  const [isEmailCheck, setisEmailCheck] = useState(false);

  const handleEmailCheck = () => {
    if (!email) {
      alert("아이디를 입력해주세요");
      return;
    } else if (isValidEmail(email)) {
      alert("이메일 형식이 틀렸습니다.");
      return;
    }
    setisEmailCheck(true);
  };
  const handleSignup = () => {
    if (!email || !password || !nickname) {
      alert("모든 항목을 입력해주세요.");
      return;
    }
    const signupData = {
      email,
      password,
      nickname,
    };
  };

  return (
    <SignupContainer>
      <InputSection
        value={email}
        setValue={setEmail}
        placeholder="영어로 입력해주세요"
        buttonText="인증"
        onButtonClick={handleEmailCheck}
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
        >
          이메일 인증
        </InputSection>
      )}

      <InputSection
        value={password}
        setValue={setPassword}
        placeholder="8자리 이상 입력해주세요"
      >
        비밀번호
      </InputSection>

      <InputSection
        value={nickname}
        setValue={setNickname}
        placeholder="사용할 이름을 입력해주세요 (최대 8글자)"
      >
        이름
      </InputSection>

      <SignupButton>회원가입</SignupButton>
    </SignupContainer>
  );
};

export default SignupPage;
