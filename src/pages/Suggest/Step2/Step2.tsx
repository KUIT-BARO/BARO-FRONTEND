import Button from "../../../components/Button/Button";
import { ProgressBar } from "../../../components/ProgressBar/ProgressBar";
import TopBar from "../../../components/TopBar/TopBar";

import { Wrapper, FixedButton, Section } from "./Step2.styles";

import { useNavigate } from "react-router-dom";
import Question from "../../../components/Question/Question";
import InputWithCounter from "../../../components/InputWithCounter/InputWithCounter";
import CustomDatepicker from "../components/Datepicker/CustomDatepicker";

export default function Step2({
  handleExit,
  setDateRange,
  dateStart,
  dateEnd,
  placeName,
  setPlaceName,
  handleOpenPopup,
  handleClosePopup,
}) {
  const isFormComplete =
    dateStart != null && dateEnd != null && (placeName ?? "").trim().length > 0;

  return (
    <>
      <TopBar handleExit={handleExit} color={"Blue"} />
      <Wrapper>
        <ProgressBar percent={50} />
        <Section>
          <Question
            color="Blue"
            title="언제 만나실건가요?"
            desc="조정 가능한 날짜 범위를 지정해주세요"
          />
          <CustomDatepicker
            setDateRange={setDateRange}
            dateStart={dateStart}
            dateEnd={dateEnd}
          />
        </Section>
        <Section>
          <Question
            color="Blue"
            title="어디서 만나실건가요?"
            desc="대략적인 약속 장소의 위치를 제안해보세요"
          />
          <InputWithCounter
            text={placeName}
            setText={setPlaceName}
            placeholder={"장소를 입력해주세요"}
            maxlength={12}
            location={true}
          />
        </Section>
        <div className="placeholder"></div>
        <FixedButton>
          <Button disabled={!isFormComplete} onClick={() => handleOpenPopup()}>
            다음
          </Button>
        </FixedButton>
      </Wrapper>
    </>
  );
}
