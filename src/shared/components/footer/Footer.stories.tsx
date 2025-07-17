import type { Meta, StoryObj } from '@storybook/react-vite';
import Footer from './Footer';
import { useState } from 'react';
import { MENUS } from '@shared/components/footer/constant/footerMenu';

const meta: Meta<typeof Footer> = {
  title: 'components/Footer',
  component: Footer,
  tags: ['autodocs'],
  argTypes: {
    selectedMenu: {
      control: { type: 'select' },
      options: MENUS.map(menu => menu.id),
      description: '현재 선택된 메뉴 ID',
    },
    handleMenu: {
      description: '메뉴 클릭 시 호출되는 콜백 함수',
    },
  },
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof Footer>;

export const Default: Story = {
  render: () => {
    const [selectedMenu, setSelectedMenu] = useState(MENUS[0].id);

    return (
      <div style={{ width: '100%', borderTop: '1px solid #eee' }}>
        <Footer
          selectedMenu={selectedMenu}
          handleMenu={id => {
            setSelectedMenu(id);
            console.log('Selected:', id);
          }}
        />
      </div>
    );
  },
  name: '기본 푸터',
};

export const HomeSelected: Story = {
  render: () => {
    const [selectedMenu, setSelectedMenu] = useState('HOME');

    return (
      <div style={{ width: '100%', borderTop: '1px solid #eee' }}>
        <Footer
          selectedMenu={selectedMenu}
          handleMenu={id => {
            setSelectedMenu(id);
            console.log('Selected:', id);
          }}
        />
      </div>
    );
  },
  name: '홈 선택됨',
};

export const SearchSelected: Story = {
  render: () => {
    const [selectedMenu, setSelectedMenu] = useState('SEARCH');

    return (
      <div style={{ width: '100%', borderTop: '1px solid #eee' }}>
        <Footer
          selectedMenu={selectedMenu}
          handleMenu={id => {
            setSelectedMenu(id);
            console.log('Selected:', id);
          }}
        />
      </div>
    );
  },
  name: '탐색 선택됨',
};

export const PromiseSelected: Story = {
  render: () => {
    const [selectedMenu, setSelectedMenu] = useState('PROMISES');

    return (
      <div style={{ width: '100%', borderTop: '1px solid #eee' }}>
        <Footer
          selectedMenu={selectedMenu}
          handleMenu={id => {
            setSelectedMenu(id);
            console.log('Selected:', id);
          }}
        />
      </div>
    );
  },
  name: '약속 선택됨',
};

export const PersonSelected: Story = {
  render: () => {
    const [selectedMenu, setSelectedMenu] = useState('PERSON');

    return (
      <div style={{ width: '100%', borderTop: '1px solid #eee' }}>
        <Footer
          selectedMenu={selectedMenu}
          handleMenu={id => {
            setSelectedMenu(id);
            console.log('Selected:', id);
          }}
        />
      </div>
    );
  },
  name: '나 선택됨',
};

export const WithConsoleLog: Story = {
  render: () => {
    const [selectedMenu, setSelectedMenu] = useState(MENUS[0].id);

    return (
      <div style={{ width: '100%', borderTop: '1px solid #eee' }}>
        <Footer
          selectedMenu={selectedMenu}
          handleMenu={id => {
            setSelectedMenu(id);
            console.log('메뉴 클릭됨:', id);
            alert(`선택된 메뉴: ${id}`);
          }}
        />
      </div>
    );
  },
  name: '콘솔 로그와 알림',
};
