import { Image } from '@/components/ui/Image';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  component: Image,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Image>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    src: 'https://placehold.jp/320x180.png',
    width: 320,
    height: 180,
  },
};
