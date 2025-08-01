import { useState, useRef } from 'react';
import { format, isBefore, startOfDay, isAfter } from 'date-fns';

interface DateSelectionState {
  suggestedStartDate: string;
  suggestedEndDate: string | null;
}

export const useDateSelection = () => {
  const todayDateRef = useRef(new Date());
  const todayDate = todayDateRef.current;

  const [currentDate, setCurrentDate] = useState<Date>(todayDate);
  const [dateSelection, setDateSelection] = useState<DateSelectionState>({
    suggestedStartDate: format(todayDate, 'yyyy-MM-dd'),
    suggestedEndDate: null,
  });
  const [isOneClicked, setIsOneClicked] = useState(false);

  const handleDateClick = (date: Date) => {
    if (isBefore(date, startOfDay(todayDate))) {
      return;
    }

    if (!isOneClicked) {
      // 첫 번째 클릭 - 시작 날짜 설정
      setDateSelection({
        suggestedStartDate: format(date, 'yyyy-MM-dd'),
        suggestedEndDate: null,
      });
      setIsOneClicked(true);
    } else {
      // 두 번째 클릭 - 종료 날짜 설정 (더 늦은 날짜가 end가 되도록)
      const startDate = new Date(dateSelection.suggestedStartDate);
      const endDate = date;

      if (isAfter(startDate, endDate)) {
        // 시작 날짜가 더 늦은 경우 - 순서 변경
        setDateSelection({
          suggestedStartDate: format(endDate, 'yyyy-MM-dd'),
          suggestedEndDate: format(startDate, 'yyyy-MM-dd'),
        });
      } else {
        // 종료 날짜가 더 늦은 경우 - 그대로 유지
        setDateSelection(prev => ({
          ...prev,
          suggestedEndDate: format(endDate, 'yyyy-MM-dd'),
        }));
      }
      setIsOneClicked(false);
    }
  };

  const resetDateSelection = () => {
    setDateSelection({
      suggestedStartDate: format(todayDate, 'yyyy-MM-dd'),
      suggestedEndDate: null,
    });
    setIsOneClicked(false);
  };

  const getSelectedDates = () => {
    return {
      startDate: new Date(dateSelection.suggestedStartDate),
      endDate: dateSelection.suggestedEndDate ? new Date(dateSelection.suggestedEndDate) : null,
    };
  };

  return {
    todayDate,
    currentDate,
    setCurrentDate,
    dateSelection,
    isOneClicked,
    handleDateClick,
    resetDateSelection,
    getSelectedDates,
  };
};
