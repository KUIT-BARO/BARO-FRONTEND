import React, { useState } from 'react';

import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { ko } from "date-fns/locale";

import monthBack from '../../../assets/icons/monthBack.svg';
import monthNext from '../../../assets/icons/monthNext.svg';

import './ScheduleCalendar.css';

export default function ScheduleCalendar({
  navigate,
  handleBack,
  handleExit,
  dateRange,
  setDateRange,
  startDate,
  endDate,
}) {
  const isDateSelected = startDate !== null && endDate !== null;

  return (
    <DatePicker
      selected={startDate}
      onChange={(update: [Date | null, Date | null] | Date) => {
        if (Array.isArray(update)) {
          setDateRange(update);
        } else {
          setDateRange([update, update]);
        }
      }}
      startDate={startDate}
      endDate={endDate}
      selectsRange
      //==============================
      dayClassName={(date) => {
        if (startDate && endDate && date > startDate && date < endDate) {
          return "middle-date";
        }
        return "";
      }}
      //==============================
      inline
      locale={ko}
      dateFormat="yyyy년 MM월"
      renderCustomHeader={({ date, decreaseMonth, increaseMonth }) => (
        <div className="custom-header">
          <span>
            {date.getFullYear()}년 {date.getMonth() + 1}월
          </span>
          <div className="btn-wrapper">
            <div onClick={decreaseMonth}>
              <img src={monthBack} alt="back" />
            </div>
            <div onClick={increaseMonth}>
              <img src={monthNext} alt="back" />
            </div>
          </div>
        </div>
      )}
    />
  );
};