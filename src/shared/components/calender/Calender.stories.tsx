import type { Meta, StoryObj } from '@storybook/react-vite';
import Calender from '@shared/components/calender/Calender';

const meta: Meta<typeof Calender> = {
  title: 'Components/Calender',
  component: Calender,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof Calender>;

export const Default: Story = {
  args: {},
};