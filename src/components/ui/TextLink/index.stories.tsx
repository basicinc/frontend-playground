import { TextLink } from '@/components/ui/TextLink';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  component: TextLink,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: {
        type: 'select',
        options: ['internal', 'external'],
      },
    },
  },
} satisfies Meta<typeof TextLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Text Link',
    type: 'external',
    href: 'https://example.com',
  },
};

export const WithIconLeft: Story = {
  args: {
    label: 'Text Link',
    type: 'external',
    href: 'https://example.com',
    icon: {
      name: 'chevron-right',
    },
  },
};

export const WithIconRight: Story = {
  args: {
    label: 'Text Link',
    type: 'external',
    href: 'https://example.com',
    icon: {
      name: 'chevron-right',
      position: 'right',
    },
  },
};
