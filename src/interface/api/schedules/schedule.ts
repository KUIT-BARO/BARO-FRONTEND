export interface ResponseSchedule {
  scheduleId: number;
  scheduleName: string;
  dayOfWeek: number;
  startTime: string;
  endTime: string;
}

export interface UserData {
  profileImage: string;
  userName: string;
  email: string;
  schedules: ResponseSchedule[];
}

export interface UserResponse {
  success: boolean;
  code: number;
  message: string;
  data: UserData;
}

export interface RequestSchedule {
  scheduleName: string;
  dayOfWeek: number;
  startTime: string;
  endTime: string;
  placeName: string;
}

export interface ScheduleGridHandle {
  openAddModal: () => void;
}
