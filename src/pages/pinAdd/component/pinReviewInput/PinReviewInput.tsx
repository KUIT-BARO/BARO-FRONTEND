import type { UseFormRegister, UseFormWatch, FormState } from 'react-hook-form';
import * as styles from '@pages/pinAdd/component/pinReviewInput/PinReviewInput.css';
import type { PinAddFormData } from '@pages/pinAdd/hook/usePinAddValidation';
import Text from '@shared/components/text/Text';

interface PinReviewInputProps {
  register: UseFormRegister<PinAddFormData>;
  watch: UseFormWatch<PinAddFormData>;
  errors: FormState<PinAddFormData>['errors'];
}

export default function PinReviewInput({ register, watch, errors }: PinReviewInputProps) {
  const reviewValue = watch('review');
  const maxLength = 150;

  return (
    <div className={styles.reviewInputWrapper}>
      <textarea
        {...register('review')}
        className={styles.reviewTextarea}
        placeholder='장소에 관한 리뷰를 작성해주세요...'
        wrap='soft'
      />
      {errors.review && (
        <Text tag='body_10' color='red1' className={styles.errorMessage}>
          {errors.review.message}
        </Text>
      )}
      <div className={styles.characterCount}>
        {reviewValue?.length || 0} / {maxLength}
      </div>
    </div>
  );
}
