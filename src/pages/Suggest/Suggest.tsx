import React from "react";
import { useNavigate } from "react-router-dom";
import Nav from "../../components/Nav/Nav";
export function Suggest() {
  const navigator = useNavigate();

  const handleBack = () => {};
  const handleExit = () => {};
  return (
    <div>
      <Nav handleBack={handleBack} handleExit={handleExit} />
    </div>
  );
}
