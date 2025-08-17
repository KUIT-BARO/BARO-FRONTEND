import * as styles from '@pages/placePins/component/PlacePin.css';
import Text from '@shared/components/text/Text';
import Stars from '@shared/components/stars/Stars';
import Category from '@shared/components/category/Category';
import { type PinResponseDTO } from 'api/data-contracts';
import type { CategoryType } from '@shared/constant/category';

interface PlacePinProps {
  pin: PinResponseDTO;
  categories: CategoryType[];
  handlePinClick: () => void;
}

export default function PlacePin({ pin, categories, handlePinClick }: PlacePinProps) {
  return (
    <div className={styles.placePinWrapper} onClick={handlePinClick}>
      <div className={styles.userWrapper}>
        <img src={pin.profileImage} alt='유저 프로필' />
        <Text tag='body_14'>{pin.userName}</Text>
      </div>
      <div className={styles.scoreWrapper}>
        <Text tag='body_14'>{pin.score}</Text>
        <Stars score={pin.score ?? 0} size='SMALL' />
      </div>
      <Text tag='body_14' color='gray3'>
        {pin.placeName}
      </Text>
      <div className={styles.categoryWrapper}>
        {categories?.map((category) => (
          <Category key={category} text={category} />
        ))}
      </div>
    </div>
  );
}
