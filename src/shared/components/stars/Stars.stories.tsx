import type { Meta, StoryObj } from '@storybook/react-vite';
import  Stars from '@shared/components/stars/Stars';

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
      options: ['SMALL', 'DEFAULT', 'BIG'],
      description: '별 아이콘 사이즈',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Stars>;

export const Default: Story = {
  args: {
    score: 3,
    size: 'DEFAULT',
  },
};

export const Small: Story = {
  args: {
    score: 4,
    size: 'SMALL',
  },
};

export const Big: Story = {
  args: {
    score: 3.5,
    size: 'BIG',
  },
};