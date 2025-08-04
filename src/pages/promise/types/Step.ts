import type { PromiseData } from '../hook/usePromiseInput';

export interface StepProps {
  navigate: (path: string) => void;
  formData: PromiseData;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  error: string;
  isValid?: boolean;
}
