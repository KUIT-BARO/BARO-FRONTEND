import { useState } from 'react';
import * as styles from '@pages/explore/Explore.css';
import CategoryTag from '@shared/components/categoryTag/CategoryTag';
import type { CategoryType } from '@shared/constant/category';
import KakaoMap from '@shared/components/kakaoMap/KakaoMap';
import { MAP_SIZE } from '@shared/components/kakaoMap/constant/mapSize';
import { mockupPinData } from '@shared/components/kakaoMap/mockup';

export default function ExploreContent() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>('ALL');

  const handleCategorySelected = (category: CategoryType) => {
    setSelectedCategory(category);
  };

  // 선택된 카테고리에 따라 Pin Data 필터링
  const filteredPinData = selectedCategory === 'ALL'
    ? mockupPinData
    : mockupPinData.filter(pin =>
      pin.pinCategories.includes(selectedCategory)
    );

  return (
    <div className={styles.exploreContent}>
      <CategoryTag
        onTagSelected={handleCategorySelected}
      />
      <KakaoMap
        size={MAP_SIZE.SMALL}
        pinData={filteredPinData}
      />
    </div>
  );
}
