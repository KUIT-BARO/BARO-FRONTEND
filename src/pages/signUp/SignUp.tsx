import Container from "@shared/components/container/Container";
import SignUpInput from "./component/SignUpInput";
import * as styles from "@pages/signUp/SignUp.css"
import Button from "@shared/components/button/Button";
import { useSignUpForm } from "./hook/useSignUpForm";
import React, { useState } from "react";

export default function SignUp() {
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [emailAuthCode, setEmailAuthCode] = useState('');
  const [check, setCheck] = useState(false);
  const { handleSubmit, emailValue, passwordValue, nameValue, onSubmit, onSubmitError, onChangeEmail, onChangePassword, onChangeName, trigger } = useSignUpForm();
  const handleCheckEmail = async () => {
    const isValid = await trigger('email');
    setIsEmailValid(isValid);
  };
  const handleEmailAuthCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmailAuthCode(e.target.value);
  };
  const handleEmailAuthCodeSubmit = () => {
    if (emailAuthCode.trim() === '') {
      return;
    }
    setCheck(true);
  };

  return (
    <Container className={styles.container}>
      <form className={styles.formContainer} onSubmit={handleSubmit(onSubmit, onSubmitError)}>
        <SignUpInput title = "이메일" placeholder="이메일을 입력해주세요" button buttonText="인증" onClick={handleCheckEmail} value={emailValue} onChange={onChangeEmail} />
        {isEmailValid && <SignUpInput title = "이메일 인증" placeholder="인증번호를 입력해주세요" button buttonText="확인" value={emailAuthCode} onChange={handleEmailAuthCodeChange} onClick={handleEmailAuthCodeSubmit}/>}
        <SignUpInput title = "비밀번호" placeholder="8자리 이상 입력해주세요" button={false} value={passwordValue} onChange={onChangePassword} />
        <SignUpInput title = "이름" placeholder="사용할 이름을 입력해주세요(최대 8글자)" button={false} value={nameValue} onChange={onChangeName} />
        <Button variant={check ? "enabled" : "disabled"} size="long" text="회원가입" onClick={handleSubmit(onSubmit, onSubmitError)} />
      </form>
    </Container>
  )
}
