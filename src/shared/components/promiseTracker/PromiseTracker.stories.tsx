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
      { userId: 1, avatarType: 'dog', isHost: true, hasSelected: true },
      { userId: 2, avatarType: 'man', isHost: false, hasSelected: false },
      { userId: 3, avatarType: 'woman', isHost: false, hasSelected: true },
    ],
    variant: 'pending',
  },
};

export const Pending: Story = {
  args: {
    users: [
      { userId: 1, avatarType: 'man', isHost: true, hasSelected: true },
      { userId: 2, avatarType: 'woman', isHost: false, hasSelected: false },
      { userId: 3, avatarType: 'dog', isHost: false, hasSelected: true },
      { userId: 4, avatarType: 'user', isHost: false, hasSelected: false },
    ],
    variant: 'pending',
  },
  name: '약속 현황 (미정)',
};

export const Voting: Story = {
  args: {
    users: [
      { userId: 1, avatarType: 'man', isHost: true, hasSelected: true },
      { userId: 2, avatarType: 'woman', isHost: false, hasSelected: true },
      { userId: 3, avatarType: 'dog', isHost: false, hasSelected: true },
      { userId: 4, avatarType: 'user', isHost: false, hasSelected: false },
    ],
    variant: 'voting',
  },
  name: '약속 현황 (투표)',
};
