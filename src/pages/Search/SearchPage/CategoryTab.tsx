import React from "react";
import styled from "styled-components";

import { PIN_CATEGORIES } from "../../../utils/constant/Categories";
PIN_CATEGORIES.unshift("ALL");

interface TabButtonProps {
  active?: boolean;
};

interface CategoryTabProps {
  onCategorySelected: (category: string) => void;
};

export default function CategroyTab({ onCategorySelected }: CategoryTabProps) {
  const [selected, setSelected] = React.useState("ALL");

  const handleCategorySelect = (category: string) => {
    setSelected(category);
    onCategorySelected(category);
  };

  return (
    <Container>
      <TabsWrapper>
        {PIN_CATEGORIES.map((category) => (
          <TabButton
            key={category}
            onClick={() => handleCategorySelect(category)}
            active={selected === category || (selected === "" && category === PIN_CATEGORIES[0])}
          >
            {category}
          </TabButton>
        ))}
      </TabsWrapper>
    </Container>
  );
};

const Container = styled.div`
  overflow-x: auto;
  white-space: nowrap;
  padding: 90px 1.5rem 0 1.5rem;
  margin-bottom: 24px;
  background: var(--bg-bluewhite, #F4F8FB);

  &::-webkit-scrollbar {
    display: none;
  }
`;

const TabsWrapper = styled.div`
  display: inline-flex;
  gap: 0.6rem;
`;

const TabButton = styled.button<TabButtonProps>`
  background: transparent;
  padding-bottom: 8px;
  border: none;
  border-bottom: 4px solid transparent;
  border-bottom-color: ${(props) => (props.active ? "#5175FF" : "transparent")};

  color: ${(props) => (props.active ? "#5175FF" : "#7D7D7D")};
  text-align: center;
  font-family: "Noto Sans KR";
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: 6px; /* 40% */
  letter-spacing: -0.3px;

  transition: color 0.2s ease-in-out, border-color 0.2s ease-in-out;
`;