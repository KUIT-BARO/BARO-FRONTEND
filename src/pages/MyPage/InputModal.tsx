import React, { useState, useEffect } from 'react';
import backIcon from '../../assets/icons/backIcon_white.svg';
import profile1 from '../../assets/icons/manavatar.svg';
import profile2 from '../../assets/icons/womanavatar.svg';
import profile3 from '../../assets/icons/dogavatar.svg';
import profile4 from '../../assets/icons/useravatar.svg';
import './InputModal.styles.css';

interface InputModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  initialValue: string;
  placeholder?: string;
  maxLength?: number;
  onComplete: (value: string) => void;
  type?: 'name' | 'username' | 'profile';
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
  const [selectedProfile, setSelectedProfile] = useState(initialValue);

  const profiles = [
    { id: 'profile1', src: profile1 },
    { id: 'profile2', src: profile2 },
    { id: 'profile3', src: profile3 },
    { id: 'profile4', src: profile4 },
  ];

  useEffect(() => {
    if (isOpen) {
      setValue(initialValue);
      setSelectedProfile(initialValue);
      setError(null);
    }
  }, [isOpen, initialValue]);

  const checkDuplicateUsername = async (username: string) => {
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

    if (type === 'profile') {
      onComplete(selectedProfile);
    } else {
      onComplete(value);
    }
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
          {type === 'profile' ? (
            <div className="input-modal-profile-content">
              <div className="profile-options">
                {profiles.map((profile) => (
                  <button
                    key={profile.id}
                    className={`profile-option ${selectedProfile === profile.id ? 'selected' : ''}`}
                    onClick={() => setSelectedProfile(profile.id)}
                  >
                    <img src={profile.src} alt={profile.id} />
                  </button>
                ))}
              </div>
              <p className="profile-select-description">
                원하는 사진으로 프로필을 변경해주세요.
              </p>
            </div>
          ) : (
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
          )}
        </div>
      </div>
    </>
  );
};

export default InputModal;