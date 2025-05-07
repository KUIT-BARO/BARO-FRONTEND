export interface UserInfo {
  userName: string;
  email: string;
  profileImage: string;
}

export interface RequestProfile {
  newName: string;
  newProfileImage: string;
}

export interface RequestPassword {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
}

export interface InputModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  initialValue: string;
  placeholder?: string;
  maxLength?: number;
  onComplete: (value: string) => void;
  type?: "passwordChange" | "profile";
}
export interface SignupInfo {
  email: string;
  password: string;
  name: string;
}
