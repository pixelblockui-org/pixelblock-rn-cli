import React from 'react';
import { StatusBar as RNStatusBar, useColorScheme } from 'react-native';
import { styles } from './styles';
import { StatusBarProps } from './types';

const StatusBar: React.FC<StatusBarProps> = ({
  backgroundColor,
  barStyle,
  hidden,
  accessibilityLabel,
}) => {
  const scheme = useColorScheme();
  const themedStyles = scheme === 'dark' ? styles.dark : styles.light;

  return (
    <RNStatusBar
      backgroundColor={backgroundColor || themedStyles.statusBar.backgroundColor}
      barStyle={barStyle || (scheme === 'dark' ? 'light-content' : 'dark-content')}
      hidden={hidden}
      accessibilityLabel={accessibilityLabel}
    />
  );
};

export default StatusBar;