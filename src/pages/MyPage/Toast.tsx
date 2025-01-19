import React, { useEffect, useState } from 'react';
import checkIcon from '../../assets/icons/check.svg';
import './Toast.styles.css';

interface ToastProps {
  message: string;
  isVisible: boolean;
  onClose: () => void;
}

const Toast: React.FC<ToastProps> = ({ message, isVisible, onClose }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (isVisible) {
      setVisible(true);
      const timer = setTimeout(() => {
        setVisible(false);
        setTimeout(onClose, 500);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  if (!isVisible) return null;

  return (
    <div className={`toast-container ${visible ? 'visible' : ''}`}>
      <div className="toast-icon">
        <img src={checkIcon} alt="check" />
      </div>
      <span className="toast-message">{message}</span>
    </div>
  );
};

export default Toast;