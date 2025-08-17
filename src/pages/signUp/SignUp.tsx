import Container from '@shared/components/container/Container';
import SignUpInput from './component/SignUpInput';
import * as styles from '@pages/signUp/SignUp.css';
import Button from '@shared/components/button/Button';
import { useSignUpForm } from './hook/useSignUpForm';
import Text from '@shared/components/text/Text';

export default function SignUp() {
  const {
    handleSubmit,
    errors,
    formData,
    handleSubmitWithoutEmailAuth,
    handleFormChange,
    check,
    isEmailValid,
    handleCheckEmail,
    handleEmailAuthCodeSubmit,
  } = useSignUpForm();

  return (
    <Container className={styles.container}>
      <form
        className={styles.formContainer}
        onSubmit={e => {
          if (!check) {
            e.preventDefault();
            return;
          }
          return handleSubmit(handleSubmitWithoutEmailAuth)(e);
        }}
      >
        <SignUpInput
          title="이메일"
          placeholder="이메일을 입력해주세요"
          button
          buttonText="인증"
          onClick={handleCheckEmail}
          value={formData.email}
          onChange={handleFormChange('email')}
        />
        {errors.email ? <Text color="red1">{errors.email.message}</Text> : null}
        {isEmailValid && (
          <SignUpInput
            title="이메일 인증"
            placeholder="인증번호를 입력해주세요"
            button
            buttonText="확인"
            value={formData.emailAuthCode}
            onChange={handleFormChange('emailAuthCode')}
            onClick={handleEmailAuthCodeSubmit}
          />
        )}
        {errors.emailAuthCode && <Text color="red1">{errors.emailAuthCode.message}</Text>}
        <SignUpInput
          title="비밀번호"
          placeholder="8자리 이상 입력해주세요"
          button={false}
          value={formData.password}
          onChange={handleFormChange('password')}
        />
        {errors.password ? <Text color="red1">{errors.password.message}</Text> : null}
        <SignUpInput
          title="이름"
          placeholder="사용할 이름을 입력해주세요(최대 8글자)"
          button={false}
          value={formData.name}
          onChange={handleFormChange('name')}
        />
        {errors.name ? <Text color="red1">{errors.name.message}</Text> : null}
        <Button
          variant={check ? 'enabled' : 'disabled'}
          size="long"
          text="회원가입"
          type="submit"
        />
      </form>
    </Container>
  );
}
