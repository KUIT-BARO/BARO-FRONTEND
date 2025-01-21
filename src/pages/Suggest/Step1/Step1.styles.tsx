import styled from "styled-components";
export const SectionTitle = styled.p`
  width: 100%;
  font-size: 19px;
  font-weight: 600;
`;

export const DropdownWrapper = styled.div<{ isOpen: boolean }>`
  position: relative;
  width: 200px;
  margin-bottom: ${(props) => (props.isOpen ? "250px" : "60px")};
  transition: margin-bottom 0.3s ease;
`;

export const DropdownHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 171px;
  height: 56px;
  border-radius: 28px;

  padding: 16px 27px;
  background-color: white;
  cursor: pointer;

  font-size: 16px;
  font-weight: 500;

  &:hover {
    border-color: #5175ff;
  }
`;

export const Arrow = styled.span<{ isOpen: boolean }>`
  font-size: 12px;
  transform: ${(props) => (props.isOpen ? "rotate(180deg)" : "rotate(0deg)")};
  transition: transform 0.3s ease;
`;

export const DropdownList = styled.ul`
  position: absolute;
  top: calc(100% + 8px);
  left: 0;
  width: 171px;
  background-color: #ffffff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  list-style: none;
  max-height: 168px;
  overflow-y: auto;
  border-radius: 28px;
  padding: 20px 0;
  box-sizing: border-box;
`;

export const DropdownItem = styled.li<{ isSelected: boolean }>`
  width: 100%;
  height: 36px;
  padding: 16px 32px;
  font-size: 16px;
  font-weight: 500;
  display: flex;
  align-items: center;
  color: ${(props) => (props.isSelected ? "#ffffff" : "#333")};
  background-color: ${(props) => (props.isSelected ? "#5175ff" : "#ffffff")};
  cursor: pointer;

  &:hover {
    background-color: ${(props) => (props.isSelected ? "#3b5dc9" : "#f0f0f0")};
  }
`;
