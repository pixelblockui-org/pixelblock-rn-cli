import React from 'react';
import { Switch as PXSwitch } from 'react-native';
import { styles } from './styles';
import { SwitchProps } from './types';

const Switch: React.FC<SwitchProps> = ({ value, onValueChange, style }) => {
  return (
    <PXSwitch
      value={value}
      onValueChange={onValueChange}
      style={[styles.switch, style]}
    />
  );
};

export default Switch;