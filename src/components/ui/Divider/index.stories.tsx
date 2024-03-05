import { Divider } from '@/components/ui/Divider';
import { DIVIDER_SPACING } from '@/components/ui/Divider/const';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  component: Divider,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    verticalSpacing: {
      control: 'radio',
      options: DIVIDER_SPACING,
    },
    horizontalSpacing: {
      control: 'radio',
      options: DIVIDER_SPACING,
    },
  },
} satisfies Meta<typeof Divider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: (args) => {
    return (
      <div style={{ width: 240, border: '1px #000 solid', borderRadius: 8 }}>
        <p>Paragraph 1</p>
        <Divider {...args} />
        <p>Paragraph 2</p>
      </div>
    );
  },
};
