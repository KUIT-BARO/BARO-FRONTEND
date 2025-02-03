import React, { useState } from "react";
import {
  Wrapper,
  FixedButton,
  Section,
} from "../../../../assets/styles/Steps.styles";

import {
  Category,
  CategoryWithNumber,
  CategoryWrapper,
  SubTitle,
} from "./Popup.styles";

import Search from "../../../../components/Search/Search";
import Button from "../../../../components/Button/Button";
import Location from "../../../../components/Location/Location";
import KakaoMap from "../../../../components/forSearchPage/KakaoMap/KakaoMap";

type LocationType = {
  name: string;
  address: string;
  star: number;
  comments: number;
  categories: string[];
};

export default function Popup({
  selectedLocations,
  setSelectedLocations,
  closePopup,
}: {
  selectedLocations: LocationType[];
  setSelectedLocations: React.Dispatch<React.SetStateAction<LocationType[]>>;
  closePopup: (locations: LocationType[]) => void;
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

  const locations = [
    {
      name: "스타벅스 건대입구점",
      address: "서울 광진구 화양동 5-47",
      star: 2,
      comments: 12,
      categories: ["아기자기한", "아늑한", "귀여운"],
    },
    {
      name: "스타벅스 건대역점",
      address: "서울 광진구 화양동 5-47",
      star: 5,
      comments: 12,
      categories: ["아기자기한", "아늑한", "귀여운"],
    },
    {
      name: "투썸플레이스 강남역점",
      address: "서울 광진구 화양동 5-47",
      star: 5,
      comments: 12,
      categories: ["아기자기한", "아늑한", "귀여운"],
    },
  ];

  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [categoryCount, setCategoryCount] = useState<Record<string, number>>(
    {}
  );

  const toggleCategory = (category: string) => {
    if (selectedCategories.includes(category)) {
      // 키워드 선택 해제
      setSelectedCategories(
        selectedCategories.filter((item) => item !== category)
      );
      setCategoryCount((prev) => ({
        ...prev,
        [category]: Math.max(0, (prev[category] || 1) - 1), // 카운트 감소
      }));
    } else {
      // 키워드 선택
      setSelectedCategories([...selectedCategories, category]);
      setCategoryCount((prev) => ({
        ...prev,
        [category]: (prev[category] || 0) + 1, // 카운트 증가
      }));
    }
  };

  const toggleLocation = (location: LocationType) => {
    const exists = selectedLocations.find((loc) => loc.name === location.name);
    if (exists) {
      setSelectedLocations(
        selectedLocations.filter((loc) => loc.name !== location.name)
      );
    } else {
      setSelectedLocations([...selectedLocations, location]);
    }
  };

  return (
    <>
      <Wrapper style={{ marginBottom: "60px" }}>
        <Search placeholder={"건대입구, #아기자기한"} />

        <Section
          style={{
            background: "#EDF1FF",
            padding: "10px 0",
            minHeight: "100px",
          }}
        >
          <SubTitle style={{ color: "#5175FF" }}>함께 고른 키워드</SubTitle>
          <CategoryWrapper>
            {Object.entries(categoryCount).map(
              ([category, count]) =>
                count > 0 && (
                  <CategoryWithNumber key={category}>
                    <div className="number">{count}</div>
                    {category}
                  </CategoryWithNumber>
                )
            )}
          </CategoryWrapper>
        </Section>
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
        <KakaoMap mapHeight="350px" />
        <Section>
          <SubTitle>검색 결과</SubTitle>
          {locations.map((location, idx) => (
            <Location
              key={idx}
              location={location.name}
              address={location.address}
              star={location.star}
              comments={location.comments}
              categories={location.categories}
              isSelected={selectedLocations.some(
                (loc) => loc.name === location.name
              )}
              onClick={() => toggleLocation(location)}
            />
          ))}
        </Section>
      </Wrapper>
      <FixedButton>
        <Button onClick={() => closePopup(selectedLocations)}>
          장소 선택 완료
        </Button>
      </FixedButton>
    </>
  );
}
