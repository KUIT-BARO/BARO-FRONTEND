import { useState } from 'react';
import type { PromisePlace } from '@shared/types/promisePlace';

export const usePlace = (promiseId: string) => {
  console.log(promiseId);
  const [selectedPlace, setSelectedPlace] = useState<PromisePlace[]>([]);
  const [isPlacePopUp, setIsPlacePopUp] = useState(false);

  const handleSelectPlace = (place: PromisePlace) => {
    const isAlreadySelected = selectedPlace.some(
      selected => selected.placeName === place.placeName
    );

    if (isAlreadySelected) {
      setSelectedPlace(selectedPlace.filter(selected => selected.placeName !== place.placeName));
    } else {
      setSelectedPlace([...selectedPlace, place]);
    }
  };
  const handleClickPlace = () => {
    setIsPlacePopUp(true);
  };

  const handleClosePlacePopUp = () => {
    //TODO:api 호출
    setIsPlacePopUp(false);
  };

  return {
    selectedPlace,
    isPlacePopUp,
    handleSelectPlace,
    handleClickPlace,
    handleClosePlacePopUp,
  };
};
