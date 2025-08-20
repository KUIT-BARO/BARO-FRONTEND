import Header from '@shared/components/header/Header';
import { IcNavX } from '@svg/index';
import { useNavigate } from 'react-router-dom';
import * as styles from '@/pages/promiseStatus/components/Voting.css';
import Container from '@shared/components/container/Container';
import Text from '@shared/components/text/Text';
import { mockUpVoting } from '@/pages/promiseStatus/mockUp';
import Button from '@shared/components/button/Button';
import { PROMISE_STATUS_CONFIG } from '@shared/constant/promiseStatus';
import { BUTTON_VARIANTS } from '@shared/components/button/constant/button';
import { useState } from 'react';

interface VotingProps {
  promiseId: string;
  isHost: boolean;
}
export default function Voting({ promiseId, isHost }: VotingProps) {
  const navigate = useNavigate();
  const handleClose = () => {
    console.log(promiseId);
    navigate(`/`);
  };
  const { promiseName, promisePlace, promiseAvailableTimes } = mockUpVoting;
  const [selectedPlace, setSelectedPlace] = useState<
    {
      placeName: string;
      placeAddress: string;
    }[]
  >([]);
  const [selectedTime, setSelectedTime] = useState<
    {
      date: string;
      startTime: string;
      endTime: string;
    }[]
  >([]);

  const handlePlaceClick = (place: { placeName: string; placeAddress: string }) => {
    if (selectedPlace.includes(place)) {
      setSelectedPlace(prev => prev.filter(p => p !== place));
    } else {
      setSelectedPlace(prev => [...prev, place]);
    }
  };

  const handleTimeClick = (time: { date: string; startTime: string; endTime: string }) => {
    if (selectedTime.includes(time)) {
      setSelectedTime(prev =>
        prev.filter(
          t => t.date !== time.date && t.startTime !== time.startTime && t.endTime !== time.endTime
        )
      );
    } else {
      setSelectedTime(prev => [...prev, time]);
    }
  };

  const handleVote = () => {
    console.log(selectedPlace, selectedTime);
    handleClose();
  };

  const isFormValid = !isHost && selectedPlace.length > 0 && selectedTime.length > 0;

  return (
    <div className={styles.votingWrapper}>
      <Header rightIcon={IcNavX} onClickRightIcon={handleClose} background="blue0" />
      <Container className={styles.containerStyle}>
        <div className={styles.votingText}>
          <Text tag="head_bold_24" color="black">
            {promiseName}의 최종 투표를 진행해주세요
          </Text>
          <Text tag="body_bold_16" color="gray4">
            최적의 시간과 장소입니다
          </Text>
          {isHost && (
            <Text tag="body_bold_16" color="red1">
              약속 생성자는 투표 할 수 없습니다.
            </Text>
          )}
        </div>

        <div className={styles.votingPlaceWrapper}>
          <Text tag="head_bold_18" color="black">
            약속 장소를 선택해주세요
          </Text>
          <div className={styles.votingButtonWrapper}>
            {promisePlace.map(place => {
              const isSelected = selectedPlace.includes(place);
              return (
                <Button
                  key={place.placeName}
                  onClick={() => handlePlaceClick(place)}
                  variant={isSelected ? BUTTON_VARIANTS.ENABLED : BUTTON_VARIANTS.WHITE}
                  size="long"
                  text={place.placeName}
                  backgroundColor={isSelected ? PROMISE_STATUS_CONFIG.VOTING.color : 'white'}
                />
              );
            })}
          </div>
        </div>
        <div className={styles.votingPlaceWrapper}>
          <Text tag="head_bold_18" color="black">
            약속 시간을 선택해주세요
          </Text>
          <div className={styles.votingButtonWrapper}>
            {promiseAvailableTimes.map(time => {
              const isSelected = selectedTime.includes(time);
              return (
                <Button
                  key={`${time.date}-${time.startTime}-${time.endTime}`}
                  onClick={() => handleTimeClick(time)}
                  variant={isSelected ? BUTTON_VARIANTS.ENABLED : BUTTON_VARIANTS.WHITE}
                  size="long"
                  text={`${time.date} ${time.startTime.slice(0, 5)}-${time.endTime.slice(0, 5)}`}
                  backgroundColor={isSelected ? PROMISE_STATUS_CONFIG.VOTING.color : 'white'}
                />
              );
            })}
          </div>
        </div>
      </Container>
      <div className={styles.votingButton}>
        <Button
          text="투표하기"
          size="long"
          variant={isFormValid ? BUTTON_VARIANTS.ENABLED : BUTTON_VARIANTS.DISABLED}
          onClick={handleVote}
        />
      </div>
    </div>
  );
}
