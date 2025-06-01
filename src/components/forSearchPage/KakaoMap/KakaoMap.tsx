import React, { useState, useEffect, useMemo } from "react";
import { CustomOverlayMap, Map, MapMarker } from "react-kakao-maps-sdk";
import debounce from "lodash/debounce";

import styled from "styled-components";

// 아이콘 import
import MarkerBlue from "../../../assets/icons/KakaoMap/location.svg";
import MarkerRed from "../../../assets/icons/KakaoMap/location_red.svg";
import Scope from "../../../assets/icons/KakaoMap/scope.svg";
import GoToButton from "../../../assets/icons/Buttons/right.svg";
import InfoWindowTail from "../../../assets/icons/KakaoMap/infowindow_tail.svg";
import NavyStar from "../../../assets/icons/KakaoMap/navyStar.svg";
import GrayStar from "../../../assets/icons/KakaoMap/grayStar.svg";
import HalfStar from "../../../assets/icons/KakaoMap/grayStar.svg";

// 커스텀훅 import
import { useGeolocation } from "../../../hook/useGeolocation/useGeolocation";
import { useKakaoAddress } from "../../../hook/useKakaoAddress/useKakaoAddress";
import { useKakaoSearch } from "../../../hook/useKakaoSearch/useKakaoSearch";
import { usePinnedPlaces } from "../../../hook/usePinnedPlaces/usePinnedPlaces";

import { getPlaces } from "../../../apis/places/getPlaces";
import { getPlacesInfo } from "../../../apis/places/getPlacesInfo";

//========================================================
const PLACES = [
  {
    placeId: 1,
    latitude: 37.5451809,
    longitude: 127.0727712,
  },
  {
    placeId: 2,
    latitude: 37.5428904,
    longitude: 127.07307,
  },
  {
    placeId: 3,
    latitude: 37.544633,
    longitude: 127.0715027,
  },
]

const PLACES_INFO = [
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

interface KakaoMapProps {
  mapHeight: string;
  setCurrentLocationName: (name: string) => void;
  searchKeyword: string;
  buttonOn: boolean;
  staticMap: boolean;
  selectedCategory: string | null;
}

export default function KakaoMap({
  mapHeight,
  setCurrentLocationName,
  searchKeyword,
  buttonOn,
  staticMap,
  selectedCategory
}: KakaoMapProps) {

  // 지도의 중심
  const [mapCenter, setMapCenter] = useState<{
    lat: number | null;
    lng: number | null;
  }>({ lat: null, lng: null });

  // 선택된 장소
  const [selectedPlace, setSelectedPlace] = useState<string | null>(null);

  // 내 현재 위치의 주소 가져오기
  const { currentLocation, error: locationError, isLoading: locationLoading } = !staticMap 
    ? useGeolocation() 
    : { currentLocation: { lat: null, lng: null }, error: null, isLoading: false };
  const { address } = useKakaoAddress({ 
    lat: currentLocation.lat, 
    lng: currentLocation.lng 
  });

  // 내 현재 위치의 마커 표시 상태
  const [showMyLocationMarker, setShowMyLocationMarker] = useState<boolean>(true);

  // 검색 키워드에 따른 위치 찾기
  const { searchLocation, placeName: searchPlaceName } = useKakaoSearch({ 
    keyword: searchKeyword 
  });

  // 데이터 로딩 상태
  const [isDataLoading, setIsDataLoading] = useState<boolean>(false);

  // API로 가져온 장소 목록과 상세정보
  const [placesData, setPlacesData] = useState<{
    placeId: number;
    latitude: number;
    longitude: number;
  }[]>([]);
  const [placesInfoData, setPlacesInfoData] = useState<{
    placeName: string;
    star: number;
    pinCount: number;
    placeAddress: string;
    placeCategories: string[];
  }[]>([]);

  // API로부터 장소 데이터 가져오기
  useEffect(() => {
    const fetchPlacesData = async () => {
      if (!currentLocation.lat || !currentLocation.lng) return;
      
      setIsDataLoading(true);
      try {
        // 카테고리 ID는 실제 사용 환경에 맞게 수정해야 함
        const placeCategoryIds = selectedCategory ? [1] : []; // 예시로 1을 사용
        
        const placesResult = await getPlaces({
          placeCategoryIds: placeCategoryIds,
          latitude: currentLocation.lat,
          longitude: currentLocation.lng
        });
        
        if (placesResult && placesResult.data) {
          const places = placesResult.data.map(place => ({
            placeId: place.placeId,
            latitude: place.latitude,
            longitude: place.longitude
          }));
          
          setPlacesData(places);
          
          // 각 장소의 상세 정보 가져오기
          const placesInfoPromises = places.map(place => 
            getPlacesInfo({ placeId: place.placeId })
          );
          
          const placesInfoResults = await Promise.all(placesInfoPromises);
          
          const placesInfo = placesInfoResults.map(result => {
            if (result && result.data) {
              return {
                placeName: result.data.placeName || "",
                star: result.data.star || 0,
                pinCount: result.data.pinCount || 0,
                placeAddress: result.data.placeAddress || "",
                placeCategories: result.data.placeCategories || []
              };
            }
            return null;
          }).filter((item): item is {
            placeName: string;
            star: number;
            pinCount: number;
            placeAddress: string;
            placeCategories: string[];
          } => item !== null);
          
          setPlacesInfoData(placesInfo);
        }
      } catch (error) {
        console.error("장소 데이터를 불러오는 중 오류가 발생했습니다:", error);
      } finally {
        setIsDataLoading(false);
      }
    };

    fetchPlacesData();
  }, [currentLocation.lat, currentLocation.lng, selectedCategory]);

  // 핀 좌표 가져오기
  const { filteredCoordinates } = usePinnedPlaces({
    places: PLACES_INFO,
    selectedCategory
  });

  // 주소가 변경되면 상위 컴포넌트에 전달
  useEffect(() => {
    if (address) {
      setCurrentLocationName(address);
    }
  }, [address, setCurrentLocationName]);

  // 검색 결과나 현재 위치가 변경되면 지도 중심 업데이트
  useEffect(() => {
    if (searchKeyword && searchLocation.lat && searchLocation.lng) {
      setMapCenter(searchLocation);
      setShowMyLocationMarker(false);
    } else if (!staticMap && currentLocation.lat && currentLocation.lng) {
      setMapCenter(currentLocation);
      setShowMyLocationMarker(true);
    }
  }, [currentLocation, searchLocation, searchKeyword, staticMap]);

  // 지도 이동 시 중심 위치 업데이트
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
    if (currentLocation.lat && currentLocation.lng) {
      setMapCenter(currentLocation);
      setShowMyLocationMarker(true);
    }
  };

  // 인포윈도우 별 렌더링
  const renderStars = (starCount: number) => {
    const maxStars = 5;
    const roundedStars = Math.round(starCount * 2) / 2;
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

  return (
    <Layout>
      {/* 로딩 상태 표시 */}
      {(locationLoading || isDataLoading) && 
        <LoadingOverlay>
          {locationLoading ? '위치 정보를 가져오는 중...' : '주변 장소 정보를 불러오는 중...'}
        </LoadingOverlay>
      }

      {/* 지도 */}
      <Map
        id="map"
        style={{ width: "100%", height: mapHeight }}
        level={4}
        isPanto={true}
        center={{
          // 기본 서울시청 좌표, 실제 위치가 있으면 해당 위치 사용
          lat: mapCenter.lat ?? 37.5665,
          lng: mapCenter.lng ?? 126.9780
        }}
        onCenterChanged={updateCenter}
        onClick={() => setSelectedPlace(null)}
      >
        {/* 현재 위치 핀 */}
        {showMyLocationMarker && currentLocation.lat && currentLocation.lng && (
          <MapMarker
            position={{
              lat: currentLocation.lat,
              lng: currentLocation.lng
            }}
            image={{
              src: MarkerBlue,
              size: { width: 24, height: 35 },
            }}
          />
        )}

        {/* 검색 위치 핀 */}
        {searchLocation.lat && searchLocation.lng && !showMyLocationMarker && (
          <MapMarker
            position={{
              lat: searchLocation.lat,
              lng: searchLocation.lng
            }}
            image={{
              src: MarkerBlue,
              size: { width: 24, height: 35 },
            }}
          />
        )}

        {/* 1km 반경 핀 마커 */}
        {placesData.map((place, index) => (
          <React.Fragment key={place.placeId}>
            <MapMarker
              key={index}
              position={{ lat: place.latitude, lng: place.longitude}}
              image={{
                src: MarkerRed,
                size: { width: 24, height: 35 },
              }}
              onClick={() => {
                const placeInfo = placesInfoData[index];
                if (placeInfo) {
                  console.log("핀 클릭:", placeInfo.placeName);
                  setSelectedPlace(selectedPlace === placeInfo.placeName ? null : placeInfo.placeName);
                  setMapCenter({ lat: place.latitude, lng: place.longitude });
                }
              }}
            />

            {/* 인포윈도우 */}
            {placesInfoData[index] && selectedPlace === placesInfoData[index].placeName && (
              <CustomOverlayMap
                position={{ lat: place.latitude, lng: place.longitude }}
                xAnchor={0.3}
                yAnchor={1.6}
              >
                <InfoWindow>
                  <div className="info_name_wrapper">
                    <div className="info_name">{placesInfoData[index].placeName}</div>
                    <img src={GoToButton} alt="핀 상세 정보" />
                  </div>
                  <div className="info_content">
                    <p className="info_stars">
                      {placesInfoData[index].star.toFixed(1)}
                      <p>{renderStars(placesInfoData[index].star)}</p>
                      ({placesInfoData[index].pinCount})
                    </p>
                    <div className="info_address">
                      {placesInfoData[index].placeAddress}
                    </div>
                    {placesInfoData[index].placeCategories.slice(0, 2).map((category, idx) => (
                      <p key={idx} className="info_category">{category}</p>
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
          </React.Fragment>
        ))}
      </Map>

      {/* 현재 사용자 위치로 이동 버튼 */}
      {buttonOn && (
        <SetCenterButton onClick={setCenterToMyPosition}>
          <img src={Scope} alt="scope icon" />
        </SetCenterButton>
      )}

      {/* 에러 메시지 표시 */}
      {locationError && <ErrorMessage>{locationError}</ErrorMessage>}
    </Layout>
  );
}

const LoadingOverlay = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(255, 255, 255, 0.8);
  padding: 16px;
  border-radius: 8px;
  z-index: 100;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
`;

const ErrorMessage = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  background: #ff6b6b;
  color: white;
  padding: 8px 16px;
  border-radius: 4px;
  font-size: 14px;
  z-index: 100;
`;

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