import * as styles from '@pages/profile/Profile.css';
import Header from '@shared/components/header/Header';
import { IcNavArrow,  IcWriteBlue } from "@svg/index";
import Text from '@shared/components/text/Text';
import InputBar from '@shared/components/inputBar/InputBar';
import type { UserProfileResponseDTO } from '@/../api/data-contracts';
import { useProfileForm } from '@pages/profile/hook/useProfileForm';
import { getProfileIconByName } from '@pages/profile/constant/Profile';
import { vars } from '@shared/styles/theme.css';

export default function Profile() {
  const userProfile: UserProfileResponseDTO = {
    name: 'John Doe',
    profileImage: 'dog',
  };

  const { nameValue, onChangeName, handleProfileSubmitForm } = useProfileForm();
  const PROFILE_ICON = getProfileIconByName(userProfile.profileImage ?? 'user');

  return (
    <div className={styles.container}>
      <form onSubmit={handleProfileSubmitForm}>
        <Header text="설정" leftIcon={IcNavArrow} />
        <div className={styles.profileImageEdit}>
          <div className={styles.profileImage}>
            <PROFILE_ICON className={styles.profileImageIcon} />
            <IcWriteBlue className={styles.editIcon} />
          </div>
        </div>
        <div className={styles.profileNameEdit}>
          <Text tag='body_16' className={styles.profileNameText}>이름</Text>
          <InputBar hasBackground={false} maxLength={12} showMaxLength={true} value={nameValue} onChange={onChangeName} props={{style: {color: vars.color.black}}}/>
        </div>
      </form>
    </div>
  )
}
