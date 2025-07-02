import type { Meta, StoryObj } from '@storybook/react';
import Header from './Header';
import { IcLogo, IcNavArrow, IcNavX, IcSetting } from '@svg/index';

const meta: Meta<typeof Header> = {
  title: 'Shared/Header',
  component: Header,
  tags: ['autodocs'],
  argTypes: {
    background: {
      control: { type: 'select' },
      options: ['blue0', 'baroblue'],
    },
    text: { control: 'text' },
    leftIconType: { control: 'radio', options: ['icon', 'logo'] },
    leftIcon: { control: false },
    rightIcon: { control: false },
  },
};

export default meta;
type Story = StoryObj<typeof Header>;

export const 기본헤더: Story = {
  args: {
    text: '홈',
  },
};

export const 아이콘헤더: Story = {
  args: {
    text: '뒤로가기',
    leftIcon: IcNavArrow,
    rightIcon: IcSetting,
    leftIconType: 'icon',
  },
};

export const 로고헤더: Story = {
  args: {
    leftIcon: IcLogo,
    rightIcon: IcSetting,
    leftIconType: 'logo',
    background: 'baroblue',
  },
};

export const 닫기버튼헤더: Story = {
  args: {
    text: '설정',
    leftIcon: IcNavArrow,
    rightIcon: IcNavX,
    leftIconType: 'icon',
  },
};
