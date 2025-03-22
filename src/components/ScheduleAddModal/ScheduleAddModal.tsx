import React, { useState } from "react";
import Button from "../Button/Button";
import xIcon from "../../assets/icons/x_gray.svg";
import * as S from "./ScheduleAddModal.styles";

interface ScheduleAddModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (schedule: {
    title: string;
    location?: string;
    day: string;
    startTime: number;
    endTime: number;
  }) => void;
}

const MAX_LENGTH = 20;

const ScheduleAddModal: React.FC<ScheduleAddModalProps> = ({
  isOpen,
  onClose,
  onAdd,
}) => {
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [day, setDay] = useState("월");
  const [startTime, setStartTime] = useState(7);
  const [endTime, setEndTime] = useState(8);

  const formatTime = (time: number) => {
    const hours = Math.floor(time);
    const minutes = Math.round((time % 1) * 60);
    return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
      2,
      "0"
    )}`;
  };

  const handleSubmit = () => {
    onAdd({ title, location, day, startTime, endTime });
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
            value={`${day}요일`}
            onChange={(e) => {
              const newDay = e.target.value.replace("요일", "");
              setDay(newDay);
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
                value={formatTime(startTime)}
                onChange={(e) => {
                  const [hours, minutes] = e.target.value
                    .split(":")
                    .map(Number);
                  setStartTime(hours + minutes / 60);
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
                value={formatTime(endTime)}
                onChange={(e) => {
                  const [hours, minutes] = e.target.value
                    .split(":")
                    .map(Number);
                  setEndTime(hours + minutes / 60);
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
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              maxLength={MAX_LENGTH}
            />
            <S.InputCharCount>
              {title.length}/{MAX_LENGTH}
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
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              maxLength={MAX_LENGTH}
            />
            <S.InputCharCount>
              {location.length}/{MAX_LENGTH}
            </S.InputCharCount>
          </S.LocationWrapper>
        </S.FormSection>

        <S.ButtonContainer>
          <Button onClick={onClose} color="Gray">
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
