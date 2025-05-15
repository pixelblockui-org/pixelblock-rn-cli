import { ViewProps as RNViewProps } from 'react-native';

export interface ViewProps extends RNViewProps {
  children?: React.ReactNode;
}