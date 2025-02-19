import React, { useState } from "react";
import {
  Wrapper,
  FixedButton,
  Section,
} from "../../../../assets/styles/Steps.styles";

import { Category, CategoryWrapper, SubTitle } from "./Popup.styles";

import Search from "../../../../components/Search/Search";
import Button from "../../../../components/Button/Button";
import Location from "../../../../components/Location/Location";
import KakaoMap from "../../../../components/forSearchPage/KakaoMap/KakaoMap";
import Desc from "../../../../components/Desc/Desc";
type LocationType = {
  placeId: number;
  name: string;
  address: string;
  star: number;
  comments: number;
  categories: string[];
};
export default function Popup({
  locations,
  placeId,
  setPlaceId,
  closePopup,
}: {
  locations: LocationType[];
  placeId: number[];
  setPlaceId: React.Dispatch<React.SetStateAction<number[]>>;
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
  const [categoryCount, setCategoryCount] = useState<Record<string, number>>(
    {}
  );

  const toggleCategory = (category: string) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(
        selectedCategories.filter((item) => item !== category)
      );
      setCategoryCount((prev) => ({
        ...prev,
        [category]: Math.max(0, (prev[category] || 1) - 1),
      }));
    } else {
      setSelectedCategories([...selectedCategories, category]);
      setCategoryCount((prev) => ({
        ...prev,
        [category]: (prev[category] || 0) + 1,
      }));
    }
  };

  // 🔹 장소 선택을 placeId 배열로 관리
  const toggleLocation = (locationId: number) => {
    setPlaceId(
      (prev) =>
        prev.includes(locationId)
          ? prev.filter((id) => id !== locationId) // 선택 해제
          : [...prev, locationId] // 선택 추가
    );
  };

  return (
    <>
      <Wrapper style={{ marginBottom: "60px" }}>
        <Search placeholder={"건대입구, #아기자기한"} />
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
        <KakaoMap mapHeight="33vh" />
        <Section>
          <SubTitle>검색 결과</SubTitle>
          <Desc>가고 싶은 장소를 선택해주세요</Desc>
          {locations.map((location) => (
            <Location
              key={location.placeId}
              location={location.name}
              address={location.address}
              star={location.star}
              comments={location.comments}
              categories={location.categories}
              isSelected={placeId.includes(location.placeId)} // 선택 여부 체크
              onClick={() => toggleLocation(location.placeId)}
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
