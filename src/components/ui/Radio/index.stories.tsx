import { useState } from 'react';

import { Radio } from '@/components/ui/Radio';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  component: Radio,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Radio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'RadioA',
    isError: false,
    disabled: false,
  },
  render: function Comp(args) {
    const [isChecked, setIsChecked] = useState(false);

    return <Radio {...args} checked={isChecked} onChange={(e) => setIsChecked(e.target.checked)} />;
  },
};
