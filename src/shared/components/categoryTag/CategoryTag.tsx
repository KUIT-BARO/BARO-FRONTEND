import React from 'react';
import * as styles from '@shared/components/categoryTag/CategoryTag.css';
import { CATEGORIES, type CategoryType } from '@shared/constant/category';

interface CategoryTagProps {
  onTagSelected: (_category: CategoryType) => void;
}

export default function CategoryTag({ onTagSelected }: CategoryTagProps) {
  const [selected, setSelected] = React.useState<CategoryType>('ALL');

  const handleCategorySelect = (category: CategoryType) => {
    setSelected(category);
    onTagSelected(category);
  };

  return (
    <div className={styles.tagsWrapper}>
      <div className={styles.tagContainer}>
        {CATEGORIES.map((category) => {
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
