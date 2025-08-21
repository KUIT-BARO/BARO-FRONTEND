import Text from "@shared/components/text/Text";
import type { SchedulesDTO } from "api/data-contracts";
import * as styles from "@shared/components/schedule/Schedule.css";
import GetRandomColor from "@shared/components/schedule/util/GetRandomColor";
import IsTitleSlot from "@shared/components/schedule/util/IsTitleSlot";
import type { Time } from "@shared/components/schedule/type/Schedule";

interface SlotProps {
  startTime: Time;
  schedule?: SchedulesDTO;
  slotIndex?: number;
}

export default function Slot({ slotIndex, startTime, schedule }: SlotProps) {
  const colorIndex = GetRandomColor(schedule, slotIndex);
  const isTitleSlot = IsTitleSlot({ schedule, startTime });
  return (
    <div className={styles.slotWrapper({ backgroundColor: colorIndex, isTitleSlot })}>
      {isTitleSlot && <Text color="white" tag="body_bold_11">{schedule?.scheduleName}</Text>}
    </div>
  );
}
