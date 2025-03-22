import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postAuth } from "../../../apis/auth/postAuth";
import {
  SignupContainer,
  InputSection,
  InputLabel,
  InputWrapper,
  SignupInput,
  CheckButton,
  SignupButton,
} from "./SignupPage.styles";

const SignupPage = () => {
  const navigate = useNavigate();
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");
  const [emailCheck, setEmailCheck] = useState("");
  const [isEmailCheck, setisEmailCheck] = useState(false);

  // const handleSignup = async () => {
  //   console.log("회원가입 시도:", { id: email, password, nickname });
  //   try {
  //     if (!email || !password || !nickname) {
  //       alert("모든 필드를 입력해주세요");
  //       return;
  //     }

  //     if (!isDuplicateChecked) {
  //       alert("아이디 중복 확인을 해주세요");
  //       return;
  //     }

  //     if (password.length < 8) {
  //       alert("비밀번호는 8자리 이상이어야 합니다");
  //       return;
  //     }

  //     const response = await postAuth.signup({
  //       id: email,
  //       password: password,
  //       nickname: nickname,
  //     });

  //     console.log("응답:", response);

  //     if (response.status === 201) {
  //       alert("회원가입에 성공했습니다.");
  //       navigate("/login");
  //       return;
  //     }
  //   } catch (error) {
  //     console.log("에러 상세:", error);
  //     console.error("회원가입 오류:", error);
  //   }
  // };

  const handleEmailCheck = () => {
    if (!email) {
      alert("아이디를 입력해주세요");
      return;
    }
    setisEmailCheck(true);
  };

  return (
    <SignupContainer>
      <InputSection>
        <InputLabel>이메일</InputLabel>
        <InputWrapper>
          <SignupInput
            type="text"
            placeholder="영어로 입력해주세요"
            value={email}
            onChange={(e) => {
              setemail(e.target.value);
            }}
          />
          <CheckButton onClick={handleEmailCheck}>인증</CheckButton>
        </InputWrapper>
      </InputSection>
      {isEmailCheck && (
        <InputSection>
          <InputLabel>이메일 인증</InputLabel>
          <InputWrapper>
            <SignupInput
              type="text"
              placeholder="인증번호를 입력해주세요"
              value={emailCheck}
              onChange={(e) => {
                setEmailCheck(e.target.value);
              }}
            />
            <CheckButton>확인</CheckButton>
          </InputWrapper>
        </InputSection>
      )}
      <InputSection>
        <InputLabel>비밀번호</InputLabel>
        <InputWrapper>
          <SignupInput
            type="password"
            placeholder="8자리 이상 입력해주세요"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </InputWrapper>
      </InputSection>

      <InputSection>
        <InputLabel>이름</InputLabel>
        <InputWrapper>
          <SignupInput
            type="text"
            placeholder="사용할 이름을 입력해주세요 (최대 8글자)"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
          />
        </InputWrapper>
      </InputSection>

      <SignupButton>회원가입</SignupButton>
    </SignupContainer>
  );
};

export default SignupPage;
