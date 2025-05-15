import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { styles } from './styles';
import { ButtonProps } from './types';

const Button: React.FC<ButtonProps> = ({ title, onPress, style }) => {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;