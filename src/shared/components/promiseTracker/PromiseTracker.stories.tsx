import type { Meta, StoryObj } from '@storybook/react-vite';
import PromiseTracker from '@shared/components/promiseTracker/PromiseTracker';

const meta: Meta<typeof PromiseTracker> = {
  title: 'components/PromiseTracker',
  component: PromiseTracker,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    users: {
      control: 'object',
      description: '사용자 목록',
    },
    variant: {
      control: 'select',
      options: ['pending', 'voting'],
      description: '약속 상태 (미정/투표)',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    users: [
      { userId: 1, avatarType: 'DOG', isHost: true, hasSelected: true },
      { userId: 2, avatarType: 'MAN', isHost: false, hasSelected: false },
      { userId: 3, avatarType: 'WOMAN', isHost: false, hasSelected: true },
    ],
    variant: 'PENDING',
  },
};

export const Pending: Story = {
  args: {
    users: [
      { userId: 1, avatarType: 'MAN', isHost: true, hasSelected: true },
      { userId: 2, avatarType: 'WOMAN', isHost: false, hasSelected: false },
      { userId: 3, avatarType: 'DOG', isHost: false, hasSelected: true },
      { userId: 4, avatarType: 'USER', isHost: false, hasSelected: false },
    ],
    variant: 'PENDING',
  },
  name: '약속 현황 (미정)',
};

export const Voting: Story = {
  args: {
    users: [
      { userId: 1, avatarType: 'MAN', isHost: true, hasSelected: true },
      { userId: 2, avatarType: 'WOMAN', isHost: false, hasSelected: true },
      { userId: 3, avatarType: 'DOG', isHost: false, hasSelected: true },
      { userId: 4, avatarType: 'USER', isHost: false, hasSelected: false },
    ],
    variant: 'VOTING',
  },
  name: '약속 현황 (투표)',
};
