import { Meta, StoryObj } from '@storybook/react';
import { TouchableHighlight } from './TouchableHighlight';
import { Text } from 'react-native';

const meta: Meta<typeof TouchableHighlight> = {
  component: TouchableHighlight,
  args: {
    onPress: () => console.log('Pressed'),
    children: <Text>Press Me</Text>,
  },
};
export default meta;

type Story = StoryObj<typeof TouchableHighlight>;
export const Default: Story = {};