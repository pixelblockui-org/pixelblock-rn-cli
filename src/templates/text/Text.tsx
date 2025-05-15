import React from 'react';
import { Text as PXText } from 'react-native';
import { styles } from './styles';
import { TextProps } from './types';

const Text: React.FC<TextProps> = ({ children, style }) => {
  return <PXText style={[styles.text, style]}>{children}</PXText>;
};

export default Text;