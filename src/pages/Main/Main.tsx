import React, { useEffect, useRef, useState } from "react";
import { Header, MainWrapper, PromiseBtn, Title } from "./Main.styles";
import { Container, Promises, Dots, Dot } from "./Main.styles";
import Navigation from "../../components/Navigation/Navigation";
import { useNavigate } from "react-router-dom";
import { postAuth } from "../../apis/auth/postAuth";

import bigLogo from "../../assets/icons/bigLogo.svg";
import locationWhite from "../../assets/icons/locationWhite.svg";
import logo from "../../assets/icons/logo.svg";
import alarm from "../../assets/icons/alarm.svg";
import personWhite from "../../assets/icons/personWhite.svg";

import plus from "../../assets/icons/forMyPromises/plus.svg";
import PromiseContainer from "../../components/PromiseContainer/PromiseContainer";

const Main = () => {
  const dummyData = [
    {
      left: 3,
      date: "11월 22일 14시 00분",
      title: "웹 개발 프로젝트 회의",
      people: "김민수 외 3명",
      location: "스타벅스 강남점",
    },
    {
      left: 5,
      date: "11월 24일 10시 00분",
      title: "데이터 분석 스터디",
      people: "박지연 외 4명",
      location: "건대 도서관",
    },
    {
      left: 1,
      date: "11월 20일 19시 00분",
      title: "친구 생일 파티",
      people: "최영훈 외 6명",
      location: "홍대 술집",
    },
    {
      left: 7,
      date: "11월 26일 16시 30분",
      title: "졸업작품 발표 준비",
      people: "정다은 외 5명",
      location: "학교 세미나실",
    },
  ];

  const navigate = useNavigate();
  // const dummyData = [];

  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const handleLogout = async () => {
    try {
      await postAuth.logout();
      localStorage.removeItem("token"); // 토큰 제거
      navigate("/"); // 랜딩 페이지로 이동
    } catch (error) {
      console.error("로그아웃 실패:", error);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current) {
        const scrollLeft = scrollRef.current.scrollLeft;
        const containerWidth = scrollRef.current.offsetWidth;
        const newIndex = Math.round(scrollLeft / containerWidth);
        setActiveIndex(newIndex);
      }
    };

    scrollRef.current?.addEventListener("scroll", handleScroll);
    return () => scrollRef.current?.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <MainWrapper>
      {/* 데이터가 없을 경우 bigLogo 표시 */}
      {dummyData.length === 0 && (
        <img src={bigLogo} alt="big logo" className="big-logo" />
      )}

      <Header>
        <img src={logo} alt="logo icon" className="logo" />
        <div className="header-controls">
          <button onClick={handleLogout} className="logout-btn">
            로그아웃
          </button>
          <div className="alarm-wrapper">
            <img src={alarm} alt="alarm icon" />
            <span></span>
          </div>
        </div>
      </Header>

      <section style={{ width: "100%" }}>
        {dummyData.length > 0 ? (
          <>
            <Title>
              <div>지환님의 다가올 약속</div>
              <div className="bold">마케팅 관리 팀플</div>
              <div className="desc">
                <img src={personWhite} alt="person icon" />
                <span>김지환 외 2명</span>
              </div>
            </Title>
            <Container>
              <Promises ref={scrollRef}>
                {dummyData.map((item, index) => (
                  <PromiseContainer
                    key={index} // key 추가
                    left={item.left}
                    date={item.date}
                    people={item.people}
                    location={item.location}
                    title={item.title}
                  />
                ))}
              </Promises>
              <Dots>
                {dummyData.map((_, index) => (
                  <Dot key={index} active={index === activeIndex} />
                ))}
              </Dots>
            </Container>
          </>
        ) : (
          <>
            <Title style={{ marginBottom: "280px" }}>
              <div>지환님의 다가올 약속</div>
              <div className="bold">없습니다.</div>
            </Title>
            <Title>
              <div className="bold">우리 다 같이 BARO 하자</div>
            </Title>
            <PromiseBtn>
              <div className="plus">
                <img src={plus} />
              </div>
              <div>새로운 모임 제안하기</div>
            </PromiseBtn>
          </>
        )}
      </section>

      {/* 위치 정보 섹션 */}
      <section style={{ width: "100%", marginBottom: "70px" }}>
        <Title>
          <div className="bold">BARO 이곳에서</div>
          <div className="desc">
            <img src={locationWhite} alt="location icon" />
            <span>건대입구역 주변</span>
          </div>
        </Title>
      </section>
      <Navigation />
    </MainWrapper>
  );
};

export default Main;
