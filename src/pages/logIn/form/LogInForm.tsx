import {useLoginForm,type LoginFormValues}  from '@pages/logIn/form/useLoginForm';
import InputBar from '@shared/components/inputBar/InputBar';
import Text from '@shared/components/text/Text';
import * as styles from '@pages/logIn/LogIn.css';
import { useState } from 'react';
import Button from '@shared/components/button/Button';

const LoginForm = () => {
  const { register, handleSubmit, formState: { errors }, setFocus, watch } = useLoginForm();
  const [checked, setChecked] = useState(false);
  const emailValue = watch('email');
  const passwordValue = watch('password');

  const onSubmit = (data: LoginFormValues) => {
    console.log('Form submitted with data:', data);
  };
  const onSubmitError = () => {
    if (errors.email) {
      setFocus('email');
      console.log(errors.email.message);
    } else if (errors.password) {
      setFocus('password');
      console.log(errors.password.message);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit, onSubmitError)} className={styles.inputContainer}>
      <InputBar
        leftIcon="email"
        placeholder="이메일 입력"
        backgroundColor="blue6"
        value={emailValue}
        props={register('email')}
      />
      <InputBar
        leftIcon="password"
        placeholder="비밀번호 입력"
        backgroundColor="blue6"
        value={passwordValue}
        props={{
          ...register('password'),
          type: 'password',
        }} />

      <div className={styles.autoBox}>
        <input
          type="checkbox"
          onChange={(e) => setChecked(e.target.checked)}
          className={styles.square({ checked })}
        />
        <Text tag="body_14" color="blue1">자동 로그인 설정</Text>
      </div>
      <div className={styles.buttonContainer}>
        <Button text="로그인" size='long' variant='enabled' onClick={handleSubmit(onSubmit, onSubmitError)} />
        <div className={styles.signUpButton}>
          <div className={styles.line}/>
          <Text tag="body_14" color="blue1">회원가입</Text>
          <div className={styles.line}/>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;