import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: #f4f8fb;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 20px;
  gap: 18px;
  min-height: 100vh;
  box-sizing: border-box;
`;

export const Section = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 13px;
  margin-bottom: 20px;
  box-sizing: border-box;
`;

export const ImgWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  align-items: center;
  gap: 3px;
`;
export const UserImg = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  cursor: pointer;
`;
export const RemainingCount = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 30px;
  padding: 5px 4px 5px 4px;
  border-radius: 24px;
  background-color: white;
  color: #757575;
`;
export const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-right: 20px;
`;
export const SearchBar = styled.div`
  display: flex;
  align-items: center;
  border-radius: 10px;
  padding: 8px 17px;
  width: 100%;
  background-color: #eaeaea;
  gap: 8px;
  box-sizing: border-box;
`;
export const SearchImg = styled.img`
  width: 20px;
  height: 20px;
`;
export const SearchInput = styled.input`
  width: 100%;
  background-color: inherit;
  border: 0;
  font-size: 17px;
  ::placeholder {
    color: #c1c1c1;
  }

  :focus {
    outline: 0;
  }
`;
export const PlacesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
