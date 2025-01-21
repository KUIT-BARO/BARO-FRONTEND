interface TimeSlot {
  startTime: number; // 시작 시간 (24시간제 정수, e.g., 9 = 오전 9시)
  endTime: number; // 종료 시간 (24시간제 정수, e.g., 17 = 오후 5시)
}

interface Todo {
  title: string; // 투두 제목
  description?: string; // 투두 설명 (옵션)
  timeSlot: TimeSlot; // 시간대 정보
}

interface TimeTableEntry {
  day: Date; // 특정 날짜
  todos: Todo[]; // 해당 날짜에 포함된 투두 배열
}

interface TodoTimeTableProps {
  date: string; // 시작 날짜
  timeTable: TimeTableEntry[]; // 시간표 데이터
  setTimeTable: React.Dispatch<React.SetStateAction<TimeTableEntry[]>>; // 상태 업데이트 함수
}
