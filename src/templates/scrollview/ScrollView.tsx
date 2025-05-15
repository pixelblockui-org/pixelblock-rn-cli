import React from 'react';
import { ScrollView as PXScrollView } from 'react-native';
import { styles } from './styles';
import { ScrollViewProps } from './types';

const ScrollView: React.FC<ScrollViewProps> = ({ children, style }) => {
  return (
    <PXScrollView style={[styles.scrollView, style]} showsVerticalScrollIndicator={false}>
      {children}
    </PXScrollView>
  );
};

export default ScrollView;