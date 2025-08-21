import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import * as styles from '@pages/pinAdd/PinAdd.css';
import Header from '@shared/components/header/Header';
import Container from '@shared/components/container/Container';
import PinPlaceInput from './component/pinPlaceInput/PinPlaceInput';
import PinPhotoInput from '@pages/pinAdd/component/pinPhotoInput/PinPhotoInput';
import PinReviewInput from '@pages/pinAdd/component/pinReviewInput/PinReviewInput';
import PinScoreInput from '@pages/pinAdd/component/pinScoreInput/PinScoreInput';
import PinCategoriesInput from '@pages/pinAdd/component/pinCategoriesInput/PinCategoriesInput';
import ConfirmPopup from './component/confirmPopup/ConfirmPopup';
import { IcArrowLeft } from '@svg/index';
import {
  usePinAddValidation,
  convertToApiData
} from '@pages/pinAdd/hook/usePinAddValidation';

export default function PinAdd() {
  const navigate = useNavigate();
  const { register, watch, formState: { errors }, setValue, handleSubmit } = usePinAddValidation();
  const [showConfirmPopup, setShowConfirmPopup] = useState(false);

  const watchedValues = watch();

  const handleBackClick = () => {
    navigate(-1);
  };

  const handleSubmitClick = () => {
    handleSubmit(() => {
      setShowConfirmPopup(true);
    })();
  };

  const handleConfirmClick = () => {
    const apiData = convertToApiData(watchedValues);
    console.info(apiData);
    setShowConfirmPopup(false);
    navigate('/explore');
  };

  const handleConfirmClose = () => {
    setShowConfirmPopup(false);
  };

  return (
    <div className={styles.pinAddWrapper}>
      <Header
        background='baroblue'
        leftIcon={() => (
          <IcArrowLeft onClick={handleBackClick} />
        )}
        text='핀 추가'
        rightIcon={() => (
          <button
            type='button'
            className={styles.submitButton}
            onClick={handleSubmitClick}
          >
            등록
          </button>
        )}
      />
      <Container className={styles.pinReviewContainer}>
        <PinPlaceInput />
        <PinPhotoInput />
        <PinReviewInput register={register} watch={watch} errors={errors} setValue={setValue}
        />
      </Container>
      <PinScoreInput setValue={setValue} watch={watch} errors={errors} />
      <PinCategoriesInput setValue={setValue} watch={watch} errors={errors} />

      <ConfirmPopup
        open={showConfirmPopup}
        onClose={handleConfirmClose}
        onConfirm={handleConfirmClick}
        score={watchedValues.score}
        max={5}
        categories={watchedValues.categories}
      />
    </div>
  );
}
