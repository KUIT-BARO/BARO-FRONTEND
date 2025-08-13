import Container from "@shared/components/container/Container";
import SignUpInput from "./component/SignUpInput";
import * as styles from "@pages/signUp/SignUp.css"
import Button from "@shared/components/button/Button";
import { useSignUpForm } from "./hook/useSignUpForm";
import React, { useState } from "react";
import Text from "@shared/components/text/Text";

export default function SignUp() {
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [emailAuthCode, setEmailAuthCode] = useState('');
  const [emailAuthError, setEmailAuthError] = useState('');
  const [check, setCheck] = useState(false);
  const { handleSubmit, errors, emailValue, passwordValue, nameValue, onSubmit, onSubmitError, onChangeEmail, onChangePassword, onChangeName, trigger } = useSignUpForm();
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
    } else if (emailAuthCode !== 'expectedCode') {
      setEmailAuthError('인증번호가 일치하지 않습니다.');
      return;
    }
    setEmailAuthError('');
    setCheck(true);
  };
  const EMAIL_ERROR = errors.email ? <Text color="red1">{errors.email.message}</Text> : null;
  const PASSWORD_ERROR = errors.password ? <Text color="red1">{errors.password.message}</Text> : null;
  const NAME_ERROR = errors.name ? <Text color="red1">{errors.name.message}</Text> : null;
  return (
    <Container className={styles.container}>
      <form className={styles.formContainer} onSubmit={handleSubmit(onSubmit, onSubmitError)}>
        <SignUpInput title = "이메일" placeholder="이메일을 입력해주세요" button buttonText="인증" onClick={handleCheckEmail} value={emailValue} onChange={onChangeEmail} />
        {EMAIL_ERROR}
        {isEmailValid && <SignUpInput title = "이메일 인증" placeholder="인증번호를 입력해주세요" button buttonText="확인" value={emailAuthCode} onChange={handleEmailAuthCodeChange} onClick={handleEmailAuthCodeSubmit}/>}
        {emailAuthError && <Text color='red1'>{emailAuthError}</Text>}
        <SignUpInput title = "비밀번호" placeholder="8자리 이상 입력해주세요" button={false} value={passwordValue} onChange={onChangePassword} />
        {PASSWORD_ERROR}
        <SignUpInput title = "이름" placeholder="사용할 이름을 입력해주세요(최대 8글자)" button={false} value={nameValue} onChange={onChangeName} />
        {NAME_ERROR}
        <Button variant={check ? "enabled" : "disabled"} size="long" text="회원가입" type="submit" />
      </form>
    </Container>
  )
}
