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
import SelectTimeTable from "../../../components/SelectTimeTable/SelectTimeTable";

import { ProfileImgType } from "../../../interface/ProfileImg/ProfileImg";

import MAN from "../../../assets/icons/Profileimg/Man.svg";
import GIRL from "../../../assets/icons/Profileimg/Girl.svg";
import DOG from "../../../assets/icons/Profileimg/DOG.svg";
import DEFAULT from "../../../assets/icons/Profileimg/Default.svg";

import TimeTableInterface from "../../../interface/TimeTable/TimeTable";

interface TimePopupInterface {
  setTimePopup: (exit: boolean) => void;
  timeTable: TimeTableInterface[];
  setTimeTable: React.Dispatch<React.SetStateAction<TimeTableInterface[]>>;
}
export default function TimePopup({
  setTimePopup,
  timeTable,
  setTimeTable,
}: TimePopupInterface) {
  const dummyData: {
    suggestedStartDate: string;
    suggestedEndDate: string;
    promiseMembers: Member[];
    promiseAvailableTimes: {
      promiseMemberId: number;
      availableTimes: {
        date: string;
        startTime: string;
        endTime: string;
      }[];
    }[];
  } = {
    suggestedStartDate: "2025-03-26",
    suggestedEndDate: "2025-03-31",
    promiseMembers: [
      {
        userId: 1,
        profileImage: "DOG",
      },
    ],
    promiseAvailableTimes: [
      {
        promiseMemberId: 1,
        availableTimes: [
          {
            date: "2025-03-26",
            startTime: "12:30",
            endTime: "13:00",
          },
        ],
      },
    ],
  };

  const [focusUserId, setFocusUserId] = useState<number | null>(null);
  const [othersTimeTable, setOthersTimeTable] = useState<
    TimeTableInterface[] | null
  >(null);

  useEffect(() => {
    const focusTimeTable = dummyData.promiseAvailableTimes.find(
      (timeTable) => timeTable.promiseMemberId == focusUserId
    );
    if (focusTimeTable) {
      const { promiseMemberId, ...rest } = focusTimeTable;
      setOthersTimeTable(rest.availableTimes);
    } else {
      setOthersTimeTable(null);
    }
  }, [focusUserId]);

  return (
    <>
      <TopBar handleExit={() => setTimePopup(false)} color={"Blue"} />
      <Wrapper>
        <Question
          title="만날 수 있는 시간을 알려주세요"
          desc="가능한 시간을 선택해주세요"
          color="Blue"
        />

        <SectionHeader>
          <ImgWrapper>
            {renderProfileImages({
              promiseMembers: dummyData.promiseMembers,
              setFocusUserId,
              focusUserId,
            })}
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

type Member = { userId: number; profileImage: ProfileImgType };
type RenderProfileImagesProps = {
  promiseMembers: Member[];
  setFocusUserId: (id: number | null) => void;
  focusUserId: number | null;
};

const renderProfileImages = ({
  promiseMembers,
  setFocusUserId,
  focusUserId,
}: RenderProfileImagesProps) => {
  const profileImgs: Record<ProfileImgType, string> = {
    DOG,
    GIRL,
    MAN,
    DEFAULT,
  };

  return (
    <>
      {promiseMembers.map((member) => (
        <UserImg
          onMouseDown={() => setFocusUserId(member.userId)} // 누를 때
          onMouseUp={() => setFocusUserId(null)} // 뗄 때
          onMouseLeave={() => setFocusUserId(null)}
          key={member.userId}
          src={profileImgs[member.profileImage]}
          alt="profile img"
          style={{
            border:
              focusUserId === member.userId ? "2px solid #5175FF" : "none",
          }}
        />
      ))}
    </>
  );
};
