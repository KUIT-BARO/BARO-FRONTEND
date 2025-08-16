import Container from "@shared/components/container/Container";
import Text from "@shared/components/text/Text";
import { IcLogo } from "@svg/index";
import * as styles from "@pages/logIn/LogIn.css";
import { useLogInForm }  from '@pages/logIn/hook/useLogInForm';
import InputBar from '@shared/components/inputBar/InputBar';
import { useState } from 'react';
import Button from '@shared/components/button/Button';

export default function LogIn() {
  const { handleSubmit, onSubmit, formData, isValid, errors, onChangeEmail, onChangePassword } = useLogInForm();
  const [checked, setChecked] = useState(false);
  return (
    <Container className={styles.container}>
      <IcLogo />
      <Text color="blue1" tag="body_17" className={styles.subTitle}>BARO에 오신 것을 환영합니다.</Text>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.inputContainer}>
        <InputBar
          leftIcon="email"
          placeholder="이메일 입력"
          backgroundColor="blue6"
          value={formData.email}
          onChange={onChangeEmail}
        />
        <Text color='red1'>{errors.email?.message}</Text>

        <InputBar
          leftIcon="password"
          placeholder="비밀번호 입력"
          backgroundColor="blue6"
          value={formData.password}
          onChange={onChangePassword}
          props={{
            type: 'password',
          }} />
        <Text color='red1'>{errors.password?.message}</Text>
        <div className={styles.autoBox}>
          <input
            type="checkbox"
            onChange={(e) => setChecked(e.target.checked)}
            className={styles.square({ checked })}
          />
          <Text tag="body_14" color="blue1">자동 로그인 설정</Text>
        </div>
        <div className={styles.buttonContainer}>
          <Button text="로그인" size='long' variant={isValid ? 'enabled' : 'disabled'} onClick={handleSubmit(onSubmit)}/>
          <div className={styles.signUpButton}>
            <div className={styles.line}/>
            <Text tag="body_14" color="blue1">회원가입</Text>
            <div className={styles.line}/>
          </div>
        </div>
      </form>
    </Container>
  )
}
