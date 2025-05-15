import { SwitchProps as RNSwitchProps } from 'react-native';

export interface SwitchProps extends RNSwitchProps {
  value: boolean;
  onValueChange: (value: boolean) => void;
}