import React, { useState } from 'react';
import './SignupPage.styles.css';
import '../../assets/fonts/pretendard.css';

const SignupPage = () => {
  const [userId, setUserId] = useState('');
  const [duplicateMessage, setDuplicateMessage] = useState('');
  const [isDuplicateChecked, setIsDuplicateChecked] = useState(false);

  const handleDuplicateCheck = () => {
    if (!userId) {
      setDuplicateMessage('아이디를 입력해주세요');
      return;
    }

    // 여기에 실제 중복 확인 API 호출이 들어갈 예정
    // 지금은 임시로 테스트용 로직 구현
    const isDuplicate = userId === 'test'; // 예시: 'test'라는 아이디가 이미 존재한다고 가정
    
    if (isDuplicate) {
      setDuplicateMessage('이미 존재하는 아이디입니다');
    } else {
      setDuplicateMessage('사용 가능한 아이디입니다');
    }
    setIsDuplicateChecked(true);
  };

  return (
    <div className="signup-container">
      <div className="input-section">
        <label className="input-label">아이디</label>
        <div className="input-wrapper">
          <input 
            type="text" 
            placeholder="영어로 입력해주세요" 
            className="signup-input"
            value={userId}
            onChange={(e) => {
              setUserId(e.target.value);
              setIsDuplicateChecked(false);
              setDuplicateMessage('');
            }}
          />
          <button className="duplicate-check-button" onClick={handleDuplicateCheck}>
            중복 확인
          </button>
        </div>
        {duplicateMessage && (
          <p className={`duplicate-message ${isDuplicateChecked ? (duplicateMessage.includes('이미 존재') ? 'error' : 'success') : ''}`}>
            {duplicateMessage}
          </p>
        )}
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