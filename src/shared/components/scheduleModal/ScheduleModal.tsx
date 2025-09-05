import PopupOverlay from "@shared/components/popupOverlay/PopupOverlay";
import * as styles from "@shared/components/scheduleModal/ScheduleModal.css";
import Text from "@shared/components/text/Text";
import { IcNavXGray } from "@svg/index";
import ScheduleSelectField from "@shared/components/scheduleModal/components/ScheduleSelectField";
import InputBar from "@shared/components/inputBar/InputBar";
import Button from "@shared/components/button/Button";
import { vars } from "@shared/styles/theme.css";
import { useScheduleForm } from "@shared/components/scheduleModal/hook/useScheduleForm";
import type { SchedulesDTO } from "api/data-contracts";
import LocalTimetoString from "@shared/components/scheduleModal/util/LocalTimetoString";

interface ScheduleModalProps {
  onClose: () => void;
  schedule?: SchedulesDTO;
}

export default function ScheduleModal({ onClose, schedule }: ScheduleModalProps) {
  const dayOfWeek = (schedule?.dayOfWeek);
  const startTime = LocalTimetoString(schedule?.startTime);
  const endTime = LocalTimetoString(schedule?.endTime);
  const { handleSubmit,onSubmit,formData, handleChangeField } = useScheduleForm({
    dayOfWeek: dayOfWeek,
    startTime: startTime,
    endTime: endTime,
    scheduleName: schedule?.scheduleName,
  });

  return (
    <PopupOverlay open onClose={onClose} position="bottom" >
      <div className={styles.container}>
        <div className={styles.header}>
          <Text tag="body_bold_22">{schedule ? '일정 수정' : '일정 추가'}</Text>
          <IcNavXGray onClick={onClose} />
        </div>
        <div className={styles.selectContainer}>
          <ScheduleSelectField
            label="요일"
            value={formData.dayOfWeek}
            onChange={handleChangeField("dayOfWeek")}
            type="day"
          />
          <div className={styles.selectTimeContainer}>
            <ScheduleSelectField
              label="시작 시간"
              value={formData.startTime}
              onChange={handleChangeField("startTime")}
              type="time"
            />
            <ScheduleSelectField
              label="종료 시간"
              value={formData.endTime}
              onChange={handleChangeField("endTime")}
              type="time"
            />
          </div>
        </div>
        <div className={styles.inputContainer}>
          <InputBar placeholder="약속명을 추가해 주세요." hasBackground={false} borderColor="gray" showMaxLength={true} maxLength={25} value={formData.scheduleName} onChange={handleChangeField("scheduleName")} props={{ style: { color: vars.color.black }}}/>
          <InputBar placeholder="장소를 추가해 주세요(선택사항)." hasBackground={false} borderColor="gray" leftIcon="location" value={formData.location} onChange={handleChangeField("location")} props={{ style: { color: vars.color.black }}}/>
        </div>
        <div className={styles.buttonContainer}>
          <Button text={schedule ? "삭제하기" : "취소하기"} size="short" variant="enabled" backgroundColor={vars.color.gray1} onClick={schedule ? onClose : onClose}/>
          <Button text={schedule ? "수정하기" : "추가하기"} size="short" variant="enabled" backgroundColor={vars.color.baroBlue} onClick={schedule ? handleSubmit(onSubmit) : handleSubmit(onSubmit)}/>
        </div>
      </div>

    </PopupOverlay>
  )
}
