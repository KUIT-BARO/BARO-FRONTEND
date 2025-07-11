import type { Meta, StoryObj } from '@storybook/react-vite';
import CategoryTag from '@shared/components/categoryTag/CategoryTag';

const meta: Meta<typeof CategoryTag> = {
  title: 'components/CategoryTag',
  component: CategoryTag,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CategoryTag>;

export const Default: Story = {
  args: {
    onTagSelected: () => {},
  },
};

export const WithCallback: Story = {
  args: {
    onTagSelected: (category: string) => {
      alert(`선택한 카테고리: ${category}`);
    },
  },
};