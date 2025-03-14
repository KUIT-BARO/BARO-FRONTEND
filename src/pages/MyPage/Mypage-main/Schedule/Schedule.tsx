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
import ScheduleGrid from "../../../../components/ScheduleGrid/ScheduleGrid";

const Schedule: React.FC = () => {
  const scheduleGridRef = useRef<{ openAddModal: () => void }>(null);

  return (
    <ScheduleContainer>
      <ScheduleHeader>
        <SemesterText>2025년 1학기</SemesterText>
        <ScheduleActions>
          <ActionButton>
            <Buttonimg src={plusIcon} alt="add" />
          </ActionButton>
          <ActionButton>
            <Buttonimg src={shareIcon} alt="share" />
          </ActionButton>
        </ScheduleActions>
      </ScheduleHeader>
      <ScheduleGrid ref={scheduleGridRef} />
    </ScheduleContainer>
  );
};

export default Schedule;
