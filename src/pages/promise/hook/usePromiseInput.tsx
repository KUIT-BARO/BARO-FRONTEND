import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

const dateFormatRegex = z.string().regex(/^\d{4}-\d{2}-\d{2}$/, '날짜를 선택해주세요.');

const promiseSchema = z.object({
  promiseName: z
    .string()
    .min(1, '약속 이름을 입력해주세요')
    .max(10, '약속 이름은 10자 이하여야 합니다'),
  suggestedStartDate: dateFormatRegex,
  suggestedEndDate: dateFormatRegex,
  suggestedRegion: z.array(z.string()).min(1, '지역을 선택해주세요'),
  promiseDeadline: dateFormatRegex,
});

export type PromiseData = z.infer<typeof promiseSchema>;

export default function usePromiseInput() {
  const {
    handleSubmit,
    setValue,
    trigger,
    formState: { errors },
    watch,
  } = useForm<PromiseData>({
    resolver: zodResolver(promiseSchema),
    defaultValues: {
      promiseName: '',
      suggestedStartDate: '',
      suggestedEndDate: '',
      suggestedRegion: [],
      promiseDeadline: '',
    },
    mode: 'onChange',
  });

  const formData = watch();

  const onSubmit = (data: PromiseData) => {
    console.log(data);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    console.log(name, value);
    setValue(name as keyof PromiseData, value);
    trigger(name as keyof PromiseData);
  };

  return {
    formData,
    errors,
    setValue,
    handleChange,
    handleSubmit,
    onSubmit,
    trigger,
  };
}
