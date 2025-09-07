import type { UseFormSetValue, UseFormWatch, FormState } from 'react-hook-form';
import * as styles from '@pages/pinAdd/component/pinCategoriesInput/PinCategoriesInput.css';
import { CATEGORIES } from '@shared/constant/category';
import Text from '@shared/components/text/Text';
import Button from '@shared/components/button/Button';
import type { PinAddFormData } from '@pages/pinAdd/hook/usePinAddValidation';

interface PinCategoriesInputProps {
  setValue: UseFormSetValue<PinAddFormData>;
  watch: UseFormWatch<PinAddFormData>;
  errors: FormState<PinAddFormData>['errors'];
}

export default function PinCategoriesInput({ setValue, watch, errors }: PinCategoriesInputProps) {
  const selectedCategories = watch('categories');
  const MAX = 5;

  const handleCategoryClick = (category: string) => {
    const newCategories = selectedCategories.includes(category)
      ? selectedCategories.filter(c => c !== category)
      : selectedCategories.length < MAX
        ? [...selectedCategories, category]
        : selectedCategories;

    setValue('categories', newCategories, { shouldValidate: true });
  };

  return (
    <div className={styles.categoriesInputWrapper}>
      <div className={styles.categoriesTitle}>
        <Text tag='body_17' color='baroBlue'>
          카테고리로 장소를 설명해주세요
        </Text>
        <Text tag='body_14' color='gray3'>
          (최대 {MAX}개)
        </Text>
      </div>
      {errors.categories && (
        <Text tag='body_10' color='red1'>
          {errors.categories.message}
        </Text>
      )}
      <div className={styles.categoriesGrid}>
        {CATEGORIES
          .filter(category => category !== 'ALL')
          .map((category) => (
            <Button
              key={category}
              variant={
                selectedCategories.includes(category)
                  ? 'enabled'
                  : 'outlined'
              }
              size='category'
              text={category}
              onClick={() => handleCategoryClick(category)}
            />
          ))}
      </div>
    </div>
  );
}
