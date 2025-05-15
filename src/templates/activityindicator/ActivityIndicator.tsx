import React from 'react';
import { ActivityIndicator as PXActivityIndicator } from 'react-native';
import { styles } from './styles';
import { ActivityIndicatorProps } from './types';

const ActivityIndicator: React.FC<ActivityIndicatorProps> = ({ size, color, style }) => {
  return (
    <PXActivityIndicator size={size || 'small'} color={color || '#000000'} style={[styles.spinner, style]} />
  );
};

export default ActivityIndicator;