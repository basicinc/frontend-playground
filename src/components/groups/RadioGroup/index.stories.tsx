import { useState } from 'react';

import { RadioGroup } from '@/components/groups/RadioGroup';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  component: RadioGroup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    direction: {
      control: 'radio',
      options: ['column', 'row'],
    },
  },
} satisfies Meta<typeof RadioGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Radio Group',
    name: 'name',
    description: 'description',
    value: undefined,
    options: [
      {
        label: 'Radio A',
        value: '1',
      },
      {
        label: 'Radio B',
        value: '2',
      },
      {
        label: 'Radio C',
        value: '3',
        disabled: true,
      },
    ],
    required: false,
    errorMessage: '',
    direction: 'column',
  },
  render: function Comp(args) {
    const [value, setValue] = useState<string>();

    return <RadioGroup {...args} value={value} onChange={(value) => setValue(value)} />;
  },
};
