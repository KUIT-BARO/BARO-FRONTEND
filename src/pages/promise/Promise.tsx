import Container from '@shared/components/container/Container';
import Header from '@shared/components/header/Header';
import { IcNavArrow, IcNavX } from '@svg/index';
import { useNavigate, useSearchParams } from 'react-router-dom';

import Step1 from './step/Step1';
import Step2 from './step/Step2';
import Step3 from './step/Step3';
import * as styles from './Promise.css';
import Progress from './components/Progress';
import usePromiseInput from './hook/usePromiseInput';

export default function PromiseManage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const step = searchParams.get('step') || 'PROMISE_NAME';

  const { formData, errors, handleChange, handleSubmit, onSubmit } = usePromiseInput();
  const STEP_CONFIG = {
    PROMISE_NAME: {
      progress: 33,
      component: (
        <Step1
          formData={formData}
          handleChange={handleChange}
          error={errors.promiseName?.message || ''}
          navigate={navigate}
          isValid={!errors.promiseName}
        />
      ),
    },
    PROMISE_DETAIL: {
      progress: 66,
      component: (
        <Step2
          navigate={navigate}
          formData={formData}
          handleChange={handleChange}
          error={errors.suggestedStartDate?.message || ''}
          isValid={!errors.suggestedStartDate}
        />
      ),
    },
    PROMISE_DEADLINE: {
      progress: 100,
      component: (
        <Step3
          navigate={navigate}
          formData={formData}
          handleChange={handleChange}
          error={errors.promiseDeadline?.message || ''}
          isValid={!errors.promiseDeadline}
        />
      ),
    },
  };

  const getProgressValue = () => {
    return (
      STEP_CONFIG[step as keyof typeof STEP_CONFIG]?.progress || STEP_CONFIG.PROMISE_NAME.progress
    );
  };

  const renderStepContent = () => {
    return (
      STEP_CONFIG[step as keyof typeof STEP_CONFIG]?.component || STEP_CONFIG.PROMISE_NAME.component
    );
  };

  const handleClickLeftIcon = () => {
    navigate(-1);
  };
  const handleClickRightIcon = () => {
    navigate('/');
  };

  return (
    <div className={styles.promiseWrapper}>
      <Header
        leftIcon={IcNavArrow}
        rightIcon={IcNavX}
        onClickLeftIcon={handleClickLeftIcon}
        onClickRightIcon={handleClickRightIcon}
      />

      <Container>
        <Progress progress={getProgressValue()} />
        {renderStepContent()}
      </Container>
    </div>
  );
}
