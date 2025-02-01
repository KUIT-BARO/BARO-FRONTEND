import React from "react";
import { Header, MainWrapper, Title } from "./Main.styles";
import Navigation from "../../components/Navigation/Navigation";
const Main = () => {
  return (
    <MainWrapper>
      <Header></Header>
      <section>
        <Title></Title>
      </section>
      <Navigation />
    </MainWrapper>
  );
};

export default Main;
