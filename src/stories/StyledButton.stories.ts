import type { Meta, StoryObj } from '@storybook/react';

import { StyledButton } from './StyledButton';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/StyledButton',
  component: StyledButton,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    onClick: { action: 'clicked' },
    variant: {
      options: ['primary', 'success', 'transparent'],
    },
  },
} satisfies Meta<typeof StyledButton>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    variant: 'primary',
    text: 'hihi',
  },
};

export const Success: Story = {
  args: {
    variant: 'success',
    text: 'hihi',
  },
};

export const Transparent: Story = {
  args: {
    variant: 'transparent',
    text: 'hihi',
  },
};
