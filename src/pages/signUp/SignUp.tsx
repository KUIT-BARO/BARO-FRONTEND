import Container from "@shared/components/container/Container";
import SignUpInput from "./component/SignUpInput";
import * as styles from "@pages/signUp/SignUp.css"
import Button from "@shared/components/button/Button";
import { useSignUpForm } from "./hook/useSignUpForm";
import { useState } from "react";
import Text from "@shared/components/text/Text";

export default function SignUp() {
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [check, setCheck] = useState(false);
  const { handleSubmit, errors, formData, handleSubmitWithoutEmailAuth, onChangeEmail, onChangePassword, onChangeName, onChangeEmailAuthCode, trigger } = useSignUpForm();
  const handleCheckEmail = async () => {
    const isValid = await trigger('email');
    setIsEmailValid(isValid);
  };
  const handleEmailAuthCodeSubmit = () => {
    if (formData.emailAuthCode.trim() === '') {
      return;
    } else if (formData.emailAuthCode.trim() !== 'expectedCode') {
      //TODO: api 연동
      return;
    }
    setCheck(true);
  };

  return (
    <Container className={styles.container}>
      <form className={styles.formContainer}  onSubmit={(e) => {
        if (!check) {
          e.preventDefault();
          return;
        }
        return handleSubmit(handleSubmitWithoutEmailAuth)(e);
      }}>
        <SignUpInput title = "이메일" placeholder="이메일을 입력해주세요" button buttonText="인증" onClick={handleCheckEmail} value={formData.email} onChange={onChangeEmail} />
        {errors.email ? <Text color="red1">{errors.email.message}</Text> : null}
        {isEmailValid && <SignUpInput title = "이메일 인증" placeholder="인증번호를 입력해주세요" button buttonText="확인" value={formData.emailAuthCode} onChange={onChangeEmailAuthCode} onClick={handleEmailAuthCodeSubmit}/>}
        {errors.emailAuthCode && <Text color='red1'>{errors.emailAuthCode.message}</Text>}
        <SignUpInput title = "비밀번호" placeholder="8자리 이상 입력해주세요" button={false} value={formData.password} onChange={onChangePassword} />
        {errors.password ? <Text color="red1">{errors.password.message}</Text> : null}
        <SignUpInput title = "이름" placeholder="사용할 이름을 입력해주세요(최대 8글자)" button={false} value={formData.name} onChange={onChangeName} />
        {errors.name ? <Text color="red1">{errors.name.message}</Text> : null}
        <Button variant={check ? "enabled" : "disabled"} size="long" text="회원가입" type="submit" />
      </form>
    </Container>
  )
}
