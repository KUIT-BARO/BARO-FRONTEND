import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';

const passwordChangeSchema = z
  .object({
    currentPassword: z.string().nonempty({ message: '현재 비밀번호를 입력해주세요.' }),
    newPassword: z.string().min(8, '새 비밀번호는 8자 이상이어야 합니다.'),
    confirmPassword: z.string().nonempty({ message: '새 비밀번호 확인을 입력해주세요.' }),
  })
  .refine(data => data.newPassword === data.confirmPassword, {
    message: '새 비밀번호가 일치하지 않습니다.',
    path: ['confirmPassword'],
  });

export type PasswordChangeFormValues = z.infer<typeof passwordChangeSchema>;

export function usePasswordChangeForm() {
  const {
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
  } = useForm<PasswordChangeFormValues>({
    defaultValues: {
      currentPassword: '',
      newPassword: '',
      confirmPassword: '',
    },
    resolver: zodResolver(passwordChangeSchema),
    mode: 'onChange',
  });

  const formData = watch();
  const handleChangeField =
    (field: keyof PasswordChangeFormValues) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setValue(field, e.target.value, { shouldDirty: true, shouldValidate: true });
    };

  const onSubmit = (_data: PasswordChangeFormValues) => {
    //TODO: api 연동
    console.log('비밀번호 변경 시도:', _data);
  };
  return {
    handleSubmit,
    formData,
    handleChangeField,
    onSubmit,
    errors,
  };
}
