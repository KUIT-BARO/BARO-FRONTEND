import ProfileHeader from "@pages/setting/component/ProfileHeader";
import Header from "@shared/components/header/Header";
import { IcSetting, IcPlusBlack, IcShareBlack } from "@svg/index";
import Text from "@shared/components/text/Text";
import * as styles from "@pages/myPage/MyPage.css";

export default function MyPage() {
  return <div className={styles.container}>
    <Header text="마이페이지" rightIcon={IcSetting} />
    <ProfileHeader isSetting = {true}/>
    <div className={styles.scheduleTitleBox}>
      <Text tag="body_bold_19">일정표</Text>
      <div className={styles.optionBox}>
        <IcPlusBlack className={styles.optionSvg} />
        <IcShareBlack className={styles.optionSvg} />
      </div>
    </div>
    {/* 여기에 일정표 컴포넌트 추가 예정 */}
  </div>;
}
