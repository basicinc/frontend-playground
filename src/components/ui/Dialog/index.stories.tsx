import { useState } from 'react';

import { Button } from '@/components/ui/Button';
import { Dialog } from '@/components/ui/Dialog';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  component: Dialog,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isOpen: false,
    header: {
      title: 'タイトル',
      description: '説明文',
    },
    body: (
      <div>
        <p>コンテンツエリアとなります</p>
      </div>
    ),
    footer: {
      contents: [
        {
          label: '閉じる',
          type: 'button',
          onClick: () => alert('閉じるボタンがクリックされました'),
        },
      ],
    },
  },
  render: function Comp(args) {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <>
        <Button theme='primary' label='ダイアログを開く' onClick={() => setIsOpen(true)} />
        <Dialog {...args} isOpen={isOpen} onClose={() => setIsOpen(false)} />
      </>
    );
  },
};

export const WithThumbnail: Story = {
  args: {
    isOpen: false,
    thumbnailSrc: 'https://placehold.jp/320x180.png',
    header: {
      title: 'タイトル',
      description: '説明文',
    },
    body: (
      <div>
        <p>コンテンツエリアとなります</p>
      </div>
    ),
    footer: {
      contents: [
        {
          label: '閉じる',
          type: 'button',
          onClick: () => alert('閉じるボタンがクリックされました'),
        },
      ],
    },
  },
  render: function Comp(args) {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <>
        <Button theme='primary' label='ダイアログを開く' onClick={() => setIsOpen(true)} />
        <Dialog {...args} isOpen={isOpen} onClose={() => setIsOpen(false)} />
      </>
    );
  },
};
export const WithMultipleFooterContents: Story = {
  args: {
    isOpen: false,
    thumbnailSrc: 'https://placehold.jp/320x180.png',
    header: {
      title: 'タイトル',
      description: '説明文',
    },
    body: (
      <div>
        <p>コンテンツエリアとなります</p>
      </div>
    ),
    footer: {
      contents: [
        {
          label: '閉じる',
          type: 'button',
          onClick: () => alert('閉じるボタンがクリックされました'),
        },
        {
          label: 'リンク',
          type: 'link',
          href: 'https://example.com',
        },
      ],
    },
  },
  render: function Comp(args) {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <>
        <Button theme='primary' label='ダイアログを開く' onClick={() => setIsOpen(true)} />
        <Dialog {...args} isOpen={isOpen} onClose={() => setIsOpen(false)} />
      </>
    );
  },
};
