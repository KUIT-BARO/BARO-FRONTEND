import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postAuth } from "../../../apis/auth/postAuth";
import {
  SignupContainer,
  InputSection,
  InputLabel,
  InputWrapper,
  SignupInput,
  DuplicateCheckButton,
  SignupButton,
  DuplicateMessage,
} from "./SignupPage.styles";

const SignupPage = () => {
  const navigate = useNavigate();
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");
  const [duplicateMessage, setDuplicateMessage] = useState("");
  const [isDuplicateChecked, setIsDuplicateChecked] = useState(false);

  const handleSignup = async () => {
    console.log("회원가입 시도:", { id: userId, password, nickname });
    try {
      if (!userId || !password || !nickname) {
        alert("모든 필드를 입력해주세요");
        return;
      }

      if (!isDuplicateChecked) {
        alert("아이디 중복 확인을 해주세요");
        return;
      }

      if (password.length < 8) {
        alert("비밀번호는 8자리 이상이어야 합니다");
        return;
      }

      const response = await postAuth.signup({
        id: userId,
        password: password,
        nickname: nickname,
      });

      console.log("응답:", response);

      if (response.status === 201) {
        alert("회원가입에 성공했습니다.");
        navigate("/login");
        return;
      }
    } catch (error) {
      console.log("에러 상세:", error);
      console.error("회원가입 오류:", error);
    }
  };

  const handleDuplicateCheck = () => {
    if (!userId) {
      setDuplicateMessage("아이디를 입력해주세요");
      return;
    }

    // 중복 확인 API (현재는 테스트용) 미개발
    const isDuplicate = userId === "test";

    if (isDuplicate) {
      setDuplicateMessage("이미 존재하는 아이디입니다");
    } else {
      setDuplicateMessage("사용 가능한 아이디입니다");
    }
    setIsDuplicateChecked(true);
  };

  return (
    <SignupContainer>
      <InputSection>
        <InputLabel>아이디</InputLabel>
        <InputWrapper>
          <SignupInput
            type="text"
            placeholder="영어로 입력해주세요"
            value={userId}
            onChange={(e) => {
              setUserId(e.target.value);
              setIsDuplicateChecked(false);
              setDuplicateMessage("");
            }}
          />
          <DuplicateCheckButton onClick={handleDuplicateCheck}>
            중복 확인
          </DuplicateCheckButton>
        </InputWrapper>
        {duplicateMessage && (
          <DuplicateMessage isError={duplicateMessage.includes("이미 존재")}>
            {duplicateMessage}
          </DuplicateMessage>
        )}
      </InputSection>

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

      <SignupButton onClick={handleSignup}>회원가입</SignupButton>
    </SignupContainer>
  );
};

export default SignupPage;
