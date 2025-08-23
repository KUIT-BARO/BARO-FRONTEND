import ProfileHeader from "@pages/setting/component/ProfileHeader";
import Header from "@shared/components/header/Header";
import { IcSetting, IcPlusBlack, IcShareBlack } from "@svg/index";
import Text from "@shared/components/text/Text";
import * as styles from "@pages/myPage/MyPage.css";
import Schedule from "@shared/components/schedule/Schedule";
import { useState } from "react";
import ScheduleModal from "@shared/components/scheduleModal/ScheduleModal";
import type { SchedulesDTO } from "api/data-contracts";
import { DEFAULT_SCHEDULE } from "@pages/myPage/constant/DefaultSchedule";

export default function MyPage() {
  const [openSchedule, setOpenSchedule] = useState(false);
  const [modalSchedule, setModalSchedule] = useState<SchedulesDTO>({});
  const handleModal = () => {
    setOpenSchedule(!openSchedule);
  }
  const handleAddSchedule = () => {
    setModalSchedule(DEFAULT_SCHEDULE);
    handleModal();
  };
  const handleFixSchedule = (_schedule: SchedulesDTO) => {
    setModalSchedule(_schedule);
    handleModal();
  };
  return <div className={styles.container}>
    <Header text="마이페이지" rightIcon={IcSetting} />
    <ProfileHeader isSetting = {true}/>
    <div className={styles.scheduleTitleBox}>
      <Text tag="body_bold_19">일정표</Text>
      <div className={styles.optionBox}>
        <IcPlusBlack className={styles.optionSvg} onClick={handleAddSchedule}/>
        <IcShareBlack className={styles.optionSvg} />
      </div>
    </div>
    <div className={styles.scheduleWrapper}>
      <Schedule handleFixSchedule={handleFixSchedule}/>
    </div>
    {openSchedule && <ScheduleModal onClose={handleModal} schedule={modalSchedule} />}
  </div>;
}
