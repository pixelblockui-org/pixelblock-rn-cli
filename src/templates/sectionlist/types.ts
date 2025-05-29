export interface SectionListProps {
  sections: Array<{ title: string; data: any[] }>;
  renderItem: (item: any) => JSX.Element;
  renderSectionHeader?: (section: any) => JSX.Element;
  style?: object;
  accessibilityLabel?: string;
}