import * as styles from '@pages/profile/Profile.css';
import Header from '@shared/components/header/Header';
import { IcNavArrow,  IcWriteBlue } from "@svg/index";
import Text from '@shared/components/text/Text';
import InputBar from '@shared/components/inputBar/InputBar';
import type { UserProfileResponseDTO } from '@/../api/data-contracts';
import { useProfileForm } from '@pages/profile/hook/useProfileForm';
import renderAvatar from '@shared/utils/renderAvator';
import { vars } from '@shared/styles/theme.css';
import type { AvatarType } from '@shared/constant/avatar';

export default function Profile() {
  const userProfile: UserProfileResponseDTO = {
    name: '규운',
    profileImage: 'DOG',
  };
  const safeName = userProfile.name ?? '';
  const safeProfileImage = (userProfile.profileImage ?? 'USER') as AvatarType;
  const { formData, handleNameChange, handleProfileSubmitForm } = useProfileForm({ name: safeName, profileImage: safeProfileImage });

  return (
    <div className={styles.container}>
      <form onSubmit={handleProfileSubmitForm}>
        <Header text="프로필 수정" leftIcon={IcNavArrow} />
        <div className={styles.profileImageEdit}>
          <div className={styles.profileImage}>
            {renderAvatar(safeProfileImage, styles.profileImageIcon)}
            <IcWriteBlue className={styles.editIcon} />
          </div>
        </div>
        <div className={styles.profileNameEdit}>
          <Text tag='body_16' className={styles.profileNameText}>이름</Text>
          <InputBar hasBackground={false} maxLength={12} showMaxLength={true} value={formData.name} onChange={handleNameChange} props={{style: {color: vars.color.black}}}/>
        </div>
      </form>
    </div>
  )
}
