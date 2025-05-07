import React, { useEffect, useState } from "react";
import TopBar from "../../../components/TopBar/TopBar";
import Question from "../../../components/Question/Question";
import {
  ButtonWrapper,
  SectionHeader,
  Wrapper,
  Section,
  ImgWrapper,
  UserImg,
} from "./TimePopup.styles";
import SmallButton from "../../../components/SmallButton/SmallButton";
import SelectTimeTable from "./components/SelectTimeTable/SelectTimeTable";
import TimeTableInterface from "../../../interface/TimeTable/TimeTable";
import { ProfileImgType } from "../../../interface/ProfileImg/ProfileImg";
import profileImgs from "../../../utils/profileImgs";

interface TimePopupInterface {
  setTimePopup: () => void;
  timeTable: TimeTableInterface[];
  setTimeTable: React.Dispatch<React.SetStateAction<TimeTableInterface[]>>;
}

export default function TimePopup({
  setTimePopup,
  timeTable,
  setTimeTable,
}: TimePopupInterface) {
  const [focusUserId, setFocusUserId] = useState<number | null>(null);
  const [othersTimeTable, setOthersTimeTable] = useState<
    TimeTableInterface[] | null
  >(null);

  const dummyData = {
    suggestedStartDate: "2025-03-26",
    suggestedEndDate: "2025-03-31",
    promiseMembers: [{ userId: 1, profileImage: "DOG" as ProfileImgType }],
    promiseAvailableTimes: [
      {
        promiseMemberId: 1,
        availableTimes: [
          { date: "2025-03-26", startTime: "12:30", endTime: "13:00" },
        ],
      },
    ],
  };

  useEffect(() => {
    const target = dummyData.promiseAvailableTimes.find(
      (t) => t.promiseMemberId === focusUserId
    );
    setOthersTimeTable(target ? target.availableTimes : null);
  }, [focusUserId]);

  return (
    <>
      <TopBar handleExit={setTimePopup} color="Blue" />
      <Wrapper>
        <Question
          title="만날 수 있는 시간을 알려주세요"
          desc="가능한 시간을 선택해주세요"
          color="Blue"
        />

        <SectionHeader>
          <ImgWrapper>
            {dummyData.promiseMembers.map(({ userId, profileImage }) => (
              <UserImg
                key={userId}
                src={profileImgs[profileImage]}
                alt="profile"
                onMouseDown={() => setFocusUserId(userId)}
                onMouseUp={() => setFocusUserId(null)}
                onMouseLeave={() => setFocusUserId(null)}
                style={{
                  border: focusUserId === userId ? "2px solid #5175FF" : "none",
                }}
              />
            ))}
          </ImgWrapper>
          <ButtonWrapper>
            <SmallButton
              variant="outlined"
              color="gray"
              onClick={() => setTimeTable([])}
            >
              전체 취소
            </SmallButton>
          </ButtonWrapper>
        </SectionHeader>

        <Section>
          <SelectTimeTable
            suggestedStartDate={dummyData.suggestedStartDate}
            suggestedEndDate={dummyData.suggestedEndDate}
            othersTimeTable={othersTimeTable}
            timeTable={timeTable}
            setTimeTable={setTimeTable}
          />
        </Section>
      </Wrapper>
    </>
  );
}
