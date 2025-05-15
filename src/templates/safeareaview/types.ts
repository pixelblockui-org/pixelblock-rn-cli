import { SafeAreaViewProps as RNSafeAreaViewProps } from 'react-native';

export interface SafeAreaViewProps extends RNSafeAreaViewProps {
  children?: React.ReactNode;
}