import React from 'react';
import { TouchableHighlight as RNTouchableHighlight, useColorScheme } from 'react-native';
import { styles } from './styles';
import { TouchableHighlightProps } from './types';

const TouchableHighlight: React.FC<TouchableHighlightProps> = ({
  children,
  onPress,
  style,
  underlayColor,
  accessibilityLabel,
}) => {
  const scheme = useColorScheme();
  const themedStyles = scheme === 'dark' ? styles.dark : styles.light;

  return (
    <RNTouchableHighlight
      style={[themedStyles.touchable, style]}
      onPress={onPress}
      underlayColor={underlayColor || themedStyles.underlay.color}
      accessibilityRole="button"
      accessibilityLabel={accessibilityLabel}
    >
      {children}
    </RNTouchableHighlight>
  );
};

export default TouchableHighlight;