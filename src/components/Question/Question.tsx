import React from "react";
import styled from "styled-components";

const Color = {
  Blue: "#f4f8fb",
  White: "#ffffff",
};

interface QuestionProps {
  title: string;
  desc: string;
  color?: keyof typeof Color; // "Blue" | "White" 만 허용
}

export default function Question({
  title,
  desc,
  color = "White",
}: QuestionProps) {
  return (
    <Q color={Color[color]}>
      <div className="title">{title}</div>
      <div className="desc">{desc}</div>
    </Q>
  );
}

const Q = styled.div<{ color: string }>`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  background: ${({ color }) => color}; // props 기반 동적 스타일 적용

  border-radius: 8px;

  > .title {
    font-weight: 600;
    font-size: 25px;
  }

  > .desc {
    font-weight: 500;
    font-size: 17px;
    color: #979797;
  }
`;
