import Container from "@shared/components/container/Container";
import Text from "@shared/components/text/Text";
import { IcLogo } from "@svg/index";
import * as styles from "@pages/logIn/LogIn.css";
import LoginForm from "@pages/logIn/form/LogInForm";

export default function LogIn() {
  return (
    <Container className={styles.container}>
      <IcLogo />
      <Text color="blue1" tag="body_17" className={styles.subTitle}>BARO에 오신 것을 환영합니다.</Text>
      <LoginForm />
    </Container>
  );
}
