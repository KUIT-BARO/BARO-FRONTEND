import { useForm } from 'react-hook-form';
import { z } from 'zod';
import React from 'react';
import { zodResolver } from '@hookform/resolvers/zod';

const signUpSchema = z.object({
  email: z.string().nonempty('이메일을 입력해주세요').email('이메일 형식이 올바르지 않습니다.'),
  password: z
    .string()
    .min(8, { message: '비밀번호는 8자 이상이어야 합니다.' })
    .max(20, { message: '비밀번호는 20자 이하여야 합니다.' })
    .refine(val => val === '' || /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,20}$/.test(val), {
      message: '문자와 특수문자, 숫자가 혼합된 8~20자리의 비밀번호를 입력해주세요.',
    })
    .nonempty({ message: '비밀번호를 입력해주세요.' }),
  name: z
    .string()
    .nonempty({ message: '이름을 입력해주세요.' })
    .max(8, { message: '이름은 최대 8자까지 입력할 수 있습니다.' }),
});
export type SignUpFormValues = z.infer<typeof signUpSchema>;

export function useSignUpForm() {
  const { handleSubmit, formState, setFocus, watch, setValue, trigger } = useForm<SignUpFormValues>(
    {
      defaultValues: {
        email: '',
        password: '',
        name: '',
      },
      resolver: zodResolver(signUpSchema),
      mode: 'onSubmit',
    }
  );
  const { errors } = formState;

  const emailValue = watch('email');
  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue('email', e.target.value.trim(), { shouldValidate: true, shouldDirty: true });
  };
  const passwordValue = watch('password');
  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue('password', e.target.value.trim(), { shouldValidate: true, shouldDirty: true });
  };
  const nameValue = watch('name');
  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue('name', e.target.value.trim(), { shouldValidate: true, shouldDirty: true });
  };
  const onSubmit = (data: SignUpFormValues) => {
    console.log('Form submitted:', data);
  };
  const onSubmitError = () => {
    if (errors.email) {
      setFocus('email');
    } else if (errors.password) {
      setFocus('password');
    } else if (errors.name) {
      setFocus('name');
    }
  };

  return {
    handleSubmit,
    errors,
    emailValue,
    passwordValue,
    nameValue,
    onChangeEmail,
    onChangePassword,
    onChangeName,
    onSubmit,
    onSubmitError,
    trigger,
  };
}
