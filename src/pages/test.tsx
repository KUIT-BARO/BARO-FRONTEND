import React from "react";
import Navigation from "../components/Navigation/Navigation";
import styled from "styled-components";
import TopBar from "../components/TopBar/TopBar";
import Search from "../components/Search/Search";
export default function Test() {
  return (
    <>
      <Search
        placeholder={"건대입구"}
        value={""}
        onChange={() => console.log()}
      />
      <TestWrapper>jzzx</TestWrapper>
      <Navigation />
    </>
  );
}
const TestWrapper = styled.div`
  display: flex;
`;
