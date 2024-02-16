import { Icon } from '@/components/ui/Icon';
import { ICON_NAMES } from '@/components/ui/Icon/const';

import type { Meta, StoryObj } from '@storybook/react';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof Icon> = {
  component: Icon,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Basic: Story = {
  args: {
    size: 24,
  },
  render: (args) => (
    <div>
      <ul
        style={{
          display: 'flex',
          gap: 8,
          listStyle: 'none',
          flexWrap: 'wrap',
          width: '100%',
          padding: 0,
          margin: 0,
        }}
      >
        {ICON_NAMES.map((name) => (
          <li key={name} style={{ backgroundColor: '#f8f7f6' }}>
            <div
              style={{
                display: 'flex',
                gap: 4,
                flexDirection: 'column',
                alignItems: 'center',
                minWidth: 180,
                border: '1px solid #000',
                padding: 8,
                borderRadius: 4,
              }}
            >
              <span style={{ wordBreak: 'keep-all', overflowX: 'auto' }}>{name}</span>

              <Icon {...args} name={name} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  ),
};
