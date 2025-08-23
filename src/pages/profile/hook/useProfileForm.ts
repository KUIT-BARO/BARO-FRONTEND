import { useForm } from 'react-hook-form';
import { z } from 'zod';
import React from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import type { UserProfileResponseDTO } from '@/../api/data-contracts';
import { type AvatarType } from '@shared/constant/avatar';

const schema = z.object({
  name: z
    .string()
    .min(2, { message: '이름은 2글자 이상으로 입력해야 합니다.' })
    .max(12, { message: '이름은 최대 12글자까지 입력할 수 있습니다.' }),
  profileImage: z.string(),
});

type FormSchema = z.infer<typeof schema>;

export function useProfileForm({ name, profileImage }: FormSchema) {
  const {
    watch,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    mode: 'onChange',
    defaultValues: {
      name,
      profileImage,
    },
  });
  const formData = watch();
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue('name', e.target.value.trim(), { shouldValidate: true, shouldDirty: true });
  };

  const handleProfileImageChange = (value: AvatarType) => {
    setValue('profileImage', value, { shouldValidate: true, shouldDirty: true });
  };
  const handleProfileSubmitForm = handleSubmit((data: UserProfileResponseDTO) => {
    console.log(data);
  });

  return {
    formData,
    handleNameChange,
    handleProfileImageChange,
    errors,
    handleProfileSubmitForm,
  };
}
