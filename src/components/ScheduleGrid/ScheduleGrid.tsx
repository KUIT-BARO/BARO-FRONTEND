import React, { useState } from 'react';
import ScheduleDetailModal from '../ScheduleDetailModal/ScheduleDetailModal';
import './ScheduleGrid.styles.css';

const ScheduleGrid = () => {
  const [schedules, setSchedules] = useState([
    { id: 1, title: '수업1', startTime: 9, endTime: 11, day: '월', type: 'class' },
    { id: 2, title: '수업2', startTime: 11, endTime: 13, day: '월', type: 'class', variant: 'dark' },
    { id: 3, title: '수업3', startTime: 11, endTime: 12, day: '화', type: 'class', variant: 'light' },
    { id: 4, title: '수업3', startTime: 11, endTime: 12, day: '목', type: 'class', variant: 'light' },
    { id: 5, title: '수업4', startTime: 14, endTime: 15, day: '수', type: 'class' },
    { id: 6, title: '수업4', startTime: 14, endTime: 15, day: '금', type: 'class' },
    { id: 7, title: '밥약', startTime: 14, endTime: 17, day: '월', type: 'meal' },
    { id: 8, title: '밥약', startTime: 9, endTime: 12, day: '금', type: 'meal' },
    { id: 9, title: '밥약', startTime: 13, endTime: 17, day: '목', type: 'meal' },
    { id: 10, title: '밥약', startTime: 16, endTime: 18, day: '수', type: 'meal' }
  ]);

  const [selectedSchedule, setSelectedSchedule] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedSchedule(null);
  };

  const handleDeleteSchedule = (id: number) => {
    setSchedules(prev => prev.filter(schedule => schedule.id !== id));
  };

  const handleUpdateLocation = (id: number, location: string) => {
    setSchedules(prev => prev.map(schedule => 
      schedule.id === id ? { ...schedule, location } : schedule
    ));
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
                        className={`schedule-item ${schedule.type} ${schedule.variant || ''}`}
                        style={getScheduleStyle(schedule)}
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
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        schedule={selectedSchedule}
        onDelete={handleDeleteSchedule}
        onUpdateLocation={handleUpdateLocation}
      />
    </div>
  );
};

export default ScheduleGrid;