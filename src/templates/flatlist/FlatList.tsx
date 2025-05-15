import React from 'react';
import { FlatList as PXFlatList } from 'react-native';
import { styles } from './styles';
import { FlatListProps } from './types';

const FlatList: React.FC<FlatListProps> = ({ data, renderItem, style }) => {
  return (
    <PXFlatList
      data={data}
      renderItem={renderItem}
      style={[styles.list, style]}
      keyExtractor={(item) => item.id?.toString() || Math.random().toString()}
    />
  );
};

export default FlatList;