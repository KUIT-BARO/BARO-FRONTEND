import React, { useState, forwardRef, useImperativeHandle, useEffect } from 'react';
import ScheduleDetailModal from '../ScheduleDetailModal/ScheduleDetailModal';
import ScheduleAddModal from '../ScheduleAddModal/ScheduleAddModal';
import './ScheduleGrid.styles.css';

interface FormattedSchedule {
  id: number;
  title: string;
  startTime: number;
  endTime: number;
  day: string;
  color: string;
  type?: string;
}

export interface Schedule {
 scheduleId: number;
 name: string;
 date: string;
 timeStart: string;
 timeEnd: string;
}

export interface ScheduleGridHandle {
 openAddModal: () => void;
}

interface ScheduleGridProps {
 readOnly?: boolean;
 initialSchedules?: Schedule[];
}

const ScheduleGrid = forwardRef<ScheduleGridHandle, ScheduleGridProps>(
 ({ readOnly = false, initialSchedules = [] }, ref) => {
  const [schedules, setSchedules] = useState<FormattedSchedule[]>([]);
   
   const getKoreanDay = (date: string) => {
     const days = ['일', '월', '화', '수', '목', '금', '토'];
     return days[new Date(date).getDay()];
   };
   
   useEffect(() => {
     if (initialSchedules.length > 0) {
       const formattedSchedules = initialSchedules.map(schedule => ({
         id: schedule.scheduleId,
         title: schedule.name,
         startTime: parseInt(schedule.timeStart.split(':')[0]),
         endTime: parseInt(schedule.timeEnd.split(':')[0]),
         day: getKoreanDay(schedule.date),
         color: getRandomColor()
       }));
       setSchedules(formattedSchedules);
     }
   }, [initialSchedules]);

   const colors = ['#6699FF', '#708AFF', '#7893FF', '#7BB2FF'];
   
   const getRandomColor = () => {
     const randomIndex = Math.floor(Math.random() * colors.length);
     return colors[randomIndex];
   };

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
     if (readOnly) return;
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
         color: schedule.color
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

       {!readOnly && (
         <>
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
         </>
       )}
     </div>
   );
});

ScheduleGrid.displayName = 'ScheduleGrid';

export default ScheduleGrid;