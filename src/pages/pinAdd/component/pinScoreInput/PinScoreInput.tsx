import type { UseFormSetValue, UseFormWatch, FormState } from 'react-hook-form';
import * as styles from '@pages/pinAdd/component/pinScoreInput/PinScoreInput.css';
import Text from '@shared/components/text/Text';
import { IcStarFill, IcStarNone } from '@svg/index';
import type { PinAddFormData } from '@pages/pinAdd/hook/usePinAddValidation';

interface PinScoreInputProps {
  setValue: UseFormSetValue<PinAddFormData>;
  watch: UseFormWatch<PinAddFormData>;
  errors: FormState<PinAddFormData>['errors'];
}

export default function PinScoreInput({ setValue, watch, errors }: PinScoreInputProps) {
  const score = watch('score');

  const handleStarClick = (starIndex: number) => {
    setValue('score', starIndex, { shouldValidate: true });
  };

  return (
    <div className={styles.scoreInputWrapper}>
      <div className={styles.scoreTitle}>
        <Text tag='body_17' color='baroBlue'>
          별점을 남겨보세요
        </Text>
        {errors.score && (
          <Text tag='body_10' color='red1'>
            {errors.score.message}
          </Text>
        )}
      </div>
      <div className={styles.starsContainer}>
        {Array.from({ length: 5 }, (_, index) => index + 1).map((starIndex) => (
          <button
            key={starIndex}
            type="button"
            className={styles.starButton}
            onClick={() => handleStarClick(starIndex)}
          >
            {score >= starIndex ? (
              <IcStarFill width={32} height={32} />
            ) : (
              <IcStarNone width={32} height={32} />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
