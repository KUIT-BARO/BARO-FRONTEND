
import Header from "@shared/components/header/Header";
import * as styles from "@pages/setting/Setting.css";
import { IcNavArrow,IcNavX } from "@svg/index";
import ProfileHeader from "@pages/setting/component/ProfileHeader";
import SettingOption from "@pages/setting/component/SettingOption";

export default function Setting() {
  return (
    <div className={styles.container}>
      <Header text="설정" leftIcon={IcNavArrow} rightIcon={IcNavX} />
      <ProfileHeader isSetting={false} />
      <div className={styles.line} />
      <SettingOption color="black">비밀번호 변경</SettingOption>
      <div className={styles.line} />
      <SettingOption color="red">탈퇴하기</SettingOption>
      <div className={styles.line} />
    </div>
  )
}