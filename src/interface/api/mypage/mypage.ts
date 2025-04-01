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
