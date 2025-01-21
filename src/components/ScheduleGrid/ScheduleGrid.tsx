import React, { useState, forwardRef, useImperativeHandle } from 'react';
import ScheduleDetailModal from '../ScheduleDetailModal/ScheduleDetailModal';
import ScheduleAddModal from '../ScheduleAddModal/ScheduleAddModal';
import './ScheduleGrid.styles.css';

export interface ScheduleGridHandle {
  openAddModal: () => void;
}

const ScheduleGrid = forwardRef<ScheduleGridHandle>((_, ref) => {
  const colors = ['#6699FF', '#708AFF', '#7893FF', '#7BB2FF'];
  
  const getRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  };

  const [schedules, setSchedules] = useState([
    { id: 1, title: '표현과 재료', startTime: 9, endTime: 11, day: '월', type: 'class', color: getRandomColor() },
    { id: 2, title: '회계원리', startTime: 10.5, endTime: 12, day: '화', type: 'class', color: getRandomColor() },
    { id: 3, title: '국제물류', startTime: 14, endTime: 15.5, day: '수', type: 'class', color: getRandomColor() },
    { id: 4, title: '회계원리', startTime: 10.5, endTime: 12, day: '목', type: 'class', color: getRandomColor() },
    { id: 5, title: '글로벌지속경영', startTime: 9, endTime: 12, day: '금', type: 'class', color: getRandomColor() },
    { id: 6, title: '과외', startTime: 14, endTime: 17, day: '월', type: 'class', color: getRandomColor() },
    { id: 7, title: '매가커피 알바', startTime: 13, endTime: 17, day: '목', type: 'class', color: getRandomColor() },
    { id: 8, title: '수학채점 알바', startTime: 16, endTime: 18, day: '수', type: 'class', color: getRandomColor() },
    { id: 9, title: '국제통상론', startTime: 11, endTime: 13, day: '월', type: 'class', color: getRandomColor() },
  ]);

  const [selectedSchedule, setSelectedSchedule] = useState(null);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  useImperativeHandle(ref, () => ({
    openAddModal: () => setIsAddModalOpen(true)
  }));

  const timeSlots = Array.from({ length: 36 }, (_, i) => ({
    hour: Math.floor(i/2) + 7,
    minute: i % 2 === 0 ? '00' : '30'
  }));
  
  const days = ['월', '화', '수', '목', '금'];

  const getScheduleStyle = (schedule) => {
    const startMinutes = (schedule.startTime - 7) * 60;
    const endMinutes = (schedule.endTime - 7) * 60;
    const top = startMinutes / 30 * 20;
    const height = (endMinutes - startMinutes) / 30 * 20;
    return { top: `${top}px`, height: `${height}px` };
  };

  const handleScheduleClick = (schedule) => {
    setSelectedSchedule(schedule);
    setIsDetailModalOpen(true);
  };

  const handleCloseDetailModal = () => {
    setIsDetailModalOpen(false);
    setSelectedSchedule(null);
  };

  const handleDeleteSchedule = (id: number) => {
    setSchedules(prev => prev.filter(schedule => schedule.id !== id));
  };

  const handleUpdateSchedule = (id: number, updatedSchedule: {
    title: string;
    location?: string;
    day: string;
    startTime: number;
    endTime: number;
  }) => {
    setSchedules(prev => prev.map(schedule => 
      schedule.id === id ? {
        ...schedule,
        ...updatedSchedule,
        color: schedule.color // 기존 색상 유지
      } : schedule
    ));
  };

  const handleAddSchedule = (newSchedule: {
    title: string;
    location?: string;
    day: string;
    startTime: number;
    endTime: number;
  }) => {
    const newId = Math.max(...schedules.map(s => s.id), 0) + 1;
    const scheduleToAdd = {
      ...newSchedule,
      id: newId,
      type: 'class',
      color: getRandomColor()
    };
    setSchedules(prev => [...prev, scheduleToAdd]);
  };

  return (
    <div className="schedule-wrapper">
      <div className="days-header">
        {days.map(day => (
          <div key={day} className="day-item">
            {day}
          </div>
        ))}
      </div>

      <div className="main-grid-container">
        <div className="time-column">
          {timeSlots.map((slot, index) => (
            <div 
              key={`${slot.hour}-${slot.minute}`} 
              className={`time-slot ${slot.minute === '30' ? 'half-hour' : ''}`}
            >
              {slot.minute === '00' ? slot.hour : ''}
            </div>
          ))}
        </div>

        <div className="schedule-grid">
          {days.map(day => (
            <div key={day} className="day-column">
              {timeSlots.map((slot, index) => (
                <div 
                  key={`${day}-${slot.hour}-${slot.minute}`} 
                  className={`grid-cell ${slot.minute === '30' ? 'half-hour' : ''}`}
                >
                  {schedules
                    .filter(schedule => 
                      schedule.day === day && 
                      Math.floor(schedule.startTime) === slot.hour &&
                      slot.minute === '00'
                    )
                    .map(schedule => (
                      <div 
                        key={schedule.id}
                        className="schedule-item class"
                        style={{
                          ...getScheduleStyle(schedule),
                          backgroundColor: schedule.color
                        }}
                        onClick={() => handleScheduleClick(schedule)}
                      >
                        {schedule.title}
                      </div>
                    ))}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <ScheduleDetailModal 
        isOpen={isDetailModalOpen}
        onClose={handleCloseDetailModal}
        schedule={selectedSchedule}
        onDelete={handleDeleteSchedule}
        onUpdate={handleUpdateSchedule}
      />

      <ScheduleAddModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onAdd={handleAddSchedule}
      />
    </div>
  );
});

ScheduleGrid.displayName = 'ScheduleGrid';

export default ScheduleGrid;