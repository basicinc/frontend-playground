import { Toggle } from '@/components/ui/Toggle';

import type { Radio } from '@/components/ui/Radio';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  component: Toggle,
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
    label: 'toggle',
    checked: false,
    name: 'name',
    onChange: (e) => alert(`change!! ${e.target.checked}`),
    disabled: false,
  },
};
