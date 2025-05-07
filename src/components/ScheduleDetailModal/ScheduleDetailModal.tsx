import React, { useEffect, useState } from "react";
import Button from "../Button/Button";
import xIcon from "../../assets/icons/x_gray.svg";
import locationIcon from "../../assets/icons/location_gray.svg";
import * as S from "./ScheduleDetailModal.styles";
import {
  ScheduleDetailModalProps,
  RequestSchedule,
} from "../../interface/api/schedules/schedule";
import {
  formatToHourMinute,
  formatToHourMinuteSecond,
  getDayNumber,
  getKoreanDay,
} from "../Schedulecomponent/scheduleFunction";

const MAX_LENGTH = 20;

const ScheduleDetailModal: React.FC<ScheduleDetailModalProps> = ({
  isOpen,
  onClose,
  schedule,
}) => {
  const [scheduleName, setScheduleName] = useState("");
  const [dayOfWeek, setDayOfWeek] = useState(1);
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [placeName, setPlaceName] = useState("");

  useEffect(() => {
    if (schedule) {
      setScheduleName(schedule.scheduleName || "");
      setDayOfWeek(schedule.dayOfWeek || 0);
      setStartTime(schedule.startTime || "");
      setEndTime(schedule.endTime || "");
    }
  }, [schedule]);

  const handleDelete = () => {
    onClose();
  };
  const handleUpdate = () => {
    const submitSchedule: RequestSchedule = {
      scheduleName,
      dayOfWeek,
      startTime,
      endTime,
      placeName,
    };
    onClose();
  };

  if (!isOpen || !schedule) return null;

  return (
    <>
      <S.ModalOverlay />
      <S.ModalContainer open={isOpen}>
        <S.ModalHeader>
          <S.ModalTitle>일정 수정</S.ModalTitle>
          <S.ModalClose onClick={onClose}>
            <img src={xIcon} alt="close" />
          </S.ModalClose>
        </S.ModalHeader>

        {/* {error && <S.ErrorMessage>{error}</S.ErrorMessage>} */}

        <S.FormSection>
          <S.FormLabel>요일</S.FormLabel>
          <S.FormSelect
            value={`${getKoreanDay(dayOfWeek)}요일`}
            onChange={(e) => {
              const newDay = e.target.value.replace("요일", "");
              setDayOfWeek(getDayNumber(newDay));
            }}
          >
            {["월요일", "화요일", "수요일", "목요일", "금요일"].map(
              (selectDay) => (
                <option key={selectDay} value={selectDay}>
                  {selectDay}
                </option>
              )
            )}
          </S.FormSelect>

          <S.TimeSection>
            <S.TimeColumn>
              <S.FormLabel>시작 시간</S.FormLabel>
              <S.FormSelect
                value={formatToHourMinute(startTime)}
                onChange={(e) => {
                  setStartTime(formatToHourMinuteSecond(e.target.value));
                }}
              >
                {Array.from({ length: 29 }, (_, i) => {
                  const hour = Math.floor(i / 2) + 7;
                  const minute = i % 2 === 0 ? "00" : "30";
                  return `${String(hour).padStart(2, "0")}:${minute}`;
                }).map((time) => (
                  <option key={time} value={time}>
                    {time}
                  </option>
                ))}
              </S.FormSelect>
            </S.TimeColumn>

            <S.TimeColumn>
              <S.FormLabel>종료 시간</S.FormLabel>
              <S.FormSelect
                value={formatToHourMinute(endTime)}
                onChange={(e) => {
                  setStartTime(formatToHourMinuteSecond(e.target.value));
                }}
              >
                {Array.from({ length: 29 }, (_, i) => {
                  const hour = Math.floor(i / 2) + 7;
                  const minute = i % 2 === 0 ? "00" : "30";
                  return `${String(hour).padStart(2, "0")}:${minute}`;
                }).map((time) => (
                  <option key={time} value={time}>
                    {time}
                  </option>
                ))}
              </S.FormSelect>
            </S.TimeColumn>
          </S.TimeSection>

          <S.InputWrapper>
            <S.FormInput
              type="text"
              placeholder="약속명을 추가해주세요"
              value={scheduleName}
              onChange={(e) => setScheduleName(e.target.value)}
              maxLength={MAX_LENGTH}
            />
            <S.InputCharCount>
              {scheduleName.length}/{MAX_LENGTH}
            </S.InputCharCount>
          </S.InputWrapper>

          <S.LocationWrapper>
            <S.LocationIcon>
              <img src={locationIcon} alt="location" />
            </S.LocationIcon>
            <S.LocationInput
              type="text"
              placeholder="장소를 추가해주세요 (선택사항)"
              value={placeName}
              onChange={(e) => setPlaceName(e.target.value)}
              maxLength={MAX_LENGTH}
            />
            <S.InputCharCount>
              {placeName.length}/{MAX_LENGTH}
            </S.InputCharCount>
          </S.LocationWrapper>
        </S.FormSection>

        <S.ButtonContainer>
          <Button onClick={handleDelete} color="Gray">
            삭제하기
          </Button>
          <Button onClick={handleUpdate} color="Blue">
            수정하기
          </Button>
        </S.ButtonContainer>
      </S.ModalContainer>
    </>
  );
};

export default ScheduleDetailModal;
