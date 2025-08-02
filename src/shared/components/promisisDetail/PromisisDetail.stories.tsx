import type { Meta, StoryObj } from '@storybook/react-vite';
import PromisisDetail from '@shared/components/promisisDetail/PromisisDetail';

const meta: Meta<typeof PromisisDetail> = {
  title: 'Components/PromisisDetail',
  component: PromisisDetail,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof PromisisDetail>;

export const Pending: Story = {
  args: {
    status: 'PENDING',
    untilVoteDate: 3,
    suggestedRegion: '건대입구 주변',
    suggestedStartDate: '2025-01-01',
    suggestedEndDate: '2025-01-02',
    promiseName: '친구들 모임',
  },
};

export const Voting: Story = {
  args: {
    status: 'VOTING',
    untilVoteEndDate: 5,
    suggestedRegion: '잠실 주변',
    suggestedStartDate: '2025-02-01',
    suggestedEndDate: '2025-02-02',
    promiseName: '가족 외식',
  },
};

export const Confirmed: Story = {
  args: {
    status: 'CONFIRMED',
    promiseMembersNames: ['김상균', '이정연', '신종윤'],
    placeName: '건대입구역',
    fixedDate: '2025-01-01',
    promiseName: '스터디 모임',
  },
};
