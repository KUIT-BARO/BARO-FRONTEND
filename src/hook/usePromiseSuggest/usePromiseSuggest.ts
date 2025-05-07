import { useState } from "react";

export default function useSuggestState() {
  const [promiseId, setPromiseId] = useState<number | null>(null);
  const [name, setName] = useState<string>("");
  const [placeName, setPlaceName] = useState<string>("");
  const [dateRange, setDateRange] = useState<[Date | null, Date | null]>([
    null,
    null,
  ]);
  const [showPopup, setShowPopup] = useState(false);

  const handleOpenPopup = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return {
    promiseId,
    setPromiseId,
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
