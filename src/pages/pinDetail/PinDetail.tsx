import { useNavigate, useSearchParams } from 'react-router-dom';
import * as styles from '@pages/pinDetail/PinDetail.css';
import Header from '@shared/components/header/Header';
import Text from '@shared/components/text/Text';
import PinFooter from '@pages/pinDetail/component/PinFooter';
import { IcArrowLeft } from '@svg/index';

export default function PinDetail() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const handleBackClick = () => {
    navigate(-1);
  };

  const placeName = searchParams.get('placeName') || '';
  const userName = searchParams.get('userName') || '';
  // const review = searchParams.get('review') || '';
  const score = parseInt(searchParams.get('score') || '0');

  return (
    <div className={styles.pinDetailWrapper}>
      <Header
        background='baroblue'
        leftIcon={() => <IcArrowLeft onClick={handleBackClick} />}
        text={placeName}
      />
      <div className={styles.pinDetailContainer}>
        <img src='' alt='핀 장소 이미지' className={styles.pinPlaceImage} />
        <Text tag='body_16' color='white'>
          {/* {review} */}
          분위기가 너무 좋아서 오래 머물고 싶어지는 카페였어요. 창가 자리에서 햇빛을 받으며 책을 읽기 딱 좋았습니다.
        </Text>
      </div>
      <PinFooter userName={userName} score={score} />
    </div>
  );
}
