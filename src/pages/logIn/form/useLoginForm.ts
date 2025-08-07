import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const loginSchema = z.object({
  email: z.string().email('이메일 형식이 올바르지 않습니다.'),
  password: z
    .string()
    .regex(
      /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,20}$/,
      '문자와 특수문자, 숫자가 혼합된 8~20자리의 비밀번호를 입력해주세요.'
    )
    .min(8, { message: '비밀번호는 8자 이상이어야 합니다.' })
    .max(20, { message: '비밀번호는 20자 이하여야 합니다.' }),
});

export type LoginFormValues = z.infer<typeof loginSchema>;

export function useLoginForm() {
  const methods = useForm<LoginFormValues>({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: zodResolver(loginSchema),
    mode: 'onSubmit',
  });

  return {
    register: methods.register,
    handleSubmit: methods.handleSubmit,
    formState: methods.formState,
    setFocus: methods.setFocus,
    watch: methods.watch,
  };
}
