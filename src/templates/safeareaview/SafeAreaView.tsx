import React from 'react';
import { SafeAreaView as PXSafeAreaView } from 'react-native';
import { styles } from './styles';
import { SafeAreaViewProps } from './types';

const SafeAreaView: React.FC<SafeAreaViewProps> = ({ children, style }) => {
  return (
    <PXSafeAreaView style={[styles.container, style]}>
      {children}
    </PXSafeAreaView>
  );
};

export default SafeAreaView;