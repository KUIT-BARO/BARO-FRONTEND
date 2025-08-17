import { useNavigate } from 'react-router-dom';
import * as styles from '@pages/pinDetail/PinDetail.css';
import Header from '@shared/components/header/Header';
import Container from '@shared/components/container/Container';
import Text from '@shared/components/text/Text';
import PinFooter from '@pages/pinDetail/component/PinFooter';
import { IcArrowLeft } from '@svg/index';

export default function PinDetail() {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <div className={styles.pinDetailWrapper}>
      <Header
        background='baroblue'
        leftIcon={() => <IcArrowLeft onClick={handleBackClick} />}
        text='서울상상나라'
      />
      <Container className={styles.pinDetailContainer}>
        <img src='' alt='핀 장소 이미지' className={styles.pinPlaceImage} />
        <Text tag='body_16' color='white'>
          분위기가 너무 좋아서 오래 머물고 싶어지는 카페였어요. 창가 자리에서 햇빛을 받으며 책을 읽기 딱 좋았습니다.
        </Text>
      </Container>
      <PinFooter />
    </div>
  );
}
