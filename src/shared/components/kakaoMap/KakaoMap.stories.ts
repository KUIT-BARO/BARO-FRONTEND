import type { Meta, StoryObj } from '@storybook/react-vite';
import KakaoMap from './KakaoMap';
import { MAP_SIZE } from '@shared/components/kakaoMap/constant/mapSize';

const meta: Meta<typeof KakaoMap> = {
  title: 'components/KakaoMap',
  component: KakaoMap,
  parameters: {
    layout: 'padded',
  },
  args: {
    center: { lat: 37.5665, lng: 126.978 },
  },
};

export default meta;

type Story = StoryObj<typeof KakaoMap>;

export const Small: Story = {
  args: {
    size: MAP_SIZE.SMALL,
  },
};

export const Medium: Story = {
  args: {
    size: MAP_SIZE.MEDIUM,
  },
};

export const Large: Story = {
  args: {
    size: MAP_SIZE.LARGE,
  },
};

export const CustomLocation: Story = {
  args: {
    center: { lat: 35.1796, lng: 129.0756 },
    size: MAP_SIZE.MEDIUM,
  },
};
