import React from "react";
import { useNavigate } from 'react-router-dom';

import { PlacesWrapper, PlaceWrapper, PlaceTitleWrapper, Subtitle, PlaceImageWrapper, PlaceImage, PlaceInfo } from "./Places.styles";

import GoToPlace from '../../../assets/icons/backIcon.svg'

interface PlaceProps {
  isBest: boolean;
  title: string;
  subtitle?: string;
}

const Place: React.FC<PlaceProps> = ({ isBest, title, subtitle }) => {
  const navigate = useNavigate();

  return (
    <PlaceWrapper>
      <PlaceTitleWrapper>
        <div>{title}</div>
        <button>
          {isBest && <img src={GoToPlace} alt="" onClick={() => navigate('/search/bestplace')} />}
          {/* {!isBest && <img src={GoToPlace} alt="" />} */}
        </button>
      </PlaceTitleWrapper>
      <Subtitle>
        {subtitle}
      </Subtitle>

      {isBest && <PlaceImageWrapper>
        <Place168 />
        <Place168 />
        <Place168 />
        <Place168 />
      </PlaceImageWrapper>}

      {!isBest && <PlaceImageWrapper>
        <Place340 />
        <Place340 />
        <Place340 />
        <Place340 />
      </PlaceImageWrapper>}
    </PlaceWrapper>
  );
};

export function Place168() {
  return (
    <PlaceImage>
      <img src="https://placehold.co/168" alt="Place Image" />
      <PlaceInfo>
        <div>화양동</div>
        <div>느티나무 공원</div>
      </PlaceInfo>
    </PlaceImage>
  );
};

export function Place340() {
  return (
    <PlaceImage>
      <img src="https://placehold.co/340x232" alt="Place Image" />
      <PlaceInfo>
        <div>화양동</div>
        <div>느티나무 공원</div>
      </PlaceInfo>
    </PlaceImage>
  );
};

export default function Places() {
  return (
    <PlacesWrapper>
      <Place 
        isBest={true} 
        title="BEST" 
        subtitle="좋아요를 가장 많이 받은 명소"
      />
      <Place 
        isBest={false} 
        title="비즈니스" 
        subtitle="회의와 업무에 딱 맞는 장소"  
      />
      <Place 
        isBest={false} 
        title="스터디"
        subtitle="효율적인 공부를 위한 최적의 장소"  
      />
    </PlacesWrapper>
  );
};