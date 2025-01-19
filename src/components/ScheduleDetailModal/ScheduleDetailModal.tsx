import React, { useEffect, useRef, useState } from 'react';
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
  } | null;
  onDelete?: (id: number) => void;
  onUpdateLocation?: (id: number, location: string) => void;
}

const ScheduleDetailModal: React.FC<ScheduleDetailModalProps> = ({
  isOpen,
  onClose,
  schedule,
  onDelete,
  onUpdateLocation
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const [location, setLocation] = useState<string>('');

  useEffect(() => {
    if (schedule?.location) {
      setLocation(schedule.location);
    } else {
      setLocation('');
    }
  }, [schedule]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  const handleLocationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocation(e.target.value);
  };

  const handleLocationBlur = () => {
    if (schedule && onUpdateLocation) {
      onUpdateLocation(schedule.id, location);
    }
  };

  const handleDelete = () => {
    if (schedule && onDelete) {
      onDelete(schedule.id);
      onClose();
    }
  };

  if (!schedule) return null;

  const formatTime = (time: number) => {
    const hours = Math.floor(time);
    const minutes = (time % 1) * 60;
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
  };

  const getBackgroundColor = () => {
    if (schedule.type === 'meal') return '#AEB4C9';
    if (schedule.variant === 'dark') return '#5175FF';
    if (schedule.variant === 'light') return '#C2CDF4';
    return '#94AAFF';
  };

  return (
    <>
      {isOpen && <div className="modal-overlay" />}
      <div 
        ref={modalRef}
        className={`modal-container ${isOpen ? 'open' : ''}`}
        style={{
          backgroundColor: getBackgroundColor()
        }}
      >
        <div className="modal-time">
          {schedule.day}요일 {formatTime(schedule.startTime)} - {formatTime(schedule.endTime)}
        </div>
        <div className="modal-title">{schedule.title}</div>
        <input
          type="text"
          className="modal-location-input"
          placeholder="장소를 추가해주세요 (선택 사항)"
          value={location}
          onChange={handleLocationChange}
          onBlur={handleLocationBlur}
        />
        <button className="modal-delete" onClick={handleDelete}>
          일정 삭제
        </button>
      </div>
    </>
  );
};

export default ScheduleDetailModal;