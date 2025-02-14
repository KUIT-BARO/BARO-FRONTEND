import React, { useEffect, useState } from "react";

import { Header, Table, Wrapper, DateCell, EventIndicators, ScheduleWrapper } from "./ScheduleCalendar.styles";

import monthBack from "../../../assets/icons/monthBack.svg";
import monthNext from "../../../assets/icons/monthNext.svg";

export default function ScheduleCalendar() {

  const [currentDate, setCurrentDate] = useState(new Date()); // 현재 날짜
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();
  const today = new Date();

  const [selectedDate, setSelectedDate] = useState<number | null>(null); // 선택된 날짜
  useEffect(() => {
    setSelectedDate(today.getDate());
  });

  const [events, setEvents] = useState({
    '2025-2-5': 3,  // 2024년 1월 5일에 3개의 일정
    '2025-2-12': 2, // 2024년 1월 12일에 2개의 일정
    '2025-3-20': 1, // 2024년 1월 20일에 1개의 일정
  });

  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDay = new Date(currentYear, currentMonth, 1).getDay();

  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentYear, currentMonth - 1, 1));
    setSelectedDate(null); // 월 변경 시 선택 초기화
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentYear, currentMonth + 1, 1));
    setSelectedDate(null); // 월 변경 시 선택 초기화
  };

  const generateCalendar = () => {
    const calendar: (number | null)[][] = [];
    let day = 1;

    for (let i = 0; i < 6; i++) {
      const week: (number | null)[] = [];
      for (let j = 0; j < 7; j++) {
        if (i === 0 && j < firstDay) {
          week.push(null); // 첫 번째 주의 공백
        } else if (day > daysInMonth) {
          week.push(null); // 마지막 주의 공백
        } else {
          week.push(day);
          day++;
        }
      }
      calendar.push(week);
    }
    return calendar;
  };

  const calendarData = generateCalendar();

  const handleDateClick = (day: number | null) => {
    if (day !== null) {
      setSelectedDate(day);
    }
  };

  return (
    <>
      <Wrapper>
        <Header>
          <div className="date">
            {currentYear}년 {currentMonth+1}월
          </div>
          <div className="date-buttons">
            <img
              src={monthBack}
              alt="month back icon"
              onClick={handlePrevMonth}
            />
            <img
              src={monthNext}
              alt="month next icon"
              onClick={handleNextMonth}
            />
          </div>
        </Header>
        <Table>
          <thead>
            <tr className="days">
              <th>일</th>
              <th>월</th>
              <th>화</th>
              <th>수</th>
              <th>목</th>
              <th>금</th>
              <th>토</th>
            </tr>
          </thead>
          <tbody>
            {calendarData.map((week, weekIndex) => (
              <tr key={weekIndex}>
                {week.map((day, dayIndex) => (
                  <DateCell
                    key={dayIndex}
                    isToday={
                      !!day &&
                      today.getDate() === day &&
                      today.getMonth() === currentMonth &&
                      today.getFullYear() === currentYear
                    }
                    // isSelected={day === selectedDate && day != null}
                    // onClick={() => handleDateClick(day)}
                  >
                    {day}
                    <EventIndicators>
                        {Array.from(
                        { length: day ? events[`${currentYear}-${currentMonth + 1}-${day}`] || 0 : 0 },
                        (_, idx) => (
                          <span key={idx} />
                        )
                      )}
                    </EventIndicators>
                  </DateCell>
                ))}
              </tr>
            ))}
          </tbody>
        </Table>
      </Wrapper>
      
      {/* {selectedDate && events[selectedDate] && 
        <ScheduleWrapper>
          <div>
            {selectedDate}.
          </div>
        </ScheduleWrapper>
      } */}
    </>
  );
}
