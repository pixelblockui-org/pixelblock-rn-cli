import React from 'react';
import { TouchableWithoutFeedback as RNTouchableWithoutFeedback, useColorScheme } from 'react-native';
import { styles } from './styles';
import { TouchableWithoutFeedbackProps } from './types';

const TouchableWithoutFeedback: React.FC<TouchableWithoutFeedbackProps> = ({
  children,
  onPress,
  style,
  accessibilityLabel,
}) => {
  const scheme = useColorScheme();
  const themedStyles = scheme === 'dark' ? styles.dark : styles.light;

  return (
    <RNTouchableWithoutFeedback
      onPress={onPress}
      style={[themedStyles.touchable, style]}
      accessibilityRole="button"
      accessibilityLabel={accessibilityLabel}
    >
      {children}
    </RNTouchableWithoutFeedback>
  );
};

export default TouchableWithoutFeedback;