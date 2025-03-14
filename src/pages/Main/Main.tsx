import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Layout, Header, Container, Ddays, Title, PromiseBtn } from "./Main.styles";

import Navigation from "../../components/Navigation/Navigation";
import PromiseContainer from "./PromiseContainer";

import { postAuth } from "../../apis/auth/postAuth";
import { getHome } from "../../apis/user/getHome";

import logo from "../../assets/icons/logo.svg";
import alarm from "../../assets/icons/alarm.svg";
import note from "../../assets/icons/note.svg";
import 약속잡기 from "../../assets/icons/Buttons/약속잡기.svg";

export default function Main() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await postAuth.logout();
      localStorage.removeItem("token"); // 토큰 제거
      navigate("/"); // 랜딩 페이지로 이동
    } catch (error) {
      console.error("로그아웃 실패:", error);
    }
  };

  const calculateDday = (date: string) => {
    const today = new Date();
    const promiseDate = new Date(date);
    const diffTime = promiseDate.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays > 0 ? `D-${diffDays}` : diffDays < 0 ? `D+${Math.abs(diffDays)}` : 'D-0';
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
  }
  interface upcomingPromises {
    promises: upcomingDday[];
  }
  const [homeDataName, setHomeDataName] = useState<string>("");
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
  const [upcomingPromises] = useState<upcomingPromises>({
    promises: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getHome.getHome();
        console.log("홈 데이터:", response.data.data);
        setHomeDataName(response.data.data.name);
        setUpcomingDday(response.data.data.upcomingDday);
        // setUpcomingPromises({ promises: [...response.data.data.upcomingPromises] });
        for (let i = 0; i < response.data.data.upcomingPromises.length; i++) {
          upcomingPromises.promises.push(
            response.data.data.upcomingPromises[i]
          );
        }
      } catch (error) {
        console.error("홈 데이터 불러오기 실패:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <Layout>
      <Header>
        <img className="logo" src={logo} alt="logo icon" />
        <div className="header-controls">
          <button className="logout-btn" onClick={handleLogout}>
            로그아웃
          </button>
          <div className="alarm-wrapper">
            <img src={alarm} alt="alarm icon" />
            <span></span>
          </div>
        </div>
      </Header>
      {upcomingDday ? (
        <>
          <Container>
            <Ddays>{calculateDday(upcomingDday.date)}</Ddays>
            <PromiseContainer
              left={calculateDday(upcomingDday.date)}
              date={upcomingDday.date}
              people={(upcomingDday.peopleNumber > 0) ? `${homeDataName} 외 ${upcomingDday.peopleNumber - 1}명` : `${homeDataName}`}
              location={upcomingDday.place}
              title={upcomingDday.name}
            />
          </Container>
        </>
      ) : (
        <>
          <Title>
            <div className="name">{homeDataName} 님</div>
            <div className="bold">지금은 예정된 약속이 없어요</div>
            <img className="noteImg" src={note} alt="note image" />
          </Title>
          <PromiseBtn onClick={() => navigate("/suggest")}>
            <img src={약속잡기} />
            <div>새로운 약속 제안하기</div>
          </PromiseBtn>
        </>
      )}
      <Navigation />
    </Layout>
  );
};