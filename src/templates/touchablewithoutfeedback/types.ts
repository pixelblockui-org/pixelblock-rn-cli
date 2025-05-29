export interface TouchableWithoutFeedbackProps {
  children: React.ReactNode;
  onPress: () => void;
  style?: object;
  accessibilityLabel?: string;
}