export interface PressableProps {
  children: React.ReactNode;
  onPress: () => void;
  style?: object;
  pressedStyle?: object;
  accessibilityLabel?: string;
}