import React from 'react';
import * as styles from '@pages/pinAdd/component/confirmPopup/ConfirmPopup.css';
import PopupOverlay from '@shared/components/popupOverlay/PopupOverlay';
import Text from '@shared/components/text/Text';
import Button from '@shared/components/button/Button';
import Stars from '@shared/components/stars/Stars';
import { CATEGORIES } from '@shared/constant/category';

interface ConfirmPopupProps {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
  score: number;
  max: number;
  categories: string[];
}

export default function ConfirmPopup({
  open,
  onClose,
  onConfirm,
  score,
  max,
  categories,
}: ConfirmPopupProps): React.JSX.Element | null {
  if (!open) return null;

  return (
    <PopupOverlay
      open={open}
      onClose={onClose}
      position='bottom'
    >
      <div className={styles.popupContents}>
        <div className={styles.reviewWrapper}>
          <Text tag='body_17' color='baroBlue'>
            별점을 남겨보세요
          </Text>
          <Stars score={score} size='BIG' />
          <div className={styles.categoriesContainer}>
            <Text tag='body_17' color='baroBlue'>
              카테고리로 장소를 설명해주세요
            </Text>
            <Text tag='body_14' color='gray3'>
              (최대 {max}개)
            </Text>
          </div>
          <div className={styles.categoriesGrid}>
            {CATEGORIES
              .filter(category => category !== 'ALL')
              .map((category) => (
                <Button
                  key={category}
                  variant={categories.includes(category) ? 'enabled' : 'outlined'}
                  size='category'
                  text={category}
                />
              ))}
          </div>
        </div>
        <Button
          variant='enabled'
          size='long'
          text='확인'
          onClick={onConfirm}
        />
        <Button
          variant='white'
          size='long'
          text='수정할래요'
          onClick={onClose}
        />
      </div>
    </PopupOverlay>
  );
};
