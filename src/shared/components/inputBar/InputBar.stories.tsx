import type { Meta, StoryObj } from '@storybook/react-vite';
import InputBar from '@shared/components/inputBar/InputBar';

const meta: Meta<typeof InputBar> = {
  title: 'components/InputBar',
  component: InputBar,
  tags: ['autodocs'],
  argTypes: {
    leftIcon: {
      control: { type: 'radio' },
      options: ['search', 'scope', 'location', 'email', 'password', 'none'],
      description: '아이콘 타입',
    },
    placeholder: {
      control: 'text',
      description: '기본 문구',
    },
    hasBackground: {
      control: 'boolean',
      description: '배경 유무',
    },
    backgroundColor: {
      control: { type: 'radio' },
      options: ['gray6', 'blue6'],
      description: '배경 색상',
    },
    maxLength: {
      control: 'number',
      description: '입력 최대 길이',
    },
    showMaxLength: {
      control: 'boolean',
      description: '입력 최대 길이 표시 여부',
    },
    onSearch: {
      action: 'search',
      description: '',
    },
  },
};

export default meta;
type Story = StoryObj<typeof InputBar>;

export const Default: Story = {
  args: {
    leftIcon: 'search',
    placeholder: '원하는 장소를 검색하세요',
    hasBackground: true,
    backgroundColor: 'gray6',
    showMaxLength: false,
    onSearch: (_query) => alert(_query),
  },
};

export const EmailInput: Story = {
  args: {
    leftIcon: 'email',
    placeholder: '이메일 입력',
    hasBackground: true,
    backgroundColor: 'blue6',
    onSearch: (_query) => alert(`Email: ${_query}`),
  },
};

export const PasswordInput: Story = {
  args: {
    leftIcon: 'password',
    placeholder: '비밀번호 입력',
    hasBackground: true,
    backgroundColor: 'blue6',
    onSearch: (_query) => alert(`PW: ${_query}`),
  },
};

export const PromiseNameInput: Story = {
  args: {
    placeholder: '약속명을 추가해주세요.',
    hasBackground: false,
    showMaxLength: true,
    maxLength: 25,
    onSearch: (_query) => alert(_query),
  },
};
