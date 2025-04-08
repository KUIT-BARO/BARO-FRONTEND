export const convertDate = (dateLabel: string): string => {
  const [year, month, dayWithDay] = dateLabel.split("/");
  const day = dayWithDay.split("(")[0];
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};
