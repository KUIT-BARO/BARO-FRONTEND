import { useForm } from 'react-hook-form';
import { z } from 'zod';
import React from 'react';
import { zodResolver } from '@hookform/resolvers/zod';

const signUpSchema = z.object({
  email: z.string().nonempty('이메일을 입력해주세요').email('이메일 형식이 올바르지 않습니다.'),
  emailAuthCode: z.string().nonempty('이메일 인증 코드를 입력해주세요.'),
  password: z
    .string()
    .nonempty({ message: '비밀번호를 입력해주세요.' })
    .regex(/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,20}$/, {
      message: '문자와 특수문자, 숫자가 혼합된 8~20자리의 비밀번호를 입력해주세요.',
    }),
  name: z
    .string()
    .nonempty({ message: '이름을 입력해주세요.' })
    .max(8, { message: '이름은 최대 8자까지 입력할 수 있습니다.' }),
});
export type SignUpFormValues = z.infer<typeof signUpSchema>;

export function useSignUpForm() {
  const {
    handleSubmit,
    watch,
    setValue,
    trigger,
    formState: { errors },
  } = useForm<SignUpFormValues>({
    defaultValues: {
      email: '',
      emailAuthCode: '',
      password: '',
      name: '',
    },
    resolver: zodResolver(signUpSchema),
    mode: 'onSubmit',
  });

  const formData = watch();
  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue('email', e.target.value.trim());
  };
  const onChangeEmailAuthCode = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue('emailAuthCode', e.target.value.trim());
  };
  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue('password', e.target.value);
  };
  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue('name', e.target.value.trim());
  };
  const handleSubmitWithoutEmailAuth = async () => {
    const isValid = await trigger(['email', 'password', 'name']);
    const onSubmit = (data: Pick<SignUpFormValues, 'email' | 'password' | 'name'>) => {
      //TODO: api 연동
      console.log('회원가입 데이터:', data);
    };
    if (isValid) {
      const values = {
        email: formData.email,
        password: formData.password,
        name: formData.name,
      };
      onSubmit(values);
    } else {
      //TODO: 오류 처리
    }
  };

  return {
    handleSubmit,
    errors,
    formData,
    onChangeEmail,
    onChangePassword,
    onChangeName,
    onChangeEmailAuthCode,
    handleSubmitWithoutEmailAuth,
    trigger,
  };
}
