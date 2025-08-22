import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';

const schema = z.object({
  dayOfWeek: z.string(),
  startTime: z.string(),
  endTime: z.string(),
  scheduleName: z.string().nonempty(),
  location: z.string(),
});

interface ScheduleFormProps {
  dayOfWeek?: string;
  startTime?: string;
  endTime?: string;
  scheduleName?: string;
}

export type ScheduleFormValues = z.infer<typeof schema>;

export function useScheduleForm({
  dayOfWeek,
  startTime,
  endTime,
  scheduleName,
}: ScheduleFormProps = {}) {
  const {
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
  } = useForm<ScheduleFormValues>({
    resolver: zodResolver(schema),
    mode: 'onSubmit',
    defaultValues: {
      dayOfWeek,
      startTime,
      endTime,
      scheduleName,
      location: '',
    },
  });
  const formData = watch();
  function handleChangeField(field: keyof ScheduleFormValues) {
    return function (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
      setValue(field, e.target.value, { shouldDirty: true, shouldValidate: true });
    };
  }
  const onSubmit = (data: ScheduleFormValues) => {
    console.log(data);
  };
  return {
    handleSubmit,
    errors,
    formData,
    handleChangeField,
    onSubmit,
  };
}
