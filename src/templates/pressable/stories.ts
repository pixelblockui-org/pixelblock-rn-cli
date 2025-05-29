import { Meta, StoryObj } from '@storybook/react';
import { Pressable } from './Pressable';
import { Text } from 'react-native';

const meta: Meta<typeof Pressable> = {
  component: Pressable,
  args: {
    onPress: () => console.log('Pressed'),
    children: <Text>Press Me</Text>,
  },
};
export default meta;

type Story = StoryObj<typeof Pressable>;
export const Default: Story = {};