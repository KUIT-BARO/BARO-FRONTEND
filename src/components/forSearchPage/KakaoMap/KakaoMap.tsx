import React, { useState, useEffect, useMemo } from 'react';
import { Map, MapMarker } from "react-kakao-maps-sdk";
import { debounce } from 'lodash';

import styled from "styled-components";

import Location from '../../../assets/icons/location.svg';

interface KakaoMapProps {
  mapHeight: string;
  currentLoaction: {
    lat: number;
    lng: number;
  }
};

export default function KakaoMap({ mapHeight, currentLoaction }: KakaoMapProps) { 
  
  const [center, setCenter] = useState<{ 
    lat: number; 
    lng: number 
  }>({ lat: 33.450701, lng: 126.570667 });
  
  const [position, setPosition] = useState<{ 
    lat: number; 
    lng: number 
    isPanto: boolean;
  }>({ lat: 33.450701, lng: 126.570667, isPanto: false });

  useEffect(() => {
    if (navigator.geolocation) {
      // 현재 위치 가져오기
      navigator.geolocation.getCurrentPosition((pos) => {
        const lat = pos.coords.latitude;
        const lng = pos.coords.longitude;
        setCenter({ lat, lng });

        const geocoder = new window.kakao.maps.services.Geocoder();
        geocoder.coord2Address(lng, lat, (result, status) => {
          if (status === window.kakao.maps.services.Status.OK) {
            if (result[0].road_address) {
              console.log(result[0].road_address.building_name);
              console.log(result);
              
            }
            else {
              console.log(result[0].address.address_name);
            }              
          }
        });
      }, (error) => { console.error('위치 정보를 가져오는데 실패했습니다:', error); });

      navigator.geolocation.watchPosition((pos) => {
        setPosition({
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
          isPanto: true
        });
      });
    } 
    else {
      console.error('이 브라우저에서는 Geolocation이 지원되지 않습니다.');
    }
  }, []);

  const setCenterToMyPosition = () => {
    setCenter(position);
  };
  const updateCenterWhenMapMoved = useMemo(() => 
    debounce((map: kakao.maps.Map) => {
      console.log('Map Center :', map.getCenter());
      setCenter({
        lat: map.getCenter().getLat(),
        lng: map.getCenter().getLng()
      });
    }, 500), []
  );

  return (
    <MapWrapper>
      <Map 
        id="map" 
        center={center}
        style={{ width: "100%", height: mapHeight }}
        level={4}
        onCenterChanged={updateCenterWhenMapMoved}
      >
        <MapMarker 
          position={position}
          image={{
            src: Location,
            size: { width: 24, height: 35 },
          }}
        />
      </Map>
      <SetCenterButton onClick={setCenterToMyPosition} />
    </MapWrapper>
  );
};

const MapWrapper = styled.div`
  position: relative;
`;

const SetCenterButton = styled.button`
  position: absolute;
  width: 30px;
  height: 30px;
  background-color: gray;
  // background-color: #FFFFFF;
  border: none;
  cursor: pointer;
  z-index: 10;
  top: 21px;
  left: 20px;
  border-radius: 5px;
  opacity: 0.5;
`;