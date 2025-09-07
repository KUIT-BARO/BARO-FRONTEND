import React, { useState, useRef } from 'react';
import * as styles from '@pages/pinAdd/component/pinPhotoInput/PinPhotoInput.css';
import Text from '@shared/components/text/Text';
import type { UseFormSetValue, FieldErrors } from 'react-hook-form';
import type { PinAddFormData } from '@pages/pinAdd/hook/usePinAddValidation';

interface PinPhotoInputProps {
  setValue: UseFormSetValue<PinAddFormData>;
  errors: FieldErrors<PinAddFormData>;
}

// 허용되는 이미지 파일 확장자
const ALLOWED_IMAGE_EXTENSIONS = ['jpg', 'jpeg', 'png', 'webp'];

// 파일 확장자 검증 함수
const validateImageFile = (file: File): boolean => {
  const fileName = file.name.toLowerCase();
  const extension = fileName.split('.').pop();
  return extension ? ALLOWED_IMAGE_EXTENSIONS.includes(extension) : false;
};

export default function PinPhotoInput({ setValue, errors }: PinPhotoInputProps) {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // 파일 확장자 검증
    if (!validateImageFile(file)) {
      alert('jpg, jpeg, png, webp 형식의 이미지 파일만 업로드 가능합니다.');
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
      return;
    }

    // react-hook-form에 파일 설정
    setValue('image', file);

    const reader = new FileReader();
    reader.onload = (e) => {
      setUploadedImage(e.target?.result as string);
    };
    reader.onerror = () => {
      alert('파일을 읽는 중 오류가 발생했습니다.');
    };
    reader.readAsDataURL(file);
  };

  const handlePhotoContainerClick = () => {
    if (!uploadedImage) {
      fileInputRef.current?.click();
    }
  };

  const handleRemoveImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setUploadedImage(null);
    setValue('image', undefined);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className={styles.photoInputWrapper}>
      <input
        className={styles.hiddenInput}
        ref={fileInputRef}
        type='file'
        accept='.jpg,.jpeg,.png,.webp'
        onChange={handleFileChange}
      />
      <div className={styles.photoContainer}>
        {uploadedImage ? (
          <img
            src={uploadedImage}
            alt='업로드된 사진'
            className={styles.uploadedImage}
            onClick={handleRemoveImage}
          />
        ) : (
          <div
            className={styles.uploadPlaceholder}
            onClick={handlePhotoContainerClick}
          >
            <Text tag='body_16' color='gray3'>
              클릭하여 장소 사진을 추가해주세요
            </Text>
          </div>
        )}
      </div>
      {errors.image && (
        <Text tag='body_14' color='red0'>
          {errors.image.message}
        </Text>
      )}
    </div>
  );
}
