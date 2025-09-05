import * as styles from '@pages/profile/Profile.css';
import Header from '@shared/components/header/Header';
import { IcNavArrow,  IcWriteBlue } from "@svg/index";
import Text from '@shared/components/text/Text';
import InputBar from '@shared/components/inputBar/InputBar';
import type { UserProfileResponseDTO } from '@/../api/data-contracts';
import { useProfileForm } from '@pages/profile/hook/useProfileForm';
import renderAvatar from '@shared/utils/renderAvator';
import { vars } from '@shared/styles/theme.css';
import { type AvatarType, AVATAR_TYPE } from '@shared/constant/avatar';
import { useState } from 'react';
import PopupOverlay from '@shared/components/popupOverlay/PopupOverlay';

export default function Profile() {
  const userProfile: UserProfileResponseDTO = {
    name: '규운',
    profileImage: 'DOG',
  };
  const [fixModal, setFixModal] = useState(false);
  const handleFixModal = () => {
    setFixModal((prev) => !prev);
  }
  const safeName = userProfile.name ?? '';
  const [safeProfileImage, setSafeProfileImage] = useState<AvatarType>((userProfile.profileImage ?? 'USER') as AvatarType);

  const handleSelectProfileImage = (type: AvatarType) => {
    setSafeProfileImage(type);
    handleProfileImageChange(type);
    handleFixModal();
  }
  const { formData, handleNameChange, handleProfileSubmitForm, handleProfileImageChange } = useProfileForm({ name: safeName, profileImage: safeProfileImage });

  return (
    <div className={styles.container}>
      <form onSubmit={handleProfileSubmitForm}>
        <Header text="프로필 수정" leftIcon={IcNavArrow} />
        <div className={styles.profileImageEdit}>
          <div className={styles.profileImage}>
            {renderAvatar(safeProfileImage, styles.profileImageIcon)}
            <IcWriteBlue className={styles.editIcon} onClick={handleFixModal}/>
          </div>
        </div>
        <div className={styles.profileNameEdit}>
          <Text tag='body_16' className={styles.profileNameText}>이름</Text>
          <InputBar hasBackground={false} maxLength={12} showMaxLength={true} value={formData.name} onChange={handleNameChange} props={{style: {color: vars.color.black}}}/>
        </div>
      </form>
      {fixModal && <PopupOverlay open={fixModal} onClose={handleFixModal} top={true} toptitle='사진 선택'>
        <div className={styles.fixProfileContainer}>
          <div className={styles.ProfileImages}>
            {Object.values(AVATAR_TYPE).map((type) => (
              <div key={type} onClick={() => handleSelectProfileImage(type)} >
                {renderAvatar(type, styles.profileImageIcon)}
              </div>
            ))}
          </div>
          <Text tag='body_14' color='white'>원하는 사진으로 프로필을 변경해주세요</Text>
        </div>
      </PopupOverlay>}
    </div>
  )
}
