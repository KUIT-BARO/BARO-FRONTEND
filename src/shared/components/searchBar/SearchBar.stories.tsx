import type { Meta, StoryObj } from '@storybook/react-vite';
import SearchBar from '@shared/components/searchBar/SearchBar';

const meta: Meta<typeof SearchBar> = {
  title: 'components/SearchBar',
  component: SearchBar,
  tags: ['autodocs'],
  argTypes: {
    searchIcon: {
      control: { type: 'radio' },
      options: ['search', 'scope'],
      description: '아이콘 타입',
    },
    placeholder: { control: 'text', description: '기본 문구' },
    onSearch: { action: 'search', description: '' },
  },
};

export default meta;
type Story = StoryObj<typeof SearchBar>;

export const Default: Story = {
  args: {
    searchIcon: 'search',
    placeholder: '원하는 장소를 검색하세요',
    onSearch: (_query) => alert(_query),
  },
};

export const ScopeSearch: Story = {
  args: {
    searchIcon: 'scope',
    placeholder: '현재 위치로 설정하기',
  },
};
