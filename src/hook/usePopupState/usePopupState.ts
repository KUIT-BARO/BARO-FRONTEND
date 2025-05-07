import { useState } from "react";
import LocationInterface from "../../interface/Place/Place";
import TimeTableInterface from "../../interface/TimeTable/TimeTable";

export type PopupType = "location" | "time" | null;

export default function usePopupState() {
  const [popupType, setPopupType] = useState<PopupType>(null);
  const [location, setLocation] = useState<LocationInterface>();
  const [timeTable, setTimeTable] = useState<TimeTableInterface[]>([]);

  const openLocationPopup = () => setPopupType("location");
  const openTimePopup = () => setPopupType("time");
  const closePopup = () => setPopupType(null);

  return {
    popupType,
    location,
    setLocation,
    timeTable,
    setTimeTable,
    openLocationPopup,
    openTimePopup,
    closePopup,
  };
}
