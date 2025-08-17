import { useNavigate } from 'react-router-dom';
import * as styles from '@pages/placePins/PlacePins.css';
import Header from '@shared/components/header/Header';
import PlacePin from '@pages/placePins/component/PlacePin';
import { IcArrowBlueLeft } from '@svg/index';
import { type PinResponseDTO, type PinListResponseDTO } from 'api/data-contracts';
import { type CategoryType } from '@shared/constant/category';

// 목업 데이터
const mockPinData: Array<{ pinId: PinListResponseDTO['pinId']; pin: PinResponseDTO; categories: CategoryType[] }> = [
  {
    pinId: 1,
    pin: {
      userName: '이지환',
      score: 3,
      placeName: '서울 광진구 화양동 5-47',
    },
    categories: ['아늑한', '키즈존', '북적이는'],
  },
  {
    pinId: 2,
    pin: {
      userName: '이지환',
      score: 2,
      placeName: '서울 광진구 화양동 5-47',
    },
    categories: ['아늑한', '키즈존', '북적이는'],
  },
];

export default function PlacePins() {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };

  const handlePinClick = (pinId: PinListResponseDTO['pinId']) => {
    navigate(`/pin/${pinId}`);
  }

  return (
    <div className={styles.placePinsWrapper}>
      <Header
        background='blue0'
        leftIcon={() => <IcArrowBlueLeft onClick={handleBackClick} />}
        text='서울상상나라'
      />
      <div className={styles.placePinsContainer}>
        {mockPinData.map((item, index) => (
          <PlacePin
            key={index}
            pin={item.pin}
            categories={item.categories}
            handlePinClick={() => handlePinClick(item.pinId)}
          />
        ))}
      </div>
    </div>
  );
}
