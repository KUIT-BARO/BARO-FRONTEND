import { useNavigate } from 'react-router-dom';
import Container from '@shared/components/container/Container';
import Text from '@shared/components/text/Text';
import { mockUpConfirmed } from '../mockUp';
import KakaoMap from '@shared/components/kakaoMap/KakaoMap';
import usePlaceSearch from '@shared/components/kakaoMap/hooks/usePlaceSearch';
import { useState, useEffect } from 'react';
import { MAP_SIZE } from '@shared/components/kakaoMap/constant/mapSize';
import PromiseDetail from '@shared/components/promiseDetail/PromiseDetail';
import { PROMISE_STATUS, PROMISE_STATUS_CONFIG } from '@shared/constant/promiseStatus';
import Button from '@shared/components/button/Button';
import { BUTTON_VARIANTS } from '@shared/components/button/constant/button';
import * as styles from '@/pages/promiseStatus/components/Confirmed.css';

interface ConfirmedProps {
  promiseId: string;
}
export default function Confirmed({ promiseId }: ConfirmedProps) {
  const navigate = useNavigate();
  const { promiseName, promisePlace, promiseAvailableTimes, promiseMembersNames } = mockUpConfirmed;
  const { searchPlace } = usePlaceSearch();
  const [place, setPlace] = useState<{ lat: number; lng: number } | null>(null);

  useEffect(() => {
    searchPlace(promisePlace.placeAddress)
      .then(res => res[0])
      .then(placeData => {
        if (placeData) {
          setPlace({ lat: placeData.lat, lng: placeData.lng });
        }
      })
      .catch(error => {
        console.error('Failed to search place:', error);
      });
  }, [searchPlace, promisePlace.placeAddress]);

  const handleClose = () => {
    console.log(promiseId);
    navigate(`/`);
  };

  return (
    <div className={styles.confirmedWrapper}>
      <Container className={styles.containerStyle}>
        <div className={styles.confirmedText}>
          <Text tag="head_bold_24" color="black">
            {promiseName}
          </Text>
          <Text tag="body_bold_16" color="black">
            약속이 확정되었어요
          </Text>
        </div>
        <KakaoMap center={place || undefined} size={MAP_SIZE.SMALL} />
        <div className={styles.promiseDetailWrapper}>
          <PromiseDetail
            status={PROMISE_STATUS.CONFIRMED}
            promiseId={parseInt(promiseId)}
            promiseName={promiseName}
            fixedDate={promiseAvailableTimes.date}
            placeName={promisePlace.placeName}
            promiseMembersNames={promiseMembersNames}
          />
        </div>
      </Container>
      <div className={styles.confirmedButton}>
        <Button
          text="확인"
          size="long"
          variant={BUTTON_VARIANTS.ENABLED}
          onClick={handleClose}
          backgroundColor={PROMISE_STATUS_CONFIG.CONFIRMED.color}
        />
      </div>
    </div>
  );
}
