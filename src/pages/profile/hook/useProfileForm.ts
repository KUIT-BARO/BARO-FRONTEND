import { useForm } from 'react-hook-form';
import { z } from 'zod';
import React from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import type { UserProfileResponseDTO } from '@/../api/data-contracts';

const schema = z.object({
  name: z
    .string()
    .min(2, { message: '이름은 2글자 이상으로 입력해주십시요' })
    .max(12, { message: '이름은 최대 12글자까지 입력할 수 있습니다.' }),
  profileImage: z.enum(['man', 'woman', 'dog', 'user']),
});

export function useProfileForm() {
  const {
    watch,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    mode: 'onSubmit',
  });
  const nameValue = watch('name');
  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue('name', e.target.value.trim(), { shouldValidate: true, shouldDirty: true });
  };
  const profileImageValue = watch('profileImage');
  const onChangeProfileImage = (value: 'man' | 'woman' | 'dog' | 'user') => {
    setValue('profileImage', value, { shouldValidate: true, shouldDirty: true });
  };
  const handleProfileSubmitForm = handleSubmit((data: UserProfileResponseDTO) => {
    console.log(data);
  });

  return {
    nameValue,
    profileImageValue,
    onChangeName,
    onChangeProfileImage,
    errors,
    handleProfileSubmitForm,
  };
}
