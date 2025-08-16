import { useNavigate } from 'react-router-dom';
import * as styles from '@pages/pinAdd/component/pinPlaceInput/PinPlaceInput.css';
import { IcPinLocWhite } from '@svg/index';
import Text from '@shared/components/text/Text';

export default function PinPlaceInput() {
  const navigate = useNavigate();

  const handlePlaceInputClick = () => {
    navigate('/');
  }

  return (
    <button
      type='button'
      onClick={handlePlaceInputClick}
      className={styles.placeInputWrapper}
    >
      <IcPinLocWhite className={styles.placeInputIcon} />
      <Text tag='body_17' color='blue6'>현 위치</Text>
    </button>
  );
}
