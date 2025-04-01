import React, { useState } from "react";
import Button from "../Button/Button";
import xIcon from "../../assets/icons/x_gray.svg";
import * as S from "./ScheduleAddModal.styles";
import { RequestSchedule } from "../../interface/api/schedules/schedule";
import {
  getKoreanDay,
  getDayNumber,
  formatToHourMinute,
  formatToHourMinuteSecond,
} from "../Schedulecomponent/scheduleFunction";

const MAX_LENGTH = 20;

const ScheduleAddModal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const [scheduleName, setScheduleName] = useState("");
  const [placeName, setPlaceName] = useState("");
  const [dayOfWeek, setDayOfWeek] = useState(1);
  const [startTime, setStartTime] = useState("07:00:00");
  const [endTime, setEndTime] = useState("08:00:00");

  const handleSubmit = () => {
    const submitSchedule: RequestSchedule = {
      scheduleName,
      dayOfWeek,
      startTime,
      endTime,
      placeName,
    };
    onClose();
  };

  if (!isOpen) return null;

  return (
    <>
      <S.ModalOverlay />
      <S.ModalContainer open={isOpen}>
        <S.ModalHeader>
          <S.ModalTitle>일정 추가</S.ModalTitle>
          <S.ModalClose onClick={onClose}>
            <img src={xIcon} alt="close" />
          </S.ModalClose>
        </S.ModalHeader>

        <S.FormSection>
          <S.FormLabel>요일</S.FormLabel>
          <S.FormSelect
            value={`${getKoreanDay(dayOfWeek)}요일`}
            onChange={(e) => {
              const newDay = getDayNumber(e.target.value.replace("요일", ""));
              setDayOfWeek(newDay);
            }}
          >
            {[
              "월요일",
              "화요일",
              "수요일",
              "목요일",
              "금요일",
              "토요일",
              "일요일",
            ].map((d) => (
              <option key={d} value={d}>
                {d}
              </option>
            ))}
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
                  setEndTime(formatToHourMinuteSecond(e.target.value));
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
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 13.5C13.6569 13.5 15 12.1569 15 10.5C15 8.84315 13.6569 7.5 12 7.5C10.3431 7.5 9 8.84315 9 10.5C9 12.1569 10.3431 13.5 12 13.5Z"
                  stroke="#999999"
                  strokeWidth="2"
                />
                <path
                  d="M12 22C14 18 20 15.4183 20 10C20 5.58172 16.4183 2 12 2C7.58172 2 4 5.58172 4 10C4 15.4183 10 18 12 22Z"
                  stroke="#999999"
                  strokeWidth="2"
                />
              </svg>
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
          <Button color="Gray" onClick={onClose}>
            취소
          </Button>
          <Button color="Blue" onClick={handleSubmit}>
            추가하기
          </Button>
        </S.ButtonContainer>
      </S.ModalContainer>
    </>
  );
};

export default ScheduleAddModal;
