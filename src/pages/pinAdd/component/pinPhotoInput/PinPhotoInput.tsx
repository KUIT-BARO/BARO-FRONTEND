import React, { useState, useRef } from 'react';
import * as styles from '@pages/pinAdd/component/pinPhotoInput/PinPhotoInput.css';
import Text from '@shared/components/text/Text';

export default function PinPhotoInput() {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

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
        accept='image/*'
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
            <Text className={styles.placeholderText}>
              클릭하여 장소 사진을 추가해주세요
            </Text>
          </div>
        )}
      </div>
    </div>
  );
}
