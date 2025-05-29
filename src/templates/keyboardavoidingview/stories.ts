import { Meta, StoryObj } from '@storybook/react';
import { KeyboardAvoidingView } from './KeyboardAvoidingView';
import { TextInput, View } from 'react-native';
import { useState } from 'react';

const meta: Meta<typeof KeyboardAvoidingView> = {
  component: KeyboardAvoidingView,
  args: {
    behavior: 'padding',
  },
  render: (args) => {
    const [text, setText] = useState('');
    return (
      <KeyboardAvoidingView {...args}>
        <View>
          <TextInput
            value={text}
            onChangeText={setText}
            placeholder="Type here"
          />
        </View>
      </KeyboardAvoidingView>
    );
  },
};
export default meta;

type Story = StoryObj<typeof KeyboardAvoidingView>;
export const Default: Story = {};