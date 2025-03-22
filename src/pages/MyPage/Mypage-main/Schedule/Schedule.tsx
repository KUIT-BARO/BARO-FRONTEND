import {
  ActionButton,
  ScheduleActions,
  ScheduleContainer,
  ScheduleHeader,
  SemesterText,
  Buttonimg,
} from "./Schedule.styles";
import React, { useRef } from "react";
import plusIcon from "../../../../assets/icons/mypage/plus.svg";
import shareIcon from "../../../../assets/icons/mypage/share.svg";
import ScheduleGridContainer from "../../../../components/ScheduleGrid/ScheduleGridContainer";

const Schedule: React.FC = () => {
  const scheduleGridRef = useRef<{ openAddModal: () => void }>(null);

  const handleAddScheduleClick = () => {
    scheduleGridRef.current?.openAddModal();
  };

  return (
    <ScheduleContainer>
      <ScheduleHeader>
        <SemesterText>2025년 1학기</SemesterText>
        <ScheduleActions>
          <ActionButton>
            <Buttonimg
              src={plusIcon}
              alt="add"
              onClick={handleAddScheduleClick}
            />
          </ActionButton>
          <ActionButton>
            <Buttonimg src={shareIcon} alt="share" />
          </ActionButton>
        </ScheduleActions>
      </ScheduleHeader>
      <ScheduleGridContainer ref={scheduleGridRef} />
    </ScheduleContainer>
  );
};

export default Schedule;
