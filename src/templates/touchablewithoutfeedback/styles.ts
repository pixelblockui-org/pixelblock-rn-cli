import { StyleSheet } from 'react-native';

export const styles = {
  light: StyleSheet.create({
    touchable: {
      backgroundColor: '<%= PrimaryColor %>',
      padding: 12,
      borderRadius: 8,
    },
  }),
  dark: StyleSheet.create({
    touchable: {
      backgroundColor: '#1C2526',
      padding: 12,
      borderRadius: 8,
    },
  }),
};