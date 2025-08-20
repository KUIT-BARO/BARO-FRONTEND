import { useSearchParams } from 'react-router-dom';
import Pending from '@/pages/promiseStatus/components/Pending';
import { PROMISE_STATUS } from '@shared/constant/promiseStatus';
import Voting from '@/pages/promiseStatus/components/Voting';
import Confirmed from '@/pages/promiseStatus/components/Confirmed';

export default function PromiseStatus() {
  const [searchParams] = useSearchParams();
  const status = searchParams.get('status');
  const promiseId = searchParams.get('promiseId') || '';
  const isHost = searchParams.get('isHost') === 'true' || false;

  return (
    <>
      {status === PROMISE_STATUS.PENDING && <Pending promiseId={promiseId} isHost={isHost} />}
      {status === PROMISE_STATUS.VOTING && <Voting promiseId={promiseId} isHost={isHost} />}
      {status === PROMISE_STATUS.CONFIRMED && <Confirmed promiseId={promiseId} />}
    </>
  );
}
