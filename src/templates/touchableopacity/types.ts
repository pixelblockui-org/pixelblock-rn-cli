import { TouchableOpacityProps as RNTouchableOpacityProps } from 'react-native';

export interface TouchableOpacityProps extends RNTouchableOpacityProps {
  children?: React.ReactNode;
}