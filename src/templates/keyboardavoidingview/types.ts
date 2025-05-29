export interface KeyboardAvoidingViewProps {
  children: React.ReactNode;
  behavior?: 'height' | 'position' | 'padding';
  style?: object;
  accessibilityLabel?: string;
}