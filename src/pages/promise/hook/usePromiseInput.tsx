import { useDateSelection } from '@shared/components/calendar/hooks/useDateSelection';
import type { Place } from '@shared/components/kakaoMap/types/latLng';
import { useState } from 'react';

export default function usePromiseInput() {
  const [promiseName, setPromiseName] = useState('');
  const { dateSelection, handleDateClick } = useDateSelection();
  const [suggestedRegion, setSuggestedRegion] = useState<Place[]>([]);
  const [promiseDeadline, setPromiseDeadline] = useState('');

  const onSubmit = () => {
    console.log('약속 생성 완료:', {
      promiseName,
      dateSelection,
      suggestedRegion,
      promiseDeadline,
    });
  };

  const handlePlaceNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value.length > 15) {
      return;
    }
    setPromiseName(event.target.value);
  };

  const handleDeadlineChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setPromiseDeadline(value);
  };

  const handleRegionChange = (places: Place[]) => {
    setSuggestedRegion(places);
  };

  return {
    promiseName,
    dateSelection,
    suggestedRegion,
    promiseDeadline,
    handlePlaceNameChange,
    handleDeadlineChange,
    handleRegionChange,
    handleDateClick,
    onSubmit,
  };
}
