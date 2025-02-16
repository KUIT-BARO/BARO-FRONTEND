import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import backIcon from '../../assets/icons/backIcon.svg';
import womanAvatar from '../../assets/icons/womanavatar.svg';
import ScheduleGrid from '../../components/ScheduleGrid/ScheduleGrid';
import { getUserSchedule } from '../../apis/schedule/getUserSchedule';
import './UserSchedulePage.styles.css';

interface Schedule {
  scheduleId: number;
  name: string;
  dayOfWeek: string;
  timeStart: string;
  timeEnd: string;
}

interface UserSchedule {
  userId: number;
  schedules: Schedule[];
}

const UserSchedulePage = () => {
  const navigate = useNavigate();
  const { userId } = useParams();
  const [userSchedule, setUserSchedule] = useState<UserSchedule | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const convertDayOfWeek = (day: string) => {
    const dayMap = {
      'MONDAY': '월',
      'TUESDAY': '화',
      'WEDNESDAY': '수',
      'THURSDAY': '목',
      'FRIDAY': '금',
    };
    return dayMap[day] || day;
  };

  useEffect(() => {
    const fetchUserSchedule = async () => {
      if (!userId) return;
      
      try {
        setIsLoading(true);
        setError(null);
        const response = await getUserSchedule.ById(Number(userId));
        
        if (response.data?.data) {
          setUserSchedule(response.data.data);
        }
      } catch (err) {
        setError('시간표를 불러오는데 실패했습니다.');
        console.error('Failed to fetch user schedule:', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUserSchedule();
  }, [userId]);

  const dummyUser = {
    name: '김예진',
    username: '@yejin_kim',
    profileImage: womanAvatar
  };

  if (isLoading) {
    return (
      <div className="user-schedule-container">
        <div className="loading-message">로딩 중...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="user-schedule-container">
        <div className="error-message">{error}</div>
      </div>
    );
  }

  const formattedSchedules = userSchedule?.schedules.map(schedule => ({
    id: schedule.scheduleId,
    title: schedule.name,
    startTime: parseInt(schedule.timeStart.split(':')[0]),
    endTime: parseInt(schedule.timeEnd.split(':')[0]),
    day: convertDayOfWeek(schedule.dayOfWeek),
    type: 'class'
  })) || [];

  return (
    <div className="user-schedule-container">
      <header className="user-schedule-header">
        <button onClick={() => navigate(-1)} className="back-button">
          <img src={backIcon} alt="back" />
        </button>
        <h1></h1>
      </header>

      <section className="user-profile-section">
        <div className="profile-image">
          <img src={dummyUser.profileImage} alt="profile" />
        </div>
        <div className="profile-info">
          <h2>{dummyUser.name}</h2>
          <p>{dummyUser.username}</p>
        </div>
      </section>

      <ScheduleGrid 
        readOnly 
        schedules={formattedSchedules}
      />
    </div>
  );
};

export default UserSchedulePage;