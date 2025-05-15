import React from 'react';
import { View as PXView } from 'react-native';
import { styles } from './styles';
import { ViewProps } from './types';

const View: React.FC<ViewProps> = ({ children, style }) => {
  return <PXView style={[styles.container, style]}>{children}</PXView>;
};

export default View;