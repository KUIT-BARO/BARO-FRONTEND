import React, { useEffect, useState } from 'react';
import Button from '../Button/Button';
import xIcon from '../../assets/icons/x_gray.svg';
import locationIcon from '../../assets/icons/location_gray.svg';
import './ScheduleDetailModal.styles.css';

interface ScheduleDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  schedule: {
    id: number;
    title: string;
    startTime: number;
    endTime: number;
    day: string;
    type: string;
    variant?: string;
    location?: string;
    color?: string;
  } | null;
  onDelete?: (id: number) => void;
  onUpdate?: (id: number, updatedSchedule: {
    title: string;
    location?: string;
    day: string;
    startTime: number;
    endTime: number;
  }) => void;
}

const MAX_LENGTH = 20;

const ScheduleDetailModal: React.FC<ScheduleDetailModalProps> = ({
  isOpen,
  onClose,
  schedule,
  onDelete,
  onUpdate
}) => {
  const [title, setTitle] = useState('');
  const [location, setLocation] = useState('');
  const [day, setDay] = useState('');
  const [startTime, setStartTime] = useState(0);
  const [endTime, setEndTime] = useState(0);

  useEffect(() => {
    if (schedule) {
      setTitle(schedule.title || '');
      setLocation(schedule.location || '');
      setDay(schedule.day || '');
      setStartTime(schedule.startTime || 0);
      setEndTime(schedule.endTime || 0);
    }
  }, [schedule]);

  const handleDelete = () => {
    if (schedule && onDelete) {
      onDelete(schedule.id);
      onClose();
    }
  };

  const handleUpdate = () => {
    if (schedule && onUpdate) {
      const updatedSchedule = {
        title: title || schedule.title,
        location,
        day,
        startTime,
        endTime
      };
      
      onUpdate(schedule.id, updatedSchedule);
      onClose();
    }
  };

  const formatTime = (time: number) => {
    const hours = Math.floor(time);
    const minutes = Math.round((time % 1) * 60);
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
  };

  if (!isOpen || !schedule) return null;

  return (
    <>
      {isOpen && <div className="modal-overlay" />}
      <div className={`modal-container ${isOpen ? 'open' : ''}`}>
        <div className="modal-header">
          <h2 className="modal-title">일정 수정</h2>
          <button className="modal-close" onClick={onClose}>
            <img src={xIcon} alt="close" />
          </button>
        </div>

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
              <img src={locationIcon} alt="location" />
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
          <Button onClick={handleDelete} color="Gray">삭제하기</Button>
          <Button onClick={handleUpdate} color="Blue">수정하기</Button>
        </div>
      </div>
    </>
  );
};

export default ScheduleDetailModal;