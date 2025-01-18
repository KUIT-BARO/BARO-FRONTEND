import React, { useState } from "react";
import StepInterface from "../../../interface/Step";
import Nav from "../../../components/Nav/Nav";

export default function Step2({
  navigate,
  handleBack,
  handleExit,
}: StepInterface & {
  suggestTitle: string;
  setSuggestTitle: React.Dispatch<React.SetStateAction<string>>;
  suggestPurpose: string[];
  setSuggestPurpose: React.Dispatch<React.SetStateAction<string[]>>;
  suggestPeople: number | null;
  setSuggestPeople: React.Dispatch<React.SetStateAction<number | null>>;
}) {
  return (
    <>
      <Nav handleBack={handleBack} handleExit={handleExit} color={"Blue"} />
    </>
  );
}
