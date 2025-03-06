import React from "react";
import styled from "styled-components";

export default function Question({
  title,
  desc,
}: {
  title: string;
  desc: string;
}) {
  return (
    <Q>
      <div className="title">{title}</div>
      <div className="desc">{desc}</div>
    </Q>
  );
}

const Q = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
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
