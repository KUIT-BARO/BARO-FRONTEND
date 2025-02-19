import React, { useEffect, useRef, useState } from "react";
import { Header, MainWrapper, PromiseBtn, Title } from "./Main.styles";
import { Container, Ddays, Promises, Dots, Dot } from "./Main.styles";
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

import { getHome } from "../../apis/user/getHome";

const Main = () => {
  const dummyData = [
    {
      left: 3,
      date: "11월 22일 14시 00분",
      title: "웹 개발 프로젝트 회의",
      people: "김민수 외 3명",
      location: "스타벅스 강남점",
      promiseId: 37,
    },
  ];

  const navigate = useNavigate();

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

  interface upcomingDday {
    date: string;
    name: string;
    peopleNumber: number;
    place: string;
    promiseId: number;
    purpose: string;
    timeEnd: string;
    timeStart: string;
  };
  interface upcomingPromises {
    promises: upcomingDday[];
  }
  const [homeDataName, setHomeDataName] = useState<string>('');
  const [upcomingDday, setUpcomingDday] = useState<upcomingDday>({
    date: "",
    name: "",
    peopleNumber: 0,
    place: "",
    promiseId: 0,
    purpose: "",
    timeEnd: "",
    timeStart: "",
  });
  const [upcomingPromises, setUpcomingPromises] = useState<upcomingPromises>({ promises: [] });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getHome.getHome();
        console.log("홈 데이터:", response.data.data);
        setHomeDataName(response.data.data.name);
        setUpcomingDday(response.data.data.upcomingDday);
        // setUpcomingPromises({ promises: [...response.data.data.upcomingPromises] });
        for (let i=0 ; i<response.data.data.upcomingPromises.length ; i++) {          
          upcomingPromises.promises.push(response.data.data.upcomingPromises[i]);
        }
      } catch (error) {
        console.error("홈 데이터 불러오기 실패:", error);
      }
    };
    fetchData();    

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
      {/* {Object.keys(upcomingPromises).length === 0 && (
        <img src={bigLogo} alt="big logo" className="big-logo" />
      )} */}

      <Header>
        <img src={logo} alt="logo icon" className="logo" />
        <div className="header-controls">
          <button onClick={handleLogout} className="logout-btn">
            로그아웃
          </button>
          {/* <div className="alarm-wrapper">
            <img src={alarm} alt="alarm icon" />
            <span></span>
          </div> */}
        </div>
      </Header>

      <section style={{ width: "100%" }}>
        {(upcomingDday != null) ? (
          <>
            {/* <Title>
              <div>{homeDataName}님의 다가올 약속</div>
              <div className="bold">마케팅 관리 팀플</div>
              <div className="desc">
                <img src={personWhite} alt="person icon" />
                <span>김지환 외 2명</span>
              </div>
            </Title> */}
            <Container>
              <Ddays>
                D-{Math.ceil((new Date(upcomingDday.date).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24))}
              </Ddays>
              <PromiseContainer
                left={Math.ceil((new Date(upcomingDday.date).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24))}
                date={upcomingDday.date}
                people={`${homeDataName} 외 ${upcomingDday.peopleNumber - 1}명`}
                location={upcomingDday.place}
                title={upcomingDday.name}
              />
              {/* <Promises ref={scrollRef}> */}
                {upcomingPromises.promises.map((item, index) => (
                  <PromiseContainer
                    key={index}
                    left={Math.ceil((new Date(item.date).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24))}
                    date={item.date}

                    people={`${homeDataName} 외 ${item.peopleNumber - 1}명`}
                    location={item.place}
                    title={item.name}

                  />
                ))}
              {/* </Promises> */}
              {/* <Dots>
                {upcomingPromises.promises.map((_, index) => (
                  <Dot key={index} active={index === activeIndex} />
                ))}
              </Dots> */}
            </Container>
          </>
        ) : (
          <>
            {/* <Title style={{ marginBottom: "280px" }}> */}
            <Title>
              <div className="name">{homeDataName} 님</div>
              <div className="bold">지금은 예정된 약속이 없어요</div>
              <img className="noteImg" src="https://placehold.co/148x154" alt="note image" />
            </Title>
            {/* <Title>
              <div className="bold">우리 다 같이 BARO 하자</div>
            </Title> */}
            <PromiseBtn onClick={() => navigate("/suggest")}>
              <div className="plus">
                <img src={plus} />
              </div>
              <div>새로운 약속 만들기</div>
            </PromiseBtn>
          </>
        )}
      </section>

      {/* 위치 정보 섹션 */}
      {/* <section style={{ width: "100%", marginBottom: "70px" }}>
        <Title>
          <div className="bold">BARO 이곳에서</div>
          <div className="desc">
            <img src={locationWhite} alt="location icon" />
            <span>건대입구역 주변</span>
          </div>
        </Title>
      </section> */}

      <Navigation />
    </MainWrapper>
  );
};

export default Main;
