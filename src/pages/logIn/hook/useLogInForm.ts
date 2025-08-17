import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import React, { useState } from 'react';

const loginSchema = z.object({
  email: z.string().nonempty('이메일을 입력해주세요').email('이메일 형식이 올바르지 않습니다.'),
  password: z.string().nonempty({ message: '비밀번호를 입력해주세요.' }),
});

export type LoginFormValues = z.infer<typeof loginSchema>;

export function useLogInForm() {
  const {
    handleSubmit,
    formState: { errors, isValid },
    watch,
    setValue,
  } = useForm<LoginFormValues>({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: zodResolver(loginSchema),
    mode: 'onChange',
  });

  const formData = watch();
  const handleChangeField =
    (field: 'email' | 'password') => (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = field === 'email' ? e.target.value.trim() : e.target.value;
      setValue(field, value, { shouldDirty: true, shouldValidate: true });
    };
  const onSubmit = (_data: LoginFormValues) => {
    //TODO: api 연동
    console.log('로그인 시도:', _data);
  };
  const [checked, setChecked] = useState(false);
  const handleCheckboxChange = () => {
    setChecked(!checked);
  };
  return {
    handleSubmit,
    formData,
    handleChangeField,
    checked,
    handleCheckboxChange,
    onSubmit,
    isValid,
    errors,
  };
}
