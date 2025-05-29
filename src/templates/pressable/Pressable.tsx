import React from 'react';
import { Pressable as RNPressable, useColorScheme } from 'react-native';
import { styles } from './styles';
import { PressableProps } from './types';

const Pressable: React.FC<PressableProps> = ({
  children,
  onPress,
  style,
  pressedStyle,
  accessibilityLabel,
}) => {
  const scheme = useColorScheme();
  const themedStyles = scheme === 'dark' ? styles.dark : styles.light;

  return (
    <RNPressable
      style={({ pressed }) => [
        themedStyles.pressable,
        style,
        pressed && (pressedStyle || themedStyles.pressed),
      ]}
      onPress={onPress}
      accessibilityRole="button"
      accessibilityLabel={accessibilityLabel}
    >
      {children}
    </RNPressable>
  );
};

export default Pressable;