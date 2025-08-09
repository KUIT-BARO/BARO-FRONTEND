import {useLogInForm}  from '@pages/logIn/hook/useLogInForm';
import InputBar from '@shared/components/inputBar/InputBar';
import Text from '@shared/components/text/Text';
import * as styles from '@pages/logIn/LogIn.css';
import { useState } from 'react';
import Button from '@shared/components/button/Button';

export default function LoginForm() {
  const { register, handleSubmit, onSubmit, onSubmitError, emailValue, passwordValue, isValid } = useLogInForm();
  const [checked, setChecked] = useState(false);


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
        <Button text="로그인" size='long' variant={isValid ? 'enabled' : 'disabled'} onClick={handleSubmit(onSubmit, onSubmitError)}/>
        <div className={styles.signUpButton}>
          <div className={styles.line}/>
          <Text tag="body_14" color="blue1">회원가입</Text>
          <div className={styles.line}/>
        </div>
      </div>
    </form>
  );
};
