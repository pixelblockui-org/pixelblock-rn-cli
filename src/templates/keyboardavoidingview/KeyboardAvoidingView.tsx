import React from 'react';
import { KeyboardAvoidingView as RNKeyboardAvoidingView, Platform, useColorScheme } from 'react-native';
import { styles } from './styles';
import { KeyboardAvoidingViewProps } from './types';

const KeyboardAvoidingView: React.FC<KeyboardAvoidingViewProps> = ({
  children,
  behavior,
  style,
  accessibilityLabel,
}) => {
  const scheme = useColorScheme();
  const themedStyles = scheme === 'dark' ? styles.dark : styles.light;

  return (
    <RNKeyboardAvoidingView
      behavior={behavior || (Platform.OS === 'ios' ? 'padding' : 'height')}
      style={[themedStyles.container, style]}
      accessibilityLabel={accessibilityLabel}
      accessibilityRole="none"
    >
      {children}
    </RNKeyboardAvoidingView>
  );
};

export default KeyboardAvoidingView;