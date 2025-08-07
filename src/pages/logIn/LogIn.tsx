import { useState } from "react";
import Container from "@shared/components/container/Container";
import Text from "@shared/components/text/Text";
import InputBar from "@shared/components/inputBar/InputBar";
import Button from "@shared/components/button/Button";
import { IcLogo } from "@svg/index";
import * as styles from "@pages/logIn/LogIn.css";

export default function LogIn() {
  const [checked, setChecked] = useState(false);
  return (
    <Container className={styles.container}>
      <IcLogo />
      <Text color="blue1" tag="body_17" className={styles.subTitle}>BARO에 오신 것을 환영합니다.</Text>
      <div className={styles.inputContainer}>
        <InputBar leftIcon="email" placeholder="이메일 입력" backgroundColor="blue6" />
        <InputBar leftIcon="password" placeholder="비밀번호 입력" backgroundColor="blue6" />
        <div className={styles.autoBox}>
          <input type="checkbox" onChange={(e) => setChecked(e.target.checked)} className={styles.square({ checked })} />
          <Text tag="body_14" color="blue1">자동 로그인 설정</Text>
        </div>
      </div>
      <div className={styles.buttonContainer}>
        <Button text="로그인" size='long' variant='enabled' />
        <div className={styles.signUpButton}>
          <div className={styles.line}/>
          <Text tag="body_14" color="blue1">회원가입</Text>
          <div className={styles.line}/>
        </div>
      </div>
    </Container>
  );
}
