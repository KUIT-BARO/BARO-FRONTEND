import Container from '@shared/components/container/container';
import Header from '@shared/components/header/Header';
import { IcNavArrow, IcNavX } from '@svg/index';
import { useNavigate, useParams } from 'react-router-dom';
import Step1 from './components/Step1';
import Step2 from './components/Step2';
import Step3 from './components/Step3';

export default function PromiseManage() {
  const navigate = useNavigate();

  const { step } = useParams<{ step: string }>();

  const renderStepContent = () => {
    switch (step) {
      case 'step1':
        return <Step1 />;
      case 'step2':
        return <Step2 />;
      case 'step3':
        return <Step3 />;
      default:
        return <Step1 />;
    }
  };

  const onClickLeftIcon = () => {
    navigate(-1);
  };
  const onClickRightIcon = () => {
    navigate('/');
  };

  return (
    <>
      <Header
        leftIcon={IcNavArrow}
        rightIcon={IcNavX}
        onClickLeftIcon={onClickLeftIcon}
        onClickRightIcon={onClickRightIcon}
      />
      <Container>{renderStepContent()}</Container>
    </>
  );
}
