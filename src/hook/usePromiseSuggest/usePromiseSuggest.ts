import { useState } from "react";

export default function useSuggestState() {
  const [name, setName] = useState<string>("");
  const [placeName, setPlaceName] = useState<string>("");
  const [dateRange, setDateRange] = useState<[string, string]>(["", ""]);
  const [showPopup, setShowPopup] = useState(false);

  const handleOpenPopup = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return {
    name,
    setName,
    placeName,
    setPlaceName,
    dateRange,
    setDateRange,
    showPopup,
    handleOpenPopup,
    handleClosePopup,
  };
}
