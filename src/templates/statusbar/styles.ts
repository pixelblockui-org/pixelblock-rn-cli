import { StyleSheet } from 'react-native';

export const styles = {
  light: StyleSheet.create({
    statusBar: {
      backgroundColor: '<%= PrimaryColor %>',
    },
  }),
  dark: StyleSheet.create({
    statusBar: {
      backgroundColor: '#1C2526',
    },
  }),
};