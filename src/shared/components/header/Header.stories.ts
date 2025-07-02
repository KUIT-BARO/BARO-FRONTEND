import type { Meta, StoryObj } from '@storybook/react-vite';
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

export const DefaultHeader: Story = {
  args: {
    text: '홈',
  },
  name: '기본 헤더',
};

export const IconHeader: Story = {
  args: {
    text: '뒤로가기',
    leftIcon: IcNavArrow,
    rightIcon: IcSetting,
    leftIconType: 'icon',
  },
  name: '아이콘 헤더',
};

export const LogoHeader: Story = {
  args: {
    leftIcon: IcLogo,
    rightIcon: IcSetting,
    leftIconType: 'logo',
    background: 'baroblue',
  },
  name: '로고 헤더',
};

export const CloseButtonHeader: Story = {
  args: {
    text: '설정',
    leftIcon: IcNavArrow,
    rightIcon: IcNavX,
    leftIconType: 'icon',
  },
  name: '닫기 버튼 헤더',
};
