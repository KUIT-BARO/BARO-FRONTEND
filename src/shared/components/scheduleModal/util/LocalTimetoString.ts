interface LocalTime {
  hour?: number;
  minute?: number;
}

export default function LocalTimetoString(time?: LocalTime): string {
  if (!time) return '';
  const hourStr = String(time.hour ?? 0).padStart(2, '0');
  const minuteStr = String(time.minute ?? 0).padStart(2, '0');
  return `${hourStr}:${minuteStr}`;
}
