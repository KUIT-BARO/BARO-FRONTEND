import  { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import Popupoverlay from '@shared/components/popup-overlay/PopupOverlay';

const meta: Meta<typeof Popupoverlay> = {
  title: 'Shared/Popupoverlay',
  component: Popupoverlay,
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
  open?: boolean;
  top?: boolean;
  toptitle?:string;
  position?: 'center' | 'bottom';
}
type Story = StoryObj<typeof Popupoverlay>;

const Template = (args: PopupOverlayProps) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(true)}>Open Popup</button>
      <Popupoverlay
        open={open}
        onClose={() => setOpen(false)}
        position={args.position}
        top={args.top}
        toptitle={args.toptitle}
      >
        <div
          style={{
            background: 'white',
            padding: '20px',
            borderRadius: '8px',
            textAlign: 'center',
          }}
        >
          <h3>{args.position} Popup</h3>
          <p>This popup {args.top ? 'has' : 'does not have'} a top bar.</p>
          <button onClick={() => setOpen(false)}>Close</button>
        </div>
      </Popupoverlay>
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