import Container from '@shared/components/container/Container';
import Header from '@shared/components/header/Header';
import { mockUp, mockUpTime, mockUpPlace } from '../mockUp';
import Text from '@shared/components/text/Text';
import PromiseTracker from '@shared/components/promiseTracker/PromiseTracker';
import type { AvatarType } from '@shared/constant/avatar';
import * as styles from './Pending.css';
import Button from '@shared/components/button/Button';

import TimePopUp from './popUp/TimePopUp';
import PlacePopUp from './popUp/PlacePopUp';
import { BUTTON_VARIANTS } from '@shared/components/button/constant/button';

import { useTime } from '../hooks/useTime';
import { usePlace } from '../hooks/usePlace';
import { useNavigate } from 'react-router-dom';

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
  const { suggestedStartDate, suggestedEndDate, promiseMembers } = mockUpTime;
  const { promisePlace } = mockUpPlace;
  const isVoting = !isHost && isVotingReady;

  const { isTimePopUp, handleClickTime, handleCloseTimePopUp, handleSelectSlot, selectedSlot } =
    useTime(promiseId);
  const {
    isPlacePopUp,
    handleClickPlace,
    handleClosePlacePopUp,
    handleSelectPlace,
    selectedPlace,
  } = usePlace(promiseId);
  const navigate = useNavigate();
  const handleVoting = () => {
    navigate('/');
  };
  return (
    <>
      {isTimePopUp && (
        <TimePopUp
          suggestedStartDate={suggestedStartDate}
          suggestedEndDate={suggestedEndDate}
          promiseMembers={promiseMembers}
          onClose={handleCloseTimePopUp}
          handleSelectSlot={handleSelectSlot}
          selectedSlot={selectedSlot}
        />
      )}
      {isPlacePopUp && (
        <PlacePopUp
          promisePlace={promisePlace}
          onClose={handleClosePlacePopUp}
          handleSelectPlace={handleSelectPlace}
          selectedPlace={selectedPlace}
        />
      )}
      {!isTimePopUp && !isPlacePopUp && (
        <div className={styles.pendingWrapper}>
          <Header text={promiseName} />
          <Container className={styles.containerStyle}>
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
          </Container>
          <div className={styles.votingButton}>
            <Button
              text="투표하기"
              size="long"
              variant={isVoting ? BUTTON_VARIANTS.ENABLED : BUTTON_VARIANTS.DISABLED}
              onClick={handleVoting}
            />
          </div>
        </div>
      )}
    </>
  );
}
