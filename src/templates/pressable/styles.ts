import { StyleSheet } from 'react-native';

export const styles = {
  light: StyleSheet.create({
    pressable: {
      backgroundColor: '<%= PrimaryColor %>',
      padding: 12,
      borderRadius: 8,
    },
    pressed: {
      opacity: 0.7,
    },
  }),
  dark: StyleSheet.create({
    pressable: {
      backgroundColor: '#1C2526',
      padding: 12,
      borderRadius: 8,
    },
    pressed: {
      opacity: 0.7,
    },
  }),
};