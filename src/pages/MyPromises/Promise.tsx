import React from "react";

import { Layout, Title, Content, Status } from "./Promise.styles.tsx";

import Brace from "../../assets/icons/MyPromisesPage/brace.svg";

import Vote from "../../assets/icons/MyPromisesPage/voteBlue.svg";
import LocationBlue from "../../assets/icons/MyPromisesPage/locationBlue.svg";
import DateBlue from "../../assets/icons/MyPromisesPage/dateBlue.svg";

import Gavel from "../../assets/icons/MyPromisesPage/gavelYellow.svg";
import LocationYellow from "../../assets/icons/MyPromisesPage/locationYellow.svg";
import DateYellow from "../../assets/icons/MyPromisesPage/dateYellow.svg";

import Megaphone from "../../assets/icons/MyPromisesPage/megaPhoneRed.svg";
import LocationRed from "../../assets/icons/MyPromisesPage/locationRed.svg";
import DateRed from "../../assets/icons/MyPromisesPage/dateRed.svg";

interface PropsType {
  color: string;
  title: string;
  info: string;
  location: string;
  date: string;
}

export default function Promise({ 
  color,
  title,
  info,
  location,
  date
 }: PropsType) {

  return (
    <Layout>
      <Title color={color}>
        <div>{title}</div>
        <img src={Brace} alt="" />
      </Title>
      <Content>
        <div className="info">
          <img 
            src={
              color === 'blue' ? Vote :
              color === 'yellow' ? Gavel :
              color === 'red' ? Megaphone : ''
            } 
            alt="inco icon" 
          />
          <div>{info}</div>
        </div>
        <div className="location">
          <img 
            src={
              color === 'blue' ? LocationBlue :
              color === 'yellow' ? LocationYellow :
              color === 'red' ? LocationRed : ''
            } 
            alt="inco icon" 
          />
          <div>{location}</div>
        </div>
        <div className="date">
          <img 
            src={
              color === 'blue' ? DateBlue :
              color === 'yellow' ? DateYellow :
              color === 'red' ? DateRed : ''
            } 
            alt="inco icon" 
          />
          <div>{date}</div>
        </div>
      </Content>
      <Status color={color}>
        { color === 'blue' ? '미정' : 
          color === 'yellow' ? '투표' : 
          color === 'red' ? '확정' : ''}
      </Status>
    </Layout>
  );
};