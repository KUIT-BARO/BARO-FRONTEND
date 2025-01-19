import React, { useState, useEffect } from 'react';
import backIcon from '../../assets/icons/backIcon_white.svg';
import './InputModal.styles.css';

interface InputModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  initialValue: string;
  placeholder: string;
  maxLength: number;
  onComplete: (value: string) => void;
  type?: 'name' | 'username';
}

const InputModal = ({
  isOpen,
  onClose,
  title,
  initialValue,
  placeholder,
  maxLength,
  onComplete,
  type = 'name'
}: InputModalProps) => {
  const [value, setValue] = useState(initialValue);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (isOpen) {
      setValue(initialValue);
      setError(null);
    }
  }, [isOpen, initialValue]);

  // 임시로 서버 체크를 시뮬레이션
  const checkDuplicateUsername = async (username: string) => {
    // 실제 구현에서는 서버 API를 호출합니다
    const duplicateUsernames = ['jihwan_kim', 'test123', 'example_user'];
    return duplicateUsernames.includes(username);
  };

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);
    
    if (type === 'username') {
      setError(null);
      const isDuplicate = await checkDuplicateUsername(newValue);
      if (isDuplicate) {
        setError('중복된 아이디 입니다. 다른 아이디로 바꿔주세요.');
      }
    }
  };

  const handleComplete = async () => {
    if (type === 'username') {
      const isDuplicate = await checkDuplicateUsername(value);
      if (isDuplicate) {
        setError('중복된 아이디 입니다. 다른 아이디로 바꿔주세요.');
        return;
      }
    }
    onComplete(value);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <>
      <div className="input-modal-overlay" />
      <div className="input-modal-container">
        <header className="input-modal-header">
          <button className="input-modal-back" onClick={onClose}>
            <img src={backIcon} alt="back" />
          </button>
          <h1>{title}</h1>
          <button 
            className="input-modal-complete" 
            onClick={handleComplete}
          >
            완료
          </button>
        </header>

        <div className="input-modal-content">
          <div className="input-modal-field-wrapper">
            <input
              type="text"
              className="input-modal-field"
              value={value}
              onChange={handleChange}
              maxLength={maxLength}
              placeholder={placeholder}
              autoFocus
            />
            <div className="input-modal-char-count">
              {value.length}/{maxLength}
            </div>
            {error && (
              <div className="input-modal-error">
                {error}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default InputModal;