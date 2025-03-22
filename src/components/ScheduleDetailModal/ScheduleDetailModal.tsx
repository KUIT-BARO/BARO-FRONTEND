import React, { useEffect, useState } from "react";
import Button from "../Button/Button";
import xIcon from "../../assets/icons/x_gray.svg";
import locationIcon from "../../assets/icons/location_gray.svg";
import * as S from "./ScheduleDetailModal.styles";
import { putSchedule } from "../../apis/schedule/putSchedule";
import { deleteSchedule } from "../../apis/schedule/deleteSchedule";

interface ScheduleDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  schedule: {
    id: number;
    title: string;
    startTime: number;
    endTime: number;
    day: string;
    type: string;
    variant?: string;
    location?: string;
    color?: string;
  } | null;
  onDelete?: (id: number) => void;
  onUpdate?: (
    id: number,
    updatedSchedule: {
      title: string;
      location?: string;
      day: string;
      startTime: number;
      endTime: number;
    }
  ) => void;
}

const MAX_LENGTH = 20;

const ScheduleDetailModal: React.FC<ScheduleDetailModalProps> = ({
  isOpen,
  onClose,
  schedule,
  onDelete,
  onUpdate,
}) => {
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [day, setDay] = useState("");
  const [startTime, setStartTime] = useState(0);
  const [endTime, setEndTime] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (schedule) {
      setTitle(schedule.title || "");
      setLocation(schedule.location || "");
      setDay(schedule.day || "");
      setStartTime(schedule.startTime || 0);
      setEndTime(schedule.endTime || 0);
    }
  }, [schedule]);

  const convertDayToEng = (koreanDay: string) => {
    const dayMap = {
      월: "MONDAY",
      화: "TUESDAY",
      수: "WEDNESDAY",
      목: "THURSDAY",
      금: "FRIDAY",
    };
    return dayMap[koreanDay] || koreanDay;
  };

  const handleDelete = async () => {
    if (!schedule || !onDelete) return;

    setIsLoading(true);
    setError(null);

    try {
      await deleteSchedule.removeSchedule(schedule.id);
      onDelete(schedule.id);
      onClose();
    } catch (err) {
      console.error("Schedule deletion error:", err);
      setError("일정 삭제 중 오류가 발생했습니다. 다시 시도해주세요.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleUpdate = async () => {
    if (!schedule || !schedule.id) {
      setError("일정 ID가 없습니다.");
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const scheduleData = {
        name: title.trim(),
        dayOfWeek: convertDayToEng(day),
        timeStart: formatTime(startTime),
        timeEnd: formatTime(endTime),
        location: location || "",
      };

      await putSchedule.updateSchedule(schedule.id, scheduleData);

      if (onUpdate) {
        onUpdate(schedule.id, {
          title: scheduleData.name,
          day: day,
          startTime: startTime,
          endTime: endTime,
          location: scheduleData.location,
        });
      }

      onClose();
    } catch (err) {
      console.error("Schedule update error:", err);
      setError("일정 수정 중 오류가 발생했습니다. 다시 시도해주세요.");
    } finally {
      setIsLoading(false);
    }
  };

  const formatTime = (time: number) => {
    const hours = Math.floor(time);
    const minutes = Math.round((time % 1) * 60);
    return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
      2,
      "0"
    )}`;
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

        {error && <S.ErrorMessage>{error}</S.ErrorMessage>}

        <S.FormSection>
          <S.FormLabel>요일</S.FormLabel>
          <S.FormSelect
            value={`${day}요일`}
            onChange={(e) => {
              const newDay = e.target.value.replace("요일", "");
              setDay(newDay);
            }}
            disabled={isLoading}
          >
            {["월요일", "화요일", "수요일", "목요일", "금요일"].map((d) => (
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
                disabled={isLoading}
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
                disabled={isLoading}
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
              disabled={isLoading}
            />
            <S.InputCharCount>
              {title.length}/{MAX_LENGTH}
            </S.InputCharCount>
          </S.InputWrapper>

          <S.LocationWrapper>
            <S.LocationIcon>
              <img src={locationIcon} alt="location" />
            </S.LocationIcon>
            <S.LocationInput
              type="text"
              placeholder="장소를 추가해주세요 (선택사항)"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              maxLength={MAX_LENGTH}
              disabled={isLoading}
            />
            <S.InputCharCount>
              {location.length}/{MAX_LENGTH}
            </S.InputCharCount>
          </S.LocationWrapper>
        </S.FormSection>

        <S.ButtonContainer>
          <Button onClick={handleDelete} color="Gray" disabled={isLoading}>
            삭제하기
          </Button>
          <Button onClick={handleUpdate} color="Blue" disabled={isLoading}>
            {isLoading ? "수정 중..." : "수정하기"}
          </Button>
        </S.ButtonContainer>
      </S.ModalContainer>
    </>
  );
};

export default ScheduleDetailModal;
