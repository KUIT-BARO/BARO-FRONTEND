import Container from '@shared/components/container/Container';
import Header from '@shared/components/header/Header';
import { mockUp, mockUpTime } from '../mockUp';
import Text from '@shared/components/text/Text';
import PromiseTracker from '@shared/components/promiseTracker/PromiseTracker';
import type { AvatarType } from '@shared/constant/promise';
import * as styles from './Pending.css';
import Button from '@shared/components/button/Button';
import { useState } from 'react';

import TimePopUp from './popUp/timePopUp';

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
  const isVoting = !isHost && isVotingReady;
  const [isPlacePopUp, setIsPlacePopUp] = useState(false);
  const [isTimePopUp, setIsTimePopUp] = useState(false);
  const handleClickPlace = () => {
    setIsPlacePopUp(true);
    console.log('장소');
  };
  const handleClickTime = () => {
    setIsTimePopUp(true);
    console.log('시간');
  };
  return (
    <>
      {isTimePopUp && (
        <TimePopUp
          suggestedStartDate={mockUpTime.suggestedStartDate}
          suggestedEndDate={mockUpTime.suggestedEndDate}
          promiseMembers={mockUpTime.promiseMembers}
          onClose={() => setIsTimePopUp(false)}
        />
      )}

      <div>
        <Header text={promiseName} />
        <Container className={styles.pendingWrapper}>
          <PromiseTracker
            users={promiseMemberSuggestStates.map(state => ({
              avatarType: state.profileImage as AvatarType,
              isHost: state.isHost,
              suggestionProgress:
                mappingProgress[state.suggestionProgress as keyof typeof mappingProgress],
            }))}
          />
          <div className={styles.pendingText}>
            <Text tag="body_bold_16" color="black">
              원하는 장소와 시간을
            </Text>
            <Text tag="body_bold_16" color="black">
              추가해주세요.
            </Text>
          </div>
          <div className={styles.buttonGroupWrapper}>
            <div className={styles.buttonWrapper} onClick={handleClickPlace}>
              <img className={styles.buttonImage} src="/icon/ic_place.png" alt="장소" />
              <Text tag="head_bold_18" color="black">
                장소
              </Text>
            </div>
            <div className={styles.buttonWrapper} onClick={handleClickTime}>
              <img className={styles.buttonImage} src="/icon/ic_time.png" alt="시간" />
              <Text tag="head_bold_18" color="black">
                시간
              </Text>
            </div>
          </div>
          <div className={styles.votingButton}>
            <Button
              text="투표하기"
              size="long"
              variant={isVoting ? 'enabled' : 'disabled'}
              onClick={() => {}}
            />
          </div>
        </Container>
      </div>
    </>
  );
}
