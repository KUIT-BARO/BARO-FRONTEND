import React, { useEffect, useState } from "react";
import checkIcon from "../../../../assets/icons/check.svg";
import { ToastContainer, ToastIcon, ToastMessage } from "./Toast.styles";

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
    <ToastContainer visible={visible}>
      <ToastIcon>
        <img src={checkIcon} alt="check" width={16} height={16} />
      </ToastIcon>
      <ToastMessage>{message}</ToastMessage>
    </ToastContainer>
  );
};

export default Toast;
