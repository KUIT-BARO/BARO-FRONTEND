import type { Meta, StoryObj } from '@storybook/react-vite';
import Button from './Button';

const meta: Meta<typeof Button> = {
  title: 'Shared/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['enabled', 'disabled', 'white', 'outlined'],
    },
    text: { control: 'text' },
    onClick: { action: 'clicked' },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const LongButton1: Story = {
  args: {
    variant: 'white',
    size: 'long',
    text: '다음',
  },
  name: 'Long White Button',
};
export const LongButton2: Story = {
  args: {
    variant: 'enabled',
    size: 'long',
    text: '다음',
  },
  name: 'Long Enabled Button',
};
export const LongButton3: Story = {
  args: {
    variant: 'disabled',
    size: 'long',
    text: '다음',
  },
  name: 'Long Disabled Button',
};
export const LongButton4: Story = {
  args: {
    variant: 'outlined',
    size: 'long',
    text: '다음',
  },
  name: 'Long Outlined Button',
};

export const MediumButton1: Story = {
  args: {
    variant: 'white',
    size: 'medium',
    text: '신촌',
  },
  name: 'Medium White Button',
};
export const MediumButton2: Story = {
  args: {
    variant: 'enabled',
    size: 'medium',
    text: '신촌',
  },
  name: 'Medium Enabled Button',
};
export const MediumButton3: Story = {
  args: {
    variant: 'disabled',
    size: 'medium',
    text: '신촌',
  },
  name: 'Medium Disabled Button',
};
export const MediumButton4: Story = {
  args: {
    variant: 'outlined',
    size: 'medium',
    text: '신촌',
  },
  name: 'Medium Outlined Button',
};

export const ShortButton1: Story = {
  args: {
    variant: 'white',
    size: 'short',
    text: '신촌',
  },
  name: 'Short White Button',
};
export const ShortButton2: Story = {
  args: {
    variant: 'enabled',
    size: 'short',
    text: '신촌',
  },
  name: 'Short Enabled Button',
};
export const ShortButton3: Story = {
  args: {
    variant: 'disabled',
    size: 'short',
    text: '신촌',
  },
  name: 'Short Disabled Button',
};
export const ShortButton4: Story = {
  args: {
    variant: 'outlined',
    size: 'short',
    text: '신촌',
  },
  name: 'Short Outlined Button',
};

export const SmallButton1: Story = {
  args: {
    variant: 'white',
    size: 'xsmall',
    text: '전체 취소',
  },
  name: 'Small White Button',
};
export const SmallButton2: Story = {
  args: {
    variant: 'enabled',
    size: 'xsmall',
    text: '전체 취소',
  },
  name: 'Small Enabled Button',
};
export const SmallButton3: Story = {
  args: {
    variant: 'disabled',
    size: 'xsmall',
    text: '전체 취소',
  },
  name: 'Small Disabled Button',
};
export const SmallButton4: Story = {
  args: {
    variant: 'outlined',
    size: 'xsmall',
    text: '전체 취소',
  },
  name: 'Small Outlined Button',
};
