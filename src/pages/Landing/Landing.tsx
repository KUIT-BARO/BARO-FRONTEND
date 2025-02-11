import React from "react";
import { useNavigate } from "react-router-dom";
import "./Landing.styles.css";
import landinglogo from "../../assets/icons/landinglogo.svg";
import landinglogo2 from "../../assets/icons/landinglogo2.svg";
import landingicon from "../../assets/icons/landingicon.svg";
import landingscroll from "../../assets/icons/landingscroll.svg";
import landingchat from "../../assets/icons/landingchatmockup.svg";
import landingmockup1 from "../../assets/icons/landingmockup1.svg";
import landingmockup2 from "../../assets/icons/landingmockup2.svg";
import landingmockup3 from "../../assets/icons/landingmockup3.svg";
import landingmockup4 from "../../assets/icons/landingmockup4.svg";
import landingmockup5 from "../../assets/icons/landingmockup5.svg";
import landingmockup6 from "../../assets/icons/landingmockup6.svg";
import landingmockup7 from "../../assets/icons/landingmockup7.svg";
import landinglast from "../../assets/icons/landinglast.svg";

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

      <div className="chat-section">
        <div className="chat-container">
          <div className="chat-content">
            <h1 className="chat-title">모두를 위한 장소와 시간을</h1>
            <h1 className="chat-title">찾고 있나요?</h1>
            <div className="chat-frame">
              <img src={landingchat} alt="chatmockup" />
            </div>
          </div>
        </div>
      </div>

      <div className="three-section">
        <div className="three-container">
          <div className="three-content">
            <img src={landinglogo2} alt="logo" />
            <h1 className="three-section-title">도와드리겠습니다!</h1>
          </div>
        </div>
      </div>

      <div className="four-section">
        <div className="four-container">
          <div className="four-content">
            <h2 className="four-section-title-1">어디든 향하든 바로</h2>
            <h2 className="four-section-title-2">약속 생성부터 정리까지</h2>
            <h2 className="four-section-title-2">돕고 있어요</h2>
            <div className="mockup1">
              <img src={landingmockup1} alt="logo" />
              <img src={landingmockup2} alt="logo" />
            </div>
          </div>
        </div>
      </div>

      <div className="five-section">
        <div className="five-container">
          <div className="five-content">
            <h2 className="five-section-title-1">언제든지 바로</h2>
            <h2 className="five-section-title-2">간단하게 약속 모임을</h2>
            <h2 className="five-section-title-2">만들어보세요</h2>
            <div className="mockup1">
              <img src={landingmockup3} alt="logo" />
            </div>
          </div>
        </div>
      </div>

      <div className="six-section">
        <div className="six-container">
          <div className="six-content">
            <h2 className="six-section-title-1">복잡한 것들을 All 바로</h2>
            <h2 className="six-section-title-2">가능한 시간을</h2>
            <h2 className="six-section-title-2">자동으로 체크해요</h2>
            <div className="mockup1">
              <img src={landingmockup4} alt="logo" />
              <img src={landingmockup5} alt="logo" />
            </div>
          </div>
        </div>
      </div>

      <div className="seven-section">
        <div className="seven-container">
          <div className="seven-content">
            <h2 className="seven-section-title-1">
              모두가 원할 때 원하는 바로
            </h2>
            <h2 className="seven-section-title-2">여러 조건의 장소를</h2>
            <h2 className="seven-section-title-2">터치 한번에 조회해요</h2>
            <div className="mockup1">
              <img src={landingmockup6} alt="logo" />
            </div>
          </div>
        </div>
      </div>

      <div className="eight-section">
        <div className="eight-container">
          <div className="eight-content">
            <h2 className="eight-section-title-1">모두가 함께 바로</h2>
            <h2 className="eight-section-title-2">모임과 방문을</h2>
            <h2 className="eight-section-title-2">가치있게 남겨보세요</h2>
            <div className="mockup1">
              <img src={landingmockup7} alt="logo" />
            </div>
          </div>
        </div>
      </div>

      <div className="last-section">
        <div className="last-container">
          <div className="last-content">
            <h2 className="last-section-title-3">설치 없이 링크 공유만으로</h2>
            <h2 className="last-section-title-3">지금 BARO 함께해요</h2>
            <div className="mockup1">
              <img src={landinglast} alt="logo" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
