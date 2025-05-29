import { Meta, StoryObj } from '@storybook/react';
import { StatusBar } from './StatusBar';

const meta: Meta<typeof StatusBar> = {
  component: StatusBar,
  args: {
    backgroundColor: '#007AFF',
    barStyle: 'light-content',
  },
};
export default meta;

type Story = StoryObj<typeof StatusBar>;
export const Default: Story = {};