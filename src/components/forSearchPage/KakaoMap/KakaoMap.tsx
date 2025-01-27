import React, { useState, useEffect } from 'react';
import { Map, MapMarker } from "react-kakao-maps-sdk";

import Location from '../../../assets/icons/location.svg';

interface KakaoMapProps {
  mapHeight: string;
};

export default function KakaoMap({ mapHeight }: KakaoMapProps) { 
  
  const [position, setPosition] = useState<{ 
    lat: number; 
    lng: number 
    isPanto: boolean;
  } | null>(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setPosition({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
            isPanto: true,
          });
        },
        (error) => {
          console.error('위치 정보를 가져오는데 실패했습니다:', error);
        }
      );
    } else {
      console.error('이 브라우저에서는 Geolocation이 지원되지 않습니다.');
    }
  }, []);

  return (
    <>
      <Map 
        id="map" 
        center={position || { lat: 33.450701, lng: 126.570667 }}
        style={{ width: "100%", height: mapHeight }}
        level={4}
      >
        {position && (
          <MapMarker 
            position={position}
            image={{
              src: Location,
              size: { width: 24, height: 35 },
            }}
          />
        )}
      </Map>
    </>
  );
}
