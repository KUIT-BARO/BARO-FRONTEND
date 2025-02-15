import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SignupPage.styles.css";
import "../../assets/fonts/pretendard.css";
import { postAuth } from "../../apis/auth/postAuth";

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
      // 유효성 검사
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

    // 여기에 실제 중복 확인 API 호출이 들어갈 예정
    // 지금은 임시로 테스트용 로직 구현
    const isDuplicate = userId === "test"; // 예시: 'test'라는 아이디가 이미 존재한다고 가정

    if (isDuplicate) {
      setDuplicateMessage("이미 존재하는 아이디입니다");
    } else {
      setDuplicateMessage("사용 가능한 아이디입니다");
    }
    setIsDuplicateChecked(true);
  };

  return (
    <div className="signup-container">
      <div className="input-section">
        <label className="input-label-signup">아이디</label>
        <div className="input-wrapper">
          <input
            type="text"
            placeholder="영어로 입력해주세요"
            className="signup-input"
            value={userId}
            onChange={(e) => {
              setUserId(e.target.value);
              setIsDuplicateChecked(false);
              setDuplicateMessage("");
            }}
          />
          <button
            className="duplicate-check-button"
            onClick={handleDuplicateCheck}
          >
            중복 확인
          </button>
        </div>
        {duplicateMessage && (
          <p
            className={`duplicate-message ${
              isDuplicateChecked
                ? duplicateMessage.includes("이미 존재")
                  ? "error"
                  : "success"
                : ""
            }`}
          >
            {duplicateMessage}
          </p>
        )}
      </div>

      <div className="input-section">
        <label className="input-label-signup">비밀번호</label>
        <div className="input-wrapper">
          <input
            type="password"
            placeholder="8자리 이상 입력해주세요"
            className="signup-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </div>

      <div className="input-section">
        <label className="input-label-signup">이름</label>
        <div className="input-wrapper">
          <input
            type="text"
            placeholder="사용할 이름을 입력해주세요 (최대 8글자)"
            className="signup-input"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
          />
        </div>
      </div>

      <button className="signup-button" onClick={handleSignup}>
        회원가입
      </button>
    </div>
  );
};

export default SignupPage;
