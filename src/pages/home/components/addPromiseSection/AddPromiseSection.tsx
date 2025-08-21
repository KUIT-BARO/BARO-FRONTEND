import { useNavigate } from 'react-router-dom';
import * as styles from '@pages/home/components/addPromiseSection/AddPromiseSection.css';
import Text from '@shared/components/text/Text';
import { IcPlusBlue } from '@svg/index';

export default function AddPromiseSection() {
  const navigate = useNavigate();

  const handleCreatePromise = () => {
    navigate('/promise');
  };

  return (
    <button
      type='button'
      onClick={handleCreatePromise}
      className={styles.addPromiseButton}
    >
      <IcPlusBlue className={styles.addIcon} />
      <Text tag='body_17' color='black'>새로운 약속 제안하기</Text>
    </button>
  )
}
