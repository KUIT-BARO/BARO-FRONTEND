import type { Preview } from '@storybook/react-vite';

const preview: Preview = {
  parameters: {
    actions: {
      // 액션 핸들러 감지
      // argTypesRegex: "^on[A-Z].*"
    },

    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      // 미설정 - 기본 설정으로 검사 활성화, 경고는 UI에 표시, CI에서는 실패하지 않음
    },

    themes: {
      default: 'light',
      list: [
        { name: 'light', class: 'light', color: '#ffffff' },
        { name: 'dark', class: 'dark', color: '#000000' },
      ],
    },

    tags: ['autodocs'],
  },
};

export default preview;
