import Container from '@shared/components/container/Container';
import Header from '@shared/components/header/Header';
import { IcNavArrow, IcNavX } from '@svg/index';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useState } from 'react';
import Step1 from './step/Step1';
import Step2 from './step/Step2';
import Step3 from './step/Step3';
import * as styles from './Promise.css';
import Progress from './components/Progress';

export default function PromiseManage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const step = searchParams.get('step') || 'PROMISE_NAME';

  const [promiseName, setPromiseName] = useState('');

  const STEP_CONFIG = {
    step1: {
      name: 'PROMISE_NAME',
      progress: 33,
      component: (
        <Step1 navigate={navigate} promiseName={promiseName} onPromiseNameChange={setPromiseName} />
      ),
    },
    step2: {
      name: 'PROMISE_DETAIL',
      progress: 66,
      component: <Step2 navigate={navigate} />,
    },
    step3: {
      name: 'PROMISE_DEADLINE',
      progress: 100,
      component: <Step3 navigate={navigate} />,
    },
  };

  const getProgressValue = () => {
    const currentStep = Object.values(STEP_CONFIG).find(config => config.name === step);
    return currentStep?.progress || STEP_CONFIG.step1.progress;
  };

  const renderStepContent = () => {
    const currentStep = Object.values(STEP_CONFIG).find(config => config.name === step);
    return currentStep?.component || STEP_CONFIG.step1.component;
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
