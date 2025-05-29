import { StyleSheet } from 'react-native';

export const styles = {
  light: StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFFFFF',
      borderColor: '<%= PrimaryColor %>',
      borderWidth: 1,
    },
  }),
  dark: StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#1C2526',
      borderColor: '#1C2526',
      borderWidth: 1,
    },
  }),
};