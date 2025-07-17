import type { Meta, StoryObj } from '@storybook/react-vite';
import { Stars } from './Stars';

const meta: Meta<typeof Stars> = {
  title: 'Components/Stars',
  component: Stars,
  argTypes: {
    score: {
      control: { type: 'number', min: 0, max: 5, step: 1 },
      description: '별 개수 (0~5)',
    },
    size: {
      control: { type: 'radio' },
      options: ['small', 'default', 'big'],
      description: '별 아이콘 사이즈',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Stars>;

export const Default: Story = {
  args: {
    score: 3,
    size: 'default',
  },
};

export const Small: Story = {
  args: {
    score: 4,
    size: 'small',
  },
};

export const Big: Story = {
  args: {
    score: 5,
    size: 'big',
  },
};