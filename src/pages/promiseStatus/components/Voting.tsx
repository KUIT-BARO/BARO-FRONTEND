interface VotingProps {
  promiseId: string;
  isHost: boolean;
}
export default function Voting({ promiseId, isHost }: VotingProps) {
  console.log(promiseId, isHost);
  return <div></div>;
}
