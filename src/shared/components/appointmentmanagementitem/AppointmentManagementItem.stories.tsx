import AppointmentManagementItem from './AppointmentManagementItem';
import type { Meta, StoryObj } from '@storybook/react-vite';

 const meta: Meta<typeof AppointmentManagementItem> = {
  title: 'Components/AppointmentManagementItem',
  component: AppointmentManagementItem,
    tags: ['autodocs'], // ✅ 이거 꼭 필요

};

export default meta;

type Story = StoryObj<typeof AppointmentManagementItem>;

export const Suggested: Story = {
  args: {
    status: 'suggestedPromises',
    untilVoteDate: 3,
    suggestedRegion: '건대입구 주변',
    suggestedStartDate: '2025-01-01',
    SuggestedEndDate: '2025-01-02',
  },
};

export const Voting: Story = {
  args: {
    status: 'votingPromises',
    untilVoteEndDate: 5,
    suggestedRegion: '잠실 주변',
    suggestedStartDate: '2025-02-01',
    SuggestedEndDate: '2025-02-02',
  },
};

export const Confirmed: Story = {
  args: {
    status: 'confirmedPromises',
    promiseMembersNames: ['김상균', '이정연', '신종윤'],
    placeName: '건대입구역',
    fixedDate: '2025-01-01',
  },
};