import React from "react";
import BackIcon from "../../assets/icons/backIcon.svg";
import ExitIcon from "../../assets/icons/x.svg";

export default function Nav({ handleBack, handleExit }) {
  return (
    <div>
      <img src={BackIcon} alt="back icon" />
      <img src={ExitIcon} alt="exit icon" />
    </div>
  );
}
