import type { Meta, StoryObj } from '@storybook/react-vite';
import Button from '@shared/components/button/Button';
import { vars } from '@shared/styles/theme.css';
import { BUTTON_VARIANTS, BUTTON_SIZES } from '@shared/components/button/constant/button';

const meta: Meta<typeof Button> = {
  title: 'components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: [
        BUTTON_VARIANTS.ENABLED,
        BUTTON_VARIANTS.DISABLED,
        BUTTON_VARIANTS.WHITE,
        BUTTON_VARIANTS.OUTLINED
      ],
    },
    size: {
      control: { type: 'radio' },
      options: [
        BUTTON_SIZES.LONG,
        BUTTON_SIZES.SHORT,
        BUTTON_SIZES.CATEGORY,
        BUTTON_SIZES.CANCEL
      ],
    },
    text: { control: 'text' },
    onClick: { action: 'clicked' },
    backgroundColor: { control: 'color' },
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

export const CategoryButton1: Story = {
  args: {
    variant: 'enabled',
    size: 'category',
    text: '비즈니스',
  },
  name: 'Category Enabled Button',
};
export const CategoryButton2: Story = {
  args: {
    variant: 'outlined',
    size: 'category',
    text: '비즈니스',
  },
  name: 'Category Disabled Button',
};

export const CancelButton: Story = {
  args: {
    variant: 'enabled',
    size: 'cancel',
    text: '취소',
    backgroundColor: vars.color.white,
  },
  name: 'Cancel Button ',
};
