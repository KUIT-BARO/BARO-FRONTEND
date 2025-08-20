import Text from '@shared/components/text/Text';
import * as styles from '@/pages/promise/step/Step.css';
import Button from '@shared/components/button/Button';
import { vars } from '@shared/styles/theme.css';
import type { Step4Props } from '@/pages/promise/types/Step';
import { useState } from 'react';
import PopupOverlay from '@shared/components/popupOverlay/PopupOverlay';
import { PROMISE_STATUS } from '@shared/constant/promiseStatus';
import PromiseDetail from '@shared/components/promiseDetail/PromiseDetail';
import type { Place } from '@shared/components/kakaoMap/types/latLng';
import type { NavigateFunction } from 'react-router-dom';

interface ConfirmPopupProps {
  promiseName: string;
  dateSelection: {
    suggestedStartDate: string;
    suggestedEndDate: string | null;
  };
  suggestedRegion: Place[];
  navigate: NavigateFunction;
  setConfirmPopup: (value: boolean) => void;
  promiseDeadline: string;
  onSubmit: () => void;
  suggestStartDate: string;
}

export default function Step4({
  promiseName,
  dateSelection,
  suggestedRegion,
  navigate,
  promiseDeadline,
  handleDeadlineChange,
  onSubmit,
  suggestStartDate,
}: Step4Props) {
  const [confirmPopup, setConfirmPopup] = useState(false);
  const isFormValid = () => {
    return promiseDeadline.length > 0 && promiseDeadline <= suggestStartDate;
  };
  const handleNextBtn = () => {
    setConfirmPopup(true);
  };
  return (
    <>
      {confirmPopup && (
        <ConfirmPopup
          navigate={navigate}
          promiseName={promiseName}
          dateSelection={dateSelection}
          suggestedRegion={suggestedRegion}
          promiseDeadline={promiseDeadline}
          onSubmit={onSubmit}
          suggestStartDate={suggestStartDate}
          setConfirmPopup={setConfirmPopup}
        />
      )}
      <div className={styles.stepWrapper}>
        <section className={styles.stepSectionWrapper}>
          <div className={styles.textWrapper}>
            <Text tag="body_bold_25">약속 마감일</Text>
            <Text tag="body_17" color="gray4">
              약속 마감일을 설정해주세요.
            </Text>
          </div>
          <input
            type="date"
            name="promiseDeadline"
            value={promiseDeadline}
            onChange={handleDeadlineChange}
          />
          {promiseDeadline > suggestStartDate && (
            <Text tag="body_14" color="red1">
              약속 마감일은 약속 시작일 이전여야 합니다.
            </Text>
          )}
        </section>
        <div className={styles.buttonWrapper}>
          <Button
            variant={isFormValid() ? 'enabled' : 'disabled'}
            size="long"
            text="약속 생성"
            onClick={handleNextBtn}
            backgroundColor={vars.color.baroBlue}
          />
        </div>
      </div>
    </>
  );
}

const ConfirmPopup = ({
  promiseName,
  dateSelection,
  suggestedRegion,
  navigate,
  onSubmit,
  setConfirmPopup,
  promiseDeadline,
}: ConfirmPopupProps) => {
  const handleClose = () => {
    setConfirmPopup(false);
  };

  const handleConfirm = () => {
    setConfirmPopup(false);
    onSubmit();
    navigate('/');
  };

  return (
    <PopupOverlay onClose={handleClose} position="bottom">
      <div className={styles.confirmContainer}>
        <div className={styles.textWrapper}>
          <Text tag="body_bold_25">약속 정보를 확인해주세요.</Text>
          <Text tag="body_17" color="gray4">
            입력하신 내용이 모두 정확한지 체크해주세요.
          </Text>
        </div>
        <div className={styles.confirmDetailWrapper}>
          <PromiseDetail
            status={PROMISE_STATUS.PENDING}
            promiseName={promiseName}
            suggestedStartDate={dateSelection.suggestedStartDate}
            suggestedRegion={
              suggestedRegion.length > 1
                ? `${suggestedRegion[0].place_name} 외 ${suggestedRegion.length - 1}곳`
                : suggestedRegion[0].place_name
            }
            untilVoteDate={Math.ceil(
              (new Date(dateSelection.suggestedStartDate).getTime() -
                new Date(promiseDeadline).getTime()) /
                (1000 * 60 * 60 * 24)
            )}
            suggestedEndDate={
              dateSelection.suggestedEndDate
                ? dateSelection.suggestedEndDate
                : dateSelection.suggestedStartDate
            }
            promiseId={0}
            showStatusBadge={false}
          />
        </div>

        <div className={styles.confirmButtonWrapper}>
          <Button
            variant="enabled"
            size="long"
            text="약속 생성"
            onClick={handleConfirm}
            backgroundColor={vars.color.baroBlue}
          />
          <Button
            variant="outlined"
            size="long"
            text="수정하기"
            onClick={handleClose}
            backgroundColor={vars.color.baroBlue}
          />
        </div>
      </div>
    </PopupOverlay>
  );
};
