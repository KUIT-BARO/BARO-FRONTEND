import Container from '@shared/components/container/Container';
import Header from '@shared/components/header/Header';
import Text from '@shared/components/text/Text';
import { IcNavX } from '@svg/index';
import * as styles from './PlacePopUp.css';
import Button from '@shared/components/button/Button';
import { BUTTON_VARIANTS } from '@shared/components/button/constant/button';
import { useState } from 'react';
import type { PromisePlace } from '../Pending';

interface PlacePopUpProps {
  onClose: () => void;
  promisePlace: {
    placeName: string;
    placeAddress: string;
  }[];
  handleSelectPlace: (place: PromisePlace) => void;
  selectedPlace: PromisePlace[];
}

export default function PlacePopUp({
  onClose,
  promisePlace,
  handleSelectPlace,
  selectedPlace,
}: PlacePopUpProps) {
  return (
    <>
      <Header rightIcon={IcNavX} onClickRightIcon={onClose} background="blue0" />
      <Container className={styles.placePopUpContainer}>
        <div className={styles.placePopUpText}>
          <Text tag="head_bold_24" color="black">
            만나고 싶은 장소를 선택해주세요.
          </Text>
          <Text tag="body_bold_16" color="gray4">
            친구들과 함께 정할 장소를 제안해보세요
          </Text>
        </div>
        <div className={styles.placeList}>
          {promisePlace.map(place => (
            <Button
              text={place.placeName}
              variant={
                selectedPlace.some(selected => selected.placeName === place.placeName)
                  ? BUTTON_VARIANTS.ENABLED
                  : BUTTON_VARIANTS.OUTLINED
              }
              size="long"
              onClick={() => {
                handleSelectPlace(place);
              }}
            />
          ))}
        </div>
      </Container>
    </>
  );
}
