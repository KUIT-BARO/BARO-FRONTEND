import React from "react";
import { useNavigate } from "react-router-dom";
import "./Landing.styles.css";
import landinglogo from "../../assets/icons/landinglogo.svg";
import landingicon from "../../assets/icons/landingicon.svg";
import landingscroll from "../../assets/icons/landingscroll.svg";

const Landing: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-container">
      <div className="content">
        <h2 className="subtitle">약속 정할 때 언제 어디로?</h2>
        <img src={landinglogo} alt="logo" />
        <div className="icon">
          <img src={landingicon} alt="logo" />
        </div>
        <div className="scroll">
          <img src={landingscroll} alt="scroll" />
          <p className="scroll-text">스크롤해보세요</p>
        </div>
      </div>
      <button className="start-button" onClick={() => navigate("/login")}>
        시작하기
      </button>
    </div>
  );
};

export default Landing;
