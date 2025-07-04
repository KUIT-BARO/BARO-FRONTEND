import type { Meta, StoryObj } from '@storybook/react-vite';
import AppointmentManagementBox from '@shared/components/appointmentmanagementbox/AppointmentManagementBox';

const meta: Meta<typeof AppointmentManagementBox> = {
  title: 'Components/AppointmentManagementBox',
  component: AppointmentManagementBox,
};

export default meta;

type Story = StoryObj<typeof AppointmentManagementBox>;

export const Suggested: Story = {
  args: {
    status: 'suggestedPromises',
    untilVoteDate: 3,
    suggestedRegion: '건대입구 주변',
    suggestedStartDate: '2025-01-01',
    SuggestedEndDate: '2025-01-02',
    promiseName: '친구들 모임',
  },
};

export const Voting: Story = {
  args: {
    status: 'votingPromises',
    untilVoteEndDate: 5,
    suggestedRegion: '잠실 주변',
    suggestedStartDate: '2025-02-01',
    SuggestedEndDate: '2025-02-02',
    promiseName: '가족 외식',
  },
};

export const Confirmed: Story = {
  args: {
    status: 'confirmedPromises',
    promiseMembersNames: ['김상균', '이정연', '신종윤'],
    placeName: '건대입구역',
    fixedDate: '2025-01-01',
    promiseName: '스터디 모임',
  },
};