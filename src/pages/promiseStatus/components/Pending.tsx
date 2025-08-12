import Container from '@shared/components/container/Container';
import Header from '@shared/components/header/Header';
import { mockUp } from '../mockUp';
import Text from '@shared/components/text/Text';
import PromiseTracker from '@shared/components/promiseTracker/PromiseTracker';
import type { AvatarType } from '@shared/constant/promise';
import * as styles from './Pending.css';
import Button from '@shared/components/button/Button';

interface PendingProps {
  promiseId: string;
  isHost: boolean;
}
const mappingProgress = {
  NONE: 0,
  HALF: 50,
  COMPLETE: 100,
};

export default function Pending({ promiseId, isHost }: PendingProps) {
  const { promiseName, isVotingReady, promiseMemberSuggestStates } = mockUp;

  return (
    <div>
      <Header text={promiseName} />
      <Container>
        <PromiseTracker
          users={promiseMemberSuggestStates.map(state => ({
            avatarType: state.profileImage as AvatarType,
            isHost: state.isHost,
            suggestionProgress:
              mappingProgress[state.suggestionProgress as keyof typeof mappingProgress],
          }))}
        />
        <div className={styles.buttonGroupWrapper}>
          <div className={styles.buttonWrapper}>
            <img className={styles.buttonImage} src="/icon/ic_place.png" alt="장소" />
            <Text tag="head_bold_18" color="black">
              장소
            </Text>
          </div>
          <div className={styles.buttonWrapper}>
            <img className={styles.buttonImage} src="/icon/ic_time.png" alt="시간" />

            <Text tag="head_bold_18" color="black">
              시간
            </Text>
          </div>
        </div>
        <Button text="투표하기" size="long" variant="enabled" onClick={() => {}} />
      </Container>
    </div>
  );
}
