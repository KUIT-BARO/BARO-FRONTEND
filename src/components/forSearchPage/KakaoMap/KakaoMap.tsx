import React, { useState, useEffect, useMemo } from "react";
import { CustomOverlayMap, Map, MapMarker } from "react-kakao-maps-sdk";
import debounce from "lodash/debounce";

import styled from "styled-components";

import MarkerBlue from "../../../assets/icons/KakaoMap/location.svg";
import MarkerRed from "../../../assets/icons/KakaoMap/location_red.svg";
import Scope from "../../../assets/icons/KakaoMap/scope.svg";
import GoToButton from "../../../assets/icons/Buttons/right.svg";
import InfoWindowTail from "../../../assets/icons/KakaoMap/infowindow_tail.svg";
import NavyStar from "../../../assets/icons/KakaoMap/navyStar.svg";
import GrayStar from "../../../assets/icons/KakaoMap/grayStar.svg";
import HalfStar from "../../../assets/icons/KakaoMap/grayStar.svg";

//========================================================
const PINNED_PLACES = [
  {
    placeName: "카페온더플랜 건대점",
    star: 3.6,
    pinCount: 12,
    placeAddress: "서울 광진구 능동로 161 1층",
    placeCategories: ["스터디", "북적이는"]
  },
  {
    placeName: "KU 시네마테크",
    star: 3.3,
    pinCount: 12,
    placeAddress: "서울 광진구 능동로 120 건국대학교 예술문화대학 지하 108호",
    placeCategories: ["여가 생활", "아늑한"]
  },
  {
    placeName: "오마카세 오사이초밥 건대본점",
    star: 4.3,
    pinCount: 12,
    placeAddress: "서울 광진구 군자로 14 1층",
    placeCategories: ["여가 생활", "아늑한", "북적이는"]
  }
]
//========================================================

// interface KakaoMapProps {
//   mapHeight: string;
//   // currentLocation: { lat: number; lng: number };
//   setCurrentLocationName: (name: string) => void;
//   searchKeyword: string;
//   buttonOn: boolean;
//   staticMap: boolean;
// }

export default function KakaoMap({
  mapHeight,
  // currentLocation,
  setCurrentLocationName,
  searchKeyword,
  buttonOn,
  staticMap,
  selectedCategory
}) {

  // 지도의 중심
  const [mapCenter, setMapCenter] = useState<{
    lat: number | null;
    lng: number | null;
  }>({ lat: null, lng: null });

  // 내 현재 위치
  const [currentLocation, setCurrentLocation] = useState<{
    lat: number | null;
    lng: number | null;
  }>({ lat: null, lng: null });

  // 검색 장소 위치
  const [searchLocation, setSearchLocation] = useState<{
    lat: number | null;
    lng: number | null;
  }>({ lat: null, lng: null });

  useEffect(() => {
    const fetchLocation = () => {
      if (navigator.geolocation) {

        // 내 현재 위치의 위도, 경도 계산
        navigator.geolocation.getCurrentPosition(
          // Success
          ({ coords }) => {
            const { latitude: lat, longitude: lng } = coords;
            setMapCenter({ lat, lng });
            setCurrentLocation({ lat, lng });
            setSearchLocation({ lat, lng });
            console.log("현재 좌표:", lat, lng);

            // 현재 위치의 주소명 가져오기
            const geocoder = new window.kakao.maps.services.Geocoder();
            geocoder.coord2Address(lng, lat, (result, status) => {
              if (status === window.kakao.maps.services.Status.OK) {
                if (result[0].road_address) {
                  setCurrentLocationName(result[0].road_address.building_name);
                  console.log("현재 위치:", result[0].road_address.building_name, result);
                } else {
                  setCurrentLocationName(result[0].address.address_name);
                  console.log("현재 위치:", result[0].address.address_name, result);
                }
              }
            });
          },
          // Error
          (error) => {
            console.error("위치 정보를 가져오는데 실패했습니다:", error);
          },
          // Options
          {
            enableHighAccuracy: true,
            maximumAge: 60000,
          }
        );

        // 현재 위치 실시간 추적
        const watchId = navigator.geolocation.watchPosition(
          ({ coords }) => {
            const { latitude: lat, longitude: lng } = coords;
            setCurrentLocation({ lat, lng });
            setSearchLocation({ lat, lng });
          }
        );
      } else {
        console.error("이 브라우저에서는 Geolocation이 지원되지 않습니다.");
      }
    };

    if (!staticMap) {
      fetchLocation();
    };

    if (searchKeyword) {
      const ps = new window.kakao.maps.services.Places();
      ps.keywordSearch(searchKeyword, (data, status) => {
        if (status === window.kakao.maps.services.Status.OK) {
          const firstResult = data[0];
          console.log("검색 위치1:", firstResult.place_name, data);

          const newCenter = {
            lat: Number(firstResult.y),
            lng: Number(firstResult.x),
          };
          setMapCenter(newCenter);
          setSearchLocation({ ...newCenter });
        } else {
          alert("검색 결과가 없습니다.");
        }
      });
    }
  }, [staticMap, searchKeyword]);

  // 검색 키워드로 지도 중심 이동
  // useEffect(() => {
  //   if (searchKeyword) {
  //     const ps = new window.kakao.maps.services.Places();
  //     ps.keywordSearch(searchKeyword, (data, status) => {
  //       if (status === window.kakao.maps.services.Status.OK) {
  //         const firstResult = data[0];
  //         console.log("검색 위치1:", firstResult.place_name, data);

  //         const newCenter = {
  //           lat: Number(firstResult.y),
  //           lng: Number(firstResult.x),
  //         };
  //         setMapCenter(newCenter);
  //         setSearchLocation({ ...newCenter });
  //       } else {
  //         alert("검색 결과가 없습니다.");
  //       }
  //     });
  //   }
  // }, [searchKeyword]);


  // 지도 이동 시 중심 위치 업데이트
  // 다시 원래 센터로 맵 돌아오기 위함
  const updateCenter = useMemo(() =>
    debounce((map: kakao.maps.Map) => {
      setMapCenter({
        lat: map.getCenter().getLat(),
        lng: map.getCenter().getLng(),
      });
    }, 500),[]
  );

  // 원래 위치로 지도 중심 이동
  const setCenterToMyPosition = () => {
    setMapCenter(currentLocation);
    setSearchLocation(currentLocation);
  };

  //=========================================================

  const [pinnedCoordinates, setPinnedCoordinates] = useState<Array<{
    placeName: string;
    lat: number;
    lng: number;
  }>>([]);

  const [selectedPlace, setSelectedPlace] = useState<string | null>(null);

  // 선택된 카테고리에 따라 필터링된 핀 목록 생성
  const filteredPinnedCoordinates = useMemo(() => {
    if (!selectedCategory || selectedCategory === "ALL") {
      return pinnedCoordinates;
    }
    
    return pinnedCoordinates.filter(coord => {
      const place = PINNED_PLACES.find(p => p.placeName === coord.placeName);
      return place?.placeCategories.includes(selectedCategory);
    });
  }, [pinnedCoordinates, selectedCategory]);

  // PINNED_PLACE의 주소를 좌표로 변환
  useEffect(() => {
    const ps = new window.kakao.maps.services.Places();

    const fetchCoordinates = async () => {
      const coordinates = await Promise.all(
        PINNED_PLACES.map((place) => {
          return new Promise<{ placeName: string; lat: number; lng: number; } | null>((resolve) => {
            ps.keywordSearch(place.placeName, (data, status) => {
              if (status === window.kakao.maps.services.Status.OK) {
                resolve({
                  placeName: place.placeName,
                  lat: Number(data[0].y),
                  lng: Number(data[0].x),
                })
              } else {
                resolve(null);
              }
            })
          })
        })
      )
      setPinnedCoordinates(coordinates.filter(coord => coord !== null));
    }
    fetchCoordinates();
  }, []);
  //=========================================================
  
  // 인포윈도우 별 렌더링
  const renderStars = (starCount: number) => {
    const maxStars = 5;
    const roundedStars = Math.round(starCount * 2) / 2; // 0.5 단위로 반올림
    const fullStars = Math.floor(roundedStars);
    const hasHalfStar = roundedStars % 1 !== 0;
    const stars: JSX.Element[] = [];

    // 꽉 찬 별
    for (let i = 0; i < fullStars; i++) {
      stars.push(<img key={`navy-${i}`} src={NavyStar} alt="navy star icon" />);
    }

    // 반 별
    if (hasHalfStar) {
      stars.push(<img key="half" src={HalfStar} alt="half star icon" />);
    }

    // 빈 별
    const emptyStars = maxStars - fullStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<img key={`gray-${i}`} src={GrayStar} alt="gray star icon" />);
    }

    return stars;
  };
  //=========================================================

  return (
    <Layout>
      {/* 카카오맵 */}
      <Map
        id="map"
        style={{ width: "100%", height: mapHeight }}
        level={4}
        isPanto={true}
        center={{
          lat: mapCenter.lat ?? 37.5665,
          lng: mapCenter.lng ?? 126.9780
        }}
        onCenterChanged={updateCenter}
        onClick={() => setSelectedPlace(null)}
      >
        {/* 현재 위치 핀 */}
        <MapMarker
          position={{
            lat: searchLocation.lat ?? 37.5665,
            lng: searchLocation.lng ?? 126.9780
          }}
          image={{
            src: MarkerBlue,
            size: { width: 24, height: 35 },
          }}
        />

        {/* 1km 반경 핀 */}
        {filteredPinnedCoordinates.map((place, index) => (
          <>
            <MapMarker
              key={index}
              position={{ lat: place.lat, lng: place.lng}}
              image={{
                src: MarkerRed,
                size: { width: 24, height: 35 },
              }}
              onClick={() => {
                console.log("핀 클릭:", place.placeName);
                setSelectedPlace(selectedPlace === place.placeName ? null : place.placeName);
                setMapCenter({ lat: place.lat, lng: place.lng });
              }}
            />

            {/* 인포윈도우 */}
            {selectedPlace === place.placeName && (
              <CustomOverlayMap
                position={{ lat: place.lat, lng: place.lng }}
                xAnchor={0.3}
                yAnchor={1.6}
              >
                <InfoWindow>
                  <div className="info_name_wrapper">
                    <div className="info_name">{place.placeName}</div>
                    <img src={GoToButton} alt="" />
                  </div>
                  <div className="info_content">
                    <p className="info_stars">
                      {(PINNED_PLACES.find(p => p.placeName === place.placeName)?.star || 0).toFixed(1)}
                      <p>{renderStars(PINNED_PLACES.find(p => p.placeName === place.placeName)?.star || 0)}</p>
                      ({PINNED_PLACES.find(p => p.placeName === place.placeName)?.pinCount || 0})
                    </p>
                    <div className="info_address">
                      {PINNED_PLACES.find(p => p.placeName === place.placeName)?.placeAddress || 0}
                    </div>
                    {PINNED_PLACES.find(p => p.placeName === place.placeName)?.placeCategories.slice(0, 2).map((category, index) => (
                      <p key={index} className="info_category">{category}</p>
                    ))}
                  </div>
                </InfoWindow>
                <img 
                  src={InfoWindowTail} 
                  alt="tail" 
                  style={{
                    position: "absolute",
                    top: "130%",
                    left: "30%",
                    transform: "translate(-50%, -100%)",
                    zIndex: -1,
                  }}
                />
              </CustomOverlayMap>
            )}
          </>
        ))}
      </Map>

      {/* 현재 사용자 위치로 이동 버튼 */}
      {buttonOn && (
        <SetCenterButton onClick={setCenterToMyPosition}>
          <img src={Scope} alt="scope icon" />
        </SetCenterButton>
      )}
    </Layout>
  );
}

const Layout = styled.div`
  position: relative;
  width: 100%;
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
  opacity: 0.9;

  img {
    margin-top: 3px;
  }
`;

const InfoWindow = styled.div`
  width: 148px;
  height: 100px;
  background-color: #ffffff;
  border-radius: 10px;
  font-size: 11px;
  z-index: 2;
  // margin-bottom: 130px;

  .info_name_wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #EDF1FF;
    padding: 15px 13px 7px 11px;
    border-radius: 10px 10px 0 0;

    img {
      cursor: pointer;
      height: 16px;
      margin-bottom: 2px;
    }
  }

  .info_name {
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    letter-spacing: -0.3px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 110px;
  }

  .info_content {
    padding: 6px 0px 0px 10px;
  }

  .info_stars {
    display: flex;
    align-items: center;
    gap: 3px;
    
    img {
      width: 12px;
      height: 12px;
      margin-right: 2px;
    }
  }

  .info_address {
    margin: 4px 0px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 130px;
  }

  .info_category {
    border-radius: 15px;
    background-color: #5175FF;
    padding: 3px 6px 2px 6px;
    display: inline-block;
    margin-right: 4px;
    color: white;
    font-size: 10px;
  }
`;