import type { Place } from '@shared/components/kakaoMap/types/latLng';

export interface StepProps {
  navigate: (path: string) => void;
}

export interface Step1Props extends StepProps {
  promiseName: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface Step2Props extends StepProps {
  dateSelection: {
    suggestedStartDate: string;
    suggestedEndDate: string | null;
  };
  handleDateClick: (date: Date) => void;
}

export interface Step3Props extends StepProps {
  suggestedRegion: Place[];
  handleRegionChange: (places: Place[]) => void;
}

export interface Step4Props extends StepProps {
  promiseDeadline: string;
  handleDeadlineChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: () => void;
  suggestStartDate: string;
}
