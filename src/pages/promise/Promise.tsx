import Container from '@shared/components/container/Container';
import Header from '@shared/components/header/Header';
import { IcNavArrow, IcNavX } from '@svg/index';
import { useNavigate, useSearchParams } from 'react-router-dom';
import Step1 from '@/pages/promise/step/Step1';
import Step2 from '@/pages/promise/step/Step2';
import Step3 from '@/pages/promise/step/Step3';
import Step4 from '@/pages/promise/step/Step4';
import * as styles from '@/pages/promise/Promise.css';
import Progress from '@/pages/promise/components/Progress';
import usePromiseInput from '@/pages/promise/hook/usePromiseInput';
import { STEP } from '@/pages/promise/constant/step';

export default function PromiseManage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const step = (searchParams.get('step') || STEP.PROMISE_NAME) as keyof typeof STEP;

  const {
    promiseName,
    dateSelection,
    suggestedRegion,
    promiseDeadline,
    handlePlaceNameChange,
    handleDeadlineChange,
    handleRegionChange,
    onSubmit,
    handleDateClick,
  } = usePromiseInput();

  const STEP_CONFIG = {
    [STEP.PROMISE_NAME]: {
      progress: 25,
      component: (
        <Step1
          promiseName={promiseName}
          handlePlaceNameChange={handlePlaceNameChange}
          navigate={navigate}
        />
      ),
    },
    [STEP.PROMISE_DATE]: {
      progress: 50,
      component: (
        <Step2
          navigate={navigate}
          dateSelection={dateSelection}
          handleDateClick={handleDateClick}
        />
      ),
    },
    [STEP.PROMISE_LOCATION]: {
      progress: 75,
      component: (
        <Step3
          navigate={navigate}
          suggestedRegion={suggestedRegion}
          handleRegionChange={handleRegionChange}
        />
      ),
    },
    [STEP.PROMISE_DEADLINE]: {
      progress: 100,
      component: (
        <Step4
          navigate={navigate}
          promiseDeadline={promiseDeadline}
          handleDeadlineChange={handleDeadlineChange}
          onSubmit={onSubmit}
          suggestStartDate={dateSelection.suggestedStartDate}
        />
      ),
    },
  };

  const getProgressValue = () => {
    return STEP_CONFIG[step]?.progress || STEP_CONFIG[STEP.PROMISE_NAME].progress;
  };

  const renderStepContent = () => {
    return STEP_CONFIG[step]?.component || STEP_CONFIG[STEP.PROMISE_NAME].component;
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
