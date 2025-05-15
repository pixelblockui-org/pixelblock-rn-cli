import { ScrollViewProps as RNScrollViewProps } from 'react-native';

export interface ScrollViewProps extends RNScrollViewProps {
  children?: React.ReactNode;
}