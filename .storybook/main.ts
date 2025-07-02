import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  addons: [
    "@chromatic-com/storybook",
    "@storybook/addon-docs",
    "@storybook/addon-a11y",
    "@storybook/addon-vitest",
    "@storybook/addon-themes",
  ],
  framework: {
    "name": "@storybook/react-vite",
    "options": {}
  },
  typescript: {
    // 타입 체크 활성화
    check: true,
    // props 자동 추출 도구
    reactDocgen: "react-docgen-typescript"
  },
  // 정적 리소스 디렉토리 (이미지, 폰트 등)
  staticDirs: ['../public'],
};
export default config;