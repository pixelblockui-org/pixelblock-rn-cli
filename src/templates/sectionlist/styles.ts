import { StyleSheet } from 'react-native';

export const styles = {
  light: StyleSheet.create({
    list: {
      backgroundColor: '#FFFFFF',
      borderColor: '<%= PrimaryColor %>',
      borderWidth: 1,
    },
  }),
  dark: StyleSheet.create({
    list: {
      backgroundColor: '#1C2526',
      borderColor: '#1C2526',
      borderWidth: 1,
    },
  }),
};