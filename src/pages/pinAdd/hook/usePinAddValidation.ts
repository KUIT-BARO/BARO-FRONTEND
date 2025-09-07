import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { CATEGORIES } from '@shared/constant/category';

const ALLOWED_IMAGE = ['jpg', 'jpeg', 'png', 'webp'] as const;

const validateImageFile = (file: File | null | undefined): boolean => {
  if (!file) return true;

  const fileName = file.name.toLowerCase();
  const extension = fileName.split('.').pop();

  return extension ? (ALLOWED_IMAGE as readonly string[]).includes(extension) : false;
};

export const pinAddSchema = z.object({
  review: z.string()
    .min(1, '리뷰를 작성해주세요')
    .max(150, '리뷰는 150자까지 작성 가능합니다'),
  score: z.number()
    .min(1, '별점을 선택해주세요')
    .max(5, '별점은 최대 5점입니다'),
  categories: z.array(z.string())
    .min(1, '카테고리를 최소 1개 선택해주세요')
    .max(5, '카테고리는 최대 5개까지 선택 가능합니다'),
  image: z.instanceof(File)
    .optional()
    .refine(validateImageFile, {
      message: 'jpg, jpeg, png, webp 형식의 이미지 파일만 업로드 가능합니다.'
    })
});

export type PinAddFormData = z.infer<typeof pinAddSchema>;

export interface PinAddApiData {
  review: string;
  score: number;
  categoryIds: number[];
}

// 카테고리 문자열 인덱스로 변환
export const convertToIds = (categories: string[]): number[] => {
  return categories
    .map(category => (CATEGORIES as readonly string[]).indexOf(category))
    .filter(index => index !== -1);
};

export const convertToApiData = (formData: PinAddFormData): PinAddApiData => {
  return {
    review: formData.review,
    score: formData.score,
    categoryIds: convertToIds(formData.categories),
  };
};

export const usePinAddValidation = () => {
  const form = useForm<PinAddFormData>({
    resolver: zodResolver(pinAddSchema),
    defaultValues: {
      review: '',
      score: 0,
      categories: [],
      image: undefined,
    },
    mode: 'onChange',
  });

  const { register, watch, formState: { errors }, setValue, handleSubmit } = form;

  return { register, watch, formState: { errors }, setValue, handleSubmit };
};
