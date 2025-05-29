export interface RefreshControlProps {
  refreshing: boolean;
  onRefresh: () => void;
  colors?: string[];
  accessibilityLabel?: string;
}