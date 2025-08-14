import Text from "@shared/components/text/Text";
import * as styles from "@pages/setting/component/ProfileHeader.css";
import { IcMan,IcWriteGray } from "@svg/index";
import type { UserProfileSettingResponseDTO } from "@/../api/data-contracts";

interface ProfileHeaderProps {
  isSetting: boolean;
}

export default function ProfileHeader({ isSetting }: ProfileHeaderProps) {
  const user: UserProfileSettingResponseDTO = {
    userName: "홍길동",
    email: "dlwjddus@naver.com",
    profileImage: "image",
  };

  return (
    <div className={styles.profileHeader}>
      <IcMan className={styles.profileImage} />
      <div className={styles.profileInfo}>
        <div className={styles.profileDetails}>
          <Text tag="body_bold_19" >{user.userName}</Text>
          {isSetting && <IcWriteGray />}
        </div>
        <Text tag="body_17" color="gray3">{user.email}</Text>
      </div>
    </div>
  )
}
