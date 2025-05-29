import { Meta, StoryObj } from '@storybook/react';
import { RefreshControl } from './RefreshControl';
import { useState } from 'react';

const meta: Meta<typeof RefreshControl> = {
  component: RefreshControl,
  args: {
    onRefresh: () => new Promise((resolve) => setTimeout(resolve, 1000)),
  },
  render: (args) => {
    const [refreshing, setRefreshing] = useState(false);
    const onRefresh = async () => {
      setRefreshing(true);
      await args.onRefresh();
      setRefreshing(false);
    };
    return <RefreshControl {...args} refreshing={refreshing} onRefresh={onRefresh} />;
  },
};
export default meta;

type Story = StoryObj<typeof RefreshControl>;
export const Default: Story = {};