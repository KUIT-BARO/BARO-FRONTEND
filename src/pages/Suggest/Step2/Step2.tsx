import React, { useState } from "react";
import StepInterface from "../../../interface/Step";

import Button from "../../../components/Button/Button";
import { ProgressBar } from "../../../components/ProgressBar/ProgressBar";
import Nav from "../../../components/Nav/Nav";

import { Wrapper, FixedButton, Section } from "../Steps.styles";
import SubTitle from "../../../components/SubTitle/SubTitle";
import Desc from "../../../components/Desc/Desc";
import monthBack from "../../../assets/icons/monthBack.svg";
import monthNext from "../../../assets/icons/monthNext.svg";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ko } from "date-fns/locale";

import "./Step2.css";

export default function Step2({
  navigate,
  handleBack,
  handleExit,
  dateRange,
  setDateRange,
  startDate,
  endDate,
}: StepInterface) {
  const isDateSelected = startDate !== null && endDate !== null;

  return (
    <>
      <Nav handleBack={handleBack} handleExit={handleExit} color={"Blue"} />
      <Wrapper>
        <ProgressBar percent={50} />

        <SubTitle>언제 만나실건가요?</SubTitle>
        <Desc>약속 장소의 대략적인 위치를 설정해주세요</Desc>

        <Section>
          <DatePicker
            selected={startDate}
            onChange={(update: [Date | null, Date | null] | Date) => {
              if (Array.isArray(update)) {
                setDateRange(update);
              } else {
                setDateRange([update, update]);
              }
            }}
            startDate={startDate}
            endDate={endDate}
            selectsRange
            //==============================
            dayClassName={(date) => {
              if (startDate && endDate && date > startDate && date < endDate) {
                return "middle-date";
              }
              return "";
            }}
            //==============================
            inline
            locale={ko}
            dateFormat="yyyy년 MM월"
            renderCustomHeader={({ date, decreaseMonth, increaseMonth }) => (
              <div className="custom-header">
                <span>
                  {date.getFullYear()}년 {date.getMonth() + 1}월
                </span>
                <div className="btn-wrapper">
                  <div onClick={decreaseMonth}>
                    <img src={monthBack} alt="back" />
                  </div>
                  <div onClick={increaseMonth}>
                    <img src={monthNext} alt="back" />
                  </div>
                </div>
              </div>
            )}
          />
        </Section>

        <FixedButton>
          <Button
            onClick={() => navigate("/suggest/step3")}
            disabled={!isDateSelected}
          >
            다음
          </Button>
        </FixedButton>
      </Wrapper>
    </>
  );
}
