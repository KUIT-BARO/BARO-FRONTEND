import TimeTable from '@shared/components/timeTable/TimeTable';
import type { TimeDTO } from 'api/data-contracts';
import Header from '@shared/components/header/Header';
import { IcNavX } from '@svg/index';
import * as styles from './TimePopUp.css';
import Text from '@shared/components/text/Text';
import Container from '@shared/components/container/Container';
import renderAvatar from '@shared/utils/renderAvator';
import type { AvatarType } from '@shared/constant/avatar';

interface TimePopUpProps {
  suggestedStartDate: string;
  suggestedEndDate: string;
  promiseMembers: {
    userId: number;
    profileImage: string;
  }[];
  onClose: () => void;
  handleSelectSlot: (_slot: TimeDTO) => void;
  selectedSlot: TimeDTO[];
}

export default function TimePopUp({
  suggestedStartDate,
  suggestedEndDate,
  promiseMembers,
  onClose,
  handleSelectSlot,
  selectedSlot,
}: TimePopUpProps) {
  return (
    <>
      <Header rightIcon={IcNavX} onClickRightIcon={onClose} background="blue0" />
      <Container className={styles.timePopUpContainer}>
        <div className={styles.timePopUpText}>
          <Text tag="head_bold_24" color="black">
            만날 수 있는 시간을 알려주세요.
          </Text>
          <Text tag="body_bold_16" color="gray4">
            가능한 시간을 선택해주세요.
          </Text>
        </div>
        <div className={styles.avatarGroup}>
          {promiseMembers.map(member => (
            <div key={member.userId}>
              {renderAvatar(member.profileImage as AvatarType, styles.avatar)}
            </div>
          ))}
        </div>
        <TimeTable
          suggestedStartDate={suggestedStartDate}
          suggestedEndDate={suggestedEndDate}
          handleSelectSlot={handleSelectSlot}
          selectedSlots={selectedSlot}
        />
      </Container>
    </>
  );
}
