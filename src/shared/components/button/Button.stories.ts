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
        BUTTON_SIZES.SMALL
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
    variant: 'disabled',
    size: 'short',
    text: '취소',
  },
  name: 'Short Disabled Button',
};

export const ShortButton2: Story = {
  args: {
    variant: 'enabled',
    size: 'short',
    text: '추가하기',
  },
  name: 'Short Enabled Button',
};

export const ShortButton3: Story = {
  args: {
    variant: 'enabled',
    size: 'short',
    text: '탈퇴하기',
    backgroundColor: vars.color.red0,
  },
  name: 'Short Enabled Button',
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
  name: 'Category Outlined Button',
};

export const SmallButton1: Story = {
  args: {
    variant: 'enabled',
    size: 'small',
    text: '취소',
    backgroundColor: vars.color.white,
  },
  name: 'Cancel Button ',
};

export const SmallButton2: Story = {
  args: {
    variant: 'enabled',
    size: 'small',
    text: '등록',
    backgroundColor: vars.color.baroBlue,
  },
  name: 'Registration Button ',
};
