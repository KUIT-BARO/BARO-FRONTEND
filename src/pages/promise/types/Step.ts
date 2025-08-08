import type { Place } from '@shared/components/kakaoMap/types/latLng';
import React from 'react';
import type { NavigateFunction } from 'react-router-dom';

export interface StepProps {
  navigate: NavigateFunction;
}

export interface Step1Props extends StepProps {
  promiseName: string;
  handlePlaceNameChange: (_event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface Step2Props extends StepProps {
  dateSelection: {
    suggestedStartDate: string;
    suggestedEndDate: string | null;
  };
  handleDateClick: (_date: Date) => void;
}

export interface Step3Props extends StepProps {
  suggestedRegion: Place[];
  handleRegionChange: (_places: Place[]) => void;
}

export interface Step4Props extends StepProps {
  promiseDeadline: string;
  handleDeadlineChange: (_event: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: () => void;
  suggestStartDate: string;
}
