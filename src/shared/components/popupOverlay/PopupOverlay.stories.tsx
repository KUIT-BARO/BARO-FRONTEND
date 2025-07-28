import  { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { PopupOverlay } from '@shared/components/popupOverlay/PopupOverlay';

const meta: Meta<typeof PopupOverlay> = {
  title: 'components/PopupOverlay',
  component: PopupOverlay,
  argTypes: {
    position: {
      control: { type: 'radio' },
      options: ['center', 'bottom'],
    },
    top: {
      control: 'boolean',
    },
    toptitle: {
      control: 'text',
    },
  },
};
export default meta;

interface PopupOverlayProps {
  openPopup?: boolean;
  top?: boolean;
  toptitle?:string;
  position?: 'center' | 'bottom';
}

type Story = StoryObj<typeof PopupOverlay>;

const Template = (args: PopupOverlayProps) => {
  const [openPopup, setOpenPopup] = useState(false);
  const handleopenPopup = () => {
    setOpenPopup((prev) => !prev);
  }
  return (
    <>
      <button onClick={handleopenPopup}>Open Popup</button>
      <PopupOverlay
        openPopup={openPopup}
        onClose={handleopenPopup}
        position={args.position}
        top={args.top}
        toptitle={args.toptitle}
      >
        <div
          style={{
            background: 'white',
            padding: '2rem',
            borderRadius: '8px',
            textAlign: 'center',
          }}
        >
          <h3>{args.position} Popup</h3>
          <p>This popup {args.top ? 'has' : 'does not have'} a top bar.</p>
          <button onClick={handleopenPopup}>Close</button>
        </div>
      </PopupOverlay>
    </>
  );
};

export const CenteredWithTop: Story = {
  render: () =>
    <Template position="center" top={true} toptitle="Topbar Title!" />,
};
export const CenteredWithoutTop: Story = {
  render: () =>
    <Template position="center" top={false}  />,
};

export const BottomWithoutTop: Story = {
  render: () =>
    <Template position="bottom" top={false} />,
};