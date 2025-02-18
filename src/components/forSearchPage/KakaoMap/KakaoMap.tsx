import React, { useState, useEffect, useMemo } from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import { debounce } from "lodash";

import styled from "styled-components";

import Location from "../../../assets/icons/location.svg";
import Scope from "../../../assets/icons/스코프.svg";

interface KakaoMapProps {
  mapHeight: string;
  currentLocation: { lat: number; lng: number };
  setCurrentLocationName: (name: string) => void;
  searchKeyword: string;
  buttonOn: boolean;
}

export default function KakaoMap({
  mapHeight,
  currentLocation,
  setCurrentLocationName,
  searchKeyword,
  buttonOn,
}: KakaoMapProps) {
  // 지도 중심
  const [center, setCenter] = useState<{
    lat: number;
    lng: number;
  }>({ lat: 33.450701, lng: 126.570667 });

  // 내 현재 위치
  const [position, setPosition] = useState<{
    lat: number;
    lng: number;
    isPanto: boolean;
  }>({ lat: 33.450701, lng: 126.570667, isPanto: false });

  const [searchPosition, setSearchPosition] = useState<{
    lat: number;
    lng: number;
  }>({ lat: 33.450701, lng: 126.570667 });

  useEffect(() => {
    const fetchLocation = () => {
      if (navigator.geolocation) {
        // 현재 위치 가져오기
        navigator.geolocation.getCurrentPosition(
          (pos) => {
            const lat = pos.coords.latitude;
            const lng = pos.coords.longitude;
            setCenter({ lat, lng });
            setPosition({ lat, lng, isPanto: true });
            setSearchPosition({ lat, lng });
            console.log("Current Position:", lat, lng);
            // 현재 위치의 주소명 가져오기
            const geocoder = new window.kakao.maps.services.Geocoder();
            geocoder.coord2Address(lng, lat, (result, status) => {
              if (status === window.kakao.maps.services.Status.OK) {
                if (result[0].road_address) {
                  console.log(result[0].road_address.building_name, result);
                  setCurrentLocationName(result[0].road_address.building_name);
                } else {
                  console.log(result[0].address.address_name);
                  // console.log(result[0].address.place_name);
                  setCurrentLocationName(result[0].address.address_name);
                }
              }
            });
          },
          (error) => {
            console.error("위치 정보를 가져오는데 실패했습니다:", error);
          },
          {
            enableHighAccuracy: true,
            // timeout: 5000,
            maximumAge: 60000,
          }
        );

        // 현재 위치 실시간 추적
        navigator.geolocation.watchPosition((pos) => {
          const lat = pos.coords.latitude;
          const lng = pos.coords.longitude;
          setPosition({ lat, lng, isPanto: true });
          setSearchPosition({ lat, lng });
        });
      } else {
        console.error("이 브라우저에서는 Geolocation이 지원되지 않습니다.");
      }
    };
    fetchLocation();
  }, []);

  // 검색 키워드로 지도 중심 이동
  useEffect(() => {
    if (searchKeyword) {
      console.log("Search Keyword:", searchKeyword);

      const ps = new window.kakao.maps.services.Places();
      ps.keywordSearch(searchKeyword, (data, status) => {
        if (status === window.kakao.maps.services.Status.OK) {
          const firstResult = data[0];
          console.log("검색 위치 : ", position, data);

          const newCenter = {
            lat: Number(firstResult.y),
            lng: Number(firstResult.x),
          };
          setCenter(newCenter);
          setSearchPosition({ ...newCenter });
        } else {
          alert("검색 결과가 없습니다.");
        }
      });
    }
  }, [searchKeyword]);

  // 내 현재 위치로 지도 중심 이동
  const setCenterToMyPosition = () => {
    setCenter(position);
    setSearchPosition(position);
  };

  // 지도 이동 시 중심 위치 업데이트
  const updateCenterWhenMapMoved = useMemo(
    () =>
      debounce((map: kakao.maps.Map) => {
        // console.log('Map Center :', map.getCenter());
        setCenter({
          lat: map.getCenter().getLat(),
          lng: map.getCenter().getLng(),
        });
      }, 500),
    []
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
          position={searchPosition}
          image={{
            src: Location,
            size: { width: 24, height: 35 },
          }}
        />
      </Map>
      {buttonOn && (
        <SetCenterButton onClick={setCenterToMyPosition}>
          <img src={Scope} alt="scope icon" />
        </SetCenterButton>
      )}
    </MapWrapper>
  );
}

const MapWrapper = styled.div`
  position: relative;
`;

const SetCenterButton = styled.button`
  position: absolute;
  padding: 0;
  align-items: center;
  width: 30px;
  height: 30px;
  background-color: gray;
  background-color: #ffffff;
  border: none;
  cursor: pointer;
  z-index: 10;
  top: 21px;
  left: 20px;
  border-radius: 5px;
  opacity: 0.7;

  img {
    margin-top: 3px;
  }
`;
