import type { Meta, StoryObj } from '@storybook/react-vite';
import Footer from './Footer';
import { useState } from 'react';
import { MENUS } from '@shared/components/footer/constant/footerMenu';

const meta: Meta<typeof Footer> = {
  title: 'components/Footer',
  component: Footer,
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
};
