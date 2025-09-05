
import Header from "@shared/components/header/Header";
import * as styles from "@pages/setting/Setting.css";
import { IcNavArrow,IcNavX } from "@svg/index";
import ProfileHeader from "@pages/setting/component/ProfileHeader";
import SettingOption from "@pages/setting/component/SettingOption";
import { useState } from "react";
import PopupOverlay from "@shared/components/popupOverlay/PopupOverlay";
import InputBar from "@shared/components/inputBar/InputBar";
import Button from "@shared/components/button/Button";
import Text from "@shared/components/text/Text";
import { usePasswordChangeForm } from "./hook/usePasswordChangeForm";

export default function Setting() {
  const [isWithdrawal, setIsWithdrawal] = useState(false);
  const [isPasswordChange, setIsPasswordChange] = useState(false);

  const handleWithdrawal = () => {
    setIsWithdrawal((prev) => !prev);
  }
  const handlePasswordChange = () => {
    setIsPasswordChange((prev) => !prev);
  }

  const { handleSubmit, formData, handleChangeField, onSubmit, errors } = usePasswordChangeForm();
  return (
    <div className={styles.container}>
      <Header text="설정" leftIcon={IcNavArrow} rightIcon={IcNavX} />
      <ProfileHeader isSetting={false} />
      <div className={styles.line} />
      <SettingOption color="black" onClick={handlePasswordChange}>비밀번호 변경</SettingOption>
      <div className={styles.line} />
      <SettingOption color="red" onClick={handleWithdrawal}>탈퇴하기</SettingOption>
      <div className={styles.line} />
      {isPasswordChange && <PopupOverlay open={isPasswordChange} onClose={handlePasswordChange} top={true} toptitle='비밀번호 변경' position="center">
        <div className={styles.passwordChangeContainer}>
          <div className={styles.inputContainer}>
            <InputBar placeholder="현재 비밀번호" hasBackground={false} value={formData.currentPassword} onChange={handleChangeField('currentPassword')}  props={{
              type: 'password',
            }}/>
            {errors.currentPassword && <Text color='red1'>{errors.currentPassword?.message}</Text>}
          </div>
          <div className={styles.inputContainer}>
            <InputBar placeholder="새 비밀번호" hasBackground={false} value={formData.newPassword} onChange={handleChangeField('newPassword')}  props={{
              type: 'password',
            }}/>
            {errors.newPassword && <Text color='red1'>{errors.newPassword?.message}</Text>}
          </div>
          <div className={styles.inputContainer}>
            <InputBar placeholder="새 비밀번호 확인" hasBackground={false} value={formData.confirmPassword} onChange={handleChangeField('confirmPassword')}  props={{
              type: 'password',
            }}/>
            {errors.confirmPassword && <Text color='red1'>{errors.confirmPassword?.message}</Text>}
          </div>
          <Button variant="enabled" size="long" text="변경하기" backgroundColor="baroBlue" onClick={handleSubmit(onSubmit)} />
        </div>
      </PopupOverlay>}
      {isWithdrawal && <PopupOverlay open={isWithdrawal} onClose={handleWithdrawal} position="bottom">
        <div className={styles.withdrawalContainer}>
          <div className={styles.withdrawalTextContainer}>
            <Text tag="body_bold_22" color="black">정말로 탈퇴하시겠습니까?</Text>
            <div>
              <Text tag= "body_17" color="gray2">탈퇴 시 계정 및 이용 기록은 모두 삭제되며</Text>
              <Text tag= "body_17" color="gray2">삭제된 데이터는 복구되지 않습니다.</Text>
            </div>
          </div>
          <div className={styles.withdrawalButtonContainer}>
            <Button variant="enabled" size="short" text="취소하기" onClick={handleWithdrawal} backgroundColor="lightgray"/>
            <Button variant="enabled" size="short" text="탈퇴하기" backgroundColor="red"/>
          </div>
        </div>
      </PopupOverlay>}
    </div>
  )
}