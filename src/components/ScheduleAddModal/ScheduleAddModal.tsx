import React, { useState } from 'react';
import Button from '../Button/Button';
import xIcon from '../../assets/icons/x_gray.svg';
import '../ScheduleDetailModal/ScheduleDetailModal.styles.css';
import { postSchedule } from '../../apis/schedule/postSchedule';

interface ScheduleAddModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (schedule: {
    title: string;
    location?: string;
    day: string;
    startTime: number;
    endTime: number;
  }) => void;
}

const MAX_LENGTH = 20;

const ScheduleAddModal: React.FC<ScheduleAddModalProps> = ({
  isOpen,
  onClose,
  onAdd
}) => {
  const [title, setTitle] = useState('');
  const [location, setLocation] = useState('');
  const [day, setDay] = useState('월');
  const [startTime, setStartTime] = useState(7);
  const [endTime, setEndTime] = useState(8);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const convertDayToEng = (koreanDay: string) => {
    const dayMap = {
      '월': 'MONDAY',
      '화': 'TUESDAY',
      '수': 'WEDNESDAY',
      '목': 'THURSDAY',
      '금': 'FRIDAY',
    };
    return dayMap[koreanDay] || koreanDay;
  };

  const handleAdd = async () => {
    if (!title.trim()) return;
    
    setIsLoading(true);
    setError(null);
  
    try {
      // location이 비어있으면 기본값 설정 (빈 문자열 대신 "장소 미정" 등의 기본값 사용)
      const locationValue = location.trim() || "장소 미정";
      
      const scheduleData = {
        name: title.trim(),
        dayOfWeek: convertDayToEng(day),
        timeStart: formatTime(startTime),
        timeEnd: formatTime(endTime),
        // null 대신 실제 값 전달
        location: locationValue
      };
  
      console.log('Sending schedule data:', scheduleData);
      const response = await postSchedule.createSchedule(scheduleData);
      
      if (response.data) {
        onAdd({
          title: title.trim(),
          location: locationValue,
          day,
          startTime,
          endTime
        });
        onClose();
        // 입력 필드 초기화
        setTitle('');
        setLocation('');
        setDay('월');
        setStartTime(7);
        setEndTime(8);
      }
    } catch (err) {
      // 더 상세한 오류 메시지 제공
      if (err.response) {
        setError(`시간표 등록 실패: ${err.response.status} - ${err.response.data?.message || '알 수 없는 오류'}`);
        console.error('Server response error:', err.response.data);
      } else if (err.request) {
        setError('서버에서 응답이 없습니다. 네트워크 연결을 확인해주세요.');
        console.error('No response from server:', err.request);
      } else {
        setError('시간표 등록 중 오류가 발생했습니다. 다시 시도해주세요.');
        console.error('Schedule creation error:', err.message);
      }
    } finally {
      setIsLoading(false);
    }
  };
  
  const formatTime = (time: number) => {
    const hours = Math.floor(time);
    const minutes = Math.round((time % 1) * 60);
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
  };

  if (!isOpen) return null;

  return (
    <>
      {isOpen && <div className="modal-overlay" />}
      <div className={`modal-container ${isOpen ? 'open' : ''}`}>
        <div className="modal-header">
          <h2 className="modal-title">일정 추가</h2>
          <button className="modal-close" onClick={onClose}>
            <img src={xIcon} alt="close" />
          </button>
        </div>

        {error && (
          <div className="schedule-error-message">
            {error}
          </div>
        )}

        <div className="form-section">
          <label className="form-label">요일</label>
          <select 
            className="form-select"
            value={`${day}요일`}
            onChange={(e) => {
              const newDay = e.target.value.replace('요일', '');
              setDay(newDay);
            }}
          >
            {['월요일', '화요일', '수요일', '목요일', '금요일'].map((d) => (
              <option key={d} value={d}>{d}</option>
            ))}
          </select>

          <div className="time-section">
            <div className="time-column-modal">
              <label className="form-label">시작 시간</label>
              <select 
                className="form-select"
                value={formatTime(startTime)}
                onChange={(e) => {
                  const [hours, minutes] = e.target.value.split(':').map(Number);
                  setStartTime(hours + minutes / 60);
                }}
              >
                {Array.from({ length: 29 }, (_, i) => {
                  const hour = Math.floor(i / 2) + 7;
                  const minute = i % 2 === 0 ? '00' : '30';
                  return `${String(hour).padStart(2, '0')}:${minute}`;
                }).map((time) => (
                  <option key={time} value={time}>{time}</option>
                ))}
              </select>
            </div>
            <div className="time-column-modal">
              <label className="form-label">종료 시간</label>
              <select 
                className="form-select"
                value={formatTime(endTime)}
                onChange={(e) => {
                  const [hours, minutes] = e.target.value.split(':').map(Number);
                  setEndTime(hours + minutes / 60);
                }}
              >
                {Array.from({ length: 29 }, (_, i) => {
                  const hour = Math.floor(i / 2) + 7;
                  const minute = i % 2 === 0 ? '00' : '30';
                  return `${String(hour).padStart(2, '0')}:${minute}`;
                }).map((time) => (
                  <option key={time} value={time}>{time}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="input-wrapper">
            <input
              type="text"
              className="form-input"
              placeholder="약속명을 추가해주세요"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              maxLength={MAX_LENGTH}
            />
            <div className="input-char-count">{title.length}/{MAX_LENGTH}</div>
          </div>

          <div className="location-wrapper input-wrapper">
            <div className="location-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 13.5C13.6569 13.5 15 12.1569 15 10.5C15 8.84315 13.6569 7.5 12 7.5C10.3431 7.5 9 8.84315 9 10.5C9 12.1569 10.3431 13.5 12 13.5Z" stroke="#999999" strokeWidth="2"/>
                <path d="M12 22C14 18 20 15.4183 20 10C20 5.58172 16.4183 2 12 2C7.58172 2 4 5.58172 4 10C4 15.4183 10 18 12 22Z" stroke="#999999" strokeWidth="2"/>
              </svg>
            </div>
            <input
              type="text"
              className="form-input location-input"
              placeholder="장소를 추가해주세요 (선택사항)"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              maxLength={MAX_LENGTH}
            />
            <div className="input-char-count">{location.length}/{MAX_LENGTH}</div>
          </div>
        </div>

        <div className="button-container">
          <Button onClick={onClose} color="Gray" disabled={isLoading}>취소</Button>
          <Button onClick={handleAdd} color="Blue" disabled={isLoading}>
            {isLoading ? '추가 중...' : '추가하기'}
          </Button>
        </div>
      </div>
    </>
  );
};

export default ScheduleAddModal;