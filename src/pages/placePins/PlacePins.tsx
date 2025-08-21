import { useNavigate, useSearchParams } from 'react-router-dom';
import * as styles from '@pages/placePins/PlacePins.css';
import Header from '@shared/components/header/Header';
import PlacePin from '@pages/placePins/component/PlacePin';
import { IcArrowBlueLeft } from '@svg/index';
import { mockupExplore } from '@pages/explore/mockup';

export default function PlacePins() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const placeName = searchParams.get('placeName');

  const handleBackClick = () => {
    navigate(-1);
  };

  const handlePinClick = (item: typeof mockupExplore[0]) => {
    const queryParams = new URLSearchParams({
      placeName: placeName || '',
      userName: item.pin.userName || '',
      score: item.pin.score?.toString() || '0',
      categories: item.categories.join(',')
    });
    navigate(`/pin/${item.pinId}?${queryParams.toString()}`);
  }

  return (
    <div className={styles.placePinsWrapper}>
      <Header
        background='blue0'
        leftIcon={() => <IcArrowBlueLeft onClick={handleBackClick} />}
        text={placeName || ''}
      />
      <div className={styles.placePinsContainer}>
        {mockupExplore.map((item, index) => (
          <PlacePin
            key={index}
            pin={item.pin}
            categories={item.categories}
            handlePinClick={() => handlePinClick(item)}
          />
        ))}
      </div>
    </div>
  );
}
