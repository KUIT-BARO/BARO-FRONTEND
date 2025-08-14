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
      options: ['gray', 'blue'],
      description: '배경 색상',
    },
    borderColor: {
      control: { type: 'radio' },
      options: ['gray', 'white'],
      description: '하단 테두리 색상',
    },
    maxLength: {
      control: 'number',
      description: '입력 최대 길이',
    },
    showMaxLength: {
      control: 'boolean',
      description: '입력 최대 길이 표시 여부',
    },
    value: {
      control: 'text',
      description: '입력값',
    },
    onChange: {
      action: 'changed',
      description: '입력값 변경 핸들러',
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
    backgroundColor: 'gray',
    showMaxLength: false,
    value: '',
  },
};

export const EmailInput: Story = {
  args: {
    leftIcon: 'email',
    placeholder: '이메일 입력',
    hasBackground: true,
    backgroundColor: 'blue',
    value: '',
  },
};

export const PasswordInput: Story = {
  args: {
    leftIcon: 'password',
    placeholder: '비밀번호 입력',
    hasBackground: true,
    backgroundColor: 'blue',
    value: '',
  },
};

export const PromiseNameInput: Story = {
  args: {
    placeholder: '약속명을 추가해주세요.',
    hasBackground: false,
    showMaxLength: true,
    maxLength: 25,
  },
};
