import React, { useState, useEffect } from "react";
import monthBack from "../../../../assets/icons/Buttons/left.svg";
import monthNext from "../../../../assets/icons/Buttons/right.svg";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ko } from "date-fns/locale";
import "./Datepicker.css";

export default function CustomDatepicker({ setDateRange, dateStart, dateEnd }) {
  // 날짜 초기값 설정
  const [internalDateRange, setInternalDateRange] = useState<
    [Date | null, Date | null]
  >([dateStart || null, dateEnd || null]);

  // 부모에서 dateStart와 dateEnd가 업데이트되었을 때 내부 상태 업데이트
  useEffect(() => {
    setInternalDateRange([dateStart, dateEnd]);
  }, [dateStart, dateEnd]);

  const handleDateChange = (update: [Date | null, Date | null]) => {
    setInternalDateRange(update);

    // 날짜를 "YYYY-MM-DD" 형식 문자열로 변환
    const formattedRange: [string | null, string | null] = [
      update[0] ? update[0].toISOString().split("T")[0] : null,
      update[1] ? update[1].toISOString().split("T")[0] : null,
    ];

    setDateRange(formattedRange);
    console.log(formattedRange);
  };

  return (
    <DatePicker
      selected={internalDateRange[0]}
      onChange={handleDateChange}
      startDate={internalDateRange[0]}
      endDate={internalDateRange[1]}
      selectsRange // 기간 선택 활성화
      minDate={new Date()} // 오늘 이전 날짜 선택 불가
      dayClassName={(date) => {
        if (
          internalDateRange[0] &&
          internalDateRange[1] &&
          date > internalDateRange[0] &&
          date < internalDateRange[1]
        ) {
          return "middle-date";
        }
        return "";
      }}
      inline
      locale={ko}
      dateFormat="yyyy년 MM월 dd일"
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
              <img src={monthNext} alt="next" />
            </div>
          </div>
        </div>
      )}
    />
  );
}
