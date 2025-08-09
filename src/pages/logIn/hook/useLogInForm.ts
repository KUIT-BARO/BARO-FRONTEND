import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const loginSchema = z.object({
  email: z.string().min(1, '이메일을 입력해주세요').email('이메일 형식이 올바르지 않습니다.'),
  password: z
    .string()
    .min(8, { message: '비밀번호는 8자 이상이어야 합니다.' })
    .max(20, { message: '비밀번호는 20자 이하여야 합니다.' })
    .regex(
      /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,20}$/,
      '문자와 특수문자, 숫자가 혼합된 8~20자리의 비밀번호를 입력해주세요.'
    ),
});

export type LoginFormValues = z.infer<typeof loginSchema>;

export function useLogInForm() {
  const { register, handleSubmit, formState, setFocus, watch } = useForm<LoginFormValues>({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: zodResolver(loginSchema),
    mode: 'onSubmit',
  });

  const emailValue = watch('email');
  const passwordValue = watch('password');
  const { errors, isValid } = formState;

  const onSubmit = (data: LoginFormValues) => {
    console.log('Form submitted with data:', data);
  };
  const onSubmitError = () => {
    if (errors.email) {
      setFocus('email');
      alert(errors.email.message);
    } else if (errors.password) {
      setFocus('password');
      alert(errors.password.message);
    }
  };
  return {
    register,
    handleSubmit,
    watch,
    emailValue,
    passwordValue,
    onSubmit,
    onSubmitError,
    isValid,
  };
}
