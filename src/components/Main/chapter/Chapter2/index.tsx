import { schedules } from "@/constants/schedules";
import DateChecker from "../../../common/DateChecker";
import * as S from "./style";
import ScheduleNavigator from "@/components/ScheduleNavigator";
import { useRecoilValue } from "recoil";
import { currentScheduleState } from "@/atom/scheduleAtom";
import ViewAll from "@/components/common/DateChecker/viewAll";

const Chapter2 = () => {
  const currentScheuldeNavState = useRecoilValue(currentScheduleState);
  return (
    <S.Chapter2Layout>
      <S.ScheduleSectionRow>
        <S.ScheduleSection>
          {schedules.map((schedule) => (
            <DateChecker key={schedule.title} schedule={schedule} />
          ))}
          {currentScheuldeNavState === "전체 보기" && <ViewAll />}
        </S.ScheduleSection>
        <ScheduleNavigator />
      </S.ScheduleSectionRow>
    </S.Chapter2Layout>
  );
};

export default Chapter2;
