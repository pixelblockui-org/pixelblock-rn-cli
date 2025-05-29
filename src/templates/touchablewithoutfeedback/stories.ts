import { Meta, StoryObj } from '@storybook/react';
import { TouchableWithoutFeedback } from './TouchableWithoutFeedback';
import { Text } from 'react-native';

const meta: Meta<typeof TouchableWithoutFeedback> = {
  component: TouchableWithoutFeedback,
  args: {
    onPress: () => console.log('Pressed'),
    children: <Text>Press Me</Text>,
  },
};
export default meta;

type Story = StoryObj<typeof TouchableWithoutFeedback>;
export const Default: Story = {};