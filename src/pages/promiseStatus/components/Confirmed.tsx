interface ConfirmedProps {
  promiseId: string;
  isHost: boolean;
}
export default function Confirmed({ promiseId, isHost }: ConfirmedProps) {
  console.log(promiseId, isHost);
  return <div></div>;
}
