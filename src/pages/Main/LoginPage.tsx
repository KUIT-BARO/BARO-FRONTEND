import React from 'react';
import { Link } from 'react-router-dom';
import './LoginPage.styles.css';
import '../../assets/fonts/pretandard.css';
import userIcon from '../../assets/icons/login_user.svg';
import lockIcon from '../../assets/icons/login_password.svg';
import Logo from '../../assets/icons/logo.svg';

const LoginPage = () => {
  return (
    <div className="login-container">
      <div className="logo">
        <img src={Logo} alt="BARO" />
      </div>
      <div className="welcome-text">BARO에 오신 것을 환영합니다</div>
      
      <div className="input-container">
        <div className="input-wrapper">
          <div className="input-icon">
            <img src={userIcon} alt="user" />
          </div>
          <input 
            type="text" 
            placeholder="이메일 혹은 아이디 입력" 
            className="login-input"
          />
        </div>
        <div className="input-wrapper">
          <div className="input-icon">
            <img src={lockIcon} alt="password" />
          </div>
          <input 
            type="password" 
            placeholder="비밀번호 입력" 
            className="login-input"
          />
        </div>
      </div>

      <div className="auto-login-wrapper">
        <input 
          type="checkbox" 
          id="autoLogin"
          className="auto-login-checkbox"
        />
        <label htmlFor="autoLogin">자동로그인 설정</label>
      </div>

      <button className="login-button">
        로그인
      </button>
      
      <div className="signup-wrapper">
        <span className="line">────</span>
        <Link to="/signup" className="signup-text">회원가입</Link>
        <span className="line">────</span>
      </div>
    </div>
  );
};

export default LoginPage;