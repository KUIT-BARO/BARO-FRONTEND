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
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    users: [
      { userId: 1, avatarType: 'DOG', isHost: true, suggestionProgress: 100 },
      { userId: 2, avatarType: 'MAN', isHost: false, suggestionProgress: 50 },
      { userId: 3, avatarType: 'WOMAN', isHost: false, suggestionProgress: 0 },
    ],
  },
};

export const Pending: Story = {
  args: {
    users: [
      { userId: 1, avatarType: 'MAN', isHost: true, suggestionProgress: 100 },
      { userId: 2, avatarType: 'WOMAN', isHost: false, suggestionProgress: 50 },
      { userId: 3, avatarType: 'DOG', isHost: false, suggestionProgress: 100 },
      { userId: 4, avatarType: 'USER', isHost: false, suggestionProgress: 0 },
      { userId: 5, avatarType: 'MAN', isHost: false, suggestionProgress: 50 },
    ],
  },
  name: '약속 현황 (미정)',
};
