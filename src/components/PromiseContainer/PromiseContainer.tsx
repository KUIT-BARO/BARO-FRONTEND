import React from "react";
import { Container, PromiseWrapper } from "./PromiseContainer.styles";

import person from "../../assets/icons/person.svg";
import locationIcon from "../../assets/icons/location.svg";
interface PromiseContainerProps {
  left: number;
  date: string;
  people: string;
  location: string;
  title: string;
}
const PromiseContainer = ({
  left,
  date,
  people,
  location,
  title,
}: PromiseContainerProps) => {
  return (
    <Container>
      <div className="d-day">D-{left}</div>
      <PromiseWrapper>
        <div className="header">
          <div className="d-day">D-{left}</div>
          <div className="bold">{date}</div>
        </div>
        <div className="main">
          <div className="title">{title}</div>
          <div className="desc">
            <img alt="people-icon" src={person} />
            <span>{people}</span>
          </div>
          <div className="desc">
            <img alt="location-icon" src={locationIcon} />
            <span>{location}</span>
          </div>
        </div>
      </PromiseWrapper>
    </Container>
  );
};

export default PromiseContainer;
