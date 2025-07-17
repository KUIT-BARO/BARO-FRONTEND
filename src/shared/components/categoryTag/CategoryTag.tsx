import React from 'react';
import * as styles from '@shared/components/categoryTag/CategoryTag.css';
import { CATEGORIES, type CategoryType } from '@shared/constant/category';

const DEFAULT_CATEGORY = 'ALL' as const;
type ExtendedCategoryType = typeof DEFAULT_CATEGORY | CategoryType;

interface CategoryTagProps {
  onTagSelected: (_category: ExtendedCategoryType) => void;
}

export default function CategoryTag({ onTagSelected }: CategoryTagProps) {
  const [selected, setSelected] = React.useState<ExtendedCategoryType>(DEFAULT_CATEGORY);

  const handleCategorySelect = (category: ExtendedCategoryType) => {
    setSelected(category);
    onTagSelected(category);
  };

  const allCategories: ExtendedCategoryType[] = [DEFAULT_CATEGORY, ...CATEGORIES];

  return (
    <div className={styles.tagsWrapper}>
      <div className={styles.tagContainer}>
        {allCategories.map((category) => {
          const isActive = selected === category;

          return (
            <button
              key={category}
              onClick={() => handleCategorySelect(category)}
              className={styles.tagButton({ active: isActive })}
            >
              {category}
            </button>
          );
        })}
      </div>
    </div>
  );
}
