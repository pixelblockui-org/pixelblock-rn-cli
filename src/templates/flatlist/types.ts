import { FlatListProps as RNFlatListProps } from 'react-native';

export interface FlatListProps<T> extends RNFlatListProps<T> {
  data: T[];
  renderItem: (info: { item: T; index: number }) => React.ReactNode;
}