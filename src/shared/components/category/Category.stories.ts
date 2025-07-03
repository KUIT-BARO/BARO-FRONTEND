import type { Meta, StoryObj } from '@storybook/react-vite';
import Category from './Category';

const meta: Meta<typeof Category> = {
  title: 'components/Category',
  component: Category,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: { type: 'radio' },
      options: ['normal', 'outline'],
    },
    text: {
      control: 'text',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Category>;

export const Default: Story = {
  args: {
    text: '반려동물',
    type: 'normal',
  },
};

export const Outline: Story = {
  args: {
    text: '커플',
    type: 'outline',
  },
};
