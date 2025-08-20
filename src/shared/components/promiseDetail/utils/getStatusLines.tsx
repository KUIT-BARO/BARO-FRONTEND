import type { PromiseDetailProps } from '@shared/components/promiseContainer/types/PromiseContainer.type';
import { formatDateWithDay } from '@shared/utils/formatDateWithDay';
import { PROMISE_STATUS } from '@shared/constant/promiseStatus';

export default function getStatusLines(props: PromiseDetailProps): {
  firstLine: string;
  secondLine: string;
  thirdLine: string;
} {
  switch (props.status) {
    case PROMISE_STATUS.PENDING:
      return {
        firstLine: `투표까지 D-${props.untilVoteDate > 0 ? props.untilVoteDate : 'DAY'}`,
        secondLine: props.suggestedRegion,
        thirdLine: `${formatDateWithDay(props.suggestedStartDate)} ~ ${formatDateWithDay(props.suggestedEndDate)}`,
      };
    case PROMISE_STATUS.VOTING:
      return {
        firstLine: `${props.untilVoteEndDate}일`,
        secondLine: props.suggestedRegion,
        thirdLine: `${formatDateWithDay(props.suggestedStartDate)} ~ ${formatDateWithDay(props.suggestedEndDate)}`,
      };
    case PROMISE_STATUS.CONFIRMED:
      return {
        firstLine: props.promiseMembersNames.join(', '),
        secondLine: props.placeName,
        thirdLine: formatDateWithDay(props.fixedDate),
      };
    default:
      throw new Error(`Unknown promise status`);
  }
}
