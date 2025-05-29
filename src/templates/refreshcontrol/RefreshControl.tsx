import React from 'react';
import { RefreshControl as RNRefreshControl, ScrollView, useColorScheme } from 'react-native';
import { styles } from './styles';
import { RefreshControlProps } from './types';

const RefreshControl: React.FC<RefreshControlProps> = ({
  refreshing,
  onRefresh,
  colors,
  accessibilityLabel,
}) => {
  const scheme = useColorScheme();
  const themedStyles = scheme === 'dark' ? styles.dark : styles.light;

  return (
    <ScrollView
      refreshControl={
        <RNRefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          colors={colors || [themedStyles.refresh.color]}
          accessibilityLabel={accessibilityLabel}
          accessibilityRole="button"
        />
      }
    />
  );
};

export default RefreshControl;