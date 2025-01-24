import React from "react";

import { PlacesWrapper, PlaceWrapper, PlaceTitleWrapper, Subtitle, PlaceImageWrapper,  } from "./Places.styles";

import GoToPlace from '../../../assets/icons/backIcon.svg'

interface PlaceProps {
  isBest: boolean;
  title: string;
}

const Place: React.FC<PlaceProps> = ({ isBest, title }) => {

  
  
  return (
    <PlaceWrapper>
      <PlaceTitleWrapper>
        <div>{title}</div>
        <button>
          <img src={GoToPlace} alt="" />
        </button>
      </PlaceTitleWrapper>
      {isBest && <Subtitle>
        설정한 위치에서 좋아요를 가장 많이 받은 장소입니다
      </Subtitle>}
      <PlaceImageWrapper>
        <img src="path/to/image1.jpg" alt="image1" />
        <img src="path/to/image2.jpg" alt="image2" />
        <img src="path/to/image3.jpg" alt="image3" />
        <img src="path/to/image4.jpg" alt="image4" />
      </PlaceImageWrapper>
    </PlaceWrapper>
  );
};

export default function Places() {
  return (
    <PlacesWrapper>
      <Place isBest={true} title="취향저격 베스트 장소" />
      <Place isBest={false} title="회의하기 좋은 카페" />
      <Place isBest={false} title="회식은 여기서!"/>
    </PlacesWrapper>
  );
};