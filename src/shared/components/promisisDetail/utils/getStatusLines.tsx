import type { PromisisDetailProps } from '@shared/components/promiseContainer/types/PromiseContainer.type';
import { formatDateWithDay } from '@shared/utils/formatDateWithDay';
import { PROMISE_STATUS } from '@shared/constant/promiseStatus';

export default function getStatusLines(props: PromisisDetailProps): {
  firstLine: string;
  secondLine: string;
  thirdLine: string;
} {
  switch (props.status) {
  case PROMISE_STATUS.PENDING:
    return {
      firstLine: `${props.untilVoteDate}일`,
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
  }
}