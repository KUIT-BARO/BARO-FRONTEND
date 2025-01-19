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
}

const InputModal = ({
  isOpen,
  onClose,
  title,
  initialValue,
  placeholder,
  maxLength,
  onComplete
}: InputModalProps) => {
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    if (isOpen) {
      setValue(initialValue);
    }
  }, [isOpen, initialValue]);

  const handleComplete = () => {
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
          <button className="input-modal-complete" onClick={handleComplete}>
            완료
          </button>
        </header>

        <div className="input-modal-content">
          <div className="input-modal-field-wrapper">
            <input
              type="text"
              className="input-modal-field"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              maxLength={maxLength}
              placeholder={placeholder}
              autoFocus
            />
            <div className="input-modal-char-count">
              {value.length}/{maxLength}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InputModal;