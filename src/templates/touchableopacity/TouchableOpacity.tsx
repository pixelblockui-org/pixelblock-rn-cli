import React from 'react';
import { TouchableOpacity as PXTouchableOpacity } from 'react-native';
import { styles } from './styles';
import { TouchableOpacityProps } from './types';

const TouchableOpacity: React.FC<TouchableOpacityProps> = ({ children, onPress, style }) => {
  return (
    <PXTouchableOpacity style={[styles.button, style]} onPress={onPress}>
      {children}
    </PXTouchableOpacity>
  );
};

export default TouchableOpacity;