import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@chromatic-com/storybook',
    '@storybook/addon-docs',
    '@storybook/addon-a11y',
    '@storybook/addon-vitest',
    '@storybook/addon-themes',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  typescript: {
    // 타입 체크 활성화
    check: true,
    // props 자동 추출 도구
    reactDocgen: 'react-docgen-typescript',
  },
  // 정적 리소스 디렉토리 (이미지, 폰트 등)
  staticDirs: ['../public'],
  viteFinal: async config => {
    // 문제가 되는 의존성들을 제외
    if (config.optimizeDeps) {
      config.optimizeDeps.exclude = [
        ...(config.optimizeDeps.exclude || []),
        '@mdx-js/react',
        'markdown-to-jsx',
        'sb-vitest',
      ];
    }
    return config;
  },
};
export default config;
