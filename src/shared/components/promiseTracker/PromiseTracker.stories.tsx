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
      { userId: 1, avatarType: 'DOG', isHost: true, suggestionProgress: 'COMPLETE' },
      { userId: 2, avatarType: 'MAN', isHost: false, suggestionProgress: 'HALF' },
      { userId: 3, avatarType: 'WOMAN', isHost: false, suggestionProgress: 'NONE' },
    ],
  },
};

export const Pending: Story = {
  args: {
    users: [
      { userId: 1, avatarType: 'MAN', isHost: true, suggestionProgress: 'COMPLETE' },
      { userId: 2, avatarType: 'WOMAN', isHost: false, suggestionProgress: 'HALF' },
      { userId: 3, avatarType: 'DOG', isHost: false, suggestionProgress: 'COMPLETE' },
      { userId: 4, avatarType: 'USER', isHost: false, suggestionProgress: 'NONE' },
      { userId: 5, avatarType: 'MAN', isHost: false, suggestionProgress: 'HALF' },
    ],
  },
  name: '약속 현황 (미정)',
};
