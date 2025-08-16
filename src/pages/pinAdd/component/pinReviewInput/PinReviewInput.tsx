import type { UseFormReturn } from 'react-hook-form';
import * as styles from '@pages/pinAdd/component/pinReviewInput/PinReviewInput.css';
import type { PinAddFormData } from '@pages/pinAdd/hook/usePinAddValidation';
import Text from '@shared/components/text/Text';

interface PinReviewInputProps {
  form: UseFormReturn<PinAddFormData>;
}

export default function PinReviewInput({ form }: PinReviewInputProps) {
  const { register, watch, formState: { errors } } = form;
  const reviewValue = watch('review');
  const maxLength = 150;

  return (
    <div className={styles.reviewInputWrapper}>
      <textarea
        {...register('review')}
        className={styles.reviewTextarea}
        placeholder='장소에 관한 리뷰를 작성해주세요...'
        maxLength={maxLength}
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
