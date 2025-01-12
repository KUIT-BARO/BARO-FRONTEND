import React from 'react';
import './SignupPage.styles.css';
import '../../assets/fonts/pretandard.css';

const SignupPage = () => {
  return (
    <div className="signup-container">
      <div className="input-section">
        <label className="input-label">아이디</label>
        <div className="input-wrapper">
          <input 
            type="text" 
            placeholder="영어로 입력해주세요" 
            className="signup-input"
          />
          <button className="duplicate-check-button">
            중복 확인
          </button>
        </div>
      </div>

      <div className="input-section">
        <label className="input-label">비밀번호</label>
        <div className="input-wrapper">
          <input 
            type="password" 
            placeholder="8자리 이상 입력해주세요" 
            className="signup-input"
          />
        </div>
      </div>

      <div className="input-section">
        <label className="input-label">이름</label>
        <div className="input-wrapper">
          <input 
            type="text" 
            placeholder="사용할 이름을 입력해주세요 (최대 8글자)" 
            className="signup-input"
          />
        </div>
      </div>

      <button className="signup-button">
        회원가입
      </button>
    </div>
  );
};

export default SignupPage;