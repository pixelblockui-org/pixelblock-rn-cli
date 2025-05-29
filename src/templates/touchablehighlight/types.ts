export interface TouchableHighlightProps {
  children: React.ReactNode;
  onPress: () => void;
  style?: object;
  underlayColor?: string;
  accessibilityLabel?: string;
}