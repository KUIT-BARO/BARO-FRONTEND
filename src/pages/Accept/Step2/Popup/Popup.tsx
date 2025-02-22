import React, { useState, useEffect } from "react";
import {
  Wrapper,
  FixedButton,
  Section,
} from "../../../../components/Steps/Steps.styles";

import { Category, CategoryWrapper, SubTitle } from "./Popup.styles";

import Search from "../../../../components/Search/Search";
import Button from "../../../../components/Button/Button";
import Location from "../../../../components/Location/Location";
import KakaoMap from "../../../../components/forSearchPage/KakaoMap/KakaoMap";
import Desc from "../../../../components/Desc/Desc";

type LocationType = {
  id: number;
  placeName: string;
  latitude: number;
  longitude: number;
  address: string;
  star: number;
  comments: number;
  categories: string[];
};

export default function Popup({
  locations,
  places,
  setPlaces,
  closePopup,
}: {
  locations: LocationType[];
  places: LocationType[];
  setPlaces: React.Dispatch<React.SetStateAction<LocationType[]>>;
  closePopup: () => void;
}) {
  const categorys: string[] = [
    "아기자기한",
    "깔끔한",
    "모던한",
    "빈티지한",
    "럭셔리한",
    "힙한",
    "밝은",
    "어두운",
    "따뜻한",
    "시원한",
    "아늑한",
  ];

  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [searchKeyword, setSearchKeyword] = useState<string>("");
  const [mapSearchKeyword, setMapSearchKeyword] = useState<string>("");
  const [searchResults, setSearchResults] = useState<LocationType[]>([]);
  const [mapCenter, setMapCenter] = useState<{ lat: number; lng: number }>({
    lat: 37.5665, // 기본값: 서울 중심
    lng: 126.978,
  });

  // 🔹 랜덤 평점, 리뷰 수, 카테고리 생성 함수
  const getRandomRating = () => (Math.random() * 2 + 3).toFixed(1); // ⭐ 3.0 ~ 5.0
  const getRandomComments = () => Math.floor(Math.random() * 196) + 5; // 💬 5 ~ 200
  const getRandomCategories = () => {
    const shuffled = categorys.sort(() => 0.5 - Math.random()); // 배열 섞기
    return shuffled.slice(0, Math.floor(Math.random() * 3) + 2); // 2~4개 선택
  };

  // 🔹 카테고리 필터링
  const toggleCategory = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((item) => item !== category)
        : [...prev, category]
    );
  };

  // 🔹 장소 선택을 places 배열로 관리
  const toggleLocation = (location: LocationType) => {
    setPlaces(
      (prev) =>
        prev.some((place) => place.id === location.id)
          ? prev.filter((place) => place.id !== location.id) // 선택 해제
          : [...prev, location] // 선택 추가
    );
  };

  // 🔹 Kakao API에서 검색 결과 가져오기
  const handleSearch = () => {
    if (!searchKeyword) return;

    setMapSearchKeyword(searchKeyword); // Enter 입력 시 KakaoMap에 전달

    const ps = new window.kakao.maps.services.Places();
    ps.keywordSearch(searchKeyword, (data, status) => {
      if (status === window.kakao.maps.services.Status.OK) {
        const newResults = data.map((place, index) => {
          const existingLocation = locations.find(
            (loc) => loc.placeName === place.place_name
          );

          return (
            existingLocation || {
              id: index + locations.length + 1, // 고유 ID 부여
              placeName: place.place_name,
              latitude: Number(place.y),
              longitude: Number(place.x),
              address: place.address_name || "주소 정보 없음",
              star: parseFloat(getRandomRating()), // ⭐ 랜덤 평점
              comments: getRandomComments(), // 💬 랜덤 리뷰 개수
              categories: getRandomCategories(), // 🏷️ 랜덤 카테고리
            }
          );
        });

        setSearchResults(newResults);
        // 🔹 첫 번째 검색 결과 위치를 지도 중심으로 설정
        if (newResults.length > 0) {
          setMapCenter({
            lat: newResults[0].latitude,
            lng: newResults[0].longitude,
          });
        }
      } else {
        setSearchResults([]);
      }
    });
  };

  // 🔹 선택된 키워드(카테고리)에 맞춰 장소 필터링
  const filterByCategory = (locations: LocationType[]) => {
    return selectedCategories.length > 0
      ? locations.filter((location) =>
          selectedCategories.some((category) =>
            location.categories.includes(category)
          )
        )
      : locations;
  };

  return (
    <>
      <Wrapper style={{ marginBottom: "60px" }}>
        {/* 🔹 검색창에서 Enter 입력 시 handleSearch 실행 */}
        <Search
          placeholder={"건대입구, #아기자기한"}
          value={searchKeyword}
          onChange={(e) => setSearchKeyword(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
        />
        <Section>
          <SubTitle>키워드</SubTitle>
          <CategoryWrapper>
            {categorys.map((category, idx) => (
              <Category
                key={idx}
                onClick={() => toggleCategory(category)}
                isSelected={selectedCategories.includes(category)}
              >
                {category}
              </Category>
            ))}
          </CategoryWrapper>
        </Section>

        {/* 🔹 KakaoMap - Enter 눌렀을 때만 검색어 반영 */}
        <KakaoMap
          mapHeight="33vh"
          searchKeyword={mapSearchKeyword} // Enter 입력 시만 검색 적용
          buttonOn={false}
          currentLocation={mapCenter} // 검색 결과 위치 반영
          setCurrentLocationName={() => {}}
        />

        <Desc>가고 싶은 장소를 선택해주세요</Desc>
        <Section>
          <SubTitle>검색 결과</SubTitle>

          {filterByCategory(searchResults).length > 0 ? (
            filterByCategory(searchResults).map((location) => (
              <Location
                key={location.id}
                placeName={location.placeName}
                address={location.address}
                star={location.star}
                comments={location.comments}
                categories={location.categories}
                isSelected={places.some((place) => place.id === location.id)} // 선택 여부 체크
                onClick={() => toggleLocation(location)}
              />
            ))
          ) : (
            <Desc>장소를 검색해보세요.</Desc>
          )}
        </Section>
        <Section>
          <SubTitle style={{ marginBottom: "-10px" }}>
            추천 장소 리스트
          </SubTitle>

          {filterByCategory(locations).map((location) => (
            <Location
              key={location.id}
              placeName={location.placeName}
              address={location.address}
              star={location.star}
              comments={location.comments}
              categories={location.categories}
              isSelected={places.some((place) => place.id === location.id)} // 선택 여부 체크
              onClick={() => toggleLocation(location)}
            />
          ))}
        </Section>
      </Wrapper>
      <FixedButton>
        <Button onClick={() => closePopup()}>장소 선택 완료</Button>
      </FixedButton>
    </>
  );
}
