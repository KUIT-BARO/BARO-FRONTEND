import React from "react";
import { Container, PromiseWrapper } from "./PromiseContainer.styles";

import person from "../../assets/icons/사람_gray.svg";
import locationIcon from "../../assets/icons/장소_gray.svg";
interface PromiseContainerProps {
  left: number;
  date: string;
  people: string;
  location: string;
  title: string;
  onClick: () => void;
}
const PromiseContainer = ({
  left,
  date,
  people,
  location,
  title,
  onClick,
}: PromiseContainerProps) => {
  return (

    <Container>
      {/* <div className="d-day">D-{left}</div> */}

      <PromiseWrapper>
        <div className="main">
          <div className="location">
            <img alt="location-icon" src={locationIcon} />
            <span>{location}</span>
          </div>
          <div className="title">{title}</div>
          <div className="bold">
            {parseInt(date.slice(5,7))}/{date.slice(8,10)} ({new Date(date).toLocaleString('ko-KR', {weekday: 'short'})})
          </div>
          <div className="desc-wrapper">
            <div className="desc">
              <img alt="people-icon" src={person} />
              <span>{people}</span>
            </div>
            <div className="d-day">D-{left}</div>
          </div>
        </div>
      </PromiseWrapper>
    </Container>
  );
};

export default PromiseContainer;
