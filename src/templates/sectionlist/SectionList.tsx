import React from 'react';
import { SectionList as RNSectionList, useColorScheme } from 'react-native';
import { styles } from './styles';
import { SectionListProps } from './types';

const SectionList: React.FC<SectionListProps> = ({
  sections,
  renderItem,
  renderSectionHeader,
  style,
  accessibilityLabel,
}) => {
  const scheme = useColorScheme();
  const themedStyles = scheme === 'dark' ? styles.dark : styles.light;

  return (
    <RNSectionList
      sections={sections}
      renderItem={renderItem}
      renderSectionHeader={renderSectionHeader}
      style={[themedStyles.list, style]}
      accessibilityLabel={accessibilityLabel}
      accessibilityRole="list"
    />
  );
};

export default SectionList;