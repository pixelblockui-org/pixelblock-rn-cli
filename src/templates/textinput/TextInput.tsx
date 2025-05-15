import React from 'react';
import { TextInput as RNTextInput } from 'react-native';
import { styles } from './styles';
import { TextInputProps } from './types';

const TextInput: React.FC<TextInputProps> = ({
  value,
  onChangeText,
  placeholder,
  style,
}) => {
  return (
    <RNTextInput
      style={[styles.input, style]}
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      placeholderTextColor={styles.input.color}
    />
  );
};

export default TextInput;