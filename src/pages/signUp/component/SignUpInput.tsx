import Button from "@shared/components/button/Button";
import InputBar from "@shared/components/inputBar/InputBar";
import Text from "@shared/components/text/Text";
import * as styles from "@pages/signUp/component/SignUpInput.css";
import React from "react";

interface SignUpInputProps {
  title: string;
  buttonText?: string;
  button: boolean;
  placeholder?: string;
  value?: string;
  onChange?: (_e: React.ChangeEvent<HTMLInputElement>) => void;
  onClick?: () => void;
}

export default function SignUpInput({ title, buttonText='', button = true, placeholder='', value='', onChange, onClick }: SignUpInputProps) {
  return (
    <div className={styles.container}>
      <Text color="white" tag="body_bold_19">{title}</Text>
      <div className={styles.content}>
        <InputBar leftIcon="none" hasBackground={false} placeholder={placeholder} value={value} onChange={onChange} />
        {button ? <Button variant="enabled" size="category" text={buttonText} onClick={onClick} /> : <div className={styles.dummy} />}
      </div>
    </div>
  )
}
